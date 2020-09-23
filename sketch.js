const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;
var bg = 225;
var datetime;

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;

  //Bodies
  base1 = new base(800, 480, 350, 20);
  base2 = new base(1350, 350, 250, 20);
  ground = new base(width / 2, 680, width, 40);
  polygon = new Pgon();

  /*
    BASE1
          */

  //level 5
  // increase x -  200
  box1 = new box(655, 444, 50, 50);
  box2 = new box(710, 444, 50, 50);
  box3 = new box(765, 444, 50, 50);
  box4 = new box(820, 444, 50, 50);
  box5 = new box(875, 444, 50, 50);
  box6 = new box(930, 444, 50, 50);

  //level 4
  box7 = new box(682, 394, 50, 50);
  box8 = new box(737, 394, 50, 50);
  box9 = new box(792, 394, 50, 50);
  box10 = new box(847, 394, 50, 50);
  box11 = new box(902, 394, 50, 50);

  //level 3
  box12 = new box(709, 344, 50, 50);
  box13 = new box(764, 344, 50, 50);
  box14 = new box(819, 344, 50, 50);
  box15 = new box(874, 344, 50, 50);

  //level 2
  box16 = new box(734, 294, 50, 50);
  box17 = new box(789, 294, 50, 50);
  box18 = new box(844, 294, 50, 50);

  //level 1
  box19 = new box(759, 244, 50, 50);
  box20 = new box(814, 244, 50, 50);

  //level 0
  box21 = new box(784, 194, 50, 50);

  /*
    BASE2
          */

  //level 3
  box22 = new box(1265, 312, 50, 50);
  box23 = new box(1320, 312, 50, 50);
  box24 = new box(1375, 312, 50, 50);
  box25 = new box(1430, 312, 50, 50);

  //level 2
  box26 = new box(1290, 262, 50, 50);
  box27 = new box(1345, 262, 50, 50);
  box28 = new box(1400, 262, 50, 50);

  //level 1
  box29 = new box(1315, 212, 50, 50);
  box30 = new box(1370, 212, 50, 50);

  //level 0
  box31 = new box(1340, 162, 50, 50);

  String = new chain(polygon.body, { x: 290, y: 200 });

  back();
  Engine.run(engine);
}

function draw() {
  background(bg);

  base1.display();
  base2.display();
  ground.display();
  polygon.display();

  /*
    BASE1
          */


  //level 5
  box1.display([100, 200, 300]);
  box2.display([100, 200, 300]);
  box3.display([100, 200, 300]);
  box4.display([100, 200, 300]);
  box5.display([100, 200, 300]);
  box6.display([100, 200, 300]);
  //level 4
  box7.display([300, 200, 100]);
  box8.display([300, 200, 100]);
  box9.display([300, 200, 100]);
  box10.display([300, 200, 100]);
  box11.display([300, 200, 100]);
  //level 3
  box12.display([200, 300, 100]);
  box13.display([200, 300, 100]);
  box14.display([200, 300, 100]);
  box15.display([200, 300, 100]);
  //level 2 
  box16.display([200, 100, 300]);
  box17.display([200, 100, 300]);
  box18.display([200, 100, 300]);
  //level 1
  box19.display([200, 200, 300]);
  box20.display([200, 200, 300]);
  //level 0 
  box21.display([100, 300, 300]);

  /*
      BASE2
            */

  //level 3
  box22.display([50, 100, 150]);
  box23.display([50, 100, 150]);
  box24.display([50, 100, 150]);
  box25.display([50, 100, 150]);

  //level 2
  box26.display([150, 100, 50]);
  box27.display([150, 100, 50]);
  box28.display([150, 100, 50]);

  //level 1
  box29.display([250, 150, 100]);
  box30.display([250, 150, 100]);

  //level 0
  box31.display([300, 300, 300]);

  //string
  String.display();
  //score 
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();

  drawSprites();
  fill(100);
  textSize(24);
  text("Drag the Hexagonal stone and Release it, to launch towards the blocks", 200, 50);
  text("Press Space to get a second chance", 1000, 50);
  text("Score = " + score, 50, 50);
}
function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  String.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 160, y: 280 });
    String.attach(polygon.body);
  }
}
async function back() {
  response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  responseJSON = await response.json();

  datetime = responseJSON.datetime;
  hour = datetime.slice(11, 13);

  if (hour >= 06 && hour <= 18) {
    bg = 255;
  }
  else {
    bg = 0;
  }
  
}