import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';
import { DropdownButton, MenuItem, ListGroup, ListGroupItem} from 'react-bootstrap';
import styled, { keyframes, css } from 'styled-components';
import '../scriptPage/scriptPage.container.css'
//import { MenuItem } from 'react-bootstrap';

class FilesPage extends Component {

    render() {
        return (
            <div>
                <MainHeader />
                <h1>Files Page</h1>
                <p>10 points to Ravenclaw for Lydia figuring crap out at 2:30am!</p>
            </div>
        );
    }

}

//TODO: add in Act/Scene selector
//TODO: add in line display (scrollable textview?), blocking(textbox), personal notes (textbox)
//TODO: add "state" to the class, selectedScript, selectedScene, selectedLine, associatedBlocking, associatedNotes, user? etc.

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        // prop: reduxValue
    };
}

export default connect(
    mapStateToProps,{/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
        // Name of imported action.
    }
)(FilesPage);
