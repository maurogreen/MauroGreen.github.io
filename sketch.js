var ovalX = 0;
var ovalY = 0;
var dirx = 1;
var diry= 1;



function setup() {
    createCanvas(500, 500);
    frameRate(35)
}

function draw() {

    frameRate(35)
    var colorr = random(255)
    var colorg = random(255)
    var colorb = random(255)



    background("pink");

    noStroke()
    fill(colorr, colorg, colorb)
    ellipse(ovalX, ovalY, 50, 200 )
    ovalX= ovalX+5*dirx;
    ovalY= ovalY+5*diry;
    console.log("x=",ovalX, "y=", ovalY)
    // colorh = colorh +(.5, 1, .75)
    if (ovalX > 500){
        dirx = dirx*-1
    }
    if (ovalY > 500){
        diry = diry*-1
    }
    if (ovalX < 0)
        dirx=dirx*-1
    if (ovalY < 0)
        diry = diry*-1



}