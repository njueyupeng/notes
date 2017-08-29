# 步骤条的实现

![步骤条](http://otja7p1i5.bkt.clouddn.com/17-8-23/74180523.jpg)

## html
```html
<div class="crumbs">
    <ul>
    <li>
        <a href="">1.发布公告</a>
    </li>
    <li>
        <a href="">2.供应商报价</a>
    </li>
    <li>
        <a href="">3.确定结果</a>
    </li>
    <li>
        <a href="">4.项目结束</a>
    </li>
    </ul>
</div>
```
## css
```css
.crumbs {
  margin-top: 20px;
  text-align: center;
}

.crumbs ul {
  list-style: none;
  display: inline-table;
}

.crumbs ul li {
  display: inline;
}

.crumbs ul li a {
  display: block;
  float: left;
  height: 30px;
  line-height: 30px;
  background: #eee;
  text-align: center; // padding: 30px 10px 0 60px;
  padding-left: 18px;
  position: relative;
  margin: 0 10px 0 0;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
}

.crumbs ul li a:after {
  content: "";
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #eee;
  position: absolute;
  right: -15px;
  top: 0;
  z-index: 1;
}

.crumbs ul li a:before {
  content: '';
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #fff;
  position: absolute;
  left: 0;
  top: 0;
}

.crumbs ul li:first-child a {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: #3498db;
}

.crumbs ul li:first-child a:before {
  display: none;
}

.crumbs ul li:first-child a:after {
  content: "";
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #3498db;
  position: absolute;
  right: -15px;
  top: 0;
  z-index: 1;
}

.crumbs ul li:last-child a {
  padding-right: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.crumbs ul li:last-child a:after {
  display: none;
}

.crumbs ul li a:hover {
  background: rgba(236, 71, 71, 0.9);
}

.crumbs ul li a:hover:after {
  border-left-color: rgba(236, 71, 71, 0.9);
}
```
