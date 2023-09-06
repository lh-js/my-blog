- ## apply、call、bind的作用

改变this指向

- ## apply、call、bind的区别

1、相同点

1. 三个都是用于改变this指向；

2. 接收的第一个参数都是this要指向的对象；

3. 都可以利用后续参数传参。

   

2、不同点

1. call和bind传参相同，多个参数依次传入的；
2. apply只有两个参数，第二个参数为数组；
3. call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。

- 示例1

```javascript
let obj = {
    a: 1,
    b: 2,
    get: function (c, d) {
        return this.a + this.b + c + d;
    }
}
console.log(obj.get(3, 4)) //10,这里的this为obj对象        
```


- ### apply(thisArg, [argsArr])

1.接收两个参数

2.thisArg，需要修改到的this指向对象，后面接收参数数组

3.立即执行函数

```javascript
console.log(obj.get.apply(obj1,[1,2])) //10，改变this指向为obj1
```



- ### call(thisArg, arg1, arg2, arg3, ...)

1.接收多个参数，

2.thisArg，需要修改到的this指向对象，后面接收多个参数

3.立即执行函数

```javascript
console.log(obj.get.call(obj1,1，2)) //10，改变this指向为obj1
```



- ### bind(thisArg, arg1, arg2, arg3, ...)

1.接收多个参数，

2.thisArg，需要修改到的this指向对象，后面接收多个参数

3.不会立即执行函数

```javascript
console.log(obj.get.bind(obj1,1，2)()) //10，改变this指向为obj1
```

- 示例2

```javascript

let obj = {
    a: 1,
    b: 2,
    get: function () {
        return this.a + this.b;
    }
}
console.log(obj.get()) //3    
let f = obj.get
console.log(f()) //NaN
```

  上面代码中，如果this.a和this.b指向obj对象内部的a和b属性，如果这个方法赋值给另外一个变量，调用时就会出错。

如果把get方法赋值给f变量，那么this对象指向不再是obj对象了，而是window对象。而window.a和window.b默认为undefined，进行运算之后也就等于NaN。

为了解决这个问题，可以使用apply,call,bind方法，将obj对象里的this绑定到obj对象上，即可解决问题。

```javascript
  console.log(f.apply(obj)) //3   
  console.log(f.call(obj)) //3   
  console.log(f.bind(obj)()) //3
```



- ## 拓展

1. 找出数组中的最大值

```javascript
    var a = [2, 4, 5, 7, 8, 10];     
    console.log(Math.max.apply(null, a)); //10
```

2.转换类似数组的对象

```javascript
let obj = {
    0: 1,
    length: 1
}
console.log(Array.prototype.slice.apply(obj)) //[1]
```