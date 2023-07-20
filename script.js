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
    {
        question: "What is the chemical symbol for water?",
        options: ["Wa", "H2O", "O2", "Wt"],
        answer: "H2O",
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "Korea", "Vietnam"],
        answer: "Japan",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yen",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        answer: "Mount Everest",
      },
      {
        question: "Who wrote the 'Harry Potter' book series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling",
      },
      {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Earth"],
        answer: "Earth",
      },
      {
        question: "Which famous painting features a woman with an enigmatic smile?",
        options: ["The Starry Night", "American Gothic", "The Scream", "Mona Lisa"],
        answer: "Mona Lisa",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Au", "Ag", "Go"],
        answer: "Au",
      },
      {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        options: ["Norway", "Sweden", "Finland", "Denmark"],
        answer: "Norway",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        answer: "Mercury",
      },
      {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Ernest Hemingway", "F. Scott Fitzgerald", "George Orwell"],
        answer: "Harper Lee",
      },
      {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "Ox", "O2", "Om"],
        answer: "O",
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
        answer: "Nile River",
      },
      {
        question: "Who was the first person to step on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong",
      },
      {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Lion", "Tiger", "Leopard", "Cheetah"],
        answer: "Lion",
      },
      {
        question: "What is the currency of China?",
        options: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yuan",
      },
      {
        question: "Which famous scientist formulated the laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Isaac Newton",
      },
      {
        question: "What is the tallest mountain in North America?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        answer: "Mount McKinley",
      },
      {
        question: "Who is the protagonist in the 'Lord of the Rings' book series?",
        options: ["Frodo Baggins", "Harry Potter", "Bilbo Baggins", "Sherlock Holmes"],
        answer: "Frodo Baggins",
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Gd", "Au", "Ag", "Si"],
        answer: "Ag",
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "Korea", "Vietnam"],
        answer: "Japan",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yen",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        answer: "Mount Everest",
      },
      {
        question: "Who wrote the 'Harry Potter' book series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling",
      },
      {
        question: "Which planet is known as the 'Blue Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Earth"],
        answer: "Earth",
      },
      {
        question: "Which famous painting features a woman with an enigmatic smile?",
        options: ["The Starry Night", "American Gothic", "The Scream", "Mona Lisa"],
        answer: "Mona Lisa",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Gd", "Au", "Ag", "Go"],
        answer: "Au",
      },
      {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        options: ["Norway", "Sweden", "Finland", "Denmark"],
        answer: "Norway",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Mercury", "Mars", "Earth"],
        answer: "Mercury",
      },
      {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Ernest Hemingway", "F. Scott Fitzgerald", "George Orwell"],
        answer: "Harper Lee",
      },
      {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "Ox", "O2", "Om"],
        answer: "O",
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
        answer: "Nile River",
      },
      {
        question: "Who was the first person to step on the moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        answer: "Neil Armstrong",
      },
      {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Lion", "Tiger", "Leopard", "Cheetah"],
        answer: "Lion",
      },
      {
        question: "What is the currency of China?",
        options: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yuan",
      },
      {
        question: "Which famous scientist formulated the laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Isaac Newton",
      },
      {
        question: "What is the tallest mountain in North America?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        answer: "Mount McKinley",
      },
      {
        question: "Who is the protagonist in the 'Lord of the Rings' book series?",
        options: ["Frodo Baggins", "Harry Potter", "Bilbo Baggins", "Sherlock Holmes"],
        answer: "Frodo Baggins",
      },
      {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Gd", "Au", "Ag", "Si"],
        answer: "Ag",
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "Japan", "Korea", "Vietnam"],
        answer: "Japan",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
        answer: "Albert Einstein",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yen",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        answer: "Mount Everest",
      },
      {
        question: "Who wrote the 'Harry Potter' book series?",
        options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"],
        answer: "J.K. Rowling",
      }
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
  