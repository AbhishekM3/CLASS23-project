var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Zone1,Zone2,Zone3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	var packageBody_opstions = {

		isStatic: false

	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Zone1 = new Zone(350,648,200,20);
	Zone1.shapeColor = "red";
    Zone2 = new Zone(270,648,20,100);
	Zone2.shapeColor = "red";
    Zone3 = new Zone(410,648,20,100);
	Zone3.shapeColor = "red";

	Engine.run(engine);
    console.log(Zone);
}


function draw() {
  
  Engine.update(engine);
  rectMode(CENTER);
  rect()
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  Zone1.display(); 
  Zone2.display();
  Zone3.display();

  

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);

  }
}



