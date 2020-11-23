
//  typescript  基础类型学习

class myType2{
    enum(){
        //1. 用于定义数值集合  可以定义一些带名字的常量   
        //2. 枚举类型的值是数值类型 因此又被称为数字类型枚举
        // 3. 成员的值可以不用初始化 ，因为他们有自增行为
        enum person{
            name,
            age,
            love,
            hobby
        }
        console.log(person.name);  //0
        console.log(person.love);  //2
        //4. 也可以人为赋值操作
        enum person2{
            name=66,
            age=19,
            love=56,
            hobby=''
        }
        console.log(person2.name)
        console.log(person2.age)
        console.log(person2.love)

        //5.数字枚举成员还具有反向映射特性  从枚举值到枚举名字，

        //6. 要注意的是 不会为字符串枚举成员生成反向映射。
        console.log(person2[person2.age])   //  age


        //字符串枚举 在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。
        enum person3{
            name='tf',
            love='lol'
        }
        // 异构枚举  枚举可以混合字符串和数字成员
        enum person4{
            name='tf',
            age=18
        }

        }
    myArr(){
        let arr1 : Array<number>=[1,2,1,2,1,3,1,2,3,4,6,4,6,4,5,6] 
        let newarr:number[]=arr1.reduce((pre,cur,index,arr1)=>{  
            pre.indexOf(cur)===-1 && pre.push(cur)
            return pre
        },[])
        console.log(newarr) 
        let isDa: boolean=arr1.every(item=>{return item>3}) //判断每一项
        console.log(isDa)
        let isda2:boolean=arr1.some(item=>{ return item=6}) // 判断是否存在一项满足条件



        // forEach()、map()、every()、some()和filter()   reduce   
        // 只传一个匿名函数
        arr1.forEach(function(item,index,array){
            console.log(this);  // window
        });  
        // 传两个参数
        arr1.forEach(function(item,index,array){
            console.log(this);  // [1, -2, 3, 4, -5]
        },arr1);
        // 匿名函数中this指向默认为window，可通过传第二参数来更改之
    }

    myof(){

        // symbol 是js第七种原始数据类型  symbol由symbol函数获取，而不是new关键字，所以它是个值，不是对象。
        // let s1=symbol('foo')
        // let s2=symbol('bar')
        // symbol 函数可以接受一个字符串参数 表示对symbol实例的描述，用作区分。 Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的


        // for in 遍历对象的副作用 原型链上所有属性都会被访问到   使用obj.hasOwnProperty(ker)===true   来区分  会避免原型对象扩展带来的干扰
        //for...of 可以迭代数组、类数组以及任何可以迭代的对象(maps、sets、DOM集合)
        const products :Array<string> = ['oranges', 'apples'];
        //1.  迭代数组每一项
        for (const product of products) {
            console.log(product);
            // entries() 可以用于访问迭代项的索引。该方法在每次迭代时返回一对 [index，item]。
        }

        // 2. 就地解构
        const persons = [
            { name: 'John Smith' ,age:10},
            { name: 'Jane Doe' ,age:17}
        ];
         //   那么问题来了  还没有学到接口概念时  改怎么定义一个对象数组
           
        for (const { name } of persons) {
        console.log(name);
        // 'John Smith'    'Jane Doe'
        }
        
        
        //  let {keys, values, entries} = Object;

        let obj = { a: 1, b: 2, c: 3 };
        for (let key of Object.keys(obj)) { 
            console.log(key); // 'a', 'b', 'c'
        }
        // for (let value of Object.values(obj)) {
        //     console.log(value); // 1, 2, 3
        // }
        // for (let [key, value] of Object.entries(obj)) {
        //     console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
        // }
        
        // 迭代类数组
        
        // function sum() {
        //     let sum = 0;
        //     for (const number of arguments) {
        //       sum += number;
        //     }
        //     return sum;
        // }
        // this.sum(1,2,3)  
    }

    //  1.数字类型  let num :number=999
    // 2.字符串类型 let str :String='tec'
    // 3.布尔  let flag :boolean=false
    // 4.数组类型 let arr :number[]=[1,2,3]
    //   数组泛型 let arr : Array<number>=[1,2,3]
    //   元祖  用来定义已知数组元素和类型  let arr:[String,number,boolean]
                // arr = ['Runoob', 1,true];    // 运行正常
                // arr = [1, 'Runoob',true];    // 报错
                // console.log(x[0]);    // 输出 Runoob
    // void  用来标识方法返回值的类型
            // function test():void {
            //     console.log(2323)
            // }   
            
    //null  表示对象值缺失  undefined  初始化变量为未定义的值    

    //never   代表从来不会出现的值  是所有其他类型的子类（包括null undefined）  声明为never 的值只能被never类型的值赋值  通常在函数中用来抛出异常 或无法执行到终点  

    // Any  适用于定义的值会动态改变/允许值在编译时移除类型检查/ 定义存储各种类型数据的数组时，


