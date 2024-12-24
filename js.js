function terminate1(){
  document.getElementById("userrr").style.display = "none";
  document.getElementById("trades").style.display = "block";
  document.getElementById("acbtn").style.background = "#323232";
  document.getElementById("acbtn").style.color = "#F5F5F5";
  document.getElementById("but4").style.background = "#323232";
  document.getElementById("but4").style.color = "#F5F5F5";
  document.getElementById("tradesbtn").style.background = "#6F6F6F";
  document.getElementById("tradesbtn").style.color = "#323232";
  document.getElementById("blll").style.display = "none"

  
}
function opnba(){
  document.getElementById("blll").style.display = "block"
  document.getElementById("userrr").style.display = "none";
  document.getElementById("trades").style.display = "none";
  document.getElementById("acbtn").style.background = "#323232";
  document.getElementById("acbtn").style.color = "#F5F5F5";
  document.getElementById("but4").style.background = "#6F6F6F";
  document.getElementById("but4").style.color = "#323232";
  document.getElementById("tradesbtn").style.background = "#323232";
  document.getElementById("tradesbtn").style.color = "#F5F5F5";
  
}

function terminate2(){
  document.getElementById("userrr").style.display = "block";
  document.getElementById("trades").style.display = "none";
  document.getElementById("acbtn").style.background = "#6F6F6F";
  document.getElementById("acbtn").style.color = "#323232";
  document.getElementById("but4").style.background = "#323232";
  document.getElementById("but4").style.color = "#F5F5F5";
  document.getElementById("tradesbtn").style.background = "#323232";
  document.getElementById("tradesbtn").style.color = "#F5F5F5";
  document.getElementById("blll").style.display = "none"

}
function vpslog(){
  document.getElementById("toppp").style.width = "10%"
  setTimeout(() => {
    document.getElementById("toppp").style.width = "60%"
  }, 300);
  setTimeout(() => {
    document.getElementById("toppp").style.width = "90%"
  }, 800);
  setTimeout(() => {
    document.getElementById("toppp").style.width = "100%"
  }, 1700);
  setTimeout(() => {
    document.getElementById("blurrr").style.zIndex = "3"

  }, 3000);
}


var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
  fileInput.value = '';
  console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
  console.log(" > " + fileInput.value)
  uploadIcon.innerHTML = 'check_circle';
  dragDropText.innerHTML = 'File Dropped Successfully!';
  document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
  uploadButton.innerHTML = `Upload`;
  fileName.innerHTML = fileInput.files[0].name;
  fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
  uploadedFile.style.cssText = "display: flex;";
  progressBar.style.width = 0;
  fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
  let isFileUploaded = fileInput.value;
  if(isFileUploaded != '') {
    if (fileFlag == 0) {
        fileFlag = 1;
        var width = 0;
        var id = setInterval(frame, 50);
        function frame() {
            if (width >= 390) {
              clearInterval(id);
          uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
            } else {
              width += 5;
              progressBar.style.width = width + "px";
            }
        }
      }
  } else {
    cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
  }
});

cancelAlertButton.addEventListener("click", () => {
  cannotUploadMessage.style.cssText = "display: none;";
});

if(isAdvancedUpload) {
  ["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
    draggableFileArea.addEventListener(evt, e => {
      e.preventDefault();
      e.stopPropagation();
    })
  );

  ["dragover", "dragenter"].forEach( evt => {
    draggableFileArea.addEventListener(evt, e => {
      e.preventDefault();
      e.stopPropagation();
      uploadIcon.innerHTML = 'file_download';
      dragDropText.innerHTML = 'Drop your file here!';
    });
  });

  draggableFileArea.addEventListener("drop", e => {
    uploadIcon.innerHTML = 'check_circle';
    dragDropText.innerHTML = 'File Dropped Successfully!';
    document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
    uploadButton.innerHTML = `Upload`;
    
    let files = e.dataTransfer.files;
    fileInput.files = files;
    console.log(files[0].name + " " + files[0].size);
    console.log(document.querySelector(".default-file-input").value);
    fileName.innerHTML = files[0].name;
    fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
    uploadedFile.style.cssText = "display: flex;";
    progressBar.style.width = 0;
    fileFlag = 0;
  });
}

removeFileButton.addEventListener("click", () => {
  uploadedFile.style.cssText = "display: none;";
  fileInput.value = '';
  uploadIcon.innerHTML = 'file_upload';
  dragDropText.innerHTML = 'Drag & drop any file here';
  document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
  uploadButton.innerHTML = `Upload`;
});

function idd(){
  setTimeout(() => {
    document.querySelector(".progressss").style.width = "100%"
  }, 4000);
  
  setTimeout(() => {
    document.querySelector(".backfil").style.opacity = "0"
    document.querySelector(".login").style.opacity = "0"
  }, 68000);
  setTimeout(() => {
    document.querySelector(".backfil").style.display = "none"
    document.querySelector(".login").style.display = "none"
  }, 72000);


}
function termm(){
  document.getElementById("modal1").style.display = "flex"
}
function cancell(){
  document.getElementById("modal1").style.display = "none"
}
function termmin(){
  setTimeout(() => {
    
    document.querySelector(".kaliii").style.display = "block"
  }, 300);
}
function termmout(){
  setTimeout(() => {
    document.querySelector(".kaliii").style.display = "none"
    document.getElementById("modal1").style.display = "none"

    
  }, 400);
}

