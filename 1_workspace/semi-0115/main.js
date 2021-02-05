const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const feedback = document.getElementById("feedback");

btn1.onclick = function () {
  feedback.textContent = "もっと年上だよ"
}
btn2.onclick = function () {
  feedback.textContent = "正解!"
}
btn3.onclick = function () {
  feedback.textContent = "もっと年下だよ"
}

// オブジェクト自己紹介

const sacky = {
  age: 21,
  gender: "man",
  likes: ["music", "game", "study"],
  sayHello: function () {
    console.log("こんにちは")
  },
  university: {
    name: "Waseda",
    grade: 3,
    majors: ["engineer", "Environment"]
  }
}