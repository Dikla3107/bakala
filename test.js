function addTax(price){
    if (!price || price <= 0 || typeof (price) === 'string'){
        throw error('nothing is for free! please supply a price');
    }
    const vat = 1.17; //Maam
    const total = (price * vat).toFixed(2);
    return total;
}

function generateId(){
    const time = new Date().getTime();
    return.Math.floor(Math.random() * time);
}

const products = [{
    id: 1,
    price: 15,
    name: 'Yellow Cheese',
    image: '2016/03/05/19/24/cheese-1238395_960_720.jpg',
    description: 'great product really!'
},
{
id: 2,
price: 3,
name: 'Ice cream',
image: '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
decription: 'be careful - very cold',
},
{
    id: 3,
    price: 55,
    name: 'aaa',
    image: '2017/04/18/15/10/strawberry-ice-cream-2239377_640.jpg',
    desription: '',
}
];

function search product(){
    const searchField = document.getElementById('search-field');
    const - searchTerm = searchField.ariaValueMax.trim(); /* //' tab '.trim
    () => 'tab' */

    const searchResult = products.filter(prod =>{
        return prod.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase)
    });

    //console.log(searchResult); // = []
    console.log('2) after search - call to function with search results';
    displayProducts(searchResult)
}
function getTotalProducts(){
    const total = document.getElementById('total-products');
    total.innerHTML = products.length;
}
