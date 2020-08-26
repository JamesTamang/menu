var content = document.getElementById("full");
var button = document.getElementById("but");

button.onclick=function(){
    if(content.className=="on"){
        content.className="";
        button.innerHTML="More";
    }
    else{
        content.className="on";
       button.innerHTML="Less";
    }
    }

var content1 = document.getElementById("full1");
var button1 = document.getElementById("but1");

button1.onclick=function(){
    if(content1.className=="on"){
        content1.className="";
        button1.innerHTML="More";
    }
    else{
        content1.className="on";
       button1.innerHTML="Less";
    }
    }

var content2 = document.getElementById("full2");
var button2 = document.getElementById("but2");

button2.onclick=function(){
    if(content2.className=="on"){
        content2.className="";
        button2.innerHTML="More";
    }
    else{
        content2.className="on";
       button2.innerHTML="Less";
    }
    }

var content3 = document.getElementById("full3");
var button3 = document.getElementById("but3");

button3.onclick=function(){
    if(content3.className=="on"){
        content3.className="";
        button3.innerHTML="More";
    }
    else{
        content3.className="on";
       button3.innerHTML="Less";
    }
    }
