const displayQuestion = document.getElementById("displayQuestion");
const displayAnswer = document.getElementById("displayAnswer");
document.getElementById("endGameBtn").style.display = "none";

function createQuestion() {
  // Hide the start button and show the end game button
  document.getElementById("startGameBtn").style.display = "none";
  document.getElementById("endGameBtn").style.display = "inline-block";

  // Create a random index
  const randomIndex = Math.floor(Math.random() * C_SCALE.length);

  // Use the random index to create a random solfege
  let randomSolfege = C_SCALE[randomIndex].solfege;

  // Create a random question using the random solfege
  let randomQuestion = `${randomSolfege} is which note of the C Major Scale? `;

  // Append the random question to the displayQuestion div
  const question = document.createElement("p");
  question.appendChild(document.createTextNode(randomQuestion));
  displayQuestion.appendChild(question);

  // Use the C_SCALE array to create a hint instead of hard coding
  let scale = `Hint: The Scale is ${C_SCALE[0].notename} ${C_SCALE[1].notename} 
  ${C_SCALE[2].notename} ${C_SCALE[3].notename} ${C_SCALE[4].notename} 
  ${C_SCALE[5].notename} ${C_SCALE[6].notename}`;

  // Append the scale notenames to the DisplayQuestion div
  const displayScale = document.createElement("p");
  displayScale.appendChild(document.createTextNode(scale));
  displayQuestion.appendChild(displayScale);

  // Create an input field for the user's response
  const response = document.createElement("input");
  response.setAttribute("type", "text");
  displayQuestion.appendChild(response);

  // Create a button for submitting the answer
  const submitAnswer = document.createElement("input");
  submitAnswer.setAttribute("type", "submit");
  submitAnswer.textContent = "Submit";
  displayQuestion.appendChild(submitAnswer);

  // Add a click event listener to the "Submit" button
  submitAnswer.addEventListener("click", function () {
    checkAnswer(randomIndex, response);
  });
}

function checkAnswer(randomIndex, response) {
  // Remove the last question
  while (displayQuestion.firstChild) {
    displayQuestion.removeChild(displayQuestion.firstChild);
  }

  // Remove the last answer
  while (displayAnswer.firstChild) {
    displayAnswer.removeChild(displayAnswer.firstChild);
  }

  // Append the grading comments to the displayAnswer div
  const grading = document.createElement("p");
  displayAnswer.appendChild(grading);

  if (response.value === "") {
    grading.textContent = "Please enter an answer.";
  } else if (
    response.value.toLowerCase() ===
    C_SCALE[randomIndex].notename.toLowerCase()
  ) {
    grading.textContent = "Great job!";
    createQuestion();
  } else {
    grading.textContent = `Nice try, but the answer is ${C_SCALE[randomIndex].notename}.`;
    createQuestion();
  }
}