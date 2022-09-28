function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES)
}

function draw() {
//Metto il framerate casuale in un intervallo di tempo scelto da me, affinchè sia il caso a decidere la vita di ogni quadro 
  let fr = random(0.1,1);
  frameRate(fr);
  console.log(fr);
  strokeWeight(0);
  translate(width/2,height/2);
  // noLoop();

// Dichiaro i 7 colori usati da Malevich nell'opera "Compositione suprematista" del 1916.
  let yellow = "#d7b132" ;
  let ocher = "#dc9830";
  let orange = "#cd522e";
  let green = "#227d42";
  let blue = "#1c1e4f";
  let black = "#1a1a1a";
  let mywhite = "#e5e3e2";
  let pink = "#dfabb9";
  var colori = ["#d7b132","#d7b132","#dc9830","#dc9830","#cd522e","#cd522e","#227d42","#1c1e4f","#1a1a1a","#1a1a1a","#dfabb9"];
  background(mywhite);

// Creo degli array per larghezza e altezza utilizzando misure modulari come nel quadro originale, ripeto i valori affinchè si presentino piu volte.
  var h = [10,10,10,10,20,20,20,20,20,20,40,40,40,60,60,80,100];
  var w = [40,40,40,40,40,40,80,80,80,80,120,120,160,200,240,300,400];
  var q = [100,120,160,200];
  
// Nel quadro originale le forme hanno due possibili orientamenti: orizzontali o rispetto un asse negativo di 60 gradi,
// Creo quindi un array con dentro questi due valori.
  var rotation = [0, -60, -60, -60, -60, -60, -60];
  var amount1 = 29;
  var amount2 = 4;

// Creo la funzione per i rettangoli.
  for(let i=0; i < amount1; i++){
  push();
  fill(random(colori));
  rotate(random(rotation));
  rect(random(-windowWidth/2,windowWidth/2),random(-windowHeight/2,windowHeight/2),random(w),random(h));
  pop();
  }

// Creo la funzione per i quadrati.
  for(let i=0; i < amount2; i++){
    push()
    fill(random(colori));
    rotate(random(rotation))
    square(random(-windowWidth/2,windowWidth/2),random(-windowHeight/2,windowHeight/2),random(q));
    pop()
  }
}
