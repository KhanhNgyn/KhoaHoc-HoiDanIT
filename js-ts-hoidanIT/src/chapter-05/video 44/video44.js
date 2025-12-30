


console.log("Video 44")

const sv1 = {
    username: "khanh",
    score: 9.6
}

const sv2 = {
    username: "jayce",
    score: 3
}

const sv3 = {
    username: "to",
    score: 5
}

const sinhvien = [sv1, sv2, sv3];
console.log("check sinh vien: ", sinhvien)

// sinhvien.forEach((item, index) => {
//     console.log("index =", index, "name =", item.username)
// })

const person = {
    email: "khanhnguyen@gmail.com",
    age: 21,
    address: "hanoi"
}

for (let key in person) {
    console.log(key, person[key])
}

// for (let value of Object.values(person)) {
//     console.log(value);
// }

// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }