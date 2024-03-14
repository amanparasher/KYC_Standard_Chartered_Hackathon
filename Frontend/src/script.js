alert("Already Loaded")

let Doc = document.getElementById("file-upload")
const inputFile = document.getElementById("file-upload")

inputFile.addEventListener("change",uploadImage);

function uploadImage() {
  inputFile.files[0];
  let imgLink= URL.createObjectURL(inputFile.files[0])
  imageView.style.backgroundImage = 'url(${imgLink})'
  imageView.style.border=0;
  
}