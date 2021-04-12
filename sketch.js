const Mecanismo = Matter.Mecanismo;
const Mundo= Matter.Mundo;
const Corpos = Matter.Corpos;

var mecanismo, mundo;
var solo, bola;

function setup(){
    var tela = createCanvas(400,400);
    mecanismo = Mecanismo.create();
    mundo = mecanismo.mundo;

    var opcoes_solo ={
        isStatic: true
    }

    solo = Corpos.rectangle(200,390,200,20,opcoes_solo);
    Mundo.add(mundo,solo);

    var opcoes_bola ={
        restitution: 1.0
    }

    bola = Corpos.circle(200,100,20, opcoes_bola);
    Mundo.add(mundo,bola);

    console.log(solo);
}

function draw(){
    background(0);
    Mecanismo.update(mecanismo);
    rectMode(CENTER);
    rect(solo.position.x,solo.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(bola.position.x, bola.position.y, 20, 20);
}
