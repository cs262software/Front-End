import React, { Component } from 'react';
import MainHeader from '../mainHeader/mainHeader.container';
import './index.css';

class FilesPage extends Component {

   render() {
      // return (
      //    <div>
      //       <MainHeader />
      //          <h1>Files Page</h1>
      //            {/*Creating div hopefully it looks like just centered text*/}
      //          <div id="container">
      //             <div id='left'> Love's Labours Lost </div>

      //             <div id='left1'>

      //                <a href="http://www.calvin.edu/~pmb4/newscript.txt" download>
      //                <img border="0" src="img/button.png" alt="Download" width="50" height="50"/>
      //                </a>

      //             </div>

      //             <div id="center"></div>

                  
      //          </div>
      //    </div>
      // );


      // return (
      //    <div>
      //       <MainHeader />
      //       <h1>Files Page</h1>

      //       <div id="upload" style={{display:"block"},{margin:"auto"},{textAlign:"center"},{border:"3px solid blue"}}>
      //          <input type="file" name="uploadThing" id="fileToUpload" />
      //       </div>
      //    </div>
      // );

      return (
         <div className="filesPage">
            <MainHeader />

            <h1>Files Page</h1>
            <div id="upload" style={{display:"block"},{margin:"auto"},{padding:"5px"}}>
               <h5>Upload a file:</h5> 
               <input type="file" name="uploadThing" id="fileToUpload" style={{border:"1px solid lightGray"}}/>
            </div>

            <hr/>

            <div class="filesList">
               <div class="filesListItem">
                  <div class="fileTile" id="s1" style={{backgroundColor:"white"}}>--Thingy #1--</div>
                  <button type="button" class="downloadFileBtn" id="db1">button #1</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s2" style={{backgroundColor:"yellow"}}>--Thingy #2--</div>
                  <button type="button" class="downloadFileBtn" id="db2">button #2</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s3" style={{backgroundColor:"white"}}>--Thingy #3--</div>
                  <button type="button" class="downloadFileBtn" id="db3">button #3</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s4" style={{backgroundColor:"yellow"}}>--Thingy #4--</div>
                  <button type="button" class="downloadFileBtn" id="db4">button #4</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s5" style={{backgroundColor:"white"}}>--Thingy #5--</div>
                  <button type="button" class="downloadFileBtn" id="db5">button #5</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s6" style={{backgroundColor:"yellow"}}>--Thingy #6--</div>
                  <button type="button" class="downloadFileBtn" id="db6">button #6</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s7" style={{backgroundColor:"white"}}>--Thingy #7--</div>
                  <button type="button" class="downloadFileBtn" id="db7">button #7</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s8" style={{backgroundColor:"yellow"}}>--Thingy #8--</div>
                  <button type="button" class="downloadFileBtn" id="db8">button #8</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s9" style={{backgroundColor:"white"}}>--Thingy #9--</div>
                  <button type="button" class="downloadFileBtn" id="db9">button #9</button>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s10" style={{backgroundColor:"yellow"}}>--Thingy #10--</div>
                  <button type="button" class="downloadFileBtn" id="db10">button #10</button>
               </div>

            </div>
            
         </div>
      );
   }

}

export default FilesPage;
