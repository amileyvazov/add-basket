let openShopping=document.querySelector('.shopping');
let closeSopping=document.querySelector('.closeShopping');
let list=document.querySelector('.list');
let listCard=document.querySelector('.listCard');
let body=document.querySelector('body');
let total=document.querySelector('.total');
let quantity=document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeSopping.addEventListener('click',function(){
    body.classList.remove('active');
})
let products=[
    {
        name:'Name1',
        img:'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?q=10&h=200',
        price:2200
    },
    {
        name:'Name2',
        img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        price:2000
    },
    {
        name:'Name3',
        img:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        price:20700
    },
    {
        name:'Name4',
        img:'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1',
        price:2500
    },
    {
        name:'Name5',
        img:'https://img.freepik.com/premium-photo/concept-indian-cuisine-baked-chicken-wings-legs-honey-mustard-sauce-serving-dishes-restaurant-black-plate-indian-spices-wooden-table-background-image_127425-18.jpg',
        price:12000
    },
    {
        name:'Name6',
        img:'https://img.freepik.com/free-photo/grilled-chicken-rice-spicy-chickpeas-avocado-cabbage-pepper-buddha-bowl-dark-top-view_127032-1966.jpg',
        price:3000
    },
    
]
let  listCards =[];
function initApp(){
products.forEach((value,key)=>{
    let newDiv =document.createElement('div');
    newDiv.classList.add('item')
    newDiv.innerHTML +=`
    <img src="${value.img}"/>
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add to Card</button>
    `
    list.appendChild(newDiv);
})
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key]=products[key];
        listCards[key].quantity=1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML=``;
    let count=0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
         totalPrice=totalPrice+value.price;
         count= count + value.quantity;
         if(value != null){
            let newDiv=document.createElement('li');
            newDiv.innerHTML=`
            <div><img src="${value.img}"</div>
            <div><h2>${value.name}</h2></div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick='changeQuality(${key},${value.quantify -1})'>-</button>
            <div class="count">${value.quantity}</div>
            <button onclick='changeQuality(${key},${value.quantify +1})'>+</button>
            </div>
            `
            listCard.appendChild(newDiv)
         }
    })
    total.innerHTML=totalPrice.toLocaleString();
    quantity.innerHTML=count;
}
function changeQuality(key,quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity= quantity;
        listCards[key].price=quantity * products[key].price;
    }
    reloadCard();
}
