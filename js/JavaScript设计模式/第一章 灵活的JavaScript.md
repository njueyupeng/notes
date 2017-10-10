# 灵活的语言——JavaScript

需求：实现一个验证表单功能的任务，内容不多，仅需要验证用户名、邮箱、密码等。

## 1.1 入职第一天
```javascript
function checkName() {
    //验证用户名
}
function checkEmail() {
    //验证邮箱
}
function checkPassword() {
    //验证密码
}
```

>> 缺点：创建了很多全局变量，团队开发中，如果别人也定义了同样的方法就会覆盖掉原有的功能，如果定义了很多方法，这种互相覆盖的问题很不容易被察觉。

>> 解决：可以将他们放在一个变量里保存，可以减少覆盖和被覆盖的风险，一旦被覆盖，所有功能都会失效，这种现象很明显，容易被察觉到。

## 1.2 用对象收编变量

```javascript
var checkObject = {
    checkName : function() {
        //验证姓名
    },
    checkEmail : function(){
        //验证邮箱
    },
    checkPassword : function() {
        //验证密码
    }
}
checkObject.checkName();
```

## 1.3 对象的另外一种形式

```javascript
var checkObject = function(){};
checkObject.checkName = function(){};
checkObject.checkEmail = function(){};
checkObject.checkPassword = function(){};
```
>> 缺点：虽然满足了需求，但是当别人想用这个对象方法时就有写麻烦了，因为对象不能复制一份，或者这个对象类在用**new**关键字创建新的对象时，新创建的对象是不能继承这些方法的。

## 1.4 真假对象

```javascript
var CheckObject = function() {
    return {
        checkName:function(){},
        checkEmail:function(){},
        checkPassword:function(){}
    }
}

var  a = CheckObject();
a.checkEmail();
```
当每次调用这个函数的时候，把我们之前写的对象返回回来，当别人每次调用这个函数时，都返回一个新对象，这样每个人在使用时就互相不影响了。

>> 缺点：虽然通过创建了新对象完成了我们的需求，但是它不是一个真正意义上类的创建方式，并且创建的对象a和对象CheckObject没有任何关系。

## 1.5 类也可以
```javascript
var CheckObject = function(){
    this.checkName = function(){};
    this.checkEmail = function(){};
    this.checkpassword = function(){};
}

var a = new CheckObject();
a.checkName();
```
>> 缺点：把所有的方法放在函数的内部，通过this定义的，所以每一次通过new关键字穿件新对象的时候，新创建的对象都会对类的this上的属性进行复制。所以这些新创建的对象都会有自己的一套方法，然而有时候这么做造成的消耗是很奢侈的。
## 1.6 一个检测类
```javascript
var CheckObject = function(){};
CheckObject.prototype.checkName = function();
CheckObject.prototype.checkEmail = function();
CheckObject.prototype.checkPassword = function();
```
或者：
```javascript
var CheckObject = function(){};
CheckObject.prototype = {
    checkName:function(){},
    checkWEmail:function(){},
    checkPassword:function(){}
}
var a=  new CheckObject();
a.checkName();
a.checkEmail();
a.checkPassword();
```
>> 缺点：调用了三个方法，对象a书写了三遍，可以在书写的方法末尾将当前的对象返回。

## 1.7 方法还可以这样用
```javascript
var CheckObject = {
    checkName:function (){
        //验证姓名
        return this;
    },
    checkEmail:function(){
        return this;
    },
    checkPassword:function(){
        return this;
    }
}

CheckObject.checkName().checkEmail().checkPassword();
```
或者：
```javascript
var CheckObject = function(){};
CheckObject.prototype = {
    checkName:function(){ return this;},
    checkWEmail:function(){ return this;},
    checkPassword:function(){ return this;}
}
var a=  new CheckObject();
a.checkName().checkEmail().checkPassword();
```

## 1.8 函数的祖先

如果想给每个函数都添加一个检测邮箱的方法可以这样做：
```javascript
Function.prototype.checkEmail = function();
var f = function (){};
f.checkEmail;
var f2 = new Function();
f2.checkEmail();
```
但是上述做法污染了原生对象Function，所以别人创建的函数也会被污染，造成不必要的开销，可以抽象出一个统一的添加方法的功能方法：
```javascript
Function.prototype.addMethod = function(name,fn){
    this[name] = fn;
}
var methods = new Function();
methods.addMethod('checkName',function(){});
methods.checkName();
```
