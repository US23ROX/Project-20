var tom1, tom1Image, tom4Image;
var jerry1, jerry1Image, jerry4Image;
var garden, gardenImage;

function preload() {
    //load the images here
  tom1Image = loadAnimation("images/tomOne.png");
  tom4Image = loadAnimation("images/tomFour.png"); 
  
  jerry1Image = loadAnimation("images/jerryOne.png");
  jerry4Image = loadAnimation("images/jerryFour.png");

  gardenImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenImage);
    //create tom and jerry sprites here
    tom1 = createSprite(800,700,20,20);
    tom1.addAnimation("tom", tom1Image);
    tom1.addAnimation("TOM", tom4Image);
    tom1.scale = 0.3;
    

    jerry1 = createSprite(400,700,20,20);
    jerry1.addAnimation("jerry", jerry1Image);
    jerry1.addAnimation("JERRY", jerry4Image);
    jerry1.scale = 0.3;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom1.isTouching(jerry1)){
        
    tom1.changeAnimation("TOM", tom4Image);
    tom1.scale = 0.3;

    jerry1.changeAnimation("JERRY", jerry4Image);
    jerry1.scale = 0.3;
    }

//    tom1.depth = garden.depth+1;

  //  jerry1.depth = garden.depth+1;

    keyPressed();

    drawSprites();
}


function keyPressed(){
    if(keyDown(LEFT_ARROW)){
        tom1.x = tom1.x - 4;
    }

  //For moving and changing animation write code here
}
