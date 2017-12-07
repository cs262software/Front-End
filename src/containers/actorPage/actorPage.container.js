import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Panel, Well, Dropdown, MenuItem, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
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
    }

    componentWillMount() {
        // When this component is mounted, get a list of all available plays.
        this.props.getAllPlays();
    }

    playDropdownChange(value) {
        this.setState({
            playDropdownOption: value,
            characterDropdownOption: defaultCharacterDropdownOption,
            showLines: false
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

    render() {
        return (
            <div id="actor-page">
                <MainHeader />
                <h1 className ="main-page-header">Actor View</h1>
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

                        <Well>
                            <Row className="main-page-row">
                                <Col sm={12}>
                                    <h2>Lines</h2>
                                    <ListGroup id="actor-page-lines-list">
                                        {this.props.getLinesStatus && this.state.showLines
                                            ? this.props.getLinesStatus.map((line, index) => (
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
                                    </ListGroup>
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
        getLinesStatus: state.actorPageReducers.getLinesByPlayAndCharacterStatus.data
    };
}

export default connect(mapStateToProps,
    {
        getAllPlays, getCharactersByPlay, getLinesByPlayAndCharacter, push
    }
)(ActorPage);
