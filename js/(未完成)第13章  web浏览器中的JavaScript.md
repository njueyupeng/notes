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

3. Window对象中其中一个最重要的属性是document，它引用Document对象，后者表示显示在窗口中的文档。Document对象有一些重要的方法，比如**getElementById()**,可以基于元素id属性的值返回单一的文档元素（表示HTML标签的一对开始/结束标记，以及它们之间的所有内容）：
    ```javascript
    vat timestamp = document.getElementById('timestamp');
    ```

    >>JavaScript程序可以通过Document对象和它包含的Element对象遍历和管理文档内容。它可以通过操作CSS样式和类，修改文档内容的呈现。并且可以通过注册适当的事件处理程序来定义文档元素的行为。内容、呈现和行为的组合，叫做动态HTML或DHTML。