[TOC]
# css选择器

## 1. css标准化
浏览器厂商前缀

|浏览器|前缀|
|:---:|:---:|
|Chrome、safari|-webkit-|
|Opera|-o-|
|FireWork|-moz-|
|Internet Exploer|-ms-|


## 2. 盒模型
css的一个基本概念是**盒模型**(box model)。

可见元素会在页面中占据一个矩形区域，该区域就是元素的盒子（box）,由四部分构成：**外边距、边框、内边距、元素内容**。

元素盒子有两个内容是可见的：**内容和边框**。

## 3. 选择器总表
|序号|选择器|说明|css版本|
|:--:|:--:|:--:|:--:|
|1|*|选择所有元素|2|
|2|  < type\> |选取指定类型的元素|1|
|3|.class|选取指定类的元素|1|
|4|\#id|选取id属性为指定值的元素|1|
|5|[attr]|选取定义了attr属性，且属性值任意的元素|2|
|6|[attr="val"]|选择定义了attr属性，且属性值为val的元素|2
|7|[attr^="val"]|选择定义了attr属性，且属性值以val开头的元素|3|
|8|[attr$="val"]|选择定义了attr属性，且属性值以val结尾的元素|3|
|9|[attr*="val"]|选择定义了attr属性，且属性值包含val字符串的元素|3|
|10|[attr~="val"]|选择定义了attr属性，且属性值包含多个值，其中一个为val的元素|2|
|11|[attr\|="val"]|选择定义了attr属性，且属性值是以连字符分割的一串值，而第一个为val的元素|2|
|12|<选择器>,<选择器>|同时匹配所有选择器的元素|1|
|13|<选择器> <选择器>|目标元素为匹配第一个选择器的元素的后代，且匹配第二个选择器|1|
|14|<选择器> > <选择器>|目标元素为匹配第一个选择器的元素的直接后代，且匹配第二个选择器|2|
|15|<选择器> + <选择器>|目标元素为紧跟在匹配第一个选择器的元素之后，且匹配第二个选择器|2|
|16|<选择器> ~ <选择器>|目标元素跟在匹配第一个选择器的元素之后，且匹配第二个选择器|3|
|17|::first-line|选择块级元素文本的首行|1|
|18|::first-letter|选择块级元素文本的首字母|1|
|19|:before|在选取元素之前插入内容|2|
|20|:after|在选取元素之后插入内容|2|
|21|:root|选取文档中的跟元素|3|
|22|:first-child|选取元素的第一个子元素|2|
|23|:last-child|选取元素的最后一个子元素|3|
|24|:only-child|选取元素的唯一一个子元素|3|
|25|:only-of-type|选取属于父元素的特定类型的唯一子元素|3|
|26|:nth-chind(n)|选取父元素的第n个子元素|3|
|27|:nth-last-chind(n)|选取父元素的倒数第n个子元素|3|
|28|:nth-of-type(n)|选取父元素的特定类型的第n个子元素|3|
|29|:nth-last-of-type(n)|选取父元素的特定类型的倒数第n个子元素|3|
|30|:enabled|选取以启用的元素|3|
|31|:disabled|选取被禁用的元素|3|
|32|:checked|选取所有选中的复选框和单选框|3|
|33|:default|选取默认元素|3|
|34|:valid|选取给予输入验证的有效的input元素|3|
|35|:invalid|选取给予输入验证的无效的input元素|3|
|36|:in-range|选取别限定在指定范围之内的input元素|3|
|37|:out-of-range|选取别限定在指定范围之外的input元素|3|
|38|:required    :optional|根据是否允许使用reuqired属性选取input元素|3|
|39|:link|选取未访问的链接元素|1|
|40|:visited|选取用户已访问的链接元素|1|
|41|:hover|选取鼠标指针悬停在其上面的元素|2|
|42|:active|选取当前被用户激活的元素，这通常意味着用户即将点击该元素|2|
|43|:focus|选取获得焦点的元素|2|
|44|:not(<选择器>)|否定选择|3|
|45|:empty|选取不包含任何子元素或文本的元素|2|
|46|:lang(<语言>)|选取lang属性为指定值的元素|2|
|47|:target|选取URL片段标识符指向的元素|3|




