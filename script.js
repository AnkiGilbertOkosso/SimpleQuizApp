const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    // Add more questions as needed
  ];
  
  const quizContainer = document.getElementById("quiz");
  const submitBtn = document.getElementById("submitBtn");
  let score = 0;
  
  function buildQuiz() {
    quizData.forEach((data, index) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      questionElement.innerHTML = `${index + 1}. ${data.question}`;
  
      const optionsElement = document.createElement("div");
      optionsElement.classList.add("options");
  
      data.options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="question${index}" value="${option}">${option}`;
        optionsElement.appendChild(label);
      });
  
      quizContainer.appendChild(questionElement);
      quizContainer.appendChild(optionsElement);
    });
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".options");
  
    quizData.forEach((data, index) => {
      const answerContainer = answerContainers[index];
      const selectedOption = answerContainer.querySelector(`input[name=question${index}]:checked`);
  
      if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === data.answer) {
          score++;
        }
      }
    });
  
    const totalQuestions = quizData.length;
    const percentageScore = (score / totalQuestions) * 100;
    const resultMessage = `You scored ${score} out of ${totalQuestions}. (${percentageScore}%)`;
  
    const resultElement = document.createElement("p");
    resultElement.textContent = resultMessage;
  
    quizContainer.appendChild(resultElement);
  }
  
  buildQuiz();
  
  submitBtn.addEventListener("click", showResults);
  