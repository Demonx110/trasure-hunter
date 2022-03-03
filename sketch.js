var robot , robotImg
var backgroundImg , bg
var coins , coinsImg
var heart , heartImg
var rock1 , rock1Img
var rock2 , rock2Img
var rock3 , rock3Img

function preload(){
  robotImg = loadImage("pc.png")
  backgroundImg = loadImage("earth.jpg")
  coinsImg = loadImage("coins.gif")
  heartImg = loadImage("heart.gif")
  rock1Img = loadImage("rock1.jpg")
  rock2Img = loadImage("rock2.jpg")
  rock3Img = loadImage("rock3.png")
}

function setup(){
  createCanvas(800 ,600)
  bg = createSprite(400,300,800 ,600)
  bg.addImage(backgroundImg)
  bg.scale = 1.25
  bg.velocityX = -1

  robot  = createSprite(275,350,100,100)
  robot.addImage(robotImg)
  robot.scale = 0.1
  

}


function draw(){
background(0)
 if(bg.x < 0){
   bg.x = bg.width
 }
  drawSprites()
}