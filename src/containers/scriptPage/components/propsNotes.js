import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

//import {} from './homePage.actions';

class PropsNotes extends Component {

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
                                ? this.props.crewNotesByLineStatus.map((props, index) => 
                                        <ListGroupItem key={"lights-list-group-item-" + index}>
                                            <Col xs={12} sm={12} md={12}>
                                                <textarea name="editPropsNotes" value={props.Name} onChange={e => { this.props.handleFieldChange(e) }}> </textarea>
                                            </Col>
                                        </ListGroupItem>)  
                                    : null
                            }
                        </ListGroup>
                        <Button bsStyle = "primary" bsSize="medium" >Add a Props Note</Button>
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

export default connect(mapStateToProps)(PropsNotes);