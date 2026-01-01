

console.log("Video 65")

const greeting = (name, callback) => {
    console.log("xin chao: ", name);
    callback();
}

const hello = () => {
    console.log("learn callback...")
}

const hi = () => {
    console.log("say hi...")
}

greeting("jayce", hello)
greeting("bla bla", hi)