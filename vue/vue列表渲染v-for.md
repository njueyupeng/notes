# 列表循环v-for

在vue模板语法中，我们使用**v-for**指令对列表进行渲染，**v-for**指令需要**item in items**形式的特殊语法。**items**指代需要循环的数组，item表示数组元素迭代的别名。

## 基本用法
```html
<ul id="example-1">
    <li v-for="item in items">
     {{ item.name }}
    </li>
</ul>
```
```js
var example1 = new Vue({
    el:'example-1',
    data:{
        items:[
            {name:'Foo'},
            {name:'Bar'}
        ]
    }
});
```
结果：

![](http://otja7p1i5.bkt.clouddn.com/17-8-24/38680372.jpg)


## 索引

**v-for**支持一个可选的第二个参数，当做当前的索引

```html
<ul>
    <li v-for="(item, index) in items">
        {{index}}-{{item.name}}
    </li>
</ul>
```
```js
var example1 = new Vue({
    el:'example-1',
    data:{
        items:[
            {name:'Foo'},
            {name:'Bar'}
        ]
    }
});
```
结果：

![](http://otja7p1i5.bkt.clouddn.com/17-8-24/74474530.jpg)

> 索引值index是从0开始的。

## Template **v-for**

如同 **v-if** 模板，你也可以用带有**v-for**的 \<template> 标签来渲染多个元素块。
```html
<ul>
    <template v-for="item in items">
        <li>{{item.msg}}</li>
        <li class="divider"></li>
    </template>
</ul>
```

## 对象迭代

你也可以用**v-for**通过一个对象的属性来迭代。
```html
<ul id="repeat-object" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
```
```js
new Vue({
  el: '#repeat-object',
  data: {
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
})
```
结果：

![](http://otja7p1i5.bkt.clouddn.com/17-8-24/67216428.jpg)

你也可以提供第二个的参数为键名：
```html
<div v-for="(value, key) in object">
  {{ key }} : {{ value }}
</div>
```
第三个参数为索引：

```html
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }} : {{ value }}
</div>
```

> 在遍历对象时，是按Object.keys()的结果进行遍历，但是不同保证它的结果在不同的JavaScript引擎下是一致的。