    //null
    // 在 JavaScript 中 null 表示 "什么都没有"。
    // null是一个只有一个值的特殊类型。表示一个空对象引用。
    // 用 typeof 检测 null 返回是 object。
    // undefined
    // 在 JavaScript 中, undefined 是一个没有设置值的变量。
    // typeof 一个没有值的变量会返回 undefined。
    // Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。
    // 而在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型，

    // 启用 --strictNullChecks
        // let x: number;
        // x = 1; // 运行正确
        // x = undefined;    // 运行错误
        // x = null;    // 运行错误

        // let x: number | null | undefined;
        // x = 1; // 运行正确
        // x = undefined;    // 运行正确
        // x = null;    // 运行正确



     // 类型断言    
       
        //使用方式 <类型>值   或者    值 as 类型
        // 简单说就是先做一个假设 使编译通过
        funa(val: string | number): number {
            if ((<string>val).length) {
              return (<string>val).length
            } else {
              return val.toString().length
            }
          }
          
          // 或者
          
        func(val: string | number): number {
            if ((val as string).length) {
                return (val as string).length
            } else {
                return val.toString().length
            }
        }   
        //  参数val 是一个联合类型   函数要返回参数的长度，而lenght是字符串的属性  数值没有此属性，需用 toStriing 转 再获取。
        // 但在编译阶段 访问联合类型值 的属性时，这个属性必须是所有可能类型的共有属性，因此编译不通过，要使用类型断言，
        // 类型断言不是类型转换  而是类型选择。


        // 类型推论  

               /* var num = 2;    // 类型推断为 number 声明了变量 num 并=设置初始值为 2。 注意变量声明没有指定类型。因此，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，num 设置为 number 类型。
                console.log("num 变量的值为 "+num); 
                num = "12";    // 编译错误 当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 number 类型。
                console.log(num);*/
                
           // 当声明变量 没有给出类型 ts编译器利用类型推论设置类型


           //   let mynum    
           //   若定义时没有赋值  不管之后有没有赋值   都会被类型推论成any
        

        Scope(){
            var global_num = 12          // 全局变量    
            class Numbers {              // 类在这
                num_val = 13;             // 实例变量
                static sval = 10;         // 静态变量
                
                storeNum():void { 
                    var local_num = 14;    // 局部变量
                } 
            } 
            console.log("全局变量为: "+global_num)  
            console.log(Numbers.sval)   // 静态变量
            var obj = new Numbers(); 
            console.log("实例变量: "+obj.num_val)  
        }

        myArray(){
            let arr1 :number[]=[1,2,3] //数组      //  arr1.push('s') // error   数组api的参数会在定义数组类型时被限制

            let arr2:Array<string>=['a','b','c']    //  数组泛型

            let arr3:[string,number]=['d',5]     //元组

            let arr4:any[]=[]
        }

        Func(){
            // ts中函数的输出输入都要类型限制  调用时多参少参都不允许 
            let sum=function (x:number,y:number) :number{
                return x + y
            }

            // 上例只对右侧进行了定义   左侧是匿名函数赋值类型推论得出
            
            let sum1:(x:number,y:number)=>number=function(x:number,y:number){
                return x+y

                // ts中 =>  并非箭头函数，而表示函数定义，左侧是输入类型 右侧是输出类型。
            }

            //  用接口实现函数
            interface Isearch{
                (str:string,str2:string):boolean;
            }
            let mysearch:Isearch;

            mysearch=function(str:string,str2:string,str3?:string){
                return str.search(str2)===-1
            }
            //   可选参数必须跟在必选参数之后，且可选参数之后不能再有必需参数。

            mysearch=function(str:string='test',str2:string){
                return  str==='test'
                // 参数默认值    ts会将添加了默认值的参数 识别为可选参数   此时就没有必须跟在必选参数之后的限制了 
            }

        }

}

/**     接口 
    作用：1.对对象的形状进行约束和描述。2.对类的部分行为进行抽象（类实现接口）
    实现（implements）是面向对象中的一个重要概念。一个类只能继承自另一个类，不同类之间可以有一些共有的特性，就可以把特性提取成接口（interfaces），用 implements 关键字来实现。*/ 

interface IPerson {
    name:string;
    age:number;
    readonly id:number;  // 只读属性   只能是变量对象初始化时赋值   而不能再次给只读属性赋值
    like?:string;   //可选属性    //此时仅有了可选属性  变量仍不能添加未定义的属性
    [proName : string]:string | number | boolean;    // 任意属性，一旦定义了任意属性那么确定属性和可选属性的类型必须是它任意属性 类型的子集
    //[proName : string]:any;    // 一个接口只能定义一个任意类型
    //   在3.9.3中，如果同时存在任意属性、可选属性，那么任意属性的数据类型要带undefined    或者任意属性类型为any
}
let zhangsan : IPerson = {         // 变量ZH   的类型是Person  定义的此变量不能比接口person多属性或少属性（可选属性除外）。 赋值的时候变量的形状必须和接口保持一致。
    name:'zhangsan',
    age:18,
    id:89757,
    adress:'xa',
}

