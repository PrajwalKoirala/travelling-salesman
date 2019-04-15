var a=[1,2,3,4,5]
var x,y;
function setup(){

}
function draw(){
  console.log(a);
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
}

function swap(a,i,j){
  let temp=a[i];
  a[i]=a[j];
  a[j]=temp;
  return a;
}
