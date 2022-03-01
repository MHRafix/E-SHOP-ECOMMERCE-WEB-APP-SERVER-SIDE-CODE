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
