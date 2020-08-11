const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", { prods: adminData.products, title: "Shop", path: "/" });
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
