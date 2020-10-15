let products = ["lg big screen tv", "iphone x", "bose bluetooth earbuds"]

function getProducts() {
    return products
}

// exporting my getProducts function so that other files can access it. 
// Note that when exporting functions we don't do getProducts() because that would execute the function. So: Just the name
module.exports = {
    getProducts: getProducts
}