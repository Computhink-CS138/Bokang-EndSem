let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}

function draw(){
    background("LightBlue");
    if (posX > width){
        xSpeed = -5;
    } else if (posX < 0){
        xSpeed = 5;
    }
    posX = posX + xSpeed;
    circle(posX, height / 2, 50);
    fill("limegreen");
}














