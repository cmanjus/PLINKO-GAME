const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var canvas;

var ground1;
var divisions = [];
var plinkos = [];
var particles = [];

var k=0;
function setup() {
  engine = Engine.create();
  world = engine.world;

  canvas = createCanvas(500,700);
  
  ground1 = new Ground(250,690);

  for(i=10;i<=500;i=i+80){
    divisions.push(new Division(i,630))
  }

  for(var j=35; j<500; j+= 50){
    plinkos.push(new Plinko(j,100));
  }
  for(var j=20; j<490; j+= 50){
    plinkos.push(new Plinko(j,170));
  }
  for(var j=45; j<490; j+= 50){
    plinkos.push(new Plinko(j,240));
  }
  for(var j=20; j<490; j+= 50){
    plinkos.push(new Plinko(j,310));
  }

  
}

function draw() {
  Engine.update(engine);
  background(0);  
 
  

  for(i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var j =0; j<plinkos.length;j++){
    plinkos[j].display();
  }
  
  if(frameCount%60===0){
    
    particles.push(new Particle());
    
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display();
    
  }
  ground1.display();

}
