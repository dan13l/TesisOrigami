let c= [];
let x= [0,0];
let y= [0,0];
let u= 50;
let vr= [];
let inicioR =[];
let m= [];
let cantidad = 4; //cantidad de vectores circulares
let simetria = 5;
let uno=false;
let click=false;
let residuo=1;
function setup() {
  let myCanvas = createCanvas(710, 710);
  myCanvas.parent('animacion');
  residuo = floor(random(1,simetria));
  for (let i = 0; i < cantidad; i ++) {
      c[i]=createVector(u,0);
      inicioR[i]= floor(random(0,4));
      vr[i]=floor(random(-3,3))*simetria+residuo;
      m[i]=floor(random(-2,2));
      c[i].rotate(inicioR[i]*PI/2);
  }
  //background(6,20,60);
  background(5,15,7);
  /*//curva misteriosa
  inicioR =[0,0,1];
  vr=[1,6,-14];
  m=[1,0.5, 0.333];*/
}

function draw() {
  let a=2*PI/90;
  x[0]=x[1];
  y[0]=y[1];
  x[1]=0;
  y[1]=0;
  for (let i = 0; i < cantidad; i ++) {
    c[i].rotate(vr[i]*(a/simetria));
    x[1]=x[1]+m[i]*c[i].x;
    y[1]=y[1]+m[i]*c[i].y;
  }
  if (uno === false){
    uno=true;
  } else {
    strokeWeight(2);
    stroke(256,14,120);
    translate(width/2, height/2);
    line(x[0],y[0],x[1],y[1]);
  }
  noStroke();
  fill(256);
  textSize(20)
  text("Simetria: " + str(simetria) + ", residuo: "+ str(residuo),10, height-70 );
  text("Coeficientes de rotacion: " + str(vr),10, height-50 );
  text("Magnitud: " + str(m),10, height-30);
  text("Inicio: " + str(inicioR),10, height-10 );
}

function mouseClicked() {
  if (click == false) {
    noLoop();
    click = true;
  } else {
    loop();
    x= [0,0];
    y= [0,0];
    residuo = floor(random(1,simetria));
    for (let i = 0; i < cantidad; i ++) {
        c[i]=createVector(u,0);
        inicioR[i]= floor(random(0,4));
        vr[i]=floor(random(-3,3))*simetria+residuo;
        m[i]=floor(random(-2,2));
        c[i].rotate(inicioR[i]*PI/2);
    }
    background(5,15,7);
    uno = false;
    click = false;
  }
  return false;
}
