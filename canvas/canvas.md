canvas是流元素

 - width
 - height
 - getContext()
 - fillRect(x,y,w,h)  绘制一个填充矩形 
 - clearRect(x,y,w,h)  清除矩形
 - strokeRect(x,y,w,h) 绘制空心矩形
 - lineWidth 获取或设置线条的宽度
 - fillStyle 
 - strokeStyle
 - lineJoin  线条与图形连接时的样式
 - createLinearGradient(x0,y0,x1,y1)  创建线性渐变  返回CanvasGradient对象
 - createRadialGradient(x0,y0,r0,x1,y1,r1)  创建线性渐变  返回CanvasGradient对象
 - addColorStop(<positon>,<color>) CanvasGradient的方法  给渐变的梯度线添加一种纯色 
 - beginPath()
 - moveTo(x,y)
 - lineTo(x,y)
 - closePath()
 - fill()
 - isPointInPath(x,y)
 - rect(x,y,w,h)
 - stroke()