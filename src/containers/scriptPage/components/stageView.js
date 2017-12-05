import React, { Component } from 'react';
import Unity from 'react-unity-webgl';

class StageView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Unity
            src='Build/myGame.json'
            loader='Build/UnityLoader.js'
            /* pass in this.props.jsonData into Unity app *//>
        );
    }

}

export default StageView;
