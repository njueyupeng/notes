# Module 语法

1. 在ES6之前，社区制订了一些模块加载方案，最主要的有CommonJS 和 AMD两种。前者用于服务器，后者用于浏览器。

2. ES6模块的设计思想，要尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS和AMD模块，都只能在运行时确定这些东西。

3. ES6模块自动采用严格模式，不管有没有在模块头部加上 'use strict'。
    
    严格模式主要有以下限制：
    
    - 变量必须声明后再使用
    - 函数的参数不能有同名属性，否则报错
    - 不能使用with语句
    - 不能对只读属性赋值，否则报错
    - 不能使用前缀0表示八进制数，否则报错
    - 不能删除不可删除的属性，否则报错
    - 不能删除变量 **delete prop** ，会报错，只能删除属性 **delete global[prop]**
    - evel 不会在它的外层作用域引入变量
    - evel 和 arguments 不能被重复赋值
    - arguments 不会自动反映函数参数的变化
    - 不能使用argument.callee
    - 不能使用argument.caller
    - 禁止 **this** 指向全局对象
    - 不能使用 fn.caller 和 fn.arguments 获得函数调用的堆栈
    - 增加了保留字（比如protexted、static 和 interface）
4. 在ES6模块之中，顶层的this指向undefined，即不应该在顶层代码中使用this。

5. 模块功能主要由两个命令构成： **export** 和 **import** 。export命令用于规定模块的对外接口， **import** 命令用于输入其他模块提供的功能。

6. export命令输出变量：
    ```javascript
    export var firstName = 'Michael';
    export var lastName  = 'Jack';
    export var year = 1958;
    ```
    另外一种写法：
    ```javascript
    var firstName = 'Michael';
    var lastName = 'Jack';
    var year = 1958;
    export {firstName, lastName, year}
    ```
7. export 除了输出变量，还可以输出函数或类（class）
    ```javascript
    export function multiply(x, y){
        return x * y;
    }
    ```
8. 可以用 **as** 重命名
    ```javascript
    function v1() { ... }
    function v2() { ... }

    export {
        v1 as streamV1,
        v2 as streamV2,
        v2 as streamLatestVersion
    }
    ```
    重命名后， **v2** 可以用不同的名字输出两次。

9. **export** 命名规定的是对外的接口，必须与模块内部的变量简历一一对应关系
    ```javascript
    //报错
    export 1;

    //报错
    var m = 1;
    export m;
    ```
    正确写法：
    ```javascript
    //写法一
    export var m = 1;
    //写法二
    var m = 1;
    export {m}
    //写法三
    var n = 1;
    export {n as m}
    ```

10. function 和 class 的输出，也必须遵守这样的写法：
    ```javascript
    //报错
    function f(){}
    export f;

    //正确
    export function f(){};
    //正确
    function f(){}
    export {f}
    ```
11. **export** 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
    ```javascript
    export var foo =  'bar';
    setTimeout(() =>foo='baz',500);
    ```
    上面代码输出变量foo,值为bar，500毫秒之后变成baz。

    这一点与CommonJS规范完全不同。CommonJS模块输出的是值的缓存，不存在动态更新。

12. **export** 命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错：
    ```javascript
    function foo(){
        export default 'bar' //SyntaxError
    }
    foo()
    ```

13. 使用 **export** 命令定义了模块的对外接口以后，其他JS文件就可以通过 **import**命令加载这个模块。
    ```javascript
    import {firstName, lastName, year} from './profile';

    function setTime(element){
        element.textContent = firstName + ' ' + lastName;
    }
    ```

14. 重命名
    ```javascript
    import {lastName as surname} from './profile';
    ```
15. **import** 命令具有提升效果，会提升到整个模块的头部，首先执行。这种行为的本质是， **import** 命令是编译阶段执行的，在代码执行之前。
    ```javascript
    foo();
    import {foo} from 'my_module';
    ```

16. 由于 **import** 是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
    ```javascript
    //报错
    import {'f' + 'foo'} from 'my_module';

    //报错
    let module = 'my_module';
    import {foo} from module;

    //报错
    if(x === 1){
        import { foo } from 'module1';
    }else{
        import { foo } from 'module2';
    }
    ```

17. **import** 语句会执行所加载的模块，因此可以有下面的写法，下面代码仅仅执行 **lodash** 模块，但是不输出任何值。
    ```javascript
    import 'lodash';
    ```

18. 如果多次重复执行同一局 **import** 语句，那么只执行一次：
    ```javascript
    import 'lodash';
    import 'lodash';
    ```
19. import 语句是Singleton模式：
    ```javascript
    import { foo } from 'my_module';
    import { bar } from 'my_module';

    //等同于
    import { foo, bar } from 'my_module';
    ```

20. 整体加载：
    ```javascript
    import *  as circle from './circle';
    ```
    注意，模块整体加载所在的那个对象（上例中是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。
    ```javascript
    import * as circle from './circle';
    //下面两行都是不允许的
    circle.foo = 'hello';
    circlr.area = function(){};
    ```

21. export default:
    ```javascript
    export default function(){
        console.log('foo');
    }
    ```
    ```javascript
    import customName from './export-default';
    customName();
    ```