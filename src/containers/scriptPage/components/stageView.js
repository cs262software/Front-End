import React, { Component } from 'react';
import { groupBy } from 'lodash';
import Unity from 'react-unity-webgl';
import { SendMessage, RegisterExternalListener } from 'react-unity-webgl';

class StageView extends Component {
    constructor () {
        super();
        RegisterExternalListener ('OpenMenu', this.openMenu.bind (this));
    }

    openMenu (menuId) {
    }

    // render() {
    //     return (
    //         <Unity
    //         src='Build/myGame.json'
    //         loader='Build/UnityLoader.js'
    //         /* pass in this.props.jsonData into Unity app *//>
    //     );
    // }
    render() {
        return (
            <p>StageView</p>
        );
    }

}

export default StageView;
