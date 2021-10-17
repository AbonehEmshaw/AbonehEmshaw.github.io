const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
const products = [
    { id: 1, name: 'product 1', description: "product description", price: 10},
    { id: 2, name: 'product 2', description: "product description", price: 20},
    { id: 3, name: 'product 3', description: "product description", price: 30},
    { id: 4, name: 'product 4', description: "product description", price: 40},
    { id: 5, name: 'product 5', description: "product description", price: 50},
    { id: 6, name: 'product 6', description: "product description", price: 60},
    { id: 7, name: 'product 7', description: "product description", price: 70},
    { id: 8, name: 'product 8', description: "product description", price: 80},
    { id: 9, name: 'product 9', description: "product description", price: 90},
    { id: 10, name:'product 10', description: "product description", price: 100},
    ];

const shopCart={};
app.get('/products/:id', (req, res) => {
    const details=products.filter(product =>product.id === parseInt(req.params.id));
    res.render('product', {data: {details}});
});

app.get('/', (req, res) => {
    res.render('shop', {data: { products }});
});

app.post('/addToCart', (req, res) => {
    let nv=req.body.name;
    let price=req.body.price
    if(shopCart.hasOwnProperty(nv)){
        shopCart[`${nv}`].price +=parseInt(price);
        shopCart[`${nv}`].quantity +=1;
    }
    else{
    let object={name:nv,price:parseInt(price),quantity:1};
    shopCart[nv]=object;
    }
   res.render("shoppingCart",{data:shopCart});

});

app.listen(3000, () => {
    console.log("Server started at 3000");
});