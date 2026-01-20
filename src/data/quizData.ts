export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
  color: string;
}

export const quizzes: Quiz[] = [
  {
    id: "javascript",
    title: "JavaScript Basics",
    description: "Test your knowledge of JavaScript fundamentals",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    questions: [
      {
        id: 1,
        question: "What keyword is used to declare a variable in modern JavaScript?",
        options: ["var", "let", "both var and let", "variable"],
        correctAnswer: 2,
        explanation: "Both 'var' and 'let' can declare variables, but 'let' is preferred in modern JavaScript."
      },
      {
        id: 2,
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
        explanation: "push() adds elements to the end, while unshift() adds to the beginning."
      },
      {
        id: 3,
        question: "What does '===' check for?",
        options: ["Value only", "Type only", "Value and type", "Reference"],
        correctAnswer: 2,
        explanation: "The strict equality operator (===) checks both value and type."
      },
      {
        id: 4,
        question: "Which is NOT a JavaScript data type?",
        options: ["undefined", "number", "float", "boolean"],
        correctAnswer: 2,
        explanation: "JavaScript has 'number' for all numeric values; 'float' is not a separate type."
      },
      {
        id: 5,
        question: "What does 'typeof null' return?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correctAnswer: 2,
        explanation: "This is a known JavaScript quirk - typeof null returns 'object'."
      }
    ]
  },
  {
    id: "science",
    title: "General Science",
    description: "Explore the wonders of science",
    icon: "🔬",
    color: "from-emerald-400 to-teal-500",
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2,
        explanation: "Au comes from the Latin word 'aurum' meaning gold."
      },
      {
        id: 2,
        question: "How many planets are in our solar system?",
        options: ["7", "8", "9", "10"],
        correctAnswer: 1,
        explanation: "There are 8 planets; Pluto was reclassified as a dwarf planet in 2006."
      },
      {
        id: 3,
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correctAnswer: 2,
        explanation: "Diamond is the hardest naturally occurring substance, scoring 10 on the Mohs scale."
      },
      {
        id: 4,
        question: "What is the speed of light in vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
        correctAnswer: 0,
        explanation: "Light travels at approximately 299,792 km/s, often rounded to 300,000 km/s."
      },
      {
        id: 5,
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
        explanation: "Plants absorb CO2 during photosynthesis and release oxygen."
      }
    ]
  },
  {
    id: "history",
    title: "World History",
    description: "Journey through historical events",
    icon: "🏛️",
    color: "from-amber-400 to-red-500",
    questions: [
      {
        id: 1,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
        explanation: "World War II ended in 1945 with the surrender of Japan on September 2."
      },
      {
        id: 2,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswer: 2,
        explanation: "George Washington served as the first U.S. President from 1789 to 1797."
      },
      {
        id: 3,
        question: "The ancient city of Rome was built on how many hills?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2,
        explanation: "Rome is famously known as the 'City of Seven Hills'."
      },
      {
        id: 4,
        question: "Which empire was ruled by Genghis Khan?",
        options: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
        correctAnswer: 2,
        explanation: "Genghis Khan founded and ruled the Mongol Empire, the largest contiguous empire in history."
      },
      {
        id: 5,
        question: "The Renaissance period began in which country?",
        options: ["France", "England", "Germany", "Italy"],
        correctAnswer: 3,
        explanation: "The Renaissance began in Italy during the 14th century, particularly in Florence."
      }
    ]
  }
];
