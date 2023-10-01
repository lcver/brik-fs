console.log("=== seeder start ===");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db_brik_test_fs");
const db = mongoose.connection;

const Product = require("../api/v1/products/model");
const Category = require("../api/v1/categories/model");
const User = require("../api/v1/users/model");

let queryArray = [];
queryArray.push(
    Category.create([
        {
            name: "jajanan ringan",
        },
        {
            name: "jajanan tradisional",
        },
        {
            name: "ciki ciki",
        },
        {
            name: "kue basah",
        },
    ])
);
console.log("seeding categories");

queryArray.push(
    User.create({
        name: "user demo",
        email: "user@mail.com",
        password: "112233",
    })
);
console.log("seeding user");

Promise.all(queryArray)
    .then(([Categories, Users]) => {
        const productSeed = [
            {
                category: Categories[2],
                sku: "MHZVTK",
                name: "Ciki demo",
                description:
                    "Ciki ciki yang super enak, hanya di toko klontong kami",
                weight: 500,
                width: 5,
                length: 5,
                height: 5,
                image: "products/ciki.jpg",
                price: 30000,
            },
            {
                category: Categories[2],
                sku: "MHZVTK",
                name: "Ciki ciki",
                description:
                    "Ciki ciki yang super enak, hanya di toko klontong kami",
                weight: 500,
                width: 5,
                length: 5,
                height: 5,
                image: "products/ciki.jpg",
                price: 30000,
            },
            {
                category: Categories[2],
                sku: "MHZVTK",
                name: "Ciki ciki",
                description:
                    "Ciki ciki yang super enak, hanya di toko klontong kami",
                weight: 500,
                width: 5,
                length: 5,
                height: 5,
                image: "products/ciki.jpg",
                price: 2000,
            },
        ];
        Product.create(productSeed);
        console.log("seeding products");
        console.log("seeder complete");
    })
    .catch((Error) => {
        console.log("Error: ", Error);
    });
