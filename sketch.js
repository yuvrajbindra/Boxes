const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, object;
function setup() { 
  createCanvas(400,400); 
  engine = Engine.create();
  world = engine.world;

  
  box1 = new Box(200,350,50,50)
  box2 = new Box(240,100,50,50)
  box3 = new Box(280,50,100,100)
  ground = new Ground(200,380,400,20)
  }

  function draw() {
    background("orange");
    Engine.update(engine);
    box1.display()
    box2.display()
    box3.display()
    ground.display()
  }