var cat1,cat1Image;
var cat2Image;
var garden, gardenImage;
//var catRunningImage,catRunning;

function preload() {
    //load the images here
    mouse1Image = loadImage("images/mouse1.png");
    mouse2Image =loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image = loadAnimation("images/mouse4.png")
    cat1Image = loadImage("images/cat1.png");
    cat2Image =loadAnimation("images/cat2.png","images/cat3.png");
    cat3Image = loadAnimation("images/cat4.png")
    gardenImage = loadImage("images/garden.png");
  

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
  

  garden = createSprite(300,300,460,460);
  garden.addImage(gardenImage);
  //garden.scale = 7;

  mouse1 = createSprite(100,600);
  mouse1.addImage(mouse1Image);
  
 
  mouse1.scale = 0.1;
  mouse1.addAnimation("mouseRunning",mouse2Image);
  mouse1.addAnimation("mouselastimage",mouse3Image);
  

  cat1 = createSprite(680,600);
  cat1.addImage(cat1Image) ;
  
 
  cat1.scale = 0.1;
  //cat1.velocityX = -1;
  cat1.addAnimation("catRunning",cat2Image);
  cat1.addAnimation("catlastimage",cat3Image);
  //cat1.collide = mouse1;


}
mouse1.width = 70;
cat1.width = 70;


function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    //mouse1.collide(garden);
    keyPressed();
      
    if(cat1.x - mouse1.x<=(cat1.width/2 + mouse1.width/2)-100){
     
       cat1.velocityX = 0;
       console.log(cat1.x-mouse1.x); console.log(cat1.width/2+mouse1.width/2);
      
      // console.log("hello");
       mouse1.changeAnimation("mouselastimage",mouse3Image);
       cat1.changeAnimation("catlastimage",cat3Image);
      
    }
   

      //if( )

    drawSprites();
}


  //For moving and changing animation write code here

  function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat1.velocityX = -5;
        cat1.changeAnimation("catRunning",cat2Image);
        mouse1.changeAnimation("mouseRunning",mouse2Image);
    }

  }

  

