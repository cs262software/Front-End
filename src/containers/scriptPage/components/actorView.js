import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, Well, Dropdown, MenuItem, ListGroup, ListGroupItem, Row, Col, FormGroup, Checkbox, Radio } from 'react-bootstrap';

var defaultCharacterDropdownOption = {
    Name: "Select a character",
    CharacterID: null
};

class ActorView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characterDropdownOption: defaultCharacterDropdownOption
        };

        this.characterDropdownChange = this.characterDropdownChange.bind(this);
        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onChangeRadio = this.onChangeRadio.bind(this);
    }

    componentWillMount() {
    }

    characterDropdownChange(value) {
        this.setState({
            characterDropdownOption: value,
            showLines: true
        }, () => {
            this.props.onCharacterDropdownChange(value.CharacterID);
        });
    }

    onChangeCheckbox(event) {
        this.setState({
            coverMyLines: event.target.checked
        }, () => {
            this.props.onCheckboxChange(this.state.coverMyLines);
        });
    }

    onChangeRadio(event) {
        this.setState({
            selectedRadioButton: event.target.value
        }, () => {
            this.props.onRadioChange(this.state.selectedRadioButton);
        });
    }

    render() {
        return (
            <div id="actor-view">
                <Row className="main-page-row">
                    <Dropdown id="character-dropdown">
                        <Dropdown.Toggle>
                            {this.state.characterDropdownOption.Name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu onSelect={this.characterDropdownChange}>
                            {this.props.characters
                                ? this.props.characters.map((character, index) => (<MenuItem key={"character-select-menu-item-" + index} eventKey={character}>{character.Name}</MenuItem>))
                                : null
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <Row className="main-page-row">
                <form>
                    <FormGroup>
                        <Row className="main-page-row">
                            <Checkbox inline onChange={this.onChangeCheckbox}>
                                Cover my lines
                            </Checkbox>
                        </Row>
                        <Row className="main-page-row">
                            <Radio name="radioGroup" inline defaultChecked value={1} onClick={this.onChangeRadio}>
                                All Lines
                            </Radio>
                        </Row>
                        <Row className="main-page-row">
                        <Radio name="radioGroup" inline value={2} onClick={this.onChangeRadio}>
                            Prompt Lines
                        </Radio>
                        </Row>
                        <Row className="main-page-row">
                        <Radio name="radioGroup" inline value={3} onClick={this.onChangeRadio}>
                            My Lines Only
                        </Radio>
                        </Row>
                    </FormGroup>
                </form>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
    };
}

export default connect(mapStateToProps,
    {
    }
)(ActorView);
