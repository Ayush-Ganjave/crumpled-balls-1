const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
function setup() {
createCanvas(800, 700);
rectMode(CENTER)

engine = Engine.create();
world = engine.world;


leftb = new Dustbin(550,620,20,100);
bottomb = new Dustbin(610,660,100,20)
rightb = new Dustbin(670,620,50,100)

paper = new Paper(100,600,10);
ground = new Ground();

Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(0);

Engine.update(engine)

ground.display();
paper.display();
leftb.display();
rightb.display();
bottomb.display();

drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyforce(paper.body,paper.body.position,{x:15,y:-15})
	}
}


