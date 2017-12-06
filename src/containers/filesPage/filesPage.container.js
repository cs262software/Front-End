import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';
import FileRow from './components/fileRow.js';
import { getAllFiles } from './filesPage.actions';

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

    componentWillMount() {
        this.props.getAllFiles();
    }

    render() {
        return (
            <div>
                <MainHeader />

                <h1>Files Page</h1>
                <ul>
                    {this.props.getAllFilesStatus.map((file, index) => {
                        return <FileRow key={index} file={file} />
                    })}
                </ul>

            </div>
        );
    }

}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
        getAllFilesStatus: state.filesPageReducers.getAllFilesStatus.data,
    };
}

export default connect(mapStateToProps, { getAllFiles })(FilesPage);
