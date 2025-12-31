


console.log("Video 53")

const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    myTextElement.classList.add("khanh", "to");
})

backBtnElement.addEventListener("click", () => {
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "unset";
    myTextElement.classList.remove("khanh", "to");
})
