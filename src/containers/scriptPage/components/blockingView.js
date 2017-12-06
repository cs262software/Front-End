import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { groupBy } from 'lodash';
import Unity from 'react-unity-webgl';
import { SendMessage, RegisterExternalListener } from 'react-unity-webgl';

export class BlockingView extends Component {
    constructor () {
        super();
        RegisterExternalListener ('RecordUnityData', this.recordUnityData.bind(this));

        this.state = {
            dataToDisplay: []
        };
    }

    recordUnityData (jsonData) {
        console.log("_______________________");
        console.log(jsonData);
        console.log("_______________________");
    }

    componentWillReceiveProps(nextProps) {
        // If there are no characters to display, proceed no further.
        if (!this.props.characters) {
            this.setState({
                dataToDisplay: []
            });
            return;
        }

        // If we have blocking data, format the data appropriately.
        var groupedBlockingData = {};
        if (this.props.blockingData && this.props.blockingData.length > 0)
        {
            // Group blocking data by character id to easily find a specific character's blocking info.
            groupedBlockingData = groupBy(nextProps.blockingData, 'CharacterID');
        }

        // Create a variable to store the final, formatted data.
        var formattedData = [];

        // Loop through every character in the scene.
        for (let i = 0; i < this.props.characters.length; i++) {
            // Find the character's ID.
            let characterID = this.props.characters[i].CharacterID;
            // Find the character's name.
            let characterName = this.props.characters[i].Name;
            // Find the character's starting and end position.
            // Initialize null values, as some characters might not have any blocking info.
            let originX = null;
            let originY = null;
            let originZ = null;
            let destX = null;
            let destY = null;
            let destZ = null;

            // See if there is any blocking data associated with the character.
            let currCharDataSet = groupedBlockingData[this.props.characters[i].CharacterID];
            // ...if there is, use it to populate the position fields.
            if (typeof currCharDataSet != 'undefined') {
                // If previous blocking data exists, set the origin position.
                if (currCharDataSet.length > 1) {
                    originX = currCharDataSet[1].OriginX;
                    originY = currCharDataSet[1].OriginY;
                    originZ = currCharDataSet[1].OriginZ;
                }
                // If blocking data exists for the current line, set the dest position.
                if (currCharDataSet[0].LineID === this.props.selectedLineID) {
                    destX = currCharDataSet[0].DestX;
                    destY = currCharDataSet[0].DestY;
                    destZ = currCharDataSet[0].DestZ;
                }
            }

            // Push the results to the formatted data array.
            formattedData.push({
                CharacterID: characterID,
                CharacterName: characterName,
                OriginX: originX,
                OriginY: originY,
                OriginZ: originZ,
                DestX: destX,
                DestY: destY,
                DestZ: destZ
            });
        }

        // Store the results in the state so as to access them later.
        this.setState({
            dataToDisplay: formattedData
        }, () => {
            let d2d = JSON.stringify(this.state.dataToDisplay);
            SendMessage ("UnityReactAnchor", "LoadBlockingData", d2d);
        });
    }

    render() {
        return (
            <div className="blocking-view">
                <h2>Blocking</h2>
                <Unity
                    src='Build/blocking2d.json'
                    loader='Build/UnityLoader.js'
                />
                <ButtonToolbar>
                    <Button
                        bsStyle="primary"
                        onClick={() => {
                            SendMessage("UnityReactAnchor", "TriggerRecordUnityData");
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => {
                            let d2d = JSON.stringify(this.state.dataToDisplay);
                            SendMessage ("UnityReactAnchor", "LoadBlockingData", d2d);
                        }}
                    >
                        Cancel
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default BlockingView;
