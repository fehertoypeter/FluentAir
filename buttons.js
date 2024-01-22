function showExplanation() {
  const currentQuestion = kerdesTomb[currentQuestionIndex];
    document.getElementById("side-tab").style.right = "0px";
    const explanationDiv = document.getElementById("side-tab-content");
    explanationDiv.innerHTML = `<h3>${currentQuestion.explanation}</h3>`;
}

function showNote() {
  const currentQuestion = kerdesTomb[currentQuestionIndex];
    document.getElementById("side-tab").style.right = "0px";
    const explanationDiv = document.getElementById("side-tab-content");
    explanationDiv.innerHTML = `<h3>${currentQuestion.note}</h3>`;
}

function showComment() {
  const currentQuestion = kerdesTomb[currentQuestionIndex];
    document.getElementById("side-tab").style.right = "0px";
    const explanationDiv = document.getElementById("side-tab-content");
    explanationDiv.innerHTML = `<h3>${currentQuestion.comment}</h3>`;
}

function closeSideTab() {
  document.getElementById("side-tab").style.right = "-400px";

}