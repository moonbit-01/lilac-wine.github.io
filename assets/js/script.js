const homer = document.getElementById("homer1");
const content = document.getElementById("content");

function noVideo() {
    homer.style.display = 'none';        
}

function noContent(){
    content.style.display='none';
}

function showContent(){
    content.style.display='block';
}

setTimeout(noContent,0);
setTimeout(noVideo,14000);
setTimeout(showContent,14100);