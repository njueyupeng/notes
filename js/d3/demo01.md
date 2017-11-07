## 画圆的例子

```html
<svg>

</svg>
```
```javascript
var svg = d3.select('svg');
var circle = svg.selectAll('circle')
    .data([32,57,293],function(d){return d});
circle.enter().append('circle')
    .attr('cy',60)
    .attr('cx',function(d,i){return i*100+30})
    .attr('r',function(d,i)(return Math.sqrt(d);))

circle.exit().remove();
```