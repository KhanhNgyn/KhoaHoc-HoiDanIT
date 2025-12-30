



console.log("Video 43")

const person = {
    name1: "khanh",
    age: 21
}

console.log("person: ", person);

//get data
console.log("age: ", person.age);
console.log("nam: ", person["name1"]);

//set data
person.address = "hanoi"
person["language"] = "vietnamese"

delete person.address
console.log("person after: ", person)