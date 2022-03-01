// external imports here
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

// internal imports here
const {
  notFoundRoute,
  errorHandler,
} = require("./middleware/common/errorHandler");
const productsRoute = require("./routes/products.route");
const newArrivalRoute = require("./routes/newArrival.route");
const saleProductsRoute = require("./routes/saleProducts.route");
const cartProductsRoute = require("./routes/cartProducts.route");
const individualOrderRoute = require("./routes/individualOrder.route");
const searchResultRoute = require("./routes/searchResult.route");
const wishListProductsRoute = require("./routes/wishListProducts.route");
const singleProductRoute = require("./routes/singleProduct.route");
const categorizeProductsRoute = require("./routes/categorizeProducts.route");

// MidleWere and request parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connection here
mongoose
  .connect(process.env.MONGODB__CONNECTION__STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection successfully!"))
  .catch((err) => console.log(err));

// application routes here
app.use("/products", productsRoute); //all products
app.use("/newArrivalProducts", newArrivalRoute); // new arrival products
app.use("/saleProducts", saleProductsRoute); // discount / sale products
app.use("/getFromCartList", cartProductsRoute); // cart list products
app.use("/allOrders/myOrders", individualOrderRoute); // my orders products
app.use("/products/searchedProducts", searchResultRoute); // search results products
app.use("/getFromWishList", wishListProductsRoute); // wishList products
app.use("/shop/singleProducts", singleProductRoute); // single view products
app.use("/products", categorizeProductsRoute); // categorize products

// Check server is running or not
app.get("/", (req, res) => {
  res.send("RUNNIG ESHOP SERVER!");
});

// 404 not found route here
app.use(notFoundRoute);

// common error handler here
app.use(errorHandler);

// Listen server what we do here
app.listen(PORT, () => {
  console.log("ESHOP app is listenning.");
});
