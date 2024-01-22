const kerdesTomb = [
  {
    kerdes: "The _____ of the aircraft is designed to reduce drag and improve aerodynamics.",
    valaszok: ["Nacelle", "Nose", "Fuselage", "Radome"],
    helyesValasz: 1,
    explanation: "The 'nose' of the aircraft is the forward section, and its design is crucial for minimizing drag and enhancing aerodynamic performance.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "Pilots use the _____ to have a clear view of the outside environment during the flight.",
    valaszok: ["Aileron", "Windscreen", "Flap", "Slat"],
    helyesValasz: 1,
    explanation: "The 'windscreen' provides pilots with a clear view of the surroundings, allowing for safe navigation and operation of the aircraft.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The _____ on top of the aircraft is used for communication and navigation purposes.",
    valaszok: ["Aerial", "Spoiler", "Tail Fin", "Engine"],
    helyesValasz: 0,
    explanation: "The 'aerial' on top of the aircraft serves as an antenna for communication and navigation systems, facilitating reliable signal reception and transmission.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The pilot controls the roll of the aircraft by manipulating the _____.",
    valaszok: ["Elevator", "Aileron", "Rudder", "Flap"],
    helyesValasz: 1,
    explanation: "The 'aileron' is responsible for controlling the roll of the aircraft, allowing the pilot to bank and turn the airplane.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "During the descent, pilots deploy the _____ to increase drag and reduce airspeed.",
    valaszok: ["Spoiler", "Fuselage", "Tail Fin", "Engine"],
    helyesValasz: 0,
    explanation: "Pilots deploy the 'spoiler' during descent to disrupt the airflow over the wings, increasing drag and assisting in reducing airspeed.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "Pilots extend the _____ during takeoff and landing to increase lift.",
    valaszok: ["Aileron", "Flap", "Slat", "Engine"],
    helyesValasz: 1,
    explanation: "Extending the 'flap' during takeoff and landing increases the wing's surface area, generating more lift and allowing for safer flight at lower speeds.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The _____ enhances the lift of the wing at lower speeds, such as during takeoff and landing.",
    valaszok: ["Nose", "Slat", "Tail Fin", "Radome"],
    helyesValasz: 1,
    explanation: "The 'slat' is a movable aerodynamic surface that enhances wing lift at lower speeds, providing improved performance during critical phases of flight.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The _____ at the end of the wings reduces drag and improves fuel efficiency.",
    valaszok: ["Flap", "Slat", "Winglet", "Emergency Exit"],
    helyesValasz: 2,
    explanation: "The 'winglet' at the end of the wings reduces drag and improves fuel efficiency by minimizing the formation of wingtip vortices.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The main structure of an aircraft, the _____, houses the cockpit, passenger cabin, and cargo hold.",
    valaszok: ["Aerial", "Fuselage", "Nose", "Engine"],
    helyesValasz: 1,
    explanation: "The 'fuselage' is the primary structure of an aircraft, housing essential components such as the cockpit, passenger cabin, and cargo hold.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The _____ is responsible for controlling the yaw of the aircraft.",
    valaszok: ["Elevator", "Rudder", "Aileron", "Windscreen"],
    helyesValasz: 1,
    explanation: "The 'rudder' controls the yaw of the aircraft, helping maintain directional stability during various flight conditions.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "Pilots use the _____ to control the pitch or attitude of the aircraft.",
    valaszok: ["Aileron", "Slat", "Tail Fin", "Elevator"],
    helyesValasz: 3,
    explanation: "The 'elevator' is a movable control surface used by pilots to control the pitch or attitude of the aircraft, influencing its angle of ascent or descent.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The _____, also known as the vertical stabilizer, prevents the aircraft from swaying side to side.",
    valaszok: ["Aerial", "Tail Fin", "Winglet", "Flap"],
    helyesValasz: 1,
    explanation: "The 'tail fin,' or vertical stabilizer, prevents the aircraft from swaying side to side by providing stability along the vertical axis.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The landing gear includes wheels and _____, providing a smooth landing and takeoff.",
    valaszok: ["Engine", "Tyre", "Radome", "Emergency Exit"],
    helyesValasz: 1,
    explanation: "The landing gear includes wheels and 'tyres,' contributing to a smooth landing and takeoff by absorbing the forces during ground operations.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "The _____ is the primary power source that propels the aircraft forward.",
    valaszok: ["Engine", "Flap", "Slat", "Nose"],
    helyesValasz: 0,
    explanation: "The 'engine' serves as the primary power source, propelling the aircraft forward by generating thrust through combustion or other propulsion mechanisms.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "Passengers are instructed on the location of the _____ during the pre-flight safety briefing.",
    valaszok: ["Emergency Exit", "Rudder", "Winglet", "Aileron"],
    helyesValasz: 0,
    explanation: "During the pre-flight safety briefing, passengers are instructed on the location of the 'emergency exit,' emphasizing its role as a rapid means of egress in case of an emergency.",
    userAnswer: null,
    answered: false,
  },
  {
    kerdes: "During the approach phase, pilots retract the _____ to optimize the wing's performance.",
    valaszok: ["Spoiler", "Engine", "Tail Fin", "Nose"],
    helyesValasz: 0,
    explanation: "Pilots retract the 'spoiler' during the approach phase to optimize the wing's performance, reducing drag and ensuring smooth and controlled descent.",
    userAnswer: null,
    answered: false,
  },
];



