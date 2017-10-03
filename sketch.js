function setup() {
  createCanvas(800,600)
  background(59, 18, 39)
}

function draw() {
  
  stroke(230, 179, 202)
  strokeWeight(10);
  
  //arms
  line(400,200,550,250)
  line(400,200,550,300)
  line(400,200,250,250)
  line(400,200,250,300)
  //
  
  stroke(153, 51, 102)
  strokeWeight(7);
  
  //antennas
  line(400,150,450,40)
  line(400,150,475,75)
  //
  
  noStroke();
  
  fill(102, 0, 51)
    ellipse(400,400,100,130)//pedestal
   
  fill(153, 51, 102)
    ellipse(400,300,160,280)//body
    
  fill(102, 0, 51)
    ellipse(310,150,25,50)//ears
    ellipse(490,150,25,50)//ears
   
  fill(102, 0, 51)
    ellipse(400,120,120,100)//head
    
  fill(230, 179, 202)
    ellipse(400,150,180,120)//face
  
  fill(243, 216, 229)
    rect(325,130,150,30,20)//eyes
    
  fill(210, 121, 163)
    rect(350,225,100,125,10)//door
    
  fill(230, 179, 202)
    ellipse(435,300,20,20)//button
    ellipse(435,330,20,20)//button
  
}