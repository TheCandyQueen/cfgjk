function setup(){
    canvas = createCanvas(640,480);
    canvas.position(400, 260);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);
}