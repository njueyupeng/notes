[!toc]

# Web浏览器中的JavaScript

## 1. 客户端JavaScript

1. Window对象是所有客户端JavaScript特性和API的主要接入点，它表示Web浏览器的一个窗口或窗体，并且可以用标识符**window**来引用它。Window对象定义了一些属性，比如，指代Location对象的location属性，Location对象指定当前显示在窗口中的URL，并允许脚本王窗口里载入新的URL：
```javascript
    //设置location属性，从而跳转到新的web页面
    window.location = "http://www.baidu.com/";
```

2. Window对象还定义了一些方法，比如**alert（）、setTimeout**：
```javascript
    setTimeout(function(){alert('hello');},2000);
```
    注意上面的代码并没有显式地使用window属性。在客户端JavaScript中，Window对象也是全局对象。这意味着Window对象处于作用链的顶部，它的属性和方法实际上是全局变量和全局函数。Window对象有一个引用自身的属性，叫做window
    。如果需要引用窗口对象本身，可以使用这个属性，但是如果只是想要引用全局窗口的属性，通常并不需要用到window。