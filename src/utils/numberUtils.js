// 千分位號逗點
function toThousands(num) {
    var numArr = num.split('.');
    num = numArr[0];
    var result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result + (numArr[1]? ('.' + numArr[1]):"");
}
// 小數兩位
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

module.exports = {
    toThousands,
    roundToTwo
}