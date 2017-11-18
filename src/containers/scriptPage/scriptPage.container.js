import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import MainHeader from '../mainHeader/mainHeader.container';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { getAllPlays, getActs, getScenes, getLines } from './scriptPage.actions';

import '../scriptPage/scriptPage.container.css'

//import {} from './homePage.actions';

//TODO: get list of play names from Database, rather than hardcoding the list as below
//      talk to DB/backend to see how we'll be getting the data
//	Also, need to figure out how to link the DropdownButton to show the "selected" script
            //TODO: fill the multiselect form dynamically with array

class ScriptPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playDropdownOption: {
                Name: "Please Select a Play",
                PlayID: null
            },
            actDropdownOption: "Please Select an Act",
            sceneDropdownOption: "Please Select a Scene",
            currentLineBlocking: "Here is a blocking instruction"
        };

        this.playDropdownChange = this.playDropdownChange.bind(this);
        this.actDropdownChange = this.actDropdownChange.bind(this);
        this.sceneDropdownChange = this.sceneDropdownChange.bind(this);
        this.updateBlocking = this.updateBlocking.bind(this);
    }

    componentWillMount() {
        // We should already be at the "/" route when we display this component.
        // No need to change the path.
        //this.props.push('/')

        // When this component is mounted, get a list of all available plays.
        this.props.getAllPlays();
    }

    playDropdownChange(value) {
        this.setState({
            playDropdownOption: value
        });

        // When a play is selected, get a list of acts.
        this.props.getActs(value.PlayID);
    }

    actDropdownChange(value) {
        this.setState({
            actDropdownOption: value
        });

        // When an act is selected, get a list of scenes.
        this.props.getScenes(
            this.state.playDropdownOption.PlayID,
            value
        );
    }

    sceneDropdownChange(value) {
        this.setState({
            sceneDropdownOption: value
        });

        // When a scene is selected, get a list of lines.
        this.props.getLines(
            this.state.playDropdownOption.PlayID,
            this.state.actDropdownOption,
            value
        );
    }

    updateBlocking(lineNumber) {
        console.log(lineNumber)
        //update state so that current blocking instructions are for lineNumber
    }

    render() {
        return (
            <div>
                <MainHeader />

                {/*Top Header */}
                <Col lg={12}>
                    <h2 style={{float: 'center', textAlign: 'center'}} className ="header">SCRIPT</h2>
                </Col>

                <Col sm={3}>
                    <ButtonToolbar>

                        <h4>Play</h4>
                        <Dropdown vertical block style={{marginBottom: "20px"}}>
                            <Dropdown.Toggle vertical block>
                                {this.state.playDropdownOption.Name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width: "100%", textAlign: "center"}} onSelect={this.playDropdownChange}>
                                {this.props.getAllPlaysStatus
                                    ? this.props.getAllPlaysStatus.map((play, index) => (<MenuItem eventKey={play}>{play.Name}</MenuItem>))
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <h4>Act</h4>
                        <Dropdown vertical block style={{marginBottom: "20px"}}>
                            <Dropdown.Toggle vertical block>
                                {this.state.actDropdownOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width: "100%", textAlign: "center"}} onSelect={this.actDropdownChange}>
                                {this.props.getActsStatus
                                    ? this.props.getActsStatus.map((act, index) => (<MenuItem eventKey={act.ActNum}>{act.ActNum}</MenuItem>))
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <h4>Scene</h4>
                        <Dropdown vertical block style={{marginBottom: "10px"}}>
                            <Dropdown.Toggle vertical block>
                                {this.state.sceneDropdownOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{width: "100%", textAlign: "center"}} onSelect={this.sceneDropdownChange}>
                                {this.props.getScenesStatus
                                    ? this.props.getScenesStatus.map((scene, index) => (<MenuItem eventKey={scene.SceneNum}>{scene.SceneNum}</MenuItem>))
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                    </ButtonToolbar>
                </Col>

                <Col sm={6}>
                    <h4>Lines</h4>
                    <ListGroup style={{marginTop: "30px"}}>
                        {this.props.getLinesStatus
                            ? this.props.getLinesStatus.map((line, index) => (
                                <ListGroupItem onClick={() => this.updateBlocking(line.LineID)}>
                                    <Col xs={4} sm={4} md={4}>{/*line.character*/}Character:</Col>
                                    <Col xs={8} sm={8} md={8}>{line.Text}</Col>
                                </ListGroupItem>))
                            : null
                        }
                    </ListGroup>
                </Col>

                <Col sm={3}>
                    <p style={{marginTop: "30px"}}>{this.state.currentLineBlocking}</p>
                </Col>
            </div>
        );
    }
}
//TODO: add "state" to the class, selectedScript, selectedScene, selectedLine, associatedBlocking, associatedNotes, user? etc.

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
        getAllPlaysStatus: state.scriptPageReducers.getAllPlaysStatus.data,
        getActsStatus: state.scriptPageReducers.getActsStatus.data,
        getScenesStatus: state.scriptPageReducers.getScenesStatus.data,
        getLinesStatus: state.scriptPageReducers.getLinesStatus.data
    };
}

export default connect(mapStateToProps, { getAllPlays, getActs, getScenes, getLines, push })(ScriptPage);
