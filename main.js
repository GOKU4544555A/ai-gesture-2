function setup(){
canvas=createCanvas(450,450)
canvas.position(560,150)
video=createCapture(VIDEO)
video.size(450,400)
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
function modelLoaded(){
console.log("model is loaded")
}
function draw(){
background("red")
fill("red")
stroke("black")
text("Subcribe to probot goku plays on yt",400,100)
}