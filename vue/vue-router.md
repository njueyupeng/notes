# vue-router

## 开始
    ```html
    <div id="app">
        <h1>Hello App</h1>
        <p>
            <router-link to="/foo">Fo to Foo</router-link>
            <router-link to="/bar">Fo to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
    ```
    ```javascript
    const Foo = {template:'<div>foo</div>'};
    const Bar = {template:'<div>Bar</div>'};

    const routers = [
        {path:'/foo',component:Foo},
        {path:'/bar',component:Bar}
    ]

    const router = new Router({routers});

    const app = new Vue({
        router
    }).$mount('#app');
    ```

## 动态路由参数
    ```javascript
    const User = {
        template:"<div>User {{$route.params.id}}</div>"
    }
    const router = new Router({
        routers:[
            {path:'/user/:id',component:User}
        ]
    });
    ```

## 响应路由参数变化

当使用路由参数时，例如从/user/foo导航到user/bar,原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

复用组件时，想对路由参数的变化做出相应的话，你可以简单地watch(检测变化)$route对象

    ```JavaScript
    const User = {
        template:'...',
        watch:{
            '$route'(to,from){
                //...
            }
        }
    }
    ```

或者，使用2.2中引入的beforeRouteUpdate守卫

    ```javascript
    const User = {
        template:'...',
        beforeRouteUpdate(to,from,next){

        }
    }
    ```

## 嵌套路由

借助vue-loader，使用嵌套路由配置，就可以简单地表达嵌套路由的关系。

    ```javascript
    <div id="app">
        <router-view></router-view>
    </div>

    const User = {
        template:'<div> User {{$route.params.id}}</div>'
    }

    const router = new VueRouter({
        router:[
            {path:'/user/:id',component:User}
        ]
    });
    ```

这里的<router-view>是最顶层的出口，渲染最高级路由匹配的组件。同样地，一个被渲染组件同样可以包含自己的嵌套<router-view>。例如：在user组件的模板添加一个<router-view>:

    ```javascript
    const User = {
        template:`
            <div class="user">
                <h2> User {{$route.params.id}}</h2>
                <router-view></router-view>
            </div>
        `
    }
    ```

要在嵌套的出口中渲染组件，需要在VueRouter的参数中使用children配置

    ```javascript
    const router = new VueRouter({
        routes:[
            {
                path:'/user/:id',component:User,
                children:[
                    {
                        //当/user/:id时匹配成功
                        path:'',
                        component:UserHome
                    },
                    {
                        //当/user/:id/profile 匹配成功
                        path:'profile',
                        component:UserProfile
                    },
                    {
                        path:'posts',
                        component:UserPosts
                    }
                ]
            }
        ]
    })
    ```

要注意，以 / 开头的嵌套路径会被当做根路径。这让你充分的使用嵌套组件而无须设置嵌套的路径。

## 编程式的导航

    ```javascript
    router.push(location, onComplete?, onAbort?)
    ```
    >> 注意，在Vue实例内部，你可以通过$router访问路由实例。因此你可以调用 this.$router.push。

当点击<router-link>时，这个方法会在内部调用，所以说，点击 <router-link to="...">等同于调用router.push(...)。


该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如：

    ```javascript
    //字符串
    router.push('home')

    //对象
    router.push({path:'home'})

    //命名的路由
    router.push({name:'user',params:{userId:123}})

    //带查询参数，变成/register?plan=private
    router.push({path:'register',query:{plan:'private'}})
    ```

    todo

## 命名路由
    ```javascript
    const router = new VueRouter({
        routers:[
            {
                path:'/user/:userId',
                name:'user',
                component:User
            }
        ]
    })
    ```

要链接到一个命名路由，可以给router-link的to属性传一个对象：

    ```javascript
    <router-link :to="{name:'user',params:{userId:123}}">User</router-link>
    ```

这跟代码调用 router.push()是一回事：

    ```javascript
    router.push({name:'user',params:{userId:123}})
    ```
这两种方式都会把路由导航到 /user/123 路径

## 命名视图

有时候想同时（同级）展示多个视图，而不是嵌套展示，例如创建一个布局，有sidebar(侧导航)和main(主内容)两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果router-view没有设置名字，那么默认为default。

    ```html
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
    ```
一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components配置（带上s）：

    ```javascript
        const router = new VueRouter({
            router:[
                {
                    path:'/',
                    component:{
                        default:Foo,
                        a:Bar,
                        b:Baz
                    }
                }
            ]
        })
    ```
