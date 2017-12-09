import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Panel, FormControl, FormGroup, Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

//import {} from './homePage.actions';

class SoundsNotes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sounds-note-view">
                <Col sm={4} className="lines-list-group">
                    <h2>Sounds Notes</h2>
                    <Panel>
                        <form>
                            <FormGroup>
                                {this.props.crewNotesByLineStatus
                                    ? this.props.crewNotesByLineStatus.map((light, index) => {
                                        return (
                                            <div>
                                                <Col xs={12} sm={12} md={12}>
                                                    <FormControl id={"sounds-note-text-area-" + index} ComponentClass="textarea" value={light.Name}>
                                                    </FormControl>
                                                </Col>
                                            </div>

                                        )
                                    })
                                    : null
                                }

                                <Button bsStyle="primary" bsSize="small" onClick={this.props.onClick}>Add to current Sounds Notes</Button>
                                {this.props.showNewSounds ?
                                    <div>
                                        <Col xs={12} sm={12} md={12}>
                                            <FormGroup>
                                                <FormControl id={"sounds-note-text-area"} ComponentClass="textarea" placeholder="Add a new sounds note for the current line" name="addLightsNotes"></FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Button onClick={this.props.saveSoundsByLine}>Save</Button>
                                        <Button>Cancel</Button>
                                    </div>
                                    : null
                                }
                            </FormGroup>
                        </form>
                    </Panel>

                </Col>
            </div>
        );
    }
}
//TODO: add "state" to the class, selectedScript, selectedScene, selectedLine, associatedBlocking, associatedNotes, user? etc.

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
    };
}

export default connect(mapStateToProps)(SoundsNotes);