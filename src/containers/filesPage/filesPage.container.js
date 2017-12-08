import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainHeader from '../mainHeader/mainHeader.container';
import FileRow from './components/fileRow';
import FileUpload from './components/fileUpload';
import { getAllFiles, getFile, postFile } from './filesPage.actions';


class FilesPage extends Component {
    constructor() {
        super();
        this.state = {
            downloadIsValid: false
        }
        this.getFile = this.getFile.bind(this);
        // this.postFile = this.postFile.bind(this);
        // this.download = this.download.bind(this);
    }

    componentWillMount() {
        this.props.getAllFiles();
    }

    getFile(file) {
        this.props.getFile(file);
    }

    // postFile(file) {
    //     this.props.postFile(file);
    // }

    render() {
        return (
            <div>
                <MainHeader />

                <center>
                    <div className="main-container">
                        <h1>Files</h1>

                        {/* <FileUpload postFile={this.postFile} /> */}

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
        getFileStatus: state.filesPageReducers.getFileStatus
    };
}

export default connect(mapStateToProps, { getAllFiles, getFile, postFile })(FilesPage);
