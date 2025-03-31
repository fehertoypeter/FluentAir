export const QuadraticEquations = [
  {
    topic: "Matek",
    questions: [
      // EASY QUESTIONS
      {
        id: "math-qe-e-1",
        subtopic: "Quadratic Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "x^2 - 4x + 4 = 0",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: [
          { type: "math", content: "x^2 - 4x + 4 = 0" },
          { type: "text", content: "<b>Apply the quadratic formula:</b>" },
          {
            type: "math",
            content: "x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(1)(4)}}{2(1)}",
          },
          { type: "text", content: "<b>Simplify the terms:</b>" },
          { type: "math", content: "x = \\frac{4 \\pm \\sqrt{16 - 16}}{2}" },
          { type: "math", content: "x = \\frac{4 \\pm \\sqrt{0}}{2}" },
          { type: "math", content: "x = \\frac{4 \\pm 0}{2}" },
          {
            type: "text",
            content:
              "<b>Since the square root is 0, we have only one solution:</b>",
          },
          { type: "math", content: "x = \\frac{4}{2}" },
          { type: "math", content: "x = 2" },
          {
            type: "text",
            content:
              "<b>Verification:</b> Substitute x = 2 into the original equation.",
          },
          { type: "math", content: "(2)^2 - 4(2) + 4 = 0" },
          { type: "math", content: "4 - 8 + 4 = 0" },
          { type: "math", content: "0 = 0" },
          { type: "text", content: "Correct! ✅" },
        ],
      },
      {
        id: "math-qe-e-2",
        subtopic: "Quadratic Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "x^2 - 6x + 8 = 0",
        options: ["2", "4", "1", "3"],
        answer: "4",
        explanation: [
          { type: "math", content: "x^2 - 6x + 8 = 0" },
          { type: "text", content: "<b>Apply the quadratic formula:</b>" },
          {
            type: "math",
            content: "x = \\frac{-(-6) \\pm \\sqrt{(-6)^2 - 4(1)(8)}}{2(1)}",
          },
          { type: "text", content: "<b>Simplify the terms:</b>" },
          { type: "math", content: "x = \\frac{6 \\pm \\sqrt{36 - 32}}{2}" },
          { type: "math", content: "x = \\frac{6 \\pm \\sqrt{4}}{2}" },
          { type: "math", content: "x = \\frac{6 \\pm 2}{2}" },
          {
            type: "text",
            content: "<b>Calculate the two possible solutions:</b>",
          },
          { type: "math", content: "x_1 = \\frac{6 + 2}{2} = 4" },
          { type: "math", content: "x_2 = \\frac{6 - 2}{2} = 2" },
          {
            type: "text",
            content:
              "<b>Verification:</b> Substitute x = 4 into the original equation.",
          },
          { type: "math", content: "(4)^2 - 6(4) + 8 = 0" },
          { type: "math", content: "16 - 24 + 8 = 0" },
          { type: "math", content: "0 = 0" },
          { type: "text", content: "Correct! ✅" },
        ],
      },
    ],
  },
];
