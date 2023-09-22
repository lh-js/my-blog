# 实现数组去重的 7 种方式

## 1. 方法一：利用两层循环+数组的splice方法

> 通过两层循环对数组元素进行逐一比较，然后通过splice方法来删除重复的元素。此 **方法对NaN是无法进行去重的**，因为进行比较时 `NaN !== NaN`。

```ini
let arr = [1, 2, 2, 'abc', 'abc', true, true,
 false, false, undefined, undefined, NaN, NaN]
function removeDuplicate(arr) {
  let len = arr.length
  for (let i = 0
    for (let j = i + 1
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len--
      }
    }
  }
  return arr
}
removeDuplicate(arr)
console.log(arr) // [ 1, 2, 'abc', true, false, undefined, NaN, NaN ]
```

## 2. 方法二：利用Set()+Array.from()

* `Set`对象：是 **值的集合**，你可以按照插入的顺序 **迭代**它的元素。 Set中的元素只会 **出现一次**，即Set中的 **元素是唯一的**。
* `Array.from()` 方法：对一个 **类似数组**或 **可迭代对象**创建一个新的，浅拷贝的数组实例。

```sql
function removeDuplicate(arr) {
  // return [...new Set(arr)]
  return Array.from(new Set(arr))
}
 // [ 1, 2, 'abc', true, false, undefined, NaN ]
```

## 3. 方法三：利用数组的indexOf方法

> 新建一个空数组，遍历需要去重的数组，将数组元素存入新数组中，存放前判断数组中是否已经含有当前元素，没有则存入。此方法也无法对 `NaN`去重

* `indexOf()` 方法：返回调用它的String对象中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。若未找到该值，则返回 -1

```js
function removeDuplicate(arr) {
  let newArr = []
  arr.map(item => {
    if (newArr.indexOf(item) === -1) {
      newArr.push(item)
    }
  })
  return newArr
}
console.log(removeDuplicate(arr))
```

## 4. 方法四：利用数组的includes方法

> 此方法逻辑与indexOf方法去重异曲同工，只是用includes方法来判断是否包含重复元素。

* `includes()`方法：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

```bash
function removeDuplicate(arr) {
  let newArr = []
  arr.map(item => {
    if (!newArr.includes(item)) {
      newArr.push(item)
    }
  })
  return newArr
} // [ 1, 2, 'abc', true, false, undefined, NaN ]
```

**注意**：为什么 `includes`能够检测到数组中包含 `NaN`，其涉及到 `includes`底层的实现。如下图为 `includes`实现的部分代码，在进行判断是否包含某元素时会调用 `sameValueZero方法`进行比较，如果为 `NaN`，则会使用 `isNaN()`进行转化。

简单测试 `includes()`对 `NaN`的判断：

```js
简单测试includes()对NaN的判断：
const testArr = [1, 'a', NaN]
console.log(testArr.includes(NaN))
```

## 5. 方法五：利用数组的filter()+indexOf()

> filter方法会对满足条件的元素存放到一个新数组中，结合indexOf方法进行判断。

* `filter()` 方法：会创建一个新数组，其包含 **通过所提供函数实现的测试**的所有元素。

```js
function removeDuplicate(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

const result = removeDuplicate(arr)
console.log(result)
```

**注意**：这里的输出结果中不包含 `NaN`，是因为 `indexOf()`无法对NaN进行判断，即 `arr.indexOf(item) === index`返回结果为false。测试如下：

```arduino
const testArr = [1, 'a', NaN]
console.log(testArr.indexOf(NaN))
```

## 6. 方法六：利用Map()

> Map对象是JavaScript提供的一种数据结构，结构为键值对形式，将数组元素作为map的键存入，然后结合 `has()`和 `set()`方法判断键是否重复。

* `Map` 对象：用于保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者原始值）都可以作为一个键或一个值。

```js
function removeDuplicate(arr) {
  const map = new Map()
  const newArr = []

  arr.forEach(item => {
    if (!map.has(item)) {
      map.set(item, true)
      newArr.push(item)
    }
  })

  return newArr
}
-----------------或者-------------------------------------------------------
function removeDuplicate(arr) {
  let map = new Map()
  arr.map(item => {
    if (!map.has(item)) map.set(item)
  })
  return [...map.keys()]
}

const result = removeDuplicate(arr)
console.log(result)
```

**注意**：使用 `Map()`也可对 `NaN`去重，原因是Map进行判断时认为 `NaN`是与 `NaN`相等的，剩下所有其它的值是根据 `===` 运算符的结果判断是否相等。

## 7. 方法七：利用对象

> 其实现思想和 `Map()`是差不多的，主要是利用了对象的属性名不可重复这一特性。

```js
function removeDuplicate(arr) {
  let obj = {}
  arr.map(item => {
    if (!obj[item]) {
      obj[item] = true
    }
  })
  return Object.keys(obj)
}
```
