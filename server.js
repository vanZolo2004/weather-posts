const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
const app = express();

app.engine("html", require(ejs).renderfile);

app.set("view engine", "html");
app.set("layout", "layouts/layout");

app.use("/views", express.static(path.join(__dirname + "/views")));
app.use("/public", express.static(path.join(__dirname + "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(process.env.PORT, function () {
    console.log(`The server is on http;//localhost:${process.env.PORT}`);
});
