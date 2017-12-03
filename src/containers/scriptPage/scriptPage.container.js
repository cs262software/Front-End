import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dropdown, MenuItem, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import MainHeader from '../mainHeader/mainHeader.container';
import StageView from './components/stageView';
import { getAllPlays, getActs, getScenes, getLines, getBlockingByLine } from './scriptPage.actions';
import './index.css';

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
        this.getBlockingByLine = this.getBlockingByLine.bind(this);
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

    getBlockingByLine(LineID) {
        this.props.getBlockingByLine(LineID)
    }

    render() {
        return (
            <div id="script-page">
                <MainHeader />

                <h2 className ="header">SCRIPT</h2>

                <Row>
                    <Col sm={3}>
                        <h4>Play</h4>
                        <Dropdown id="play-dropdown">
                            <Dropdown.Toggle>
                                {this.state.playDropdownOption.Name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu onSelect={this.playDropdownChange}>
                                {this.props.getAllPlaysStatus
                                    ? this.props.getAllPlaysStatus.map((play, index) => (<MenuItem eventKey={play}>{play.Name}</MenuItem>))
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <h4>Act</h4>
                        <Dropdown id="act-dropdown">
                            <Dropdown.Toggle>
                                {this.state.actDropdownOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu onSelect={this.actDropdownChange}>
                                {this.props.getActsStatus
                                    ? this.props.getActsStatus.map((act, index) => (<MenuItem eventKey={act.ActNum}>{act.ActNum}</MenuItem>))
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>

                        <h4>Scene</h4>
                        <Dropdown id="scene-dropdown">
                            <Dropdown.Toggle>
                                {this.state.sceneDropdownOption}
                            </Dropdown.Toggle>
                            <Dropdown.Menu onSelect={this.sceneDropdownChange}>
                                {this.props.getScenesStatus
                                    ? this.props.getScenesStatus.map((scene, index) => (<MenuItem eventKey={scene.SceneNum}>{scene.SceneNum}</MenuItem>))
                                    : null
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                    <Col sm={6}>
                        <h4>Lines</h4>
                        <ListGroup>
                            {this.props.getLinesStatus
                                ? this.props.getLinesStatus.map((line, index) => (
                                    <ListGroupItem onClick={() => this.getBlockingByLine(line.LineID)}>
                                        <Col xs={4} sm={4} md={4}>
                                            {line.CharacterSpeaking
                                                ? line.CharacterSpeaking
                                                : ""
                                            }
                                        </Col>
                                        <Col xs={8} sm={8} md={8}>
                                            {line.Text}
                                        </Col>
                                    </ListGroupItem>))
                                : null
                            }
                        </ListGroup>
                    </Col>

                    <Col sm={3}>
                        <p>{this.props.getBlockingByLineStatus.Name}</p>
                        <p>{this.state.currentLineBlocking}</p>
                        <div className="stage-view">
                            <StageView jsonData={this.props.getBlockingByLineStatus}/>
                        </div>
                    </Col>
                </Row>

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
        getLinesStatus: state.scriptPageReducers.getLinesStatus.data,
        getBlockingByLineStatus: state.scriptPageReducers.getBlockingByLineStatus.data
    };
}

export default connect(mapStateToProps, { getAllPlays, getActs, getScenes, getLines, getBlockingByLine, push })(ScriptPage);
