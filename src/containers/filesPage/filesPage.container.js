import React, { Component } from 'react';
import MainHeader from '../mainHeader/mainHeader.container';
import './index.css';

class FilesPage extends Component {

   render() {
      return (
         <div className="filesPage">
            <MainHeader />
            <h1 class="pageName">Files Page</h1>

            <br/>
            <label class="fileUploadField">
               <input type="file"/>
               <img class="uploadIcon" src="img/FileUploadIcon-blue.png" alt="uploadIcon" height="35"/>
               <span>Upload File</span> <br/>
            </label>

            <hr/>

            <div class="filesList">
               <div class="filesListItem">
                  <div class="fileTile" id="s1">
                     --Thingy #1--
                     <button type="button" class="downloadFileBtn" id="db1" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s2">
                     --Thingy #2--
                     <button type="button" class="downloadFileBtn" id="db2" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s3">
                     --Thingy #3--
                     <button type="button" class="downloadFileBtn" id="db3" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                     </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s4">
                     --Thingy #4--
                     <button type="button" class="downloadFileBtn" id="db4" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s5">
                     --Thingy #5--
                     <button type="button" class="downloadFileBtn" id="db5" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s6">
                     --Thingy #6--
                     <button type="button" class="downloadFileBtn" id="db6" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s7">
                     --Thingy #7--
                     <button type="button" class="downloadFileBtn" id="db7" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s8">
                     --Thingy #8--
                     <button type="button" class="downloadFileBtn" id="db8" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s9">
                     --Thingy #9--
                     <button type="button" class="downloadFileBtn" id="db9" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

               <div class="filesListItem">
                  <div class="fileTile" id="s10">
                     --Thingy #10--
                     <button type="button" class="downloadFileBtn" id="db10" style={{height:"80%"},{margin:"2px"}}>
                        <img src="img/FileDownloadIcon.png" alt="download" style={{width:"100%"},{height:"75%"}}/>
                     </button>
                  </div>
               </div>

            </div>
            
         </div>
      );
   }
}

export default FilesPage;
