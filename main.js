var city=[];
var number=7;
var best,x,y;
var bestway=[];
var order=[];
var count=0;
function setup(){
  createCanvas(600,800);
  for(let i=0; i<number; i++){
    city[i]=new vector(random(width),random(height/2));
  }
  for(let i=0; i<number; i++){
    order[i]=i;
  }
  best=calculateDistance(city,order);
  bestway=order.slice();
}

function draw(){
  count++;
  var current=calculateDistance(city,order);
  if(current<best){
    best=current;
    bestway=order.slice();
  }
  background(100,125,140);
  for(let i=0; i<city.length; i++){
    fill(0);
    noStroke();
    ellipse(city[order[i]].x,city[order[i]].y,5);
  }
  beginShape();
  noFill();
  strokeWeight(1);
  stroke(0);
  for(let i=0; i<city.length; i++){
    vertex(city[order[i]].x,city[order[i]].y);
  }
  endShape();

  for(let i=0; i<bestway.length; i++){
    strokeWeight(2);
    fill(255);
    ellipse(city[bestway[i]].x,city[bestway[i]].y+400,10);
  }

  beginShape();
  noFill();
  strokeWeight(2);
  stroke(244,99,15);
  for(let i=0; i<bestway.length; i++){
    vertex(city[bestway[i]].x,city[bestway[i]].y+400);
  }
  endShape();
  console.log(best);
  order=changeOrder(order);
  var totalway=factorial(number);
  var percent=ceil(count/totalway*100);
  fill(255)
  stroke(0);
  text(percent+"% completed",490,20);
}


function changeOrder(a){
  x=null;
  for(let i =0; i<a.length-1; i++){
    if(a[i]<a[i+1]){
      x=i;
    }else{
      continue;
    }
  }
  if(x==null){
    noLoop();
  }
  for(let i=x; i<a.length;i++){
    if(a[x]<a[i]){
      y=i;
    }
  }
  a=swap(a,x,y);
  var b = a.splice(x+1);
  b.reverse();
  a=a.concat(b);
  return a;
}

function calculateDistance(a,b){
  let sum=0;
  for(let i=0; i<a.length-1;i++){
    let d= dist(a[b[i]].x,a[b[i]].y,a[b[i+1]].x,a[b[i+1]].y);
    sum+=d;
  }
  return sum;
}

function swap(a,i,j){
  let temp=a[i];
  a[i]=a[j];
  a[j]=temp;
  return a;
}

function factorial(a){
  if(a==1){
    return 1;
  } else{
    return a * factorial(a-1);
  }
}
