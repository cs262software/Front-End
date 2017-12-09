import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { groupBy } from 'lodash';
import Unity from 'react-unity-webgl';
import { SendMessage, RegisterExternalListener } from 'react-unity-webgl';
import { saveBlocking } from '../scriptPage.actions';

export class BlockingView extends Component {
    constructor () {
        super();
        RegisterExternalListener ('RecordUnityData', this.recordUnityData.bind(this));

        this.state = {
            dataToDisplay: []
        };
    }

    recordUnityData (jsonData) {
        let data = JSON.parse(jsonData);
        this.props.saveBlocking(this.props.selectedLineID, data.Items);
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
            let currCharDataSet = groupedBlockingData[characterID];
            // ...if there is, use it to populate the position fields.
            if (typeof currCharDataSet !== 'undefined') {
                // If blocking data exists for the current line, set the dest position.
                if (currCharDataSet[0].LineID === this.props.selectedLineID) {
                    destX = currCharDataSet[0].DestX;
                    destY = currCharDataSet[0].DestY;
                    destZ = currCharDataSet[0].DestZ;

                    // console.log(destX);
                    // console.log(destY);
                    // console.log(destZ);

                    // If previous blocking data exists, set the origin position.
                    if (currCharDataSet.length > 1) {
                        originX = currCharDataSet[1].DestX;
                        originY = currCharDataSet[1].DestY;
                        originZ = currCharDataSet[1].DestZ;
                    }
                }
                // If the most recent data is not the current line, set it as the origin position.
                else {
                    originX = currCharDataSet[0].DestX;
                    originY = currCharDataSet[0].DestY;
                    originZ = currCharDataSet[0].DestZ;
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
            console.log(d2d);
            SendMessage ("UnityReactAnchor", "LoadBlockingData", d2d);
        });
    }

    render() {
        return (
            <div className="blocking-view">
                <Unity
                    src='Build/blocking2d.json'
                    loader='Build/UnityLoader.js'
                />
                <ButtonToolbar className="blocking-view-buttons">
                    <Button
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

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        saveBlockingStatus: state.scriptPageReducers.saveBlockingStatus.data
    };
}

export default connect(mapStateToProps,
    {
        saveBlocking
    }
)(BlockingView);
