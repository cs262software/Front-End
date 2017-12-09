import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Well, Dropdown, MenuItem, ListGroup, ListGroupItem, Row, Col, FormGroup, Checkbox, Radio } from 'react-bootstrap';
import MainHeader from '../mainHeader/mainHeader.container';
import { getAllPlays } from '../scriptPage/scriptPage.actions';
import { getCharactersByPlay, getLinesByPlayAndCharacter } from './actorPage.actions';
import './index.css';

var defaultPlayDropdownOption = {
    Name: "Please Select a Play",
    PlayID: null
};

var defaultCharacterDropdownOption = {
    Name: "Please Select a Character",
    CharacterID: null
};

class ActorPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playDropdownOption: defaultPlayDropdownOption,
            characterDropdownOption: defaultCharacterDropdownOption,
            showLines: false
        };

        this.playDropdownChange = this.playDropdownChange.bind(this);
        this.characterDropdownChange = this.characterDropdownChange.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeRadio = this.onChangeRadio.bind(this);
    }

    componentWillMount() {
        // When this component is mounted, get a list of all available plays.
        this.props.getAllPlays();
    }

    playDropdownChange(value) {
        this.setState({
            playDropdownOption: value,
            characterDropdownOption: defaultCharacterDropdownOption,
            showLines: false,
            coverMyLines: false,
            selectedRadioButton: 1
        }, () => this.props.getCharactersByPlay(value.PlayID)); // When a play is selected, get a list of acts.
    }

    characterDropdownChange(value) {
        this.setState({
            characterDropdownOption: value,
            showLines: true
        }, () => {
            this.props.getLinesByPlayAndCharacter(
                this.state.playDropdownOption.PlayID,
                this.state.characterDropdownOption.CharacterID
            );
        });
    }

    onChangeCheckbox(event) {
        //console.log(event.target);
        this.setState({
            coverMyLines: event.target.checked
        });
    }

    onChangeRadio(event) {
        //console.log(event.target.value);
        this.setState({
            selectedRadioButton: event.target.value
        });
    }

    render() {
        return (
            <div id="actor-page">
                <MainHeader />
                <Row className="main-page-row">
                    <h1 className ="main-page-header">Actor View</h1>
                </Row>
                <hr />
                { this.props.getAllPlaysStatus && this.props.getAllPlaysStatus.length > 0 ?
                    <div className="main-page-content">
                        <Row className="main-page-row">
                            <Col sm={6}>
                                <h2>Play</h2>
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

                            <Col sm={6}>
                                <h2>Character</h2>
                                <Dropdown id="character-dropdown">
                                    <Dropdown.Toggle>
                                        {this.state.characterDropdownOption.Name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu onSelect={this.characterDropdownChange}>
                                        {this.props.getCharactersByPlayStatus
                                            ? this.props.getCharactersByPlayStatus.map((character, index) => (<MenuItem key={"character-select-menu-item-" + index} eventKey={character}>{character.Name}</MenuItem>))
                                            : null
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <Row className="main-page-row">
                            <Col sm={12}>
                                <form>
                                    <FormGroup>
                                        <Checkbox inline onChange={this.onChangeCheckbox}>
                                            Cover my lines
                                        </Checkbox>
                                        {' '}
                                        <Radio name="radioGroup" inline defaultChecked value={1} onClick={this.onChangeRadio}>
                                            All Lines
                                        </Radio>
                                        {' '}
                                        <Radio name="radioGroup" inline value={2} onClick={this.onChangeRadio}>
                                            Prompt Lines
                                        </Radio>
                                        {' '}
                                        <Radio name="radioGroup" inline value={3} onClick={this.onChangeRadio}>
                                            My Lines Only
                                        </Radio>
                                    </FormGroup>
                                </form>
                            </Col>
                        </Row>

                        <Well>
                            <Row className="main-page-row">
                                <Col sm={12}>
                                    <h2>Lines</h2>

                                    { this.state.selectedRadioButton == 3 ?
                                        <ListGroup id="actor-page-lines-list">
                                            {this.props.getMyLinesStatus && this.state.showLines
                                                ? this.props.getMyLinesStatus.map((line, index) => (
                                                    <ListGroupItem key={"line-list-group-item-" + index} onClick={() => null}>
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
                                        </ListGroup> : null
                                    }

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
        getCharactersByPlayStatus: state.actorPageReducers.getCharactersByPlayStatus.data,
        getMyLinesStatus: state.actorPageReducers.getLinesByPlayAndCharacterStatus.data
    };
}

export default connect(mapStateToProps,
    {
        getAllPlays, getCharactersByPlay, getLinesByPlayAndCharacter
    }
)(ActorPage);
