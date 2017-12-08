import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

//import {} from './homePage.actions';

class LightsNotes extends Component {

    constructor(props) {
        super(props);

    }

  

    render() {
        return (
            <div>
                <Col sm={12}>
                    <ButtonToolbar style={{ marginLeft: "800px" }}>                  
                        <ListGroup>
                            {this.props.crewNotesByLineStatus
                                ? this.props.crewNotesByLineStatus.map((light, index) => {
                                    //this.props.editLightsNotes = light.Name
                                    return (
                                        <ListGroupItem key={"lights-list-group-item-" + index}>
                                        <Col xs={12} sm={12} md={12}>
                                                <textarea name="editLightsNotes" value={light.Name}onChange={e => { this.props.handleFieldChange(e) }}></textarea>
                                        </Col>
                                        </ListGroupItem>
                                        )
                                }) 
                                    : null
                            }
                        </ListGroup>
                        <Button  bsStyle = "primary" bsSize="medium" >Add a Lights Note</Button>
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

export default connect(mapStateToProps)(LightsNotes);