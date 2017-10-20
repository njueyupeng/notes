# Vue

## 1. Vue实例
1. 创建
```javascript
    var vm = new Vue({
        //option
    });
```

2. 当一个vue实例被创建时，他向Vue的响应式系统中加入了其**data**对象中能找到的所有的属性。当这些属性的值发生改变时，试图将会产生"响应"，即匹配更新为新的值。

3. 除了data属性，Vue实例暴露了一些有用的实例属性与方法。他们都有前缀$,以便与用户定义的属性区分开来。例如:

```javascript
var data = {a:1};
var vm = new Vue({
    el:'#example',
    data:data
});

vm.$data === data;//true
vm.$el === document.getElementById('example');//true

//$watch 是一个实例方法
vm.$watch('a',function(newVal,oldVal){

});
```

4. 每个Vue实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听，编译模板，挂在实例到DOM，在数据变化时更新DOM等。同时在这个过程中也会运行一些叫做 **生命周期钩子** 的函数，给予用户机会在一些特定的场景下添加他们自己的代码。

比如  **created** 钩子可以用来在一个实例被创建之后执行代码：

```javascript
new Vue({
    data:{
        a:1
    },
    created:function (){
        //this 指向 vm实例
        console.log('a is' + this.a);
    }
});
```  

也有一些其他的钩子，在实例声明周期的不同场景下调用，如
 **mouted** 、 **updated** 、 **destroyed**。

 5. Vue声明周期


## 2. 模板语法

- 插值
    ```html
    <span> Message:{{ msg }}</span>
    ```
- 一次性插值
    ```html
    <span v-once> {{ msg }} </span>
    ```
- 原始 HTMl
    ```html
    <div v-html="rawHtml"></div>
    ```

- Mustcahe 语法不能作用在HTML特性上，遇到这种情况应该使用 **v-bind指令** ：
    ```html
    <div v-bind:id="dynamicId"></div>
    <button v-bind:disabled='isButtonDisabled'>Button</button>
    ```

- JavaScript表达式
    ```html
    {{ number + 1 }}
    {{ ok ? 'YES' : 'NO' }}
    {{ message.split('').reverse().join('') }}
    <div v-bind="'list' + id"></div>
    ```

- 每个绑定都只能包含单个表达式，所以下面的例子都不会生效：
   ```html
   {{var a = 1}}
   {{ if (ok) { return message } }}
   ```
   >> 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 **Math** 和 **Date** 。不应该在模板表达式中试图访问用户定义的全局变量。

- 指令
    ```html
    <p v-if="seen">seen</p>
    ```

-  参数
    ```html
    <a v-bind:href="url"></a>
    <a v-on:click="doSomething">
    ```

- v-bind 缩写
    ```html
    <a v-bind:href="url"></a>
    <a :href="url"></a>
    ```

- v-on 缩写
    ```html
    <a v-on:click="doSomething"></a>
    <a @click="doSomething"></a>
    ```

## 3. 计算属性和观察者

- 计算属性
    ```html
    <div id="example">
        <p>{{ message }}</p>
        <p>{{ reversedMessage }}</p>
    </div>
    ```
    ```javascript
    var vm = new Vue({
        el:'#example',
        data:{
            message:'Hello'
        },
        computed:{
            reversedMessage: function(){
                return this.message.split('').reverse.join('');
            }
        }
    })
    ```
- 计算属性的setter
    ```javascript
    //...
    computed: {
        fullName:{
            //getter
            get:function(){
                return this.firstName + ' ' +this.lastName
            },
            //setter
            set:function(newValue){
                var  name = newValue.split(' ');
                this.firstName = name[0]; 
                this.lastName = name[1]; 
            }
        }
    }
    ```
    运行 **vm.fullName = 'John Doe'** 时， setter会被调用。

- 方法
    ```html
    <p> Reversed message : "{{ reversedMessage() }}"</p>
    ```
    ```javascript
    methods:{
        recersedMessage:function() {
            return this.message.split('').reverse().join('');
        }
    }
    ```

