const body = document.querySelector('body');

const IMG_NUNBER = 1;

function paintImage(imgNumber) {
    console.log("paintImage 실행!");
    const image = new Image();
    image.src = `images/1.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function init() {
    paintImage(IMG_NUNBER);
}

init();