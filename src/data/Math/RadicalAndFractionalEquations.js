export const RadicalAndFractionalEquations = [
  {
    topic: "Matek",
    questions: [
      {
        id: "math-rafe-e-1",
        subtopic: "Radical & Fractional Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\frac{1}{\\sqrt{x}} = 2",
        options: ["4", "\\frac{1}{4}", "2", "16"],
        answer: "\\frac{1}{4}",
        explanation: [
          { type: "math", content: "\\frac{1}{\\sqrt{x}} = 2" },
          {
            type: "text",
            content: "<b>Step 1:</b> Take reciprocal of both sides<br><br>",
          },
          { type: "math", content: "\\sqrt{x} = \\frac{1}{2}" },
          { type: "text", content: "<b>Step 2:</b> Square both sides<br><br>" },
          {
            type: "math",
            content: "x = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}",
          },
        ],
      },
      {
        id: "math-rafe-e-2",
        subtopic: "Radical & Fractional Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\frac{3}{\\sqrt{x - 1}} = 1",
        options: ["8", "10", "5", "2"],
        answer: "10",
        explanation: [
          { type: "math", content: "\\frac{3}{\\sqrt{x - 1}} = 1" },
          {
            type: "text",
            content: "<b>Step 1:</b> Multiply both sides by",
          },
          { type: "math", content: "\\sqrt{x - 1}" },

          { type: "math", content: "3 = \\sqrt{x - 1}" },
          { type: "text", content: "<b>Step 2:</b> Square both sides" },
          { type: "math", content: "9 = x - 1" },
          { type: "text", content: "<b>Step 3:</b> Solve for x" },
          { type: "math", content: "x = 9 + 1 = 10" },
        ],
      },
      {
        id: "math-rafe-e-3",
        subtopic: "Radical & Fractional Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\sqrt{2x + 3} = 5",
        options: ["5", "14", "11", "7"],
        answe: "11",
        explanation: [
          {
            type: "math",
            content: "\\sqrt{2x + 3} = 5",
          },

          {
            type: "text",
            content: "<b>Step 1:</b> Square both sides. ",
          },
          {
            type: "text",
            content:
              "To eliminate the square root, we square both sides of the equation:",
          },
          {
            type: "math",
            content: "(\\sqrt{2x + 3})^2 = 5^2",
          },
          {
            type: "math",
            content: "2x + 3 = 25",
            comment:
              "The square root and square cancel each other on the left side",
          },
          {
            type: "text",
            content: "<b>Step 2:</b> Solve for x",
          },
          {
            type: "text",
            content: "First subtract 3 from both sides:",
          },
          {
            type: "math",
            content: "2x = 25 - 3",
          },
          {
            type: "math",
            content: "2x = 22",
          },

          {
            type: "math",
            content: "x = \\frac{22}{2}",
          },
          {
            type: "math",
            content: "x = 11",
          },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>Let's verify the solution by plugging x = 11 back into the original equation:",
          },
          {
            type: "math",
            content: "\\sqrt{2(11) + 3} = \\sqrt{22 + 3} = \\sqrt{25} = 5",
          },
          {
            type: "text",
            content:
              "Note: When solving radical equations, it's crucial to verify solutions as squaring both sides can sometimes introduce extraneous solutions that don't satisfy the original equation.",
          },
        ],
      },
      {
        id: "math-rafe-e-4",
        subtopic: "Radical & Fractional Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\frac{5}{\\sqrt{x}} = \\sqrt{5}",
        options: ["25", "5", "1", "0"],
        answer: "5",
        explanation: [
          { type: "text", content: "<b>Step 1:</b> Multiply both sides by " },
          { type: "math", content: "\\sqrt{x}" },
          { type: "math", content: "5 = \\sqrt{5} \\cdot \\sqrt{x}" },
          { type: "text", content: "<b>Step 2:</b> Divide by " },

          { type: "math", content: "\\sqrt{5}" },
          { type: "math", content: "\\sqrt{x} = \\sqrt{5}" },
          { type: "text", content: "<b>Step 3:</b> Square both sides" },
          { type: "math", content: "x = 5" },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>Let's verify the solution by plugging x = 5 back into the original equation:",
          },
          { type: "math", content: "\\frac{5}{\\sqrt{5}} = \\sqrt{5}" },
          {
            type: "text",
            content: "Since both sides are equal, our solution is correct.",
          },
        ],
      },
      {
        id: "math-rafe-e-5",
        subtopic: "Radical & Fractional Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\frac{\\sqrt{x}}{2} = 1",
        options: ["2", "4", "1", "0"],
        answer: "4",
        explanation: [
          { type: "math", content: "\\frac{\\sqrt{x}}{2} = 1" },
          { type: "text", content: "<b>Step 1:</b> Multiply both sides by 2" },
          { type: "math", content: "\\sqrt{x} = 2" },
          { type: "text", content: "<b>Step 2:</b> Square both sides" },
          { type: "math", content: "x = 4" },
          {
            type: "text",
            content:
              "<b>Verification:</b> Plug x = 4 back into the original equation:",
          },
          { type: "math", content: "\\frac{\\sqrt{4}}{2} = \\frac{2}{2} = 1" },
          {
            type: "text",
            content: "Since both sides are equal, our solution is correct.",
          },
        ],
      },
      // HARD TASKS
      {
        id: "math-rafe-h-1",
        subtopic: "Radical & Fractional Equations",
        difficulty: "hard",
        question: "Solve for x:",
        equation: "\\frac{2}{\\sqrt{x + 1}} = 1 + \\sqrt{\\frac{3}{x + 1}}",
        options: ["3", "0", "8", "\\frac{1}{3}"],
        answer: "3",
        explanation: [
          { type: "text", content: "<b>Step 1: Let ( y = \\sqrt{x + 1} )" },
          {
            type: "math",
            content: "\\frac{2}{y} = 1 + \\sqrt{\\frac{3}{y^2}}",
          },
          { type: "math", content: "\\frac{2}{y} = 1 + \\frac{\\sqrt{3}}{y}" },
          { type: "text", content: "<b>Step 2: Multiply by ( y )" },
          { type: "math", content: "2 = y + \\sqrt{3}" },
          { type: "math", content: "y = 2 - \\sqrt{3}" },
          { type: "text", content: "<b>Step 3: Solve for x" },
          { type: "math", content: "x = (2 - \\sqrt{3})^2 - 1 = 3" },
        ],
      },
      {
        id: "math-rafe-h-2",
        subtopic: "Radical & Fractional Equations",
        difficulty: "hard",
        question: "Solve for x:",
        equation: "\\sqrt{x} + \\frac{1}{\\sqrt{x}} = \\sqrt{2x - 1}",
        options: ["4", "1", "\\frac{9}{4}", "2"],
        answer: "4",
        explanation: [
          { type: "text", content: "<b>Step 1: Let ( y = \\sqrt{x} )" },
          { type: "math", content: "y + \\frac{1}{y} = \\sqrt{2y^2 - 1}" },
          { type: "text", content: "<b>Step 2: Square both sides</b>" },
          { type: "math", content: "y^2 + 2 + \\frac{1}{y^2} = 2y^2 - 1" },
          { type: "math", content: "y^4 - 3y^2 + 1 = 0" },
          {
            type: "text",
            content: "<b>Step 3: Solve quadratic in ( z = y^2 )",
          },
          { type: "math", content: "z = \\frac{3 \\pm \\sqrt{5}}{2}" },
          {
            type: "math",
            content: "y = \\sqrt{\\frac{3 + \\sqrt{5}}{2}} \\Rightarrow x = 4",
          },
        ],
      },
      {
        id: "math-rafe-h-3",
        subtopic: "Radical & Fractional Equations",
        difficulty: "hard",
        question: "Solve for x:",
        equation:
          "\\sqrt{\\frac{2x}{x - 1}} + \\sqrt{\\frac{x - 1}{2x}} = \\frac{5}{2}",
        options: ["2", "\\frac{1}{2}", "3", "-1"],
        answer: "2",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Let ( y = \\sqrt{\\frac{2x}{x - 1}} )",
          },
          { type: "math", content: "y + \\frac{1}{y} = \\frac{5}{2}" },
          { type: "text", content: "<b>Step 2: Multiply by ( 2y )" },
          { type: "math", content: "2y^2 - 5y + 2 = 0" },
          { type: "math", content: "y = 2 \\quad (\\text{valid solution})" },
          { type: "text", content: "<b>Step 3: Solve for x" },
          {
            type: "math",
            content: "\\sqrt{\\frac{2x}{x - 1}} = 2 \\Rightarrow x = 2",
          },
        ],
      },
    ],
  },
];
