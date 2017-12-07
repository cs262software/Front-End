import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col, Button } from 'react-bootstrap';

//import {} from './homePage.actions';

class CrewNotes extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Col sm={12}>
                    <ButtonToolbar style={{ marginLeft: "800px" }}>
                        <h4>Property Notes</h4>
                        <Dropdown vertical block>
                            <Dropdown.Toggle vertical block>
                                {this.props.selectedOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ width: "100%", textAlign: "center" }} onSelect={this.props.dropdownOptionChange}>
                                {this.props.dropDownOptions.map(value => {
                                    return <MenuItem eventKey={value}>{value}</MenuItem>
                                })}
                            </Dropdown.Menu>
                        </Dropdown>                        //display propertyNotes

                        <Button bsSize="medium" >Add a note</Button>
                        <Button bsSize="medium">Edit note</Button>
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

export default connect(mapStateToProps)(CrewNotes);