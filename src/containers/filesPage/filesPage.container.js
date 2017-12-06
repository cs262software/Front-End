import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';
import FileRow from './components/fileRow.js';

class FilesPage extends Component {
    constructor() {
        super();
        this.state = {
            filesArray: [
                {name: "Love's Labour's Lost", fileId: 1, filePath: "http://shakespeare.mit.edu/lll/full.html"},
                {name: "Romeo & Juliet", fileId: 2, filePath: "http://shakespeare.mit.edu/lll/full.html"},
                {name: "The Merchant of Venice", fileId: 3, filePath: "http://shakespeare.mit.edu/lll/full.html"},
            ]
        }
    }

    render() {
        return (
            <div>
                <MainHeader />

                <h1>Files Page</h1>
                <ul>
                    {this.state.filesArray.map(file => {
                        return <FileRow file={file} />
                    })}
                </ul>

            </div>
        );
    }

}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        // prop: reduxValue
    };
}

export default connect(
    mapStateToProps,
    {/* add imported action creators here so they can be dispatched using this.props.[action creator name] */
        // Name of imported action.
    }
)(FilesPage);
