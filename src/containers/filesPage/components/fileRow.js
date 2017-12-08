import React, { Component } from 'react';

class FileRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileUrl: ""
        }
    }

    render() {
        return (
            <div class="filesList">
                <div class="filesListItem">
                    <div class="fileTile" id="s1" style={{backgroundColor:"white"}}>
                        <div class="titlePosition" id ="thing1">{this.props.file}</div>
                    </div>
                    <a href={() => {this.props.fileUrl()}} download>Download</a>

                </div>
             </div>
        );
    }

}

export default FileRow;
