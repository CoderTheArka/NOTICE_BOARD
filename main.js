difference = 0;
rightWristX = 0;
leftWristX = 0;
font_size = 20;
function setup(){
    video = createCapture(VIDEO);
    video.size(450,450);
    poseNet = ml5.poseNet(video , ModelLoaded);
    poseNet.on('pose' , gotResults);
    
    }
    function ModelLoaded(){
        console.log("SYSTEM HAS STARTED MODEL POSE NET LOADED.")
    }
    
    function gotResults(results , error){
      if (results.length > 0){
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
      if (difference > 220 && difference < 225){
      font_size = font_size + 0.5
      document.getElementById("get_info").style.fontSize = font_size + "px";
      }else if(difference < 100){
      font_size = font_size - 0.5
      document.getElementById("get_info").style.fontSize = font_size + "px";
      }else{

      }
      console.log(leftWristX + "" , rightWristX + "" , difference);

       }else if(error){
        console.error(error);
       }else{

       }
    }