// Új változó a felhasználó válaszainak tárolására
let userAnswers = new Array(kerdesTomb.length).fill(null);
let currentQuestionIndex = 0;
let selectedAnswerIndex = -1;
let quizFinished = false;

function loadQuestion() {
  const questionDiv = document.getElementById("question");
  const answerDivs = [];

  for (let i = 1; i <= 4; i++) {
    answerDivs.push(document.getElementById(`answer${i}`));
  }

  const currentQuestion = kerdesTomb[currentQuestionIndex];

  questionDiv.innerHTML = `<h3>${currentQuestion.kerdes}</h3>`;

  for (let i = 0; i < currentQuestion.valaszok.length; i++) {
    let svgIcon = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    if (i === selectedAnswerIndex) {
      svgIcon = `<svg width="20px" height"20px" viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-circle-help" fill="#FFCD57" stroke="#FFCD57"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>976</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M9,0 C4.582,0 1,3.581 1,8 C1,12.419 4.582,16 9,16 C13.418,16 17,12.419 17,8 C17,3.581 13.418,0 9,0 L9,0 Z M9,14 C8.44769231,14 8,13.5523077 8,13 C8,12.4469231 8.44769231,12 9,12 C9.55230769,12 10,12.4469231 10,13 C10,13.5523077 9.55230769,14 9,14 L9,14 Z M10.647,8.243 C10.174,8.608 9.913,8.809 9.913,9.39 L9.913,10.204 C9.913,10.663 9.507,11.038 9.006,11.038 C8.504,11.038 8.097,10.663 8.097,10.204 L8.097,9.39 C8.097,8.033 8.928,7.392 9.477,6.968 C9.951,6.602 10.211,6.402 10.211,5.822 C10.211,5.168 9.67,4.634 9.006,4.634 C8.341,4.634 7.801,5.167 7.801,5.822 C7.801,6.283 7.393,6.655 6.892,6.655 C6.392,6.655 5.983,6.283 5.983,5.822 C5.983,4.248 7.34,2.968 9.006,2.968 C10.671,2.968 12.027,4.247 12.027,5.822 C12.027,7.178 11.197,7.818 10.647,8.243 L10.647,8.243 Z" fill="#FFCD57" class="si-glyph-fill"> </path> </g> </g></svg>`;
    }

    answerDivs[i].innerHTML = `${svgIcon}<p>${currentQuestion.valaszok[i]}</p>`;
  }

  // Elrejtjük azokat a válaszlehetőségeket, amelyek nem tartoznak a kérdéshez
  for (let i = currentQuestion.valaszok.length; i < answerDivs.length; i++) {
    answerDivs[i].style.display = "none";
  }

  // Kérdés sorszáma és összes kérdés száma megjelenítése a headerben
  const header = document.querySelector("header");
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = kerdesTomb.length;
  header.querySelector("h1").innerHTML = `Kérdés: ${questionNumber}/${totalQuestions}`;
}


function selectAnswer(index) {
  // Ellenőrizzük, hogy a teszt befejeződött-e
  if (quizFinished) {
    return;
  }

  if (kerdesTomb[currentQuestionIndex].answered === false) {
    selectedAnswerIndex = index;
    kerdesTomb[currentQuestionIndex].userAnswer = index;
    resetAnswerStyles();
    document.getElementById(`answer${index + 1}`).style.backgroundColor = "white";
    document.getElementById('test-button').style.backgroundColor = "#FFCD57";
    loadQuestion();
  }
}

function resetAnswerStyles() {
  const answerDivs = [
    document.getElementById("answer1"),
    document.getElementById("answer2"),
    document.getElementById("answer3"),
    document.getElementById("answer4"),
  ];

  for (let i = 0; i < kerdesTomb[currentQuestionIndex].valaszok.length; i++) {
    answerDivs[i].style.backgroundColor = "#fff";

    let svgIcon = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F5AB00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    answerDivs[i].innerHTML = `${svgIcon}<p>${kerdesTomb[currentQuestionIndex].valaszok[i]}</p>`;
  }

  // Visszaállítjuk a válaszokat, amelyeket előzőleg elrejtettünk
  for (let i = kerdesTomb[currentQuestionIndex].valaszok.length; i < answerDivs.length; i++) {
    answerDivs[i].style.display = "block";
  }
}

