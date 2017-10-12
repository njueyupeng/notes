var canvas = document.getElementById('demo01');
if(canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillRect(10,10,50,50);
    ctx.strokeRect(35,35,50,50);
    ctx.clearRect(35,35,25,25);
}

var ctx02 = document.getElementById('demo02').getContext('2d');
ctx02.lineWidth = 2;
ctx02.strokeRect(10,10,50,50);
ctx02.lineWidth = 1;
ctx02.strokeRect(60,60,50,50);

ctx02.fillStyle="red";
ctx02.fillRect(110,110,50,50);
ctx02.strokeStyle="blue";
ctx02.strokeRect(160,160,50,50);


var ctx03 = document.getElementById('demo03').getContext('2d');
var grad = ctx03.createLinearGradient(0,0,200,200);
grad.addColorStop(0,'red');
grad.addColorStop(0.5,'white');
grad.addColorStop(1,'blue');

ctx03.fillStyle=grad;
ctx03.fillRect(0,0,500,300);
ctx03.strokeRect(0,0,200,200)


var ctx04 = document.getElementById('demo04').getContext('2d');
var grad04 = ctx04.createRadialGradient(250,70,20,200,60,100);
grad04.addColorStop(0,'red');
grad04.addColorStop(0.5,'white');
grad04.addColorStop(1,'blue');

ctx04.fillStyle = grad04;
ctx04.fillRect(0,0,500,300);


var ctx05 = document.getElementById('demo05').getContext('2d');
ctx05.fillStyle = 'yellow';
ctx05.strokeStyle = 'blue';
ctx05.lineWidth = 4;

ctx05.beginPath();
ctx05.moveTo(10,10);
ctx05.lineTo(110,10);
ctx05.lineTo(110,120);
ctx05.closePath();
ctx05.fill()

ctx05.beginPath();
ctx05.moveTo(150,10);
ctx05.lineTo(200,10);
ctx05.lineTo(200,120);
ctx05.lineTo(190,120);
ctx05.lineTo(170,40);
ctx05.fill()
// ctx05.stroke();


var ctx06 = document.getElementById('demo06').getContext('2d');

ctx06.lineWidth = 10;
ctx06.lineJoin = 'round';
ctx06.lineCap = 'round';

ctx06.beginPath();
ctx06.strokeStyle = 'red';
ctx06.moveTo(250,100);
ctx06.lineTo(280,140);
ctx06.stroke();


ctx06.beginPath();
ctx06.strokeStyle = 'blue';
ctx06.moveTo(280,140)
ctx06.lineTo(220,140);
ctx06.stroke();
ctx06.strokeStyle = 'green';
ctx06.beginPath();
ctx06.moveTo(220,140)
ctx06.lineTo(250,100);
ctx06.stroke();
// ctx06.lineWidth = 0.1;
// var color = ['blue','red','green']
// setInterval(function(){
//     ctx06.beginPath();
//     ctx06.strokeStyle = 'green';
//     var x= Math.random()*500;
//     var y = Math.random()*300;
//     ctx06.moveTo(x,y)
//     ctx06.lineTo(x,y);
//     ctx06.stroke();  
// },10);



