import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Panel, FormGroup, FormControl, Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

//import {} from './homePage.actions';

class PropsNotes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lights-note-view">
                <Col sm={4} className="lines-list-group">
                    <h2>Property Notes</h2>
                    <Panel>
                        <form>
                            <FormGroup>
                                {this.props.crewNotesByLineStatus
                                    ? this.props.crewNotesByLineStatus.map((prop, index) => {
                                        return (
                                            <div>
                                                <Col xs={12} sm={12} md={12}>
                                                    <FormControl id={"props-note-text-area-" + index} ComponentClass="textarea" value={prop.Name + " " + prop.MovementDescription}>
                                                    </FormControl>
                                                </Col>
                                            </div>

                                        )
                                    })
                                    : null
                                }

                                <Button bsStyle="primary" bsSize="small" onClick={this.props.onClick}>Add to current Property Notes</Button>
                                {this.props.showNewProps ?
                                    <div>
                                        <Col xs={12} sm={12} md={12}>
                                            <FormGroup>
                                                <FormControl id={"props-note-text-area"} ComponentClass="textarea" placeholder="Add a new property note for the current line" name="addPropsNotes"></FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Button onClick={this.props.savePropsByLine}>Save</Button>
                                        <Button onClick={this.props.cancelNewProps}> Cancel</Button>
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

export default connect(mapStateToProps)(PropsNotes);