## 4.选择器分类

### 1. 基础选择器

- 通用元素选择器
    ```css
    *{
        padding:0;
    }

    #container *{
        padding:0;
    }
    ```

    > 匹配所有的元素，会相当消耗浏览器资源。

- id选择器
    ```css
    #id-selector{
        padding:0;
    }
    ```

    >id选择器的优势是精准，高优先级，作为javascript钩子的不二选择。缺点是优先级太高，重用性差。

- 类选择器
    ```css
    .class-selector{
        padding:0;
    }
    ```
    > 类选择器，作用于一组元素。

- 标签选择器
    ```css
    p{
        padding:0;
    }
    ```
    > 标签选择器，使用标签选择器作用域作用域范围内的所有对应标签。优先级仅仅比*高。
    
### 2. 组合选择器

|序号|选择器|说明|css版本|
|:--:|:--:|:--:|:--:|
|1|<选择器>,<选择器>|同时匹配所有选择器的元素|1|
|2|<选择器> <选择器>|目标元素为匹配第一个选择器的元素的后代，且匹配第二个选择器|1|
|3|<选择器> > <选择器>|目标元素为匹配第一个选择器的元素的直接后代，且匹配第二个选择器|2|
|4|<选择器> + <选择器>|目标元素为紧跟在匹配第一个选择器的元素之后，且匹配第二个选择器|2|
|5|<选择器> ~ <选择器>|目标元素跟在匹配第一个选择器的元素之后，且匹配第二个选择器|3|
    

```css
li a{
    text-decoration:none;
}
```
> 后代选择器，用于选取X元素下所有匹配的子元素，无视层级。


```css
div#container > ul{
    border:1px solid black;
}

```

> 子选择器，只对X下的直接子集Y起作用，区别于后代选择器X Y。 

```css
ul+p{
    color:red;
}
```
> 相邻选择器，匹配ul后面的第一个p元素。



### 3. 属性选择器

|序号|选择器|说明|css版本|
|:---:|:---:|:---:|:---:|
|1|[attr]|选取定义了attr属性，且属性值任意的元素|2|
|2|[attr="val"]|选择定义了attr属性，且属性值为val的元素|2
|3|[attr^="val"]|选择定义了attr属性，且属性值以val开头的元素|3|
|4|[attr$="val"]|选择定义了attr属性，且属性值以val结尾的元素|3|
|5|[attr*="val"]|选择定义了attr属性，且属性值包含val字符串的元素|3|
|6|[attr~="val"]|选择定义了attr属性，且属性值包含多个值，其中一个为val的元素|2|
|7|[attr\|="val"]|选择定义了attr属性，且属性值是以连字符分割的一串值，而第一个为val的元素|2|

### 4. 伪类选择器

|序号|选择器|说明|css版本|
|:---:|:---:|:---:|:---:|
|1|:root|选取文档中的跟元素|3|
|2|:first-child|选取元素的第一个子元素|2|
|3|:last-child|选取元素的最后一个子元素|3|
|4|:only-child|选取元素的唯一一个子元素|3|
|5|:only-of-type|选取属于父元素的特定类型的唯一子元素|3|
|6|:nth-chind(n)|选取父元素的第n个子元素|3|
|7|:nth-last-chind(n)|选取父元素的倒数第n个子元素|3|
|8|:nth-of-type(n)|选取父元素的特定类型的第n个子元素|3|
|9|:nth-last-of-type(n)|选取父元素的特定类型的倒数第n个子元素|3|
|10|:enabled|选取以启用的元素|3|
|11|:disabled|选取被禁用的元素|3|
|12|:checked|选取所有选中的复选框和单选框|3|
|13|:default|选取默认元素|3|
|14|:valid|选取给予输入验证的有效的input元素|3|
|15|:invalid|选取给予输入验证的无效的input元素|3|
|16|:in-range|选取别限定在指定范围之内的input元素|3|
|17|:out-of-range|选取别限定在指定范围之外的input元素|3|
|18|:required    :optional|根据是否允许使用reuqired属性选取input元素|3|
|19|:link|选取未访问的链接元素|1|
|20|:visited|选取用户已访问的链接元素|1|
|21|:hover|选取鼠标指针悬停在其上面的元素|2|
|22|:active|选取当前被用户激活的元素，这通常意味着用户即将点击该元素|2|
|23|:focus|选取获得焦点的元素|2|
|24|:not(<选择器>)|否定选择|3|
|25|:empty|选取不包含任何子元素或文本的元素|2|
|26|:lang(<语言>)|选取lang属性为指定值的元素|2|
|27|:target|选取URL片段标识符指向的元素|3|

