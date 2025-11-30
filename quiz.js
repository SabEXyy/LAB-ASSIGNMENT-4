// Web Dev Lab 4 - TechQuiz Master
// Made by Rahul | BCA Cybersecurity

const quizData = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 12 × 12?", answer: "144" },
  { question: "Who painted the Mona Lisa?", answer: "leonardo da vinci" },
  { question: "What is the largest ocean on Earth?", answer: "pacific" },
  { question: "In which year did India gain independence?", answer: "1947" },
  { question: "What is the chemical symbol for Gold?", answer: "au" }
];

function startQuiz() {
  let marks = 0;
  
  alert("🚀 Welcome to TechQuiz Master!\n\nTotal Questions: 7\nBest of Luck, Rahul! 🔥\nClick OK to begin...");

  for (let i = 0; i < quizData.length; i++) {
    let ans = prompt(Q${i+1}/7\n\n${quizData[i].question}\n\nAnswer:);

    if (ans === null) {
      alert("Quiz stopped! See you next time 👋");
      return;
    }

    if (ans.trim().toLowerCase() === quizData[i].answer.toLowerCase()) {
      alert("Brilliant! 🌟 Correct!");
      marks++;
    } else {
      alert(Oops! Wrong 😅\nCorrect: ${quizData[i].answer});
    }
  }

  let percent = ((marks / quizData.length) * 100).toFixed(1);
  let message = Quiz Finished! 🎉\n\nScore: ${marks}/${quizData.length} (${percent}%);

  if (marks === 7) message += "\n\nOutstanding! You're a Genius! 🏆";
  else if (marks >= 5) message += "\n\nExcellent work, Rahul! 🔥";
  else if (marks >= 3) message += "\n\nGood try! Keep practicing 💪";
  else message += "\n\nBetter luck next time! 😊";

  alert(message);
}

startQuiz();
