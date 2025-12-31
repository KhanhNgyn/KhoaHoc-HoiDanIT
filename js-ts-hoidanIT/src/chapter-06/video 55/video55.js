


console.log("Video 55")

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const prevElement = document.getElementById("prev");
const prevName = localStorage.getItem("khanh");
if (prevName) {
    prevElement.innerHTML = `<b>${prevName}</b>`
}

btn.addEventListener("click", () => {
    // console.log(input.value)
    localStorage.setItem("khanh", input.value);
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`
})