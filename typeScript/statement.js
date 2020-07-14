//变量的声明学习
// 变量是个占位符  用来引用计算机的内存地址  作为存储数据的容器
var Statement = /** @class */ (function () {
    function Statement() {
    }
    Statement.prototype.name = function () {
        // 1.变量名称可以包含数字和字母
        // 2.除了下划线_ 和 $ 不能包含其他任何符号
        // 3. 不能以数字开头
    };
    Statement.prototype.statement = function () {
        //1.声明一个变量的类型和初始值
        var names = 'zhagnsan';
        // 2.声明一个变量的类型但没有初始值   该变量会被 设置为 undefined
        var age;
        // 3. 声明一个变量  给初始值 但不设置类型  该变量 可以 是任意类型
        var love = 456;
        // 4.声明一个变量 没有初始值 和类型  默认初始值未 undefined  类型为任意
        var uname;
    };
    return Statement;
}());
