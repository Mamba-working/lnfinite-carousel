## 无限轮播

### 依赖于jquery，必须先行导入jquery

复制粘贴下列html(图片链接可以自己修改)
``` html
  <div class="carousel">
    <ul class="img-ct">
      <li>
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/1.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/2.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/3.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="#"><img src="http://cdn.jirengu.com/book.jirengu.com/img/4.jpg" alt="">
        </a>
      </li>
    </ul>
    <a href="#" class="arrow pre"><</a>
    <a href="#" class="arrow next">></a>
      <ul class="bullet">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
```

再执行
``` js
let p = new Carousel($(".carousel"))
```
即可生成无限轮播