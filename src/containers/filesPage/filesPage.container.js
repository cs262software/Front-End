import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';
import FileRow from './components/fileRow';
import FileUpload from './components/fileUpload';
import { getAllFiles, getFile, postFile } from './filesPage.actions';

class FilesPage extends Component {
    constructor() {
        super();
        this.getFile = this.getFile.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.postFile = this.postFile.bind(this);
    }

    componentWillMount() {
        this.props.getAllFiles();
    }

    getFile(file) {
        this.props.getFile(file);
    }

    handleFileUpload(e) {
        var reader = new FileReader();
        const file = e.target.files[0];
        var fileName = file.name;

        reader.onload = e => {
            var contents = e.target.result;
            this.postFile(contents, fileName);
        };

        reader.onerror = function(e) {
            console.error("File could not be read! Code " + e.target.error.code);
        };

        reader.readAsText(e.target.files[0]);
    }

    postFile(contents, fileName) {
        this.props.postFile(contents, fileName);
    }

    render() {
        return (
            <div>
                <MainHeader />

                <center>
                    <div className="main-container">
                        <h1>Files</h1>

                        <FileUpload handleFileUpload={this.handleFileUpload} />

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
        getFileStatus: state.filesPageReducers.getFileStatus,
        postFileStatus: state.filesPageReducers.postFileStatus.data
    };
}

export default connect(mapStateToProps, { getAllFiles, getFile, postFile })(FilesPage);
