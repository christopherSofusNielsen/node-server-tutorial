const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

//routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

/**
 * middleware basic
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res) => {
  res.render("404", { title: "Page not found", path: '' });
  //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
