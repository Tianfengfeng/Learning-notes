
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


        // 类型推断  

               /* var num = 2;    // 类型推断为 number 声明了变量 num 并=设置初始值为 2。 注意变量声明没有指定类型。因此，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，num 设置为 number 类型。
                console.log("num 变量的值为 "+num); 
                num = "12";    // 编译错误 当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 number 类型。
                console.log(num);*/
                
           // 当声明变量 没有给出类型 ts编译器利用类型推断设置类型
        







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
          

}