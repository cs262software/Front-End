import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

//import {} from './homePage.actions';

class SoundsNotes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Col sm={12}>
                    <ButtonToolbar style={{ "margin-top": "25px", border: "1px solid #000000", width: "500px"}}>
                        <ListGroup>
                            <h2>Sounds Notes</h2>
                            {this.props.crewNotesByLineStatus
                                ? this.props.crewNotesByLineStatus.map((sounds, index) => {
                                    return (
                                        <div>
                                            <Col xs={12} sm={12} md={12}>
                                        <ListGroupItem key={"sounds-list-group-item-" + index}>
                                                <input name="editSoundsNotes" value={sounds.Name} onChange={e => { this.props.handleFieldChange(e) }}></input>
                                        </ListGroupItem>
                                            </Col>
                                        </div>
                                )
                                    })
                                    : null
                            }
                        </ListGroup>
                        <Button bsStyle="primary" bsSize="medium" onClick={this.props.onClick}>Add to current Sounds Notes</Button>
                        {this.props.showNewSounds ?
                            <input name="addSoundsNotes"></input>
                            : null
                        }
                      </ButtonToolbar>
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