function checkAnswer() {
  if (quizFinished) {
    return;
  }

  if (selectedAnswerIndex === -1) {
    alert("Válassz egy választ!");
    return;
  }

  kerdesTomb[currentQuestionIndex].answered = true;
  selectedAnswerIndex = kerdesTomb[currentQuestionIndex].userAnswer;

  const currentQuestion = kerdesTomb[currentQuestionIndex];
  const correctAnswerIndex = currentQuestion.helyesValasz;

  if (selectedAnswerIndex === correctAnswerIndex) {
    document.getElementById(`answer${selectedAnswerIndex + 1}`).style.backgroundColor = "#6EB462";
  } else {
    document.getElementById(`answer${selectedAnswerIndex + 1}`).style.backgroundColor = "#FF5A60";
    document.getElementById(`answer${correctAnswerIndex + 1}`).style.backgroundColor = "#6EB462";
  }







  // Megjelenítjük az "Explanation" gombot
  document.getElementById("explanation-button").style.display = "block";

// Megnézzük befejeztük e a kvízt
  if (kerdesTomb.every((question) => currentQuestionIndex === kerdesTomb.length - 1)) {
    document.getElementById("test-button").innerHTML = "Finish";
    document.getElementById("test-button").onclick = showOverlayAndAlertBox;   
  } else {
    document.getElementById("test-button").innerHTML = "Next";
    document.getElementById("test-button").onclick = loadNextQuestion;
  }
  if (kerdesTomb.every((question) => question.answered)) {
    document.getElementById("test-button").innerHTML = "Finnish";
    document.getElementById("test-button").onclick = finishQuiz;   
  }
}
//



function loadPreviousQuestion() {
// ne jelenítse meg a helyes választ ha nem volt válaszolva a kérdésre. 
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    selectedAnswerIndex = kerdesTomb[currentQuestionIndex].userAnswer; // Frissítjük a selectedAnswerIndex-et a felhasználó válaszával
    
    resetAnswerStyles();
    loadQuestion();
    
    document.getElementById("test-button").innerHTML = "Submit";
    document.getElementById("test-button").onclick = checkAnswer;
    document.getElementById("explanation-button").style.display = "none";
  } else {
    alert("Ez az első kérdés, nincs előző kérdés.");
  }
  if (kerdesTomb[currentQuestionIndex].answered === true){
    checkAnswer();
  }
  if (kerdesTomb[currentQuestionIndex].answered === false){
    selectedAnswerIndex = -1;
    kerdesTomb[currentQuestionIndex].userAnswer = -1;
    userAnswer = -1;
    loadQuestion();
  }
}

function loadNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < kerdesTomb.length) {
    selectedAnswerIndex = kerdesTomb[currentQuestionIndex].userAnswer;

    resetAnswerStyles();
    loadQuestion(); 
  
    document.getElementById("test-button").innerHTML = "Submit";
    document.getElementById("test-button").onclick = checkAnswer;
    document.getElementById("explanation-button").style.display = "none";
  } else {
    alert("A kvíz véget ért!");
  }

  if (kerdesTomb[currentQuestionIndex].answered === true) {
    checkAnswer();
  }

  if (kerdesTomb[currentQuestionIndex].answered === false) {
    selectedAnswerIndex = -1;
    kerdesTomb[currentQuestionIndex].userAnswer = -1;
    userAnswer = -1;
    loadQuestion();
  }
}

function finishQuiz() {
  // Számoljuk meg a jó és rossz válaszokat, valamint a megválaszolt és megválaszolatlan kérdéseket
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let answeredQuestions = 0;
  let unansweredQuestions = 0;

  for (let i = 0; i < kerdesTomb.length; i++) {
    if (kerdesTomb[i].answered) {
      answeredQuestions++;
      if (kerdesTomb[i].userAnswer === kerdesTomb[i].helyesValasz) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    } else {
      unansweredQuestions++;
    }
  }

  // Kiírjuk az eredményeket
  alert(`Kvíz vége!\n\nÖsszes kérdés: ${kerdesTomb.length}\nMegválaszolt kérdések: ${answeredQuestions}\nJó válaszok: ${correctAnswers}\nRossz válaszok: ${incorrectAnswers}\nMegválaszolatlan kérdések: ${unansweredQuestions}`);
}

function showOverlayAndAlertBox() {
  document.getElementById("overlay").style.visibility = "visible";
  document.getElementById("alert-box").style.visibility = "visible";
}
function hideOverlayAndAlertBox() {
  document.getElementById("overlay").style.visibility = "hidden";
  document.getElementById("alert-box").style.visibility = "hidden";
}






// Kezdeti kérdés betöltése
loadQuestion();
  