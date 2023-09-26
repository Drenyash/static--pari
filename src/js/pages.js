const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Includes
const head = fs.readFileSync("src/includes/head.html");
const sectionHeader = fs.readFileSync("src/includes/section-header.html");
const sectionFooter = fs.readFileSync("src/includes/section-footer.html");
const temp = fs.readFileSync("src/includes/temp.html");

// Pages
module.exports = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        inject: "body",
        title: "Корзина Пари",
        head,
        temp
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/product-card.html",
        filename: "product-card.html",
        inject: "body",
        title: "Карточка товара",
        head,
        temp
    })
];
