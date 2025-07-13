

function checkQuiz() {
  const answer = document.getElementById("quiz-answer").value;
  const result = document.getElementById("quiz-result");

  if (answer === "b") {
    result.textContent = "✅ Correct! Pacu Jalur is a famous longboat race from Riau, Indonesia!";
    result.style.color = "limegreen";
  } else if (answer === "") {
    result.textContent = "❓ Please choose an answer before submitting!";
    result.style.color = "orange";
  } else {
    result.textContent = "❌ Not quite! The correct answer is Pacu Jalur — a thrilling traditional race!";
    result.style.color = "crimson";
  }
}



