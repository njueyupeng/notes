# Window对象

Window对象是客户端JavaScript程序的全局对象。本章介绍Window对象的属性和方法，这些属性定义了许多不同的API，但是只有一部分实际上和浏览器窗口相关。

## 1. 计时器
 
 1. **setTimeout()**和**setInterval()**可以用来注册在指定的时间之后单次或重复调用的函数因为它们收拾客户端JavaScript中重要的全局函数，所以定义为Window对象的方法，但作为通用函数，其实不会对窗口做什么事情。

2. **setTimeout()**返回一个值，这个值可以传递给**clearTimeout()**用于取消这个函数的执行。 **setInterval()**返回一个值，这个值可以传递给**clearInterval()**用于取消这个函数的执行。
    ```javascript
    function invoke(f, start, interval, end){
        if(!start) start = 0;
        if(arguments.length<=2){
            setTimeout(f,start);
        }else{
            setTimeout(repeat,start);
            function(){
                var h = setInterval(f,interval);
                if(end) setTimeout(function(){clearInterval(h);},end);
            }
        }
    }
    ```

3. 由于历史原因，setTimeout()和setInterval()的第一个参数可以作为字符串传入。如果这么做，那这个字符串会在指定的超时时间或者间隔之后进行求值（相当于执行eval()）。除前两个参数外，HTML5规范（除IE之外的浏览器）还允许setTimeout()和setInterval()传入额外的参数，并在调用函数时把这些参数传递进去。然而，如果需要支持IE的话，就不要应用此特性了。

>> 如果以0毫秒的超时时间来调用setTimeout(),那么指定的函数不会立刻执行。相反，会把它放到队列中，等到前面处于等待状态的时间处理程序全部执行完成后，再"立即"调用它。（jQuery的作者John Resig 曾写过一篇文章来解释这个"队列",详情请参照：http://ejohn.org/blog/how-javascript-timers-work）


## 2. 浏览器的定位和导航

Window对象的location属性引用的是Location对象，它表示该窗口中当前显示的文档的URL，并定义了方法来使窗口载入新的文档。

Document对象的location属性也引用到Location对象：
```javascript
    window.location === document.location //总是返回true
```

Document对象也有一个URL属性，是文档首次载入后保存该文档的URL
的静态字符串。如果定位到文档中的片段标识符（如#table-of-contents）,Location对象会做响应的更新，而document.URL属性缺不会改变。

### 2.1 解析URL

1. Window对象的location属性引用的是Location对象，它表示该窗口中当前显示的文档的URL。Location对象的href属性是一个字符串，后者包含URL的完整文本。Location对象的toString()方法返回href属性的值，因此在会隐式调用toString()的情况下，可以使用location代替location.href。