import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Dropdown, MenuItem, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import MainHeader from '../mainHeader/mainHeader.container';
import BlockingView from './components/blockingView';
import { getAllPlays, getActs, getScenes, getLines, getCharactersByScene, getBlockingByLine } from './scriptPage.actions';
import './index.css';

var defaultPlayDropdownOption = {
    Name: "Please Select a Play",
    PlayID: null
};
var defaultActDropdownOption = "Please Select an Act";
var defaultSceneDropdownOption = "Please Select a Scene";

class ScriptPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playDropdownOption: defaultPlayDropdownOption,
            actDropdownOption: defaultActDropdownOption,
            sceneDropdownOption: defaultSceneDropdownOption,
            showLines: false,
            selectedLineID: null,
            showLineDetails: false
        };

        this.playDropdownChange = this.playDropdownChange.bind(this);
        this.actDropdownChange = this.actDropdownChange.bind(this);
        this.sceneDropdownChange = this.sceneDropdownChange.bind(this);
        this.onClickLine = this.onClickLine.bind(this);
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
            playDropdownOption: value,
            actDropdownOption: defaultActDropdownOption,
            sceneDropdownOption: defaultSceneDropdownOption,
            showLines: false,
            selectedLineID: null,
            showLineDetails: false
        }, () => this.props.getActs(value.PlayID)); // When a play is selected, get a list of acts.
    }

    actDropdownChange(value) {
        this.setState({
            actDropdownOption: value,
            sceneDropdownOption: defaultSceneDropdownOption,
            showLines: false,
            selectedLineID: null,
            showLineDetails: false,
        }, () => this.props.getScenes(this.state.playDropdownOption.PlayID, value)); // When an act is selected, get a list of scenes.
    }

    sceneDropdownChange(value) {
        this.setState({
            sceneDropdownOption: value,
            showLines: !(value === defaultSceneDropdownOption), // Only show lines if the default is not selected.
            selectedLineID: null,
            showLineDetails: false
        }, () => {
            // When a scene is selected, get a list of lines.
            this.props.getLines(
                this.state.playDropdownOption.PlayID,
                this.state.actDropdownOption,
                value
            );
            // When a scene is selected, get a list of characters.
            this.props.getCharactersByScene(
                this.state.playDropdownOption.PlayID,
                this.state.actDropdownOption,
                value
            );
        });
    }

    onClickLine(LineID) {
        this.setState({
            selectedLineID: LineID,
            showLineDetails: true
        });
        this.props.getBlockingByLine(LineID);
    }

    render() {
        return (
            <div id="script-page">
                <MainHeader />
                                { this.props.getAllPlaysStatus && this.props.getAllPlaysStatus.length > 0 ?
                    <div className="main-page-content">
                 
                        
                        <Row className="main-page-row">
                        <h1 className ="main-page-header">Script</h1>

                            <Col sm={4}>
                                
                                <Dropdown id="play-dropdown">
                                    <Dropdown.Toggle>
                                        {this.state.playDropdownOption.Name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu onSelect={this.playDropdownChange}>
                                        {this.props.getAllPlaysStatus
                                            ? this.props.getAllPlaysStatus.map((play, index) => (<MenuItem key={"play-select-menu-item-" + index} eventKey={play}>{play.Name}</MenuItem>))
                                            : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
            

                              
                                <Dropdown id="act-dropdown">
                                    <Dropdown.Toggle>
                                        {this.state.actDropdownOption}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu onSelect={this.actDropdownChange}>
                                        {this.props.getActsStatus
                                            ? this.props.getActsStatus.map((act, index) => (<MenuItem key={"act-select-menu-item-" + index} eventKey={act.ActNum}>{act.ActNum}</MenuItem>))
                                            : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>

                               
                                <Dropdown id="scene-dropdown">
                                    <Dropdown.Toggle>
                                        {this.state.sceneDropdownOption}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu onSelect={this.sceneDropdownChange}>
                                        {this.props.getScenesStatus
                                            ? this.props.getScenesStatus.map((scene, index) => (<MenuItem key={"scene-select-menu-item-" + index} eventKey={scene.SceneNum}>{scene.SceneNum}</MenuItem>))
                                            : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
            
                        
                            {this.props.getLinesStatus && this.state.showLines ?
                                <Col sm={8} className="lines-list-group">
                                    <ListGroup>
                                        {this.props.getLinesStatus
                                            ? this.props.getLinesStatus.map((line, index) => (
                                                <ListGroupItem key={"line-list-group-item-" + index} onClick={() => this.onClickLine(line.LineID)}>
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
                                </Col> : null
                            }
                        </Row>

                        { this.state.showLines && this.state.showLineDetails ?
                            <Row className="main-page-row">
                                <Col sm={6}>
                                    <div className="blocking-view">
                                        <BlockingView
                                            selectedLineID={this.state.selectedLineID}
                                            blockingData={this.props.getBlockingByLineStatus}
                                        />
                                    </div>
                                </Col>
                            </Row> : null
                        }
                    </div> : <p className="no-content-text">No Scripts Found</p>
                }
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
        getCharactersBySceneStatus: state.scriptPageReducers.getCharactersBySceneStatus.data,
        getBlockingByLineStatus: state.scriptPageReducers.getBlockingByLineStatus.data
    };
}

export default connect(mapStateToProps,
    {
        getAllPlays, getActs, getScenes, getLines, getCharactersByScene, getBlockingByLine, push
    }
)(ScriptPage);