n的取值：

- 1,2,3,4,5,……
- 2n+1,2n,4n-1,……
- odd,even

```css
iput[type=radio]:checked{
    border:1px xolid black;
}
```
> checked伪类用来匹配处于选定状态的界面元素，如radio、checkbox。

```css
div:hover{
    background:#e3e3e3;
}
```
> :hover伪类设定当鼠标滑过时的元素的样式。上面代码中设定了div划过时的背景色。
    在ie6中，:hover只能用于链接元素。

```css
div:not(#container){
    color:blue;
}
```
> 否定伪类选择器用来在匹配元素时排除某些元素。

```css
li:nth-child(3){
    color:red;
}
```
> 这个伪类用于设定一个序列元素（比如li、tr）中的第n个元素（从1开始算起）的样式。
```css
li:nth-last-child(2){
    color:red;
}
```
> 从序列的最后一个元素算起

```css
ul:nth-of-type(3){
    border:1px solid black;
}
```
> 与:nth-child(n)类似，不同的是它匹配的不是某个序列元素，而是元素类型。

```css
ul:nth-last-of-type(n){
    border:1px solid black;
}
```
> 与:nth-of-type(n)功能类似，不同的是它从元素最后一次出现开始算起。

```css
ul>li:first-child{
    border-top:1px solid black;
}
```
> :first-child伪类用于匹配一个序列的第一个元素。经常用来实现一个序列的第一个元素或最后一个元素的上（下）边框。
```css
ul>li:last-child{
    border-bottom:none;
}
```
> 与:first-child类似，它匹配的是序列的最后一个元素。

```css
div p:only-child{
    color:red;
}
```
```html
<div><p>content</p></div>

<div>
    <p>content</p>
    <p>content</p>
</div>
```
> :only-child选择器，匹配div下有且仅有一个的p。如果div内有多个p标签，将不匹配。
```css
li:only-of-type{
    font-weight:bold;
}
```
> 这个伪类匹配的是，在它上级容器下只有它一个子元素，它没有相邻元素。上面代码匹配仅有一个列表项的列表元素。

>:first-of-type伪类与:nth-of-type(1)效果相同，匹配出现的第一个元素。
```html
<div>
    <p> My paragraph here. </p>
    <ul>
        <li> List Item 1 </li>
        <li> List Item 2 </li>
    </ul>
    <ul>
        <li> List Item 3 </li>
        <li> List Item 4 </li>
    </ul> 
</div>
```
在上面的html代码中，希望匹配list item2列表项

方案一：
```css
ul:first-of-type > li:nth-child(2){
    font-weight:bold;
}
```
方案二：
```css
p + ul li:last-child{
    font-weight:bold;
}
```
方案三：
```css
ul:first-of-type li:nth-last-child(1){
    font-weight:bold;
}
```

> 选择启用或禁用的元素
```css

<textarea>message</textarea>
<textarea disabled>message</textarea>

:enabled{...}
```
### 5. 伪元素选择器

|序号|选择器|说明|css版本|
|:---:|:---:|:---:|:---:|
|1|::first-line|选择块级元素文本的首行|1|
|2|::first-letter|选择块级元素文本的首字母|1|
|3|:before|在选取元素之前插入内容|2|
|4|:after|在选取元素之后插入内容|2|

```css
a:before{
    content:"message"
}
a:after{
    content:"message"
}
```


