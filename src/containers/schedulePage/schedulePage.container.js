import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import MainHeader from '../mainHeader/mainHeader.container';
import { Dropdown, ButtonToolbar, MenuItem, ListGroup, ListGroupItem, Col } from 'reactstrap';
import { getAllPlays, getSchedule } from './schedulePage.actions';

class SchedulePage extends Component {

  constructor(props) {
      super(props);

      this.state = {
          playDropdownOption: {
              Name: "Please Select a Play",
              PlayID: null
          },

          testData : [
            {
              "characters": ["John", "Jane", "Donnie"],
              "scenes": [{"act": 1, "scene": 1}, {"act": 1, "scene": 2}, {"act": 2, "scene": 3}]
            },
            {
              "characters": ["Phil", "John", "Mike"],
              "scenes": [{"act": 2, "scene": 2}, {"act": 2, "scene": 4}, {"act":3, "scene": 3}]
            }
          ]
      };

      this.playDropdownChange = this.playDropdownChange.bind(this);
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

      // When a play is selected, get the schedule for the play
      this.props.getSchedule(value.PlayID);
  }

    render() {
        return (
            <div>
                <MainHeader />

                {/*Top Header */}
                <Col lg={12}>
                    <h2 style={{float: 'center', textAlign: 'center'}} className ="header">SCHEDULE</h2>
                </Col>

                {/* <Col sm={3}>
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
                     </ButtonToolbar>
                </Col>
                */}

                <Col>
                    <h4>Schedule</h4>
                    {/*this.props.testData
                            ? this.props.testData.map((schedule, index) => {
                              return (
                                <p key={`${schedule.characters}_{schedule.scenes}`}>
                                  {schedule.characters} - {schedule.scenes}
                                  </p>
                              );
                            })
                        */}
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
      getScheduleStatus: state.schedulePageReducers.getScheduleStatus.data,
    };
}

export default connect(mapStateToProps,{ getAllPlays, getSchedule })(SchedulePage);
