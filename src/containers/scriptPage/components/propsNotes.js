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
                    <ButtonToolbar style={{ "margin-top": "25px", border: "1px solid #000000", width : "500px" }}>               
                        <ListGroup>
                            <h2>Props Notes</h2>
                            {this.props.crewNotesByLineStatus
                                ? this.props.crewNotesByLineStatus.map((prop, index) => 
                                    <div>
                                        <Col xs={12} sm={12} md={12}>
                                        <ListGroupItem key={"props-list-group-item-" + index}>
                                                <input name="editPropsNotes" value={prop.Name} onChange={e => { this.props.handleFieldChange(e) }}></input>
                                        </ListGroupItem>
                                        </Col>
                                        </div>)  
                                    : null
                            }
                        </ListGroup>
                        <Button bsStyle="primary" bsSize="medium" onClick={this.props.onClick} >Add to current Props Notes</Button>
                        {this.props.showNewProps ?
                            <input name="addPropsNotes"></input>
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

export default connect(mapStateToProps)(PropsNotes);