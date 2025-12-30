


console.log("Video 39")

const myClass = ["khanh", "jayce", "hung", "nam", "bla bla"]

// console.log(myClass, myClass.length)

// for (i = 0; i < myClass.length; i++) {
//     console.log("i =", i, "and value =", myClass[i])
// }

// console.log("=======")
// for (i = 1; i <= myClass.length; i++) {
//     console.log("i =", i, "and value =", myClass[i - 1])
// }

//for-each
myClass.forEach(function (value, index) {
    console.log("value =", value, "index =", index)
})

console.log("======")
myClass.forEach((value, index) => {
    console.log("value =", value, "index =", index)
})