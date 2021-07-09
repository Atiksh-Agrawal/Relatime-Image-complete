function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(700,400);
    video = createCapture(VIDEO);
    video.hide()

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-ixvGUCsp/model.json" ,modelLoaded);
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video ,gotresult);
}

function modelLoaded(){
    console.log("model Loaded")
}

function gotresult(error,results){
    
    if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("accuracy_result").innerHTML = results [0].confidence;
    document.getElementById("object_result").innerHTML = results [0].label;
}
}