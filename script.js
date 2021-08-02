//image slider using js..
var images = ["images/one.png", "images/two.png", "images/three.png"];
var imageTag = document.querySelector("img");

var count = 0;
function next() {
    count++;

    if(count >= images.length) {
        count = 0;
        imageTag.src = images[count];
    }else{
        imageTag.src = images[count];
    }

}

function prev() {
    count--;

    if(count < 0 ){
        count = images.length - 1;
        imageTag.src = images[count];
    }else{
        imageTag.src = images[count];
    }

}