## 5.问题

### (1)id和class选择器的使用场景

- id：指定标签的唯一标识。根据提供的唯一id号，快速获取标签对象。
- class：指定标签的类名。CSS操作，把一些特定样式放到一个class类中，需要此样式的标签，可以在添加此类。


### (2)选择器优先级以及复杂场景的优先级

从高到低分别是:
1. 在属性后面使用!important会覆盖页面内任何位置定义的元素样式
2. 作为style属性写在元素标签上的内联样式
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器选择器

对于复杂的情况，例如CSS规则由多个选择器组成：
```css
#test p.class1{...}
#test .class1.class2{...}
```
要计算上述复杂场景的优先级，需要做简单的加法运算，id选择器的的权值为1000，class选择器的权值为100，标签选择器的权值为10，加起来谁的值大谁的优先级高。可得上述第二条的优先级比较高。

另外一种情况：
```css
#parent p.class1{...}
#div #child.class1{...}

<div id="parent">
    <p id="child" class="class1">
        Text
    </p>
</div>
```
权值高的选择器作用的越具体优先级越高。第二条优先级比较高。

如果两个选择器权值就是一样，则后面的覆盖前面的：
```css
div{color:#333}
div{color:#666}
```
### (3)a:link, a:hover, a:active, a:visited 的顺序 以及 原因？
  
  - a:link
     
     用来定义超链接被访问前的样式
  
  - a:visited
     
     用来定义超链接被访问后的样式
  
  - a:link
     
     用来定义鼠标放到超链接上，但鼠标键未被按下时的样式
  
  - a:link
     
     用来定义鼠标放到超链接上，并被按下时的样式

     正确顺序： a:link、a:visted、a:hover、a:active(   <i style="font-size:20px"><span style="color:red">l</span>o<span style="color:red">v</span>e,<span style="color:red">ha</span>te</i>   )

     让超链接访问后和访问前的颜色不同且访问后仍保留hover和active效果

     原因：
     - 鼠标经过的“未访问链接”可应用a:link、a:hover、a:active 这三种伪类选择器来定义样式，因为后面的样式会覆盖前面的样式，所以a:hover应放在a:link的后面，a:active放在最后。
     - 鼠标经过的“已访问链接”可应用a:visited、a:hover、a:active这三种类选择器来定义样式，因为后面的样式会覆盖前面的样式，所以a:hover应放在a:hovor的后面，a:active放在最后。

        
        所以说，a:hover定义一定要放在a:link、a:visited的后面，a:active 放在最后。

### (4)css选择器的解析顺序和原因

![image](https://segmentfault.com/img/bVc9NH/view) 

匹配规则：.mod-nav h3 span

假如从左往右匹配：过程是：从 .mod-nav 开始，遍历子节点 header 和子节点 div，然后各自向子节点遍历。在右侧 div 的分支中，最后遍历到叶子节点 a ，发现不符合规则，需要回溯到 ul 节点，再遍历下一个 li-a，假如有 1000 个 li，则这 1000 次的遍历与回溯会损失很多性能。

再看看从右至左的匹配：先找到所有的最右节点 span，对于每一个 span，向上寻找节点 h3，由 h3再向上寻找 class=mod-nav 的节点，最后找到根元素 html 则结束这个分支的遍历。

很明显，两种匹配规则的性能差别很大。之所以会差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点）；而从左向右的匹配规则的性能都浪费在了失败的查找上面。


### (5)为什么相邻兄弟选择器只能选择后面的元素？

> 浏览器解析HTML文档，是从前往后，由外及里的。如果css相邻选择器支持选择前面的元素，那么浏览器必须等到后面的元素加载完毕才能渲染HTML文档，渲染速度会大大减慢，浏览器出现长时间白屏。

### (6)为什么不支持父级选择器

    同上

## 6.css优化
优化，就是想办法让浏览器在匹配元素的时候尽可能少的查找


- 不要在id选择器前面使用标签名
- 不要在class选择器前使用标签名
- 尽量少使用层级关系
- 使用class代替层级关系
 