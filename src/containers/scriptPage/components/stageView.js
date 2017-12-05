import React, { Component } from 'react';
import { groupBy } from 'lodash';
import Unity from 'react-unity-webgl';
import { SendMessage, RegisterExternalListener } from 'react-unity-webgl';

class StageView extends Component {
    constructor () {
        super();
        RegisterExternalListener ('OpenMenu', this.openMenu.bind (this));
    }

    componentWillReceiveProps(nextProps) {
        console.log("hi");
        // console.log(this.props.characters);
        // console.log(nextProps);
        // console.log(groupBy(nextProps), )

        // var grouped = groupBy(nextProps.jsonData, 'CharacterID');
        // // var grouped = _.mapValues(_.groupBy(cars, 'make'),
        // //                   clist => clist.map(car => _.omit(car, 'make')));
        //
        //                   console.log(grouped);
        //
        // for (let CharacterIdKey in grouped) {
        //
        // }
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
            <div className="stage-view">
                { this.props.blockingData && this.props.characters ?
                    <h2>Blocking</h2> : null
                }
            </div>
        );
    }

}

export default StageView;
