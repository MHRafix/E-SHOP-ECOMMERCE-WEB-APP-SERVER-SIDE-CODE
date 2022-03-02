// external imports here
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

// internal imports here
const {
  not__found__route,
  error__handler,
} = require("./middleware/common/errorHandler");
const products__route = require("./routes/products.route");

// all get api request route import here
const new__arrival__route = require("./routes/newArrival.route");
const sale__products__route = require("./routes/saleProducts.route");
const cart__products__route = require("./routes/cartProducts.route");
const individual__order__route = require("./routes/individualOrder.route");
const search__result__route = require("./routes/searchResult.route");
const wish__list__products__route = require("./routes/wishListProducts.route");
const single__product__route = require("./routes/singleProduct.route");
const categorize__products__route = require("./routes/categorizeProducts.route");
const size__by__products__route = require("./routes/sizeByProducts.route");
const products__by__price__route = require("./routes/productsByPrice.route");

// all post api route import here
const add__products__to__cart = require("./routes/addToCartList.route");
const add__order__to__database = require("./routes/allOrders.route");

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

// application all routes here

// all get api routes here
app.use("/products", products__route);
app.use("/newArrivalProducts", new__arrival__route);
app.use("/saleProducts", sale__products__route);
app.use("/getFromCartList", cart__products__route);
app.use("/allOrders/myOrders", individual__order__route);
app.use("/products/searchedProducts", search__result__route);
app.use("/getFromWishList", wish__list__products__route);
app.use("/shop/singleProducts", single__product__route);
app.use("/products", categorize__products__route);
app.use("/products/sizedProducts", size__by__products__route);
app.use("/products/filteredProducts", products__by__price__route);

// all post api here
app.use("/addToCartList", add__products__to__cart);
// app.use("/addToWishList", add__products__to__wishlist);
app.use("/allCustomersOrders", add__order__to__database);

// Check server is running or not
app.get("/", (req, res) => {
  res.send("RUNNIG ESHOP SERVER!");
});

// 404 not found route here
app.use(not__found__route);

// common error handler here
app.use(error__handler);

// Listen server what we do here
app.listen(PORT, () => {
  console.log("ESHOP app is listenning.");
});
