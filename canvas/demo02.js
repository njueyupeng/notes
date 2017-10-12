var ctx = document.getElementById('canvas').getContext('2d');

ctx.fillStyle='green';
var x = 100,y = 155,w=50,h=10;

ctx.fillRect(x,y,w,h);
drawLine(ctx,x+w,y+h/2,x+200,y-100);
drawLine(ctx,x+w,y+h/2,x+200,y);
drawLine(ctx,x+w,y+h/2,x+200,y+100);
drawRect(ctx,x+200,y-100-h/2,w,h);
drawRect(ctx,x+200,y-h/2,w,h);
drawRect(ctx,x+200,y+100-h/2,w,h);
function drawLine(ctx,x0,y0,x1,y1){
    ctx.lineWidth = 1;
    ctx.strokeStyle='red';
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
}
function drawRect(ctx,x,y,w,h){
    ctx.fillRect(x,y,w,h);
    // ctx.clear();
}