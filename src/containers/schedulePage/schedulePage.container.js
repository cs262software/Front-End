import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import MainHeader from '../mainHeader/mainHeader.container';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import { getAllPlays, getActs, getScenes, getCharacters } from './schedulePage.actions';

class SchedulePage extends Component {

  constructor(props) {
      super(props);

      this.state = {
          playDropdownOption: {
              Name: "Please Select a Play",
              PlayID: null
          },
          actDropdownOption: "Please Select an Act",
          sceneDropdownOption: "Please Select a Scene",
      };

      this.playDropdownChange = this.playDropdownChange.bind(this);
      this.actDropdownChange = this.actDropdownChange.bind(this);
      this.sceneDropdownChange = this.sceneDropdownChange.bind(this);
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

      // When a scene is selected, get a list of characters.
      this.props.getCharacters(
          this.state.playDropdownOption.PlayID,
          this.state.actDropdownOption,
          value
      );
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
                      {this.props.getCharactersStatus
                          ? this.props.getCharactersStatus.map((character, index) => (
                              <ListGroupItem>
                                  <Col xs={8} sm={8} md={8}>{character.Text}</Col>
                              </ListGroupItem>))
                          : null
                      }
                  </ListGroup>
              </Col>
            </div>
        );
    }

}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
      location: state.router.pathname,
      getAllPlaysStatus: state.schedulePageReducers.getAllPlaysStatus.data,
      getActsStatus: state.schedulePageReducers.getActsStatus.data,
      getScenesStatus: state.schedulePageReducers.getScenesStatus.data,
      getCharactersStatus: state.schedulePageReducers.getCharactersStatus.data,
    };
}

export default connect(mapStateToProps,{ getAllPlays, getActs, getScenes, getCharacters })(SchedulePage);
