import React, { Component } from 'react';
import MainHeader from '../mainHeader/mainHeader.container';

class FilesPage extends Component {

    render() {
        return (
            <div>
            <MainHeader />
                <h1>Files Page</h1>
                 {/*Creating div hopefully it looks like just centered text*/}
                <div id="container">
                  <div id='left'> Loves Labours Loss </div>

                  <div id='left1'>

                    <a href="http://www.calvin.edu/~pmb4/newscript.txt" download>
                    <img border="0" src="img/button.png" alt="Download" width="50" height="50"/>
                    </a>

                  </div>

                  <div id="center"></div>
                </div>
            </div>
        );
    }

}

export default FilesPage;
