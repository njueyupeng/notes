# （一）什么是 Promise

## 1.什么是Promise

Promise是抽象异步处理对象以及对其进行各种操作的组件。

如果说到基于Javascript的异步处理，我想大多数都会想到利用回调函数：
```javascript
//使用了回调函数的异步处理
getAsync('file.txt',function(error,result){
    if(error){
        throw error
    }
    //do something
})
```

Node.js等则规定在Javascript的回调函数的第一个参数为 Error 对象，这也是它的一个惯例。

像上面这样基于回调函数的异步处理如果统一参数使用规则的话，写法也会很明了。但是，这也仅是编码规约而已，及时采用不同的写法也不会出错。

而Promise则把类似的异步处理对象和处理规则进行规范化，并按照采用统一的接口来编写，而采取规定之外的写法都会出错。

下面是使用了Promise进行异步处理的一个例子：

```javascript

var promise = getAsyncPromise('fileA.txt');//返回promise对象
promise.then(function(result){
    //获取文件成功时的处理
}).catch(function(error){
    //获取文件失败时的处理
});
```
我们可以向这个预设了抽象化异步处理的promise对象，注册这个promise对象执行成功时和失败时相应的回调函数。

这个回调函数的方式有什么不同呢？在使用promise进行异步处理的时候，我们必须按照接口规定的方法编写处理代码。

也就是说，处promise对象规定的方法（这里的 then 或 catch）以外的方法都是不可以使用的，而不会像回调函数方式那样可以自己自由的定义回调函数的参数，而必须严格遵守固定，统一的方式来编写代码。

这样，基于Promise的统一接口的做法，就可以形成基于接口的各种各样的异步处理模式。


## 2.Promise简介

 Constructor

Promise类似于 XMLHttpRequest，从构造函数Promise来创建新promise对象作为接口：
```javascript
var promise = new Promise(function(resolve,reject){
    //异步处理
    //处理结束后调用resolve或reject
})
```
 Instance Method

对通过new生成的promise对象为了设置其值在resolve(成功)/reject(失败)时调用的回调函数可以使用peomise.then()实例方法。
```javascript
promise.then(onFulfilled,onRejected);
```
两个参数都是可选参数。如果只想对异常进行处理，可以采取以下方式：
```javascript
promise.then(undefined,onRejected);
```
不过这种情况下，promise.catch(onRejected)是更好的选择：
```javascript
promise.catch(onRejected)
```

 Static Method

像Promise这样的全局对象还拥有一些静态方法。

包括Promise.all()还有Promise.resolve()等在内，主要都是一些对Promise进行操作的辅助方法。

























```