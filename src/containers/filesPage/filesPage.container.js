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
        this.handleFile = this.handleFile.bind(this);
        this.postFile = this.postFile.bind(this);
        // this.download = this.download.bind(this);
    }

    componentWillMount() {
        this.props.getAllFiles();
    }

    getFile() {
        this.props.getFile("./parsing/output/test (copy 1).xml");
        console.log(this.props.getFileStatus);
        // this.download();
    }

    handleFile() {
        var file;
        var formData = new FormData();
        formData.append('uploads[]', file, file.name);
        this.postFile(formData);
    }

    postFile(file) {
        this.props.postFile(file);
    }

    render() {
        return (
            <div>
                <MainHeader />

                <center>
                    <div className="main-container">
                        <h1>Files</h1>

                        {/* <FileUpload postFile={this.postFile} /> */}
                            {/* {this.props.getAllFilesStatus.map((file, index) => {
                                return <FileRow key={index} file={file} getFile={this.getFile} fileUrl={this.state.fileUrl} />
                            })} */}

                            <a onClick={() => {this.getFile()}}>Click</a>

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

export default connect(mapStateToProps, { getAllFiles, getFile, postFile })(FilesPage);