- 计算属性缓存vs方法

    计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这意味着只要 **message** 还没有发生改变，多次访问 **reversedMessage** 计算属性会立即返回之前的计算结果，而不必再次执行函数。

    下面的计算属性将不再更新，因为 **Date.now()** 不是响应式依赖：
    ```javascript
    computed:{
        now: function (){
            return Date.now()
        }
    }
    ```  
- 侦听器
    ```javascript
    //...
    watch:{
        question: function (newVal){

        }
    }
    ```

- 计算属性和侦听属性
    ```
    data{
        firstName:'Foo',
        lastName:'Bar',
        fullName: 'Foo Bar'
    },
    watch:{
        firstname: function (val){
            this.fullName = val+ ' ' + this.lastName
        },
        lastName:function (val){
            this.fiullName = this.firstName + ' ' +val;
        }
    }
    ```
    ```javascript
    data:{
        firstName:'Foo',
        lastName:'Bar'
    },
    computed:{
        fullName:function(){
            return this.firstName + ' ' + this.lastName
        }
    }
    ```

## 4. Class与Style绑定

- 对象语法
    ```html
    <div v-bind:class="{active:isActive}"></div>
    <div class="static" :class="{active:isActive,'text-danger':hasError}">
    ```
    or
    ```html
    <div :class="classObject"></div>
    ```
    ```javascript
    data:{
        isActive:true,
        error:null
    },
    computed:{
        classObject:function(){
            return {
                active:this.isActive && !this.error,
                'text-danger': this.error && this.error.type == 'fatal'
            }
        }
    }
    ```
- 数组语法
    ```html
    <div v-bind:class="[activeClass,errorClass]"></div>
    ```
    ```javascript
    data:{
        activeClass:'active',
        errorClass:'text-danger'
    }
    ```
    ```html
    <div v-bind:class="[isActive?activeClass:'',errorClass]"></div>
    <div v-bind:class="[{active:isActive},errorClass]">
    ```
- 内联样式对象语法
    ```html
    <div v-bind:style="{color:activeColor,fontSize:fontSize+'px'}"></div>
    ```
    ```javascript
    data:{
        activeColor:'red',
        font-size:30
    }
    ```

    直接绑定一个样式对象通常更好，这会让模板更清晰：
    ```html
    <div v-bind:style="styleObject"></div>
    ```
    ```javascript
    data:{
        styleObject:{
            color:'red',
            fontSize:'13px'
        }
    }
    ```
- 内联样式数组语法
    v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：
    ```html
    <div v-bind:style="[baseStyles,overrdingStyles]"></div>
    ```
>> 当 v-bind:style 使用需要添加浏览器引擎前缀的CSS属性时，如transform,Vue.js会自动侦测并添加相应的前缀。
## 5. 条件渲染

- v-if
    ```html
    <h1 v-if="ok">Yes</h1>
    <h1 v-else>No</h1>
    ```
- 在 template 元素上使用v-if条件渲染分组
    ```html
    <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph1</p>
        <p>Paragraph2</p>
    </template>
    ```
- v-else
    ```html
    <div v-if="Math.random()>0.5">
        Now you seen me
    </div>
    <div v-else>
     Now you don't
    </div>
    ```
- v-else-if
    ```html
    <div v-if="type === 'A'">
    A
    </div>
    <div v-else-if="type === 'B'">
    B
    </div>
    <div v-else-if="type === 'C'">
    C
    </div>
    <div v-else>
    Not A/B/C
    </div>
    ```
## 6. 列表渲染
- v-for
    ```html
    <ul id="example-1">
        <li v-for="item in items">
            {{item.message}}
        </li>
    </ul>
    ```
    ```javascript
    var example1 = new Vue({
        el:'#example-1',
        data:{
            item:[
                {message:'Foo'},
                {message:'Bar'}
            ]
        }
    });
    ```
- v-for 还支持一个可选的第二个参数为当前项的索引。
    ```html
    <ul>
        <li v-for="(item,index) in items">
            {{index}}-{{item.message}}
        </li>
    </ul>
    ```
- 可以用of代替in
    ```html
    <div v-for="item of items"></div>
    ```
## 7. 事件处理
## 8. 表单输入绑定
## 9. 组件

- 创建Vue实例