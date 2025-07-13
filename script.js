const questions = [
  {
    question: "राजस्थान की राजधानी क्या है?",
    options: ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    answer: "जयपुर",
  },
  {
    question: "पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
    options: ["अटलांटिक", "प्रशांत", "हिंद", "आर्कटिक"],
    answer: "प्रशांत",
  }
];

let index = 0;
let score = 0;
let time = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const q = questions[index];
  questionContainer.innerHTML = `<h3>${q.question}</h3>`;
  optionsContainer.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (opt === q.answer) {
        score += 1;
      }
      scoreDisplay.innerText = `Score: ${score}`;
      index++;
      if (index < questions.length) {
        showQuestion();
      } else {
        questionContainer.innerHTML = "<h2>Quiz Completed!</h2>";
        optionsContainer.innerHTML = "";
      }
    };
    optionsContainer.appendChild(btn);
  });
}

showQuestion();

setInterval(() => {
  time++;
  timeDisplay.innerText = time;
}, 1000);
