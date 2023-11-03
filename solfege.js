const C_SCALE = [
  {
    degree: "1",
    notename: "C",
    solfege: "Do",
  },
  {
    degree: "2",
    notename: "D",
    solfege: "Re",
  },
  {
    degree: "3",
    notename: "E",
    solfege: "Mi",
  },
  {
    degree: "4",
    notename: "F",
    solfege: "Fa",
  },
  {
    degree: "5",
    notename: "G",
    solfege: "Sol",
  },
  {
    degree: "6",
    notename: "A",
    solfege: "La",
  },
  {
    degree: "7",
    notename: "B",
    solfege: "Ti",
  },
];

function createQuestions() {
  for (i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * C_SCALE.length);
    let randomSolfege = C_SCALE[randomIndex].solfege;
    console.log(randomSolfege);
    let response = prompt(
      `${randomSolfege} is which of the following notes of the C Scale? C, D, E, F, G, A, B, C`
    );
    if (response === null) {
      alert("You have cancelled the game.");
      return;
    } else if (response.toLowerCase() === C_SCALE[randomIndex].notename.toLowerCase()) {
      alert("Great job!");
    
    } else {
      alert("The answer is " + C_SCALE[randomIndex].notename);
    }
  }
}
