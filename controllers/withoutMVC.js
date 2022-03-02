// Save the details of product to the database
app.post("/addToWishList", async (req, res) => {
  const favProduct = req.body;
  const result = await wishListProductsCollection.insertOne(favProduct);
  res.json(result);
});
