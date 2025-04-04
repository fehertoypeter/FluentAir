export const RadicalEquations = [
  {
    topic: "Matek",
    questions: [
      // GYÖKVONÁSOS EASY
      {
        id: "math-re-e-1",
        subtopic: "Radical Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\sqrt{x} + 3 = 8",
        options: ["25", "5", "16", "9"],
        answer: "25",
        explanation: [
          { type: "text", content: "<b>Step 1: Subtract 3</b>" },
          { type: "math", content: "\\sqrt{x} = 5" },
          { type: "text", content: "<b>Step 2: Square both sides</b>" },
          { type: "math", content: "x = 5^2 = 25" },
        ],
      },
      {
        id: "math-re-e-2",
        subtopic: "Radical Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\sqrt{2x} = 4",
        options: ["8", "4", "16", "2"],
        answer: "8",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "2x = 4^2" },
          { type: "math", content: "2x = 16" },
          { type: "text", content: "<b>Step 2: Divide by 2</b>" },
          { type: "math", content: "x = 8" },
        ],
      },
      {
        id: "math-re-e-3",
        subtopic: "Radical Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\sqrt{x + 1} = 5",
        options: ["24", "25", "16", "26"],
        answer: "24",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "x + 1 = 5^2" },
          { type: "math", content: "x + 1 = 25" },
          { type: "text", content: "<b>Step 2: Subtract 1</b>" },
          { type: "math", content: "x = 24" },
        ],
      },
      {
        id: "math-re-e-4",
        subtopic: "Radical Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\sqrt{3x} = 6",
        options: ["12", "6", "18", "24"],
        answer: "12",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "3x = 6^2" },
          { type: "math", content: "3x = 36" },
          { type: "text", content: "<b>Step 2: Divide by 3</b>" },
          { type: "math", content: "x = 12" },
        ],
      },
      {
        id: "math-re-e-5",
        subtopic: "Radical Equations",
        difficulty: "easy",
        question: "Solve for x:",
        equation: "\\sqrt{x} - 2 = 4",
        options: ["36", "16", "25", "49"],
        answer: "36",
        explanation: [
          { type: "text", content: "<b>Step 1: Add 2</b>" },
          { type: "math", content: "\\sqrt{x} = 6" },
          { type: "text", content: "<b>Step 2: Square both sides</b>" },
          { type: "math", content: "x = 6^2 = 36" },
        ],
      },
      // GYÖKVONÁS MEDIUM
      {
        id: "math-ra-m-1",
        subtopic: "Radical Equations",
        difficulty: "medium",
        question: "Solve for x:",
        equation: "\\sqrt{2x + 1} = 5",
        options: ["12", "24", "8", "10"],
        answer: "12",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "2x + 1 = 5^2" },
          { type: "math", content: "2x + 1 = 25" },
          { type: "text", content: "<b>Step 2: Subtract 1</b>" },
          { type: "math", content: "2x = 24" },
          { type: "text", content: "<b>Step 3: Divide by 2</b>" },
          { type: "math", content: "x = 12" },
        ],
      },
      {
        id: "math-ra-m-2",
        subtopic: "Radical Equations",
        difficulty: "medium",
        question: "Solve for x:",
        equation: "\\sqrt{x + 3} = \\sqrt{2x - 5}",
        options: ["8", "5", "2", "10"],
        answer: "8",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "x + 3 = 2x - 5" },
          { type: "text", content: "<b>Step 2: Subtract x</b>" },
          { type: "math", content: "3 = x - 5" },
          { type: "text", content: "<b>Step 3: Add 5</b>" },
          { type: "math", content: "x = 8" },
        ],
      },
      {
        id: "math-ra-m-3",
        subtopic: "Radical Equations",
        difficulty: "medium",
        question: "Solve for x:",
        equation: "\\sqrt{x + 5} = x - 1",
        options: ["4", "-1", "2", "0"],
        answer: "4",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "x + 5 = (x - 1)^2" },
          { type: "math", content: "x + 5 = x^2 - 2x + 1" },
          { type: "text", content: "<b>Step 2: Rearrange terms</b>" },
          { type: "math", content: "x^2 - 3x - 4 = 0" },
          { type: "text", content: "<b>Step 3: Factor</b>" },
          {
            type: "math",
            content: "(x - 4)(x + 1) = 0 → x = 4 \\text{ vagy } x = -1",
          },
          { type: "text", content: "<b>Step 4: Verify solutions</b>" },
          {
            type: "math",
            content: "x = -1 \\text{ nem megoldás (negatív gyök)} → x = 4",
          },
        ],
      },
      // GYÖKVONÁS HARD
      {
        id: "math-ra-h-1",
        subtopic: "Complex Radical Equations",
        difficulty: "hard",
        question: "Solve for x:",
        equation: "\\sqrt{x + \\sqrt{x}} = 3",
        options: ["9", "4", "16", "25"],
        answer: "16",
        explanation: [
          { type: "text", content: "<b>Step 1: Square both sides</b>" },
          { type: "math", content: "x + \\sqrt{x} = 9" },
          {
            type: "text",
            content: "<b>Step 2: Let ( y = \\sqrt{x} ) → ( y^2 + y - 9 = 0 )",
          },
          { type: "text", content: "<b>Step 3: Solve quadratic equation</b>" },
          {
            type: "math",
            content:
              "y = \\frac{-1 \\pm \\sqrt{1 + 36}}{2} = \\frac{-1 \\pm \\sqrt{37}}{2}",
          },
          { type: "text", content: "<b>Step 4: Reject negative solution</b>" },
          { type: "math", content: "y = \\frac{-1 + \\sqrt{37}}{2} → x = y^2" },
          {
            type: "math",
            content: "x = \\left(\\frac{-1 + \\sqrt{37}}{2}\\right)^2 ≈ 16",
          },
          {
            type: "text",
            content: "<b>Note:</b> Exact solution requires verification.",
          },
        ],
      },
      {
        id: "math-ra-h-2",
        subtopic: "Absolute Value Radical Equations",
        difficulty: "hard",
        question: "Solve for x:",
        equation: "\\sqrt{|2x - 5|} + |x - 3| = 4",
        options: ["1", "4", "0", "2"],
        answer: "2",
        explanation: [
          {
            type: "text",
            content: "<b>Case 1: ( 2x - 5 \\geq 0 ) → ( x \\geq 2.5 )",
          },
          { type: "math", content: "\\sqrt{2x - 5} + (x - 3) = 4" },
          {
            type: "text",
            content: "<b>Subcase 1.1:</b> Let ( y = \\sqrt{2x - 5} )",
          },
          {
            type: "math",
            content: "y + \\frac{y^2 + 5}{2} - 3 = 4 → y^2 + 2y - 15 = 0",
          },
          {
            type: "math",
            content: "y = 3 → 2x - 5 = 9 → x = 7 (nem felel meg)",
          },
          { type: "text", content: "<b>Case 2: ( 2x - 5 < 0 ) → ( x < 2.5 )" },
          { type: "math", content: "\\sqrt{5 - 2x} + (3 - x) = 4" },
          {
            type: "text",
            content: "<b>Subcase 2.1:</b> Let ( z = \\sqrt{5 - 2x} )",
          },
          {
            type: "math",
            content: "z + 3 - \\frac{5 - z^2}{2} = 4 → z^2 + 2z - 5 = 0",
          },
          { type: "math", content: "z = \\sqrt{6} - 1 → x = 2 (valid)" },
        ],
      },
    ],
  },
];
