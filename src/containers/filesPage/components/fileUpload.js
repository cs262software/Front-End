import React, { Component } from 'react';

class FileUpload extends Component {

    render() {
        return (
            <div>
                <input type="file" onChange={e => {this.props.handleFileUpload(e)}} />
            </div>
        );
    }

}

export default FileUpload;
