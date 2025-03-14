// mainTestBank.js
export const mainTestBank = [
  {
    topic: "Mathematics",
    questions: [
      {
        id: "math-1",
        subtopic: "Algebra",
        difficulty: "easy",
        question:
          "If you travel 1575 miles how much fuel will you need if you burn 2300 kgs per hour and are travelling at 420 mph (miles per hour)",
        image: "./images/Quiz/math-1-1.jpg",
        equation: "\\frac{3^{12} + 3^{13}}{9^5 + 3^{11}}",
        options: ["3", "9", "3^{4}", "3^{9}"],
        answer: "9",
        explanation: [
          {
            type: "image",
            content: "./images/Quiz/math-1-1.jpg",
          },
          {
            type: "math",
            content: "\\frac{3^{12} + 3^{13}}{9^5 + 3^{11}}",
          },
          {
            type: "text",
            content:
              "<br><p><b>Step 1: Factor out common terms</b></p><p>Numerator:</p>",
          },
          {
            type: "math",
            content: "3^{12} + 3^{13} = 3^{12}(1 + 3) = 3^{12} \\times 4",
          },
          {
            type: "text",
            content: "<p>Denominator:</p>",
          },
          {
            type: "math",
            content: "3^{10} + 3^{11} = 3^{10}(1 + 3) = 3^{10} \\times 4",
          },
          {
            type: "text",
            content: "<br><br><p><b>Step 2: Simplify the expression</b></p>",
          },
          {
            type: "math",
            content:
              "\\frac{3^{12} \\times 4}{3^{10} \\times 4} = \\frac{3^{12}}{3^{10}}",
          },
          {
            type: "text",
            content:
              "<br><br><p><b>Step 3: Apply the properties of exponents</b></p>",
          },
          {
            type: "math",
            content: "\\frac{3^{12}}{3^{10}} = 3^{12-10} = 3^2",
          },
          {
            type: "text",
            content: "<br><br><p><b>Step 4: Final simplification</b></p>",
          },
          {
            type: "math",
            content: "3^2 = 9",
          },
          {
            type: "text",
            content: "<br><br> <p'><b>Final Answer:</b>",
          },
          {
            type: "math",
            content: "9",
          },
        ],
      },
      {
        id: "math-2",
        subtopic: "Algebra",
        difficulty: "medium",
        question: "math-2 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-2 question.",
          },
        ],
      },
      {
        id: "math-3",
        subtopic: "Algebra",
        difficulty: "hard",
        question: "math-3 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-3 question.",
          },
        ],
      },
      {
        id: "math-4",
        subtopic: "Algebra",
        difficulty: "easy",
        question: "math-4 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-4 question.",
          },
        ],
      },
      {
        id: "math-5",
        subtopic: "Arithmetic",
        difficulty: "medium",
        question: "math-5 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-5 question.",
          },
        ],
      },
      {
        id: "math-6",
        subtopic: "Arithmetic",
        difficulty: "hard",
        question: "math-6 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-6 question.",
          },
        ],
      },
      {
        id: "math-7",
        subtopic: "Arithmetic",
        difficulty: "easy",
        question: "math-7 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-7 question.",
          },
        ],
      },
      {
        id: "math-8",
        subtopic: "Arithmetic",
        difficulty: "medium",
        question: "math-8 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-8 question.",
          },
        ],
      },
      {
        id: "math-9",
        subtopic: "Geometry",
        difficulty: "hard",
        question: "math-9 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-9 question.",
          },
        ],
      },
      {
        id: "math-10",
        subtopic: "Geometry",
        difficulty: "easy",
        question: "math-10 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-10 question.",
          },
        ],
      },
      {
        id: "math-11",
        subtopic: "Geometry",
        difficulty: "medium",
        question: "math-11 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-11 question.",
          },
        ],
      },
      {
        id: "math-12",
        subtopic: "Geometry",
        difficulty: "hard",
        question: "math-12 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for math-12 question.",
          },
        ],
      },
    ],
  },
  {
    topic: "Physics",
    questions: [
      {
        id: "physics-1",
        subtopic: "Newton's Law",
        difficulty: "easy",
        question: "physics-1 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-1 question.",
          },
        ],
      },
      {
        id: "physics-2",
        subtopic: "Newton's Law",
        difficulty: "medium",
        question: "physics-2 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-2 question.",
          },
        ],
      },
      {
        id: "physics-3",
        subtopic: "Newton's Law",
        difficulty: "hard",
        question: "physics-3 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-3 question.",
          },
        ],
      },
      {
        id: "physics-4",
        subtopic: "Newton's Law",
        difficulty: "easy",
        question: "physics-4 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-4 question.",
          },
        ],
      },
      {
        id: "physics-5",
        subtopic: "Thermodynamics",
        difficulty: "medium",
        question: "physics-5 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-5 question.",
          },
        ],
      },
      {
        id: "physics-6",
        subtopic: "Thermodynamics",
        difficulty: "hard",
        question: "physics-6 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-6 question.",
          },
        ],
      },
      {
        id: "physics-7",
        subtopic: "Thermodynamics",
        difficulty: "easy",
        question: "physics-7 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-7 question.",
          },
        ],
      },
      {
        id: "physics-8",
        subtopic: "Thermodynamics",
        difficulty: "medium",
        question: "physics-8 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-8 question.",
          },
        ],
      },
      {
        id: "physics-9",
        subtopic: "Electromagnetism",
        difficulty: "hard",
        question: "physics-9 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-9 question.",
          },
        ],
      },
      {
        id: "physics-10",
        subtopic: "Electromagnetism",
        difficulty: "easy",
        question: "physics-10 question",
        options: ["Answer 1", "Answer 2", "Correct Answer", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-10 question.",
          },
        ],
      },
      {
        id: "physics-11",
        subtopic: "Electromagnetism",
        difficulty: "medium",
        question: "physics-11 question",
        options: ["Answer 1", "Correct Answer", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-11 question.",
          },
        ],
      },
      {
        id: "physics-12",
        subtopic: "Electromagnetism",
        difficulty: "hard",
        question: "physics-12 question",
        options: ["Correct Answer", "Answer 2", "Answer 3", "Answer 4"],
        answer: "Correct Answer",
        explanation: [
          {
            type: "text",
            content: "Explanation for physics-12 question.",
          },
        ],
      },
    ],
  },
];
