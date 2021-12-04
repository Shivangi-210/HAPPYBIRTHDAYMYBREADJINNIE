camera = document.getElementById("cam");
 Webcam.set({
   width : 360 , 
   height : 250 , 
   image_format : "png" ,
   png_qaulity : 90
 });
Webcam.attach("cam");
 function TheFeels(){
   Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';});}
     console.log("ml5version " , ml5.version);

     classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YcpVPUoiL/model.json" , Hip);

     function Hip(){
         console.log("Model loaded! It is now ready to use ! ENJOYY :> ALSO LISTEN TO KPOP ITS THE BEST!");
     }