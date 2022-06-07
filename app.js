function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error("Nothing is for free! Please supply a price");
    }
    const vat = 1.17; //maam
    const total = (price * vat).toFixed(2);
    return (total);
}

function generateID() { //פונקציה מחולקת למשתנים
  /*   const rand = Math.random(); // 0.234432654
    console.log(`rand: ${rand}`);
    const num = rand * 10000; //23443.2654
        console.log(`num: ${num}`);
    const floor = Math.floor(num) //23443
        console.log(`floor: ${floor}`);
    return Math.floor(Math.random()) *10000;
    return floor;
 */ 

const time = new Date().getTime();
return Math.floor(Math.random() * time);
}








/* function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
} */











/* try {
    console.log('do somthing...');
    console.log(x + 'somthing went terribly wrong....');
    throw Error('Teribbley wrong')
} catch (err) {
    console.log(err);
} */


/* try {
    console.log('do somthing...');
    console.log(x + 'somthing went terribly wrong....');
} catch (err) {
    console.log(err);
} */


/*  const y = 'ok';
throw Error('somthing went wrong');
 console.log('Everything is ok'); */