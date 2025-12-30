

const product1 = {
    name: "ip12",
    price: 1000,
    inStock: true
}
const product2 = {
    name: "ip13",
    price: 2000,
    inStock: true
}
const product3 = {
    name: "ip14",
    price: 3000,
    inStock: false
}
const product4 = {
    name: "ip15",
    price: 4000,
    inStock: true
}
const product5 = {
    name: "ip16",
    price: 5000,
    inStock: false
}

const product = [product1, product2, product3, product4, product5];
console.log("product: ", product)

const firstProduct = product[0];
console.log("san pham dau tien:", firstProduct.name)

console.log("===========================")

const products = [product1, {
    name: product2.name,
    price: 150,
    inStock: product2.inStock
}, product3, product4, product5];
console.log("product: ", products)

console.log("===========================")

product.push({
    name: "ip17",
    price: 6000,
    inStock: false
})
console.log("last product", product)

console.log("===========================")

product.pop()
console.log("remove last product", product)

console.log("===========================")

product.forEach((value) => {
    console.log("All name product:", value.name)
})

console.log("===========================")

const priceList = products.map((item, index) => {
    return item.price;
})
console.log("Price list:", priceList)

console.log("===========================")

const productInStock = product.filter((item) => {
    return item.inStock === true;
})
console.log("productInStock: ", productInStock)

console.log("===========================")

for (const key in product1) {
    console.log(key, product1[key])
}
