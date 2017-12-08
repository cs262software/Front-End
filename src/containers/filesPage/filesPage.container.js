import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';
import FileRow from './components/fileRow.js';
import { getAllFiles, getFile } from './filesPage.actions';

class FilesPage extends Component {
    constructor() {
        super();
        this.getFile = this.getFile.bind(this);
    }

    componentWillMount() {
        this.props.getAllFiles();
    }

    getFile(fileName) {
        this.props.getFile(fileName);
        console.log(fileName);
    }

    render() {
        return (
            <div>
                <MainHeader />

                <center>
                    <div className="main-container">
                        <h1>Files</h1>
                            {this.props.getAllFilesStatus.map((file, index) => {
                                return <FileRow key={index} file={file} getFile={this.getFile} />
                            })}
                    </div>
                </center>
            </div>
        );
    }

}

function mapStateToProps(state) {
    // retrieve values from the Redux state here
    return {
        location: state.router.pathname,
        getAllFilesStatus: state.filesPageReducers.getAllFilesStatus.data,
        getFileStatus: state.filesPageReducers.getFileStatus.data
    };
}

export default connect(mapStateToProps, { getAllFiles, getFile })(FilesPage);
