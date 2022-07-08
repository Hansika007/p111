Webcam.set({
    height : 300 ,
    width :350 ,
    image_format : 'png' ,
    png_quality : 100
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHtml = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log ('the ml5 version is ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CDqqjoidI/model.json' , modelLoaded);

function modelLoaded()
{
    console.log('model is Loaded !!')
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;              
    var utterThis = new 
    SpeechSynthesisUtterance(speak_data_1 + 
    speak_data_2);
    synth.speak(utterThis);
    }