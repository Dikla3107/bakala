const pictures = [{
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'A new pic',
        artist: 'Bruno Brave',
        price: 15,
        inStock: true,
    },
    {
        image: 'https://cdn.pixabay.com/photo/2016/03/05/19/24/cheese-1238395_960_720.jpg',
        name: 'Another picture',
        artist: 'Carla Uno',
        price: 200,
        inStock: false,
    },
];
console.log('JSload');
function displayPictures() {
    console.log('in display');
   let html = '';
    let stockStatus = false;

    pictures.forEach(pic =>{
        if(pic.inStock === true){
            stockStatus = '';
        }
        else{
            stockStatus = 'Not Available';
        }
        html +=
        `<div class="card" style="width: 18rem;">
            <img src="${pic.image}" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">${pic.name}</h5>
                <p class="card-text">$${pic.artist}</p>
                <p class = "card-text" >$${pic.price}</p>
                <span class = 'text-danger'${stockStatus}> Not availabe < /span>
            </div>
        </div>`;
    })
    console.log('html');
    const container = document.getElementById('pics-container');
    console.log('container');
    container.innerHTML = html;
    
}
displayPictures();