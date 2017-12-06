import React, { Component } from 'react';

class FileRow extends Component {

    render() {
        return (
            <div>
                <li>{this.props.file}</li>
            </div>
        );
    }

}

export default FileRow;
