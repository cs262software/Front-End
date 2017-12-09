import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button, FormGroup, FormControl, Panel, Well, Dropdown, MenuItem, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import MainHeader from '../mainHeader/mainHeader.container';
import BlockingView from './components/blockingView';
import LightsNotes from './components/lightsNotes';
import SoundsNotes from './components/soundsNotes';
import PropsNotes from './components/propsNotes';
import { getAllPlays, getActs, getScenes, getLines, getCharactersByScene, getBlockingByLine, getDirectorsNoteByLine, saveDirectorsNote, getLightsByLine, getSoundsByLine, getPropsByLine, putLightsByLine, putSoundsByLine, putPropsByLine, postLightsByLine, postSoundsByLine, postPropsByLine } from './scriptPage.actions';
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
            showLineDetails: false,
            lightsNote: "",
            editLightsNote: "",
            addLightsNote: "",
            soundsNote: "",
            editSoundsNote: "",
            addSoundsNote: "",
            propsNote: "",
            editPropsNote: "",
            addPropsNote: "",
            showNewLights: false,
            showNewSounds: false,
            showNewProps: false,
            showBlocking: false
        };

        this.playDropdownChange = this.playDropdownChange.bind(this);
        this.actDropdownChange = this.actDropdownChange.bind(this);
        this.sceneDropdownChange = this.sceneDropdownChange.bind(this);
        this.onClickLine = this.onClickLine.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        //edit existing notes
        this.editLightsNotes = this.editLightsNotes.bind(this);
        this.editSoundsNotes = this.editSoundsNotes.bind(this);
        this.editPropsNotes = this.editPropsNotes.bind(this);
        //creating new text boxes
        this.onClickNewLights = this.onClickNewLights.bind(this);
        this.onClickNewSounds = this.onClickNewSounds.bind(this);
        this.onClickNewProps = this.onClickNewProps.bind(this);
        //add new notes
        this.addLightsNotes = this.addLightsNotes.bind(this);
        this.addSoundsNotes = this.addSoundsNotes.bind(this);
        this.addPropsNotes = this.addPropsNotes.bind(this)
        this.saveDirectorsNote = this.saveDirectorsNote.bind(this);
        this.loadDirectorsNote = this.loadDirectorsNote.bind(this)
    }

    componentWillMount() {
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
        this.props.getLightsByLine(LineID);
        this.props.getSoundsByLine(LineID);
        this.props.getPropsByLine(LineID);
        this.props.getDirectorsNoteByLine(LineID)
    }

    handleFieldChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    editLightsNotes() {
        let lightsNotes = {
            lineID: this.state.selectedLineID,
            Name: this.state.editlightsNote
        }
        this.props.putLightsByLine(lightsNotes)
    }

    editSoundsNotes() {
        let soundsNotes = {
            lineID: this.state.selectedLineID,
            Name: this.state.editSoundsNote
        }
        this.props.putSoundsByLine(soundsNotes)
    }

    editPropsNotes() {
        let propsNotes = {
            lineID: this.state.selectedLineID,
            Name: this.state.editPropsNote
        }
        this.props.putPropsByLine(propsNotes)
    }

    onClickNewLights() {
        this.setState({
            showNewLights: !this.state.showNewLights
        }
        )
    }

    onClickNewSounds() {
        this.setState({
            showNewSounds: !this.state.showNewSounds
        }
        )

    }

    saveDirectorsNote() {
        this.props.saveDirectorsNote(
            this.state.selectedLineID,
            document.getElementById("directors-note-text-area").value
        );
    }

    loadDirectorsNote() {
        this.props.getDirectorsNoteByLine(this.state.selectedLineID);
        // if (this.props.getDirectorsNoteByLineStatus && this.props.getDirectorsNoteByLineStatus.length > 0) {
        //     let dn = this.props.getDirectorsNoteByLineStatus[0].DirectorNote;
        //     document.getElementById("directors-note-text-area").value = dn;
        // }
        // else {
        //     document.getElementById("directors-note-text-area").value = "";
        // }
    }

    onClickNewProps() {
        this.setState({
            showNewProps: !this.state.showNewProps
        }
        )
    }

    addLightsNotes() {
        let lightsNotes = {
            lineID: this.state.selectedLineID,
            Name: this.state.addLightsNote
        }
        this.props.postLightsByLine(lightsNotes)
    }

    addSoundsNotes() {
        let soundsNotes = {
            lineID: this.state.selectedLineID,
            Name: this.state.addSoundsNote
        }
        this.props.postSoundsByLine(soundsNotes)
    }

    addPropsNotes() {
        let propsNotes = {
            lineID: this.state.selectedLineID,
            Name: this.state.addPropsNote
        }
        this.props.postPropsByLine(propsNotes)
    }


    render() {
        return (
            <div id="script-page">
                <MainHeader />
                <Row className="main-page-row">
                    <h1 className ="main-page-header">Script</h1>
                </Row>
                <hr />
                { this.props.getAllPlaysStatus && this.props.getAllPlaysStatus.length > 0 ?
                    <div className="main-page-content">
                        <Well>
                        <Row className="main-page-row">
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
                            </Col>
                            <Col sm={4}>
                                
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
                            </Col>
                            <Col sm={4}>
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
                        </Row>
                        </Well>

                        <Well>
                        <Row className="main-page-row">
                            <Col sm={4}>
                                <h2>Character</h2>
                                <Panel>
                                </Panel>
                            </Col>
                            <Col sm={8} className="lines-list-group">
                                <h2>Lines</h2>
                                <Panel>
                                <ListGroup>
                                    {this.props.getLinesStatus && this.props.getLinesStatus.length > 0
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
                                        : <p className="no-content-text">Select a scene to view lines</p>
                                    }
                                </ListGroup>
                                </Panel>
                            </Col>
                        </Row>
                        </Well>

                        <div>
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
                        </div>

                        <div>
                            {this.state.showLines && this.state.showLineDetails ?
                                <Row className="main-page-row">
                                    <div className="stage-crew-notes-view">
                                    <LightsNotes 
                                        crewNotesByLineStatus={this.props.getLightsByLineStatus}
                                        handleFieldChange={this.handleFieldChange}
                                        editLightsNote={this.state.editLightsNote}
                                        addLightsNote={this.state.addLightsNote}
                                        showNewLights={this.state.showNewLights}
                                        onClick={this.onClickNewLights}

                                    />
                                    <SoundsNotes 
                                        crewNotesByLineStatus={this.props.getSoundsByLineStatus}
                                        handleFieldChange={this.handleFieldChange}
                                        editSoundsNote={this.state.editSoundsNote}
                                        addSoundsNote={this.state.addSoundsNote}
                                        showNewSounds={this.state.showNewSounds}
                                        onClick={this.onClickNewSounds}
                                    />
                                <PropsNotes 
                                    crewNotesByLineStatus={this.props.getPropsByLineStatus}
                                    handleFieldChange={this.handleFieldChange}
                                    editPropsNote={this.state.editPropsNote}
                                    addSoundsNote={this.state.addSoundsNote}
                                    showNewProps={this.state.showNewProps}
                                    onClick={this.onClickNewProps}
                                />

                                    </div>
                               </Row>     : null
                            }
                        </div>

                        <Well>
                        <Row className="main-page-row">
                            <Col sm={8}>
                                <div className="blocking-view">
                                    <h2>Blocking</h2>
                                    <Panel>
                                    { this.state.showBlocking
                                        ?   <BlockingView
                                                selectedLineID={this.state.selectedLineID}
                                                characters={this.props.getCharactersBySceneStatus}
                                                blockingData={this.props.getBlockingByLineStatus}
                                            />
                                        :  <Button
                                                onClick={() => {
                                                    this.setState({
                                                        showBlocking: true
                                                    });
                                                }}
                                            >
                                                Load Blocking View
                                            </Button>
                                    }
                                    </Panel>
                                </div>
                            </Col>
                            <Col sm={4} className="lines-list-group">
                                <h2>Director's Note</h2>
                                <Panel>
                                { this.props.getLinesStatus && this.props.getLinesStatus.length > 0 && this.state.selectedLineID != null ?
                                    <div className="directors-note-view">
                                        <form>
                                            <FormGroup bsSize="large">
                                                <FormControl id="directors-note-text-area" componentClass="textarea" placeholder=""/>
                                            </FormGroup>
                                        </form>
                                        <ButtonToolbar className="directors-note-view-buttons">
                                            <Button onClick={this.saveDirectorsNote}>
                                                Save
                                            </Button>
                                            <Button onClick={this.loadDirectorsNote}>
                                                Cancel
                                            </Button>
                                        </ButtonToolbar>
                                    </div> : <p className="no-content-text">Select a line</p>
                                }
                                </Panel>
                            </Col>
                        </Row>
                        </Well>
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
        getBlockingByLineStatus: state.scriptPageReducers.getBlockingByLineStatus.data,
        getLightsByLineStatus: state.scriptPageReducers.getLightsByLineStatus.data,
        getSoundsByLineStatus: state.scriptPageReducers.getSoundsByLineStatus.data,
        getPropsByLineStatus: state.scriptPageReducers.getPropsByLineStatus.data,
        getDirectorsNoteByLineStatus: state.scriptPageReducers.getDirectorsNoteByLineStatus.data,
        saveDirectorsNoteStatus: state.scriptPageReducers.saveDirectorsNoteStatus.data
    };
}

export default connect(mapStateToProps,
    {
        getAllPlays, getActs, getScenes, getLines, getCharactersByScene, getBlockingByLine, getLightsByLine, getSoundsByLine, getPropsByLine, putLightsByLine, putSoundsByLine, putPropsByLine, postLightsByLine, postSoundsByLine, postPropsByLine, getDirectorsNoteByLine,
        saveDirectorsNote
    }
)(ScriptPage);
