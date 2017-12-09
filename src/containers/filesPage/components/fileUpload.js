import React, { Component } from 'react';

class FileUpload extends Component {

    render() {
        return (
            <div>
                <form ref='uploadForm'
                    id='uploadForm'
                    action={this.props.postFile}
                    method="post"
                    encType="multipart/form-data">
                    <input type="file" name="sampleFile" />
                    <input type='submit' value='Upload' />
                </form>
            </div>
        );
    }

}

export default FileUpload;
