import React, { Component } from 'react';

class FileRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: ""
        }
    }

    // componentWillMount() {
    //     this.props.getFile(this.props.file)
    // }

    render() {
        return (
            <div class="filesList">
                <div class="filesListItem">
                    <div class="fileTile" id="s1" style={{backgroundColor:"white"}}>
                        <div class="titlePosition" id ="thing1">{this.props.file}</div>
                    </div>
                    <button onClick={() => {this.props.getFile(this.props.file)}}>Download</button>

                </div>
             </div>
        );
    }

}

export default FileRow;
