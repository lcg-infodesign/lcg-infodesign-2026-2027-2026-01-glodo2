let xMax = 600;
let yMax = 800;



// LINEE EFFETTO MOVIMENTO
function drawLines() {
  push();

    fill(0);
    strokeWeight(7);

    if(frameCount%2==0) {
      line(xMax/2+70, 200, xMax-100, 200);
      line(80, yMax/2, xMax/2-120, yMax/2);
    } else if (frameCount%3==0) {
      line(xMax/2-170, 170, xMax/2-70, 170);
      line(xMax/2+80, yMax/2, xMax-50, yMax/2);
    } else {
      line(xMax/2+100, yMax/2-60, xMax-140, yMax/2-60);
      line(xMax/2-200, yMax/2+50, xMax/2-120, yMax/2+50);
    }

    line(50, 130, xMax-50, 130);

  pop();
}


function setup() {
  createCanvas(xMax, yMax);
  frameRate(8);
  angleMode(DEGREES);
  rectMode(CENTER);
}


function draw() {
  background(179);

  drawLines();






// ASFALTO
push();

  for (let i=0; i < 51; i++){

    let circleX = 50+i*10
    let circleY = yMax-300;

    if(i%2==0){
      fill(0);
      ellipse(circleX, circleY, 12);
    } else {
    }
  }

pop();






// BRACCIO DX BIKER

  // braccio dx
push();
  fill(74, 229, 88);
  noStroke();
  translate(xMax/2, yMax/2);
  rotate(27);
  rect(-90, -125, 80, 15);
pop();






// MX

  // parti nere
  fill(0)


  // copertoni e manubrio
  circle(100, yMax/2-100, 90);
  circle(xMax/2-28, yMax/2+42, 90);
  circle(xMax/2-60, yMax/2-170, 20);


  //carene

  // parafango anteriore
  triangle(120, yMax/2-185, xMax/2-100, yMax/2-165, xMax/2-135,  yMax/2-150);

  // telaio
  triangle(xMax/2-75, yMax/2-150, xMax/2-60, yMax/2-20, xMax/2-130,  yMax/2-125);
  triangle(xMax/2-60, yMax/2-90, xMax/2-52, yMax/2-20, xMax/2+20,  yMax/2-32);
  triangle(xMax/2+42, yMax/2-5, xMax/2-20, yMax/2-18, xMax/2+25,  yMax/2-25);

  // parafango posteriore
  triangle(xMax/2-142, yMax/2-90, xMax/2-105, yMax/2-70, xMax/2-137,  yMax/2-120);

  // sospensioni anteriori
push();
  translate(xMax/2, yMax/2);
  rotate(-25);
  rect(-40, -180, 90, 10);
pop();


push();  

  // parti grigie
  fill(179);


  // cerchi
  circle(100, yMax/2-100, 60);
  circle(xMax/2-28, yMax/2+42, 60);
  
pop();






push();

// BIKER

  fill(74, 229, 88);
  noStroke();

  
  // addome
  push();
    translate(xMax/2, yMax/2);
    rotate(10);
    rect(0, -110, 40, 64);
  pop();


  // coscia
  push();
    translate(xMax/2, yMax/2);
    rotate(23);
    rect(-43.5, -66, 91, 30);
  pop();


  // gamba (propriamente detta)
  push();
    translate(xMax/2, yMax/2);
    rotate(-23);
    rect(-49.7, -110, 90, 21);
  pop();


  // piede
  push();
    translate(xMax/2, yMax/2);
    rotate(-113);
    rect(119.3, -88, 35, 14);
  pop();


  // braccio sx
  push();
    translate(xMax/2, yMax/2);
    rotate(-25);
    rect(90, -62, 15, 85);
  pop();


  // testa
  circle(xMax/2+37, yMax/2-167, 40)

pop();






// TESTO

  push();
  fill(0);
    textFont('Inter');
    textStyle(BOLD);
    textSize(96);
    text('fastlife.', 50, 100);
  pop();

  push();
    fill(0);
    textFont('Inter');
    textStyle(BOLD);
    textSize(24);
    text('2026, Lodovico Chiaveri.', 50, yMax-50);
  pop();

}
