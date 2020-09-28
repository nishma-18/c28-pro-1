const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, boyImg;
var tree, treeImg;
var stone, mango;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    boyImg= loadImage("sprites/boy.png");
    treeImg= loadImage("sprites/tree.png");
    stoneImg= loadImage("sprites/stone.png")
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    mango1= new mango(600,290,34);
    mango2= new mango(855,325,35);
    mango3= new mango(670,260,35);
    mango4= new mango(730,200,35);
    mango5= new mango(710,320,36);
    mango6= new mango(825,170,33);
    stones=new Stone(100,460,23);
    
    
    attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy.addImage(boyImg);
    boy.scale=0.125;
    
    stone=createSprite(160,550);
	stone.addImage(stoneImg);
	stone.scale=0.125;

	Engine.run(engine);

    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    detectcollision(stones,mango1);
    detectcollision(stones,mango2);
    detectcollision(stones,mango3);
    detectcollision(stones,mango4);
    detectcollision(stones,mango5);



   
    strokeWeight(4);
    
    stones.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    platform.display();
       
}

function mouseDragged(){

Matter.Body.setPosition(mango.body,{x: mouseX, y: mouseY});


}

function mouseReleased(){

chain.fly();

}

function keyPressed() {
    if(keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    launcherObject.attach(stoneObj.body);
    }
}

function detectcollision(stone, mango){
mangoBodyPosition= mango.body.Position
stoneBodyPosition=stone.body.Position

var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=mango.r+stone.r)
{
    Matter.Body.setStatic(mango.body,false);
}

}