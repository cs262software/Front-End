import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import MainHeader from '../mainHeader/mainHeader.container';
import {Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col} from 'react-bootstrap';
import { getPlays, getActs, getScenes, getLines } from './scriptPage.actions';

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
      playDropdownOption: "Please Select a Play",
      actDropdownOption: "Please Select an Act",
      sceneDropdownOption: "Please Select a Scene",
      playList: [{ name: "Romeo and Juliet" }, { name: "King Lear" }, { name: "Les Miserables" }],
      actList: [{ name: "Act 1" }, { name: "Act 2" }, { name: "Act 3" }],
      sceneList: [{ name: "Scene 1" }, { name: "Scene 2" }, { name: "Scene 3" }],
      lines: [{ number: 1, character: "GREG", text: "Hi John sdflkjasdflkj adslfkj asdflkjsdlkj asdf klj"},
              { number: 2, character: "JOHN", text: "Hi Greg"},
              { number: 3, character: "GREG", text: "How you doing?"},
              { number: 4, character: "GREG", text: "Good."}],
      currentLineBlocking: "Here is a blocking instruction"
    };

    this.playDropdownChange = this.playDropdownChange.bind(this);
    this.actDropdownChange = this.actDropdownChange.bind(this);
    this.sceneDropdownChange = this.sceneDropdownChange.bind(this);
    this.updateBlocking = this.updateBlocking.bind(this);
  }

  componentWillMount() {
    this.props.push('/')
  }

  playDropdownChange(value) {
    this.setState({
      playDropdownOption: value
      //update available acts/scenes
    });
    console.log(this.props.getPlayStatus);
  }

  actDropdownChange(value) {
    this.setState({
      actDropdownOption: value
      //update available scenes
    });
    this.props.getPlays();
  }

  sceneDropdownChange(value) {
    this.setState({
      sceneDropdownOption: value
    });
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

          {/*Initial Play DropDown
          <Col lg={12}>
            <ButtonToolbar>
            </ButtonToolbar>
          </Col>*/}

          {/*Act and Scene Dropdowns*/}
          <Col sm={3}>
            <ButtonToolbar>
              <h4>Play</h4>
              <Dropdown vertical block style={{marginBottom: "20px"}}>
                <Dropdown.Toggle vertical block>
                  {this.state.playDropdownOption}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{width: "100%", textAlign: "center"}} onSelect={this.playDropdownChange}>
                    {this.state.playList.map((play, index) => (<MenuItem eventKey={play.name}>{play.name}</MenuItem>))}
                </Dropdown.Menu>
              </Dropdown>
              <h4>Act</h4>
              <Dropdown vertical block style={{marginBottom: "20px"}}>
                <Dropdown.Toggle vertical block>
                  {this.state.actDropdownOption}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{width: "100%", textAlign: "center"}} onSelect={this.actDropdownChange}>
                    {this.state.actList.map((act, index) => (<MenuItem eventKey={act.name}>{act.name}</MenuItem>))}
                </Dropdown.Menu>
              </Dropdown>
              <h4>Scene</h4>
              <Dropdown vertical block style={{marginBottom: "10px"}}>
                <Dropdown.Toggle vertical block>
                  {this.state.sceneDropdownOption}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{width: "100%", textAlign: "center"}} onSelect={this.sceneDropdownChange}>
                    {this.state.sceneList.map((scene, index) => (<MenuItem eventKey={scene.name}>{scene.name}</MenuItem>))}
                </Dropdown.Menu>
              </Dropdown>
            </ButtonToolbar>
          </Col>

          <Col sm={6}>
            <ListGroup style={{marginTop: "30px"}}>
              {this.state.lines.map((line, index) => (
                <ListGroupItem onClick={() => this.updateBlocking(line.number)}>
                  <Col xs={3} sm={2} md={1}>{line.character}:</Col> <Col xs={9} sm={10} md={11}>{line.text}</Col>
                </ListGroupItem>))}
            </ListGroup>
          </Col>

          <Col sm={3}>
            <p style={{marginTop: "30px"}}>{this.state.currentLineBlocking} </p>
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
        getPlayStatus: state.scriptPageReducers.getPlayStatus.data,
        getActStatus: state.scriptPageReducers.getActStatus.data,
        getSceneStatus: state.scriptPageReducers.getSceneStatus.data,
        getLineStatus: state.scriptPageReducers.getLineStatus.data
    };
}

export default connect(mapStateToProps, { getPlays, getActs, getScenes, getLines, push })(ScriptPage);
