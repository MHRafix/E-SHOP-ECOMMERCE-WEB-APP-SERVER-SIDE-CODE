// Recognize the database and data collection
const database = client.db("ESHOP"); // Database name
const productsCollection = database.collection("Products");
const cartedProductsCollection = database.collection("CartedProducts");
const wishListProductsCollection = database.collection("WishListProducts");
const allOrderedProductsCollection = database.collection("AllOrderedProducts");

// Save the details of product to the database
app.post("/addToCartList", async (req, res) => {
  const cartedProduct = req.body;
  const result = await cartedProductsCollection.insertOne(cartedProduct);
  res.json(result);
});

// Save the details of customer and products to the database
app.post("/allCustomersOrders", async (req, res) => {
  const ordersData = req.body;
  const result = await allOrderedProductsCollection.insertOne(ordersData);
  res.json(result);
});

// Save the details of product to the database
app.post("/addToWishList", async (req, res) => {
  const favProduct = req.body;
  const result = await wishListProductsCollection.insertOne(favProduct);
  res.json(result);
});

// Get all products and filter by category from the mongodb database
app.get("/products/:category", async (req, res) => {
  const cat = req.params.category;
  const query = { category: cat };
  const findProducts = productsCollection.find(query);
  const result = await findProducts.toArray();
  res.send(result);
});

// Get all products and filter by size from the mongodb database
app.get("/products/sizedProducts/:size", async (req, res) => {
  const findProducts = productsCollection.find({});
  const allProducts = await findProducts.toArray();
  const reqSize = req.params.size;
  let sizesArr;
  let matchedProducts = [];
  for (const product of allProducts) {
    sizesArr = product.sizes;
    if (sizesArr.includes(reqSize) === true) {
      matchedProducts.push(product);
    } else {
      //Nothing here
    }
  }
  if (matchedProducts) {
    res.send(matchedProducts);
  }
});

// Get all products and filter by size from the mongodb database
app.get("/products/filteredProducts/:minPrice/:maxPrice", async (req, res) => {
  const findProducts = productsCollection.find({});
  const allProducts = await findProducts.toArray();
  const minimumPrice = req.params.minPrice;
  const maximumPrice = req.params.maxPrice;
  const filteredProducts = allProducts.filter(
    (product) =>
      product.salePrice >= Number(minimumPrice) &&
      product.salePrice <= Number(maximumPrice)
  );
  res.send(filteredProducts);
});
