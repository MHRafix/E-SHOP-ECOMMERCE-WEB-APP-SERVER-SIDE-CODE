const express = require('express');

// Import mongodb, cors, objectId, stripe and dotenv
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const ObjectId = require('mongodb').ObjectId;

// App and Port
const app = express();
const port = process.env.PORT || 5000;

// MidleWere
app.use(cors());
app.use(express.json());

// Server to database connection uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ttpfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


/********************************************
 * Node server crud operation start from here
 ********************************************/

 async function run() {
    try {
        await client.connect();

        // Recognize the database and data collection
        const database = client.db('ESHOP'); // Database name
        const productsCollection = database.collection('Products');
        const cartedProductsCollection = database.collection('CartedProducts');
        const wishListProductsCollection = database.collection('WishListProducts');

        // Save the details of product to the database
        app.post('/addToCartList', async (req, res) => {
            const cartedProduct = req.body;
            const result = await cartedProductsCollection.insertOne(cartedProduct);
            res.json(result);
        });

        // Save the details of product to the database
        app.post('/addToWishList', async (req, res) => {
            const favProduct = req.body;
            const result = await wishListProductsCollection.insertOne(favProduct);
            res.json(result);
        });
        
        // Get all products from the mongodb database
        app.get('/products', async (req, res) => {
            const findProducts = productsCollection.find({});
            const allProduct = await findProducts.toArray();
            res.send(allProduct);
        });
       
        // Get all products from the mongodb database
        app.get('/getFromCartList', async (req, res) => {
            const findProducts = cartedProductsCollection.find({});
            const allProduct = await findProducts.toArray();
            res.send(allProduct);
        });
      
        // Get all products from the mongodb database
        app.get('/getFromWishList', async (req, res) => {
            const findProducts = wishListProductsCollection.find({});
            const allProduct = await findProducts.toArray();
            res.send(allProduct);
        });

        // Get all products from the mongodb database by search text
        app.get('/products/searchedProducts/:productTitle', async (req, res) => {
            // const query = { productTitle: searchText };
            const findProducts = productsCollection.find({});
            const allProducts = await findProducts.toArray();
            const searchText = req.params.productTitle;
            const searchedProducts = allProducts.filter(products => products.productTitle.toLowerCase().includes(searchText.toLowerCase()));
            res.send(searchedProducts);
        });


        // Get selected product data from the mongodb database for showing to single product details page
        app.get('/shop/singleProducts/:productId', async (req, res) => {
            const uniqueId = req.params.productId;
            const query = { _id:ObjectId(uniqueId) };
            const findProducts = productsCollection.find(query);
            const selectedProduct = await findProducts.toArray();
            let result;
            for(const product of selectedProduct){
                result = product;
            }
            if(result){
                res.send(result);
            }
        });

        // Get all products and filter by category from the mongodb database
        app.get('/products/:category', async (req, res) => {
            const cat = req.params.category;
            const query = { category: cat };
            const findProducts = productsCollection.find(query);
            const result = await findProducts.toArray();
            res.send(result);
        });

        // Get all products and filter by size from the mongodb database
        app.get('/products/sizedProducts/:size', async (req, res) => {
            const findProducts = productsCollection.find({});
            const allProducts = await findProducts.toArray();
            const reqSize = req.params.size;
            let sizesArr;
            let matchedProducts = [];
            for(const product of allProducts){
                sizesArr = product.sizes;
                if(sizesArr.includes(reqSize) === true){
                    matchedProducts.push(product);
                }else{
                    //Nothing here
                }
            }
            if(matchedProducts){
                res.send(matchedProducts);
            }
        });
        
        // Get all products and filter by size from the mongodb database
        app.get('/products/filteredProducts/:minPrice/:maxPrice', async (req, res) => {
            const findProducts = productsCollection.find({});
            const allProducts = await findProducts.toArray();
            const minimumPrice = req.params.minPrice;
            const maximumPrice = req.params.maxPrice;
            const filteredProducts = allProducts.filter(product => product.salePrice >= Number(minimumPrice) && product.salePrice <= Number(maximumPrice));
            res.send(filteredProducts);            
        });
    }

    finally {
        // await client.close();
    }

}

// Call the async function
run().catch(console.dir);


/****************************************
 * Node server crud operation end to here
 ****************************************/


// Check server is running or not
app.get('/', (req, res) => {
    res.send('Running ESHOP Server!');
});

// Listen server what we do here
app.listen(port, () => {
    console.log("ESHOP app is listenning.");
});