import React, { Component } from 'react';

class FileUpload extends Component {

    render() {
        return (
            <div>
                <input id="upload-input" type="file" name="uploads[]" onChange={this.props.handleFile} />
                <button class="btn btn-lg upload-btn" type="button" ibCkucj->Upload File</button>
            </div>
        );
    }

}

export default FileUpload;
