var drawing=[];
var currentPath=[];
var isDrawing = false;
function setup() {
  canvas = createCanvas(1000, 600); 
  database= firebase.database();
  canvas.mousePressed(start);
  canvas.mouseReleased(end);

}

function draw() {
  background(230,230,230);

  if(isDrawing){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  
  strokeWeight(4);
  noFill();
  stroke("black");
 
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
  var button = createButton('Save');
  button.position(900,100);
  var clear = createButton('clear');
  clear.position(900,50);
  button.mousePressed(() => {
    saveDrawing();
    
});

}
function start(){
  isDrawing = true;
  currentPath=[];
  drawing.push(currentPath);
}

function end(){
  isDrawing = false;
}

function saveDrawing(){
  var ref = database.ref('drawing');
  var data={
      drawing :drawing
  }
}

function clear()
{
  if(clear.mousePressed)
  {
    drawing=[];
  }
}
