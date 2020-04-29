var Mytype2 = /** @class */ (function () {
    function Mytype2() {
    }
    Mytype2.prototype["enum"] = function () {
        //1. 用于定义数值集合  可以定义一些带名字的常量   git更新了
        //2. 枚举类型的值是数值类型 因此又被称为数字类型枚举
        // 3. 成员的值可以不用初始化 ，因为他们有自增行为
        var person;
        (function (person) {
            person[person["name"] = 0] = "name";
            person[person["age"] = 1] = "age";
            person[person["love"] = 2] = "love";
            person[person["hobby"] = 3] = "hobby";
        })(person || (person = {}));
        console.log(person.name); //0
        console.log(person.love); //2
        //4. 也可以人为赋值操作
        var person2;
        (function (person2) {
            person2[person2["name"] = 66] = "name";
            person2[person2["age"] = 19] = "age";
            person2[person2["love"] = 56] = "love";
            person2["hobby"] = "";
        })(person2 || (person2 = {}));
        console.log(person2.name);
        console.log(person2.age);
        console.log(person2.love);
        //5.数字枚举成员还具有反向映射特性  从枚举值到枚举名字，
        //6. 要注意的是 不会为字符串枚举成员生成反向映射。
        console.log(person2[person2.age]); //  age
        //字符串枚举 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
        var person3;
        (function (person3) {
            person3["name"] = "tf";
            person3["love"] = "lol";
        })(person3 || (person3 = {}));
        // 异构枚举  枚举可以混合字符串和数字成员
        var person4;
        (function (person4) {
            person4["name"] = "tf";
            person4[person4["age"] = 18] = "age";
        })(person4 || (person4 = {}));
    };
    Mytype2.prototype.myArr = function () {
        var arr1 = [1, 2, 1, 2, 1, 3, 1, 2, 3, 4, 6, 4, 6, 4, 5, 6];
        var newarr = arr1.reduce(function (pre, cur, index, arr1) {
            pre.indexOf(cur) === -1 && pre.push(cur);
            return pre;
        }, []);
        console.log(newarr);
        var isDa = arr1.every(function (item) { return item > 3; }); //判断每一项
        console.log(isDa);
        var isda2 = arr1.some(function (item) { return item = 6; }); // 判断是否存在一项满足条件
        // forEach()、map()、every()、some()和filter()   reduce
        // 只传一个匿名函数
        arr1.forEach(function (item, index, array) {
            console.log(this); // window
        });
        // 传两个参数
        arr1.forEach(function (item, index, array) {
            console.log(this); // [1, -2, 3, 4, -5]
        }, arr1);
        // 匿名函数中this指向默认为window，可通过传第二参数来更改之
    };
    Mytype2.prototype.myof = function () {
        //for...of 可以迭代数组、类数组以及任何可以迭代的对象(maps、sets、DOM集合)
        var products = ['oranges', 'apples'];
        //1.  迭代数组每一项
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            console.log(product);
            // entries() 可以用于访问迭代项的索引。该方法在每次迭代时返回一对 [index，item]。
        }
        // 2. 就地解构
        var persons = [
            { name: 'John Smith', age: 10 },
            { name: 'Jane Doe', age: 17 }
        ];
        //   那么问题来了  还没有学到接口概念时  改怎么定义一个对象数组
        for (var _a = 0, persons_1 = persons; _a < persons_1.length; _a++) {
            var name_1 = persons_1[_a].name;
            console.log(name_1);
            // 'John Smith'    'Jane Doe'
        }
        // 迭代类数组
        // function sum() {
        //     let sum = 0;
        //     for (const number of arguments) {
        //       sum += number;
        //     }
        //     return sum;
        // }
        // this.sum(1,2,3)  
    };
    return Mytype2;
}());
