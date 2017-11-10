import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class FourOhFourPage extends Component {

    render() {
        return (
            <Redirect to='/'/>
        );
    }

}

export default FourOhFourPage;
