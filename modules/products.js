/* function generateId() {
    const time = new Date().getTime();
    return Math.floor(Math.random() * time);
} */
function addTax(price) {
    if (!price || price <= 0 || typeof (price) === 'string') {
        throw Error('Nothing is for free! please supply a price');
    }

    const vat = 1.17; // = maam
    const total = (price * vat).toFixed(2);
    return total;
}

class Product { //תבנית ליצירת מוצרים כשהמחיר משתנה
    constructor(prodPrice, productName, productImage, productDescription) { //פונקצייה בונה עם פרמטר 
        this.price = prodPrice;
        this.name = productName;
        this.image = productImage;
        this.description = productDescription
        this.id = this.generateId();

    }

    generateId() {
        const time = new Date().getTime();
        return Math.floor(Math.random() * time);
    }

    getPrice() {
        const totalPrice = addTax(this.price)
        return `$${totalPrice}`;
    }

    getName() {
        return this.name;
    }

    getImage() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo/'; // configuration of the project    
        return `${IMG_PATH}${this.image}`;
    }

    getDesription() {
        return this.description;
    }
    getID() {
        returnthis.id;
    }
}

/* const prod1 = new Product(
    15, 
    'Yellow cheese',
    '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    'great product really!'
    );
console.log(prod1.getPrice());
console.log(prod1.getName());
console.log(prod1.getImage());
console.log(prod1.getDesription());
console.log(prod1.getID()); */

const products = [
    new Product(
        15,
        'Yellow cheese',
        '2016/03/05/19/24/cheese-1238395_960_720.jpg',
        'great product really!',
    ),
    new Product(
        3,
        'Ice cream',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        'be careful - very cold',
    ),
    new Product(
        55,
        'aaa',
        '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
        '',
    ),
];


export{
    products
};