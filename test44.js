function multipleNum(num){
    const result = num * 10;
    const total = calcAddition(result)
    return result;
}

function calcAddition(someNumber){ // =20
    const total = someNumber + 2;
    return total; //20+2=22 יחזיר את הסכום הסוםי
    
}
//what we want to do?
//num = ;
// 2*10 = 20
// 20 +2 = 22


//קראתי לפונקציה ונתתי לה מס
const total = multipleNum(2);
//לקחתי את המס שהתקבל והכנסתי אותו לפונקציה הנוספת בפרמטר
console.log(total);






/* multipleNum(1); //num=1
multipleNum(2);//num=2
multipleNum(3);//num=3

calcAddition(1) //someNumber =1
calcAddition(2) //someNumber =2
calcAddition(3) //someNumber =3 */

