


console.log("Video 41")

const ages = [10, 20, 30, 25, 12, 19];

const ageX2 = ages.map((item, index) => {
    return item * 2;
})

const ageGreatThan18 = ages.filter((item, index) => {
    return item > 18; //true
})

console.log("original: ", ages)
console.log("ageX2: ", ageX2)

console.log("ageGreatThan18: ", ageGreatThan18)