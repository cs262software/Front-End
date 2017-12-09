import React, { Component } from 'react';

class FileRow extends Component {

    render() {
        return (
            <div className="file-row">
                <div class="titlePosition" id ="thing1">{this.props.file}</div>
                <button className="btn" onClick={() => {this.props.getFile(this.props.file)}}>Download</button>
             </div>
        );
    }

}

export default FileRow;
