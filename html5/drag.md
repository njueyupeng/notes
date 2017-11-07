

# HTML5拖放（drag and drop）

HTML5添加了对拖放（drag and drop）的支持。

## 1.创建来源项目

我们通过 **draggable** 属性告诉浏览器哪些元素可以拖动，这个属性共有三个值：

 - true  此元素能被拖动
 - false  此元素不能被拖动
 - auto 浏览器自主决定

 **draggable** 的默认值为 **auto**,通常默认都是可拖动的。

 ## 2.处理拖动事件

 下面是用于被拖动元素的事件：

1. dragstart —— 在元素开始被拖动时触发
2. drag  —— 在元素被拖动时反复触发
3. dragend —— 在拖动操作完成时触发

```html
<body>
    <div id="src">
        <img draggable="true" id="bnana" src="1.jpg" alt="banna">
        <img draggable="true" id="cherried" src="1.jpg" alt="cherry">
        <img draggable="true" id="apple" src="3.jpg" alt="apple">
        <div id="target">
            <p id="msg"> Drop Here</p>
        </div>
    </div>
    <script>
        var src = document.getElementById('src');
        var target = document.getElementById('target');
        var msg = document.getElementById('msg');

        src.ondragstart = function(e){
            e.target.classList.addd('dragged');
        }
        src.ondragend = function(e){
            e.target.classList.remove('dargged');
            msg.innerHTML = "Drop Here";
        }
        src.ondrag = function(e){
            msg.innerHTML = e.target.id;
        }
    </script>
</body>
```

## 3.创建释放区

要让某个元素成为释放区，我们需要处理 **dragenter** 和 **dragover** 事件。它们是针对释放区的其中两个事件。下面是针对释放区的事件集合：

|名称|说明|
|:----:|:----:| 
|dragenter|当被拖动元素进入释放区所占据的屏幕空间时触发|
|dragover|当被拖动元素在释放区内移动时触发|
|dragleave|当被拖放元素没有放下就离开拖放区时触发|
|drop|当被拖动的元素在释放区里被释放时触发|

使用一个全局变量作为被拖动元素和释放区之间的桥梁：

```html
<div id="src">
    <img draggable="true" id="bnana" src="1.jpg" alt="banna">
    <img draggable="true" id="cherried" src="1.jpg" alt="cherry">
    <img draggable="true" id="apple" src="3.jpg" alt="apple">
    <div id="target">
        <p id="msg"> Drop Here</p>
    </div>
</div>
<script>
    var src=document.getElementById('src');
    var target = document.getElementById('target');
    var msg = document.getElementById('msg');

    var draggedID;

    target.ondragenter = handleDrag;
    target.ondragover = handleDrag;

    function handleDrag(e){
        e.preventDefault();
    }

    target.ondrop = function(e){
        var newElem = document.getElementById(darggedId).cloneNode(false);
        target.innerHTML='';
        target.appendChild(newElem);
        e.preventDefault();
    }

    src.ondragstart = function(e){
        draggedID = e.target.id;
        e.target.classList.add('dargged');
    }

    src.ondragend = function(e){
        var elems = document.querySelectorAll('.dragged');
        for(var i = 0;i<elems.length;i++){
            elems[i].classList.remove('dargged');
        }
    }
</script>

```

>> 在这个例子里，我阻止了drop事件的默认行为。如果不这么做，浏览器就可能会做出一些出乎意料的事。举个例子，在这种情况下，Firefox会关闭网页，转而显示被拖动的img元素的src属性所引用的图像。

## 4.使用DataTransfer对象

与拖放操作所触发的事件同时派发的对象是DragEvent，它派生于MouseEvent。DragEvent对象定义了Event与MouseEvent对象的所有功能，并额外增加了以下属性：

DragEvent对象定义的属性：
|名称|说明|返回|
|:---:|:---:|:---:|
|dataTranfer|返回用于传输数据到释放区的对象|DataTransfer|

DataTransfer对象定义的属性：
|名称|说明|返回|
|:---:|:---:|:---:|
|types|返回数据的格式|字符串数组|
|getData(<format>)|返回指定格式的数据|字符串|
|setData(<format>,<data>)|设置指定格式的数据|void|
|clearData(<format>)|移除指定格式的数据|void|
|files|返回已被拖动文件的列表|FileList|

```html
<div id="src">
    <img draggable="true" id="bnana" src="1.jpg" alt="banna">
    <img draggable="true" id="cherried" src="1.jpg" alt="cherry">
    <img draggable="true" id="apple" src="3.jpg" alt="apple">
    <div id="target">
        <p id="msg"> Drop Here</p>
    </div>
</div>
<script>
    var src = 
</script>
```