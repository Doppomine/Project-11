var track , trackImg
var runner , runnerImg
function preload(){
  trackImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  track = createSprite(200,200);
  track.addImage("track",trackImg);
  track.scale = 1.2;
  track.velocityY = 4;
  

  runner = createSprite(300,300);
  runner.addAnimation("runner",runnerImg);
  runner.scale = 0.1;
}

function draw() {
  background (0);
  drawSprites();
  
  if(track.y > 400){
    track.y = height/2;
  }



}
