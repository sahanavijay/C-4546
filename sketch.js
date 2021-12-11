var canvas;
var jungle, pc_image, junk_image;
var veg_image, jungle_image;
var pc, point, junk, veg;
var life=3;
var heart1, heart2, heart3;
var heart_1img, heart_2img, heart_3img;
var vx=0;
var vy=0;
var g=0.05;

function preload()
{ 
 pc_image = loadImage("assets/player.png");
 jungle_image = loadImage("assets/Background.png");
 heart_1img = loadImage("assets/heart_1.png");
 heart_2img = loadImage("assets/heart_2.png");
 heart_3img = loadImage("assets/heart_3.png");
 junk_image= loadImage("assets/Ice_cream.png");
 veg_image = loadImage("assets/Veggeies.png");
}

function setup() 
{
  createCanvas(800,600)
  pc = createSprite(20,310,100,200);
  pc.addImage(pc_image);
  pc.scale=0.1;
  heart1=createSprite(350,10,20,20);
  heart1.visible=false;
  heart1.addImage(heart_1img);
  heart1.scale=0.2;

  heart2=createSprite(350,10,20,20);
  heart2.visible=false;
  heart2.addImage(heart_2img);
  heart2.scale=0.2;

  heart3=createSprite(730,15,20,20);
  heart3.addImage(heart_3img);
  heart3.scale=0.2;
}

function draw() 
{
  background(51);
  image(jungle_image,0,0,800,800);

  spawnBrocoli();
  spawnIceCream();

  drawSprites();
}

function spawnIceCream(){
  if(frameCount%80===0){
    iceCream=createSprite(850,310,100,200);
    iceCream.addImage(junk_image);
    iceCream.scale=0.1;
    iceCream.velocityX=-3;
  }

}

function spawnBrocoli(){
  if(frameCount%150===0){
    brocoli=createSprite(750,310,100,200);
    brocoli.addImage(veg_image);
    brocoli.scale=0.2;
    brocoli.velocityX=-3;
  }

}

