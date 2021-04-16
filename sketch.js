const Mecanismo = Matter.Engine;
const Mundo = Matter.World;
const Corpos = Matter.Bodies;

var mecanismo, mundo;
var solo, bola;

function setup(){
    var tela = createCanvas(400,400);
    mecanismo = Engine.create();
    mundo = mecanismo. mundo;

    var opcoes_solo ={
        isStatic: true
    }

    solo = Bodies.rectangle(200,390,200,20, opcoes_solo);
    World.add(mundo, solo);

    var opcoes_bola ={
        restitution: 1.0
    }

    bola = Bodies.circle(200,100,20, opcoes_bola);
    World.add(mecanismo, bola);

    console.log(solo);
}

function draw(){
    background(0);
    Engine.update(mecanismo);
    rectMode(CENTER);
    rect(solo.position.x, solo.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(bola.position.x, bola.position.y, 20, 20);
}