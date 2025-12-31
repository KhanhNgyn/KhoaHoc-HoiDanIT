


console.log("Video 52")

const myBtnElement = document.getElementById("myBtn");

const myTextElement = document.getElementById("myText");

const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
    console.log("you click my button");
    // myTextElement.innerText = "Just the content with khanh";
    myTextElement.innerHTML = "<strong>Chao ban</strong>, <em>hoc lap trinh voi khanh</em>";
})

backBtnElement.addEventListener("click", () => {
    myTextElement.innerText = ("video 52");
})