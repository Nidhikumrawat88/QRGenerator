let imgBox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimg");
let qrtext = document.getElementById("text");

function generate(){
    if(text.value.length>0){
    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text.value;
imgBox.classList.add("show-img");
    }
    else{
        alert("PLEASE ENTER TEXT OR URL")
    }
}