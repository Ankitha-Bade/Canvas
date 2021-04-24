var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.MoveTo(0,300);
context.lineTo(400,300);
var lGradient = context.createLinearGradient(0,0,400,0);
lGradient.addColorStop(0,"#0000FF");
lGradient.addColorStop(1,"#5F9Ad1");
context.fillStyle=lGradient;
context.strokeStyle="blue";
context.fill();
context.stroke();

context.beginPath();
context.MoveTo(155,150);
context.lineTo(220,270);
context.lineTo(90,270);
context.lineTo(155,150);
context.fillStyle="white";
context.strokeStyle="white";
context.fill();
context.stroke();

context.beginPath();
context.MoveTo(145,110);
context.lineTo(145,140);
context.lineTo(145,125);
context.closePath();
context.fillStyle="red";
context.strokeStyle="red";
context.fill();
context.stroke();

context.rect(70,280,170,40);
context.fillStyle="darkbrown";
context.strokeStyle="darkbrown";
context.fill();
context.stroke();

context.rect(150,100,10,180);
context.fillStyle="brown";
context.strokeStyle="brown";
context.fill();
context.stroke();

context.beginPath();
context.arch(330,70,45, 0,2*Math.PI,true);
var rGradient = context.createRadialGradient(330,70,10,330,70,45);
rGradient.addColorStop(0, "#FF8C00");
rGradient.addColorStop(1,"#FFFF00");
context.fillStyle=rGradient;
context.strokeStyle="yellow";
context.fill();
context.stroke();
