


console.log("Video 40")

const scores = [10, 8, 3, 7, 5];

// scores.forEach((value, index) => {
//     console.log("index =", index, "value =", value)
// })

const scoresx2 = scores.map((value, index) => {
    return value * 2;
})

const otherScoresx2 = scores.map((value, index) => value * 2)

console.log("scores =", scores)
console.log("scorex2 =", scoresx2)
console.log("otherScoresx2 =", otherScoresx2)
