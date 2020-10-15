var ProductsModel = require('../models/products.js') // import from models/products.js file

function index(req, res) {
    let products = ProductsModel.getProducts() // execute a function from the imported file, store the result in a variable
    res.send('welcome to amazon. our productos are:' + products);
}

module.exports = {
    index: index // export the "index" controller function
}