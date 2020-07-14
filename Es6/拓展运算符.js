


//展开数组　　　一般常做函数调用时

let args=[1,2,3,4]

function test(a,b,c,d){
    console.log(a+b+c+d)
}
test(...args)// 10



// 2. 代替数组的apply 方法

// ES5 的写法
    function f(x, y, z) {
    // ...
    }
    var args = [0, 1, 2];
    f.apply(null, args);
    // ES6 的写法
    function f(x, y, z) {
    // ...
    }
    var args = [0, 1, 2];
    f(...args)

    // ES5 的写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    Array.prototype.push.apply(arr1, arr2);
    // ES6 的写法
    var arr1 = [0, 1, 2];
    var arr2 = [3, 4, 5];
    arr1.push(...arr2)




//  3. 与解构赋值结合

let list=[1,2,3,4,5,6]
let a=''
let b=[]
// es5 写法
 a= list[0]    // 1
 b=list.splice(1) // [2,3,4,5,6]

// es6   
let [c,...d]=list   //得到与上相同结果

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [first, ...middle, last] = [1, 2, 3, 4, 5];
//  报错




// 4. 扩展运算符还可以将字符串转为真正的数组。

[...'hello']
// [ "h", "e", "l", "l", "o" ]


//  toString()无法转换null和undefined       String()和toString()都是将其他类型的变量转换为字符串类型。