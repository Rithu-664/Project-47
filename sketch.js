const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var auEngine, auWorld;
var box1,imp_1,imp_2;
var backgroundImg,platform,bg2;

var crewmate, slingshot;
var gameState = PLAY;
var PLAY = 1;
var END = 0;
var playButton;
var title;
var star1,star2,star3;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("bg.jpg");
    bg2 = loadImage("bg3.jpg")
}

function setup(){
    var canvas = createCanvas(1200,400);
    auEngine = Engine.create();
    auWorld = auEngine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    imp_1 = new Impostor(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    imp_2 = new Impostor(810, 200);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    star1 = new Star(500,200);
    star2 = new Star(580,200);
    star3 = new Star(660,200);

    crewmate = new Crewmate(200,130);

    slingshot = new SlingShot(crewmate.body,{x:200, y:130});

}

function draw(){
    Engine.update(auEngine);

background(backgroundImg)

        //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    imp_1.display();
    log1.display();

    box3.display();
    box4.display();
    imp_2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    crewmate.display();
    platform.display();
    slingshot.display();    

    
        
    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(crewmate.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}



function keyPressed(){
    if(keyCode===32){
        //slingshot.attach(crewmate.body);
    }
}
