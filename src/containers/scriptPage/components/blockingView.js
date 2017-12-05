import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { groupBy } from 'lodash';
import Unity from 'react-unity-webgl';
import { SendMessage, RegisterExternalListener } from 'react-unity-webgl';

class BlockingView extends Component {
    constructor () {
        super();
        RegisterExternalListener ('RecordUnityData', this.recordUnityData.bind (this));

        this.state = {
            dataToDisplay: []
        };
    }

    componentWillReceiveProps(nextProps) {
        // If we have blocking data, and a list of characters, format the data to send to the unity display.
        if (this.props.blockingData && this.props.blockingData.length > 0)
        {
            // Group blocking data by character id to easily find a specific character's blocking info.
            var groupedBlockingData = groupBy(nextProps.blockingData, 'CharacterID');
            // Create a variable to store formatted data.
            var formattedData = [];
            // Iterate through each key in the grouped blocking data object.
            for (let characterIDKey in groupedBlockingData) {
                // Retrieve the character's data set. It should be sorted by most recent to least.
                let currCharDataSet = groupedBlockingData[characterIDKey];
                // Find the character's name.
                let characterName = currCharDataSet[0].Name;
                // Find the character's starting and end position.
                let originX = null;
                let originY = null;
                let originZ = null;
                let destX = null;
                let destY = null;
                let destZ = null;
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
                // Push the results to the formatted data array.
                formattedData.push({
                    CharacterID: characterIDKey,
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
                // console.log(JSON.stringify(this.state.dataToDisplay));
                // console.log(this.state.dataToDisplay);
                if (this.state.dataToDisplay.length > 0) {
                    //console.log(JSON.stringify(this.state.dataToDisplay));
                }
                // console.log(JSON.stringify(this.state.dataToDisplay));
                //SendMessage ('Unity', 'LoadBlockingData', JSON.stringify(this.state.dataToDisplay));
            });
        }
    }

    recordUnityData (jsonData) {
        console.log(jsonData);
    }

    // render() {
    //     return (
    //         <Unity
    //         src='Build/myGame.json'
    //         loader='Build/UnityLoader.js'
    //         /* pass in this.props.jsonData into Unity app *//>
    //     );
    // }

    render() {
        return (
            <div className="blocking-view">
                <h2>Blocking</h2>
                <Unity
                    src='Build/blocking_uncompressed.json'
                    loader='Build/UnityLoader.js'
                />
                <ButtonToolbar>
                    <Button
                        bsStyle="primary"
                        onClick={() => {
                            //SendMessage('Unity', 'TriggerRecordUnityData');
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
