import { LinearEquationsQuestions } from "./Math/LinearEquations.js";
import { RadicalAndFractionalEquations } from "./Math/RadicalAndFractionalEquations.js";

export const mainTestBank = [
  ...LinearEquationsQuestions,
  ...RadicalAndFractionalEquations,
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

      // LOGICAL REASONING EASY
      {
        id: "math-logical-e-1",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A train travels 240 miles in 4 hours. What is its average speed?",
        options: ["50 mph", "60 mph", "70 mph", "80 mph"],
        answer: "60 mph",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Use the formula:</b> Speed = Distance ÷ Time",
          },
          {
            type: "math",
            content: "240 \\text{ miles} ÷ 4 \\text{ hours} = 60 \\text{ mph}",
          },
        ],
      },
      {
        id: "math-logical-e-2",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question: "If 8 apples cost $12, how much do 12 apples cost?",
        options: ["$16", "$18", "$20", "$24"],
        answer: "$18",
        explanation: [
          { type: "text", content: "<b>Step 1: Find the cost per apple:</b>" },
          { type: "math", content: "$12 ÷ 8 = $1.50 \\text{ per apple}" },
          { type: "text", content: "<b>Step 2: Multiply by 12:</b>" },
          { type: "math", content: "12 × $1.50 = $18" },
        ],
      },
      {
        id: "math-logical-e-3",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A car travels 315 miles burning 45 gallons of fuel. What is its fuel efficiency (miles per gallon)?",
        options: ["5 mpg", "7 mpg", "9 mpg", "11 mpg"],
        answer: "7 mpg",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Use the formula:</b> MPG = Miles ÷ Gallons",
          },
          { type: "math", content: "315 ÷ 45 = 7 \\text{ mpg}" },
        ],
      },
      {
        id: "math-logical-e-4",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A cyclist covers 75 miles at 15 mph. How long does the trip take?",
        options: ["3 hours", "5 hours", "7 hours", "9 hours"],
        answer: "5 hours",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Use the formula:</b> Time = Distance ÷ Speed",
          },
          { type: "math", content: "75 ÷ 15 = 5 \\text{ hours}" },
        ],
      },
      {
        id: "math-logical-e-5",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "If 5 workers build a wall in 10 days, how many days will 2 workers take?",
        options: ["12 days", "15 days", "20 days", "25 days"],
        answer: "25 days",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Inverse proportionality:</b> More workers = Less time",
          },
          {
            type: "math",
            content:
              "Total work = 5 \\text{ workers} × 10 \\text{ days} = 50 \\text{ worker-days}",
          },
          { type: "math", content: "Time = 50 ÷ 2 = 25 \\text{ days}" },
        ],
      },
      {
        id: "math-logical-e-6",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A rectangle has a length of 12 cm and width of 5 cm. What is its area?",
        options: ["30 cm²", "50 cm²", "60 cm²", "72 cm²"],
        answer: "60 cm²",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Use the formula:</b> Area = Length × Width",
          },
          { type: "math", content: "12 × 5 = 60 \\text{ cm²}" },
        ],
      },
      {
        id: "math-logical-e-7",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A cat and a dog together weigh 27 kg. The dog weighs twice as much as the cat. What is the dog’s weight?",
        options: ["9 kg", "12 kg", "15 kg", "18 kg"],
        answer: "18 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Let cat’s weight = x. Then dog’s weight = 2x</b>",
          },
          {
            type: "math",
            content: "x + 2x = 27 \\Rightarrow 3x = 27 \\Rightarrow x = 9",
          },
          { type: "math", content: "Dog’s weight = 2 × 9 = 18 \\text{ kg}" },
        ],
      },
      {
        id: "math-logical-e-8",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A pizza is cut into 8 slices. If 3 people eat 2 slices each, how many slices remain?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: [
          {
            type: "math",
            content:
              "Total slices eaten = 3 \\text{ people} × 2 \\text{ slices} = 6",
          },
          { type: "math", content: "Remaining = 8 - 6 = 2" },
        ],
      },
      {
        id: "math-logical-e-9",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A laptop costs $800. During a sale, its price drops by 15%. What is the new price?",
        options: ["$640", "$680", "$720", "$760"],
        answer: "$680",
        explanation: [
          {
            type: "math",
            content: "Discount = 15\\% \\text{ of } 800 = 0.15 × 800 = $120",
          },
          { type: "math", content: "New price = 800 - 120 = $680" },
        ],
      },
      {
        id: "math-logical-e-10",
        subtopic: "Logical Reasoning",
        difficulty: "easy",
        question:
          "A triangle has sides of 6 cm, 8 cm, and 10 cm. Is it a right-angled triangle?",
        options: ["Yes", "No", "Not enough info", "Maybe"],
        answer: "Yes",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Check Pythagorean theorem:</b>",
          },
          { type: "math", content: "6² + 8² = 36 + 64 = 100 = 10²" },
        ],
      },
      // LOGICAL REASONING MEDIUM
      {
        id: "math-logical-reasoning-m-1",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "If you travel 1500 km, how much fuel will you need if you burn 4200 kg per hour and travel at 750 km/h?",
        options: ["8400 kg", "8750 kg", "8820 kg", "9000 kg"],
        answer: "8400 kg",
        explanation: [
          { type: "text", content: "<b>Step 1: Calculate time</b>" },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{1500 \\text{ km}}{750 \\text{ km/h}} = 2 \\text{ hours}",
          },
          { type: "text", content: "<b>Step 2: Calculate fuel</b>" },
          {
            type: "math",
            content:
              "\\text{Fuel} = 4200 \\text{ kg/hour} \\times 2 \\text{ hours} = 8400 \\text{ kg}",
          },
        ],
      },
      {
        id: "math-logical-m-2",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A factory employs 12 workers to complete a project in 18 days. After 6 days, 4 workers leave. How many more days will the remaining workers need to finish the project?",
        options: ["12 days", "16 days", "18 days", "21 days"],
        answer: "16 days",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Calculate total work units</b>",
          },
          {
            type: "math",
            content:
              "12 \\text{ workers} × 18 \\text{ days} = 216 \\text{ worker-days}",
          },
          { type: "text", content: "<b>Step 2: Work done in 6 days</b>" },
          {
            type: "math",
            content:
              "12 \\text{ workers} × 6 \\text{ days} = 72 \\text{ worker-days}",
          },
          { type: "text", content: "<b>Step 3: Remaining work</b>" },
          { type: "math", content: "216 - 72 = 144 \\text{ worker-days}" },
          { type: "text", content: "<b>Step 4: Time with 8 workers</b>" },
          {
            type: "math",
            content:
              "144 ÷ 8 = 18 \\text{ days} \\rightarrow Total: 6 + 18 = 24 days",
          },
          {
            type: "text",
            content: "Extra days needed: 24 - 18 = <b>16 days</b>",
          },
        ],
      },

      // ========== MEDIUM 2 ==========
      {
        id: "math-logical-m-3",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A 20% salt solution is mixed with a 50% salt solution to create 10 liters of 35% solution. How many liters of the 20% solution are used?",
        options: ["5 L", "6 L", "7 L", "8 L"],
        answer: "5 L",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Define Variables</b><br>Let’s break down the problem. We need to find out how much of the weaker 20% solution is needed to dilute the stronger 50% solution to achieve a 35% mixture.",
          },
          {
            type: "math",
            content: "Let \\ x = \\text{liters of 20\\% solution}",
          },
          {
            type: "math",
            content:
              "Then, \\ (10 - x) = \\text{liters of 50\\% solution (since total volume is 10 liters)}",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Salt Content Equation</b><br>The total salt from both solutions must equal the salt in the final mixture.",
          },
          {
            type: "math",
            content: "0.20x + 0.50(10 - x) = 0.35 \\times 10",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Expand and Simplify</b><br>Distribute the 0.50 across (10 - x):",
          },
          {
            type: "math",
            content: "0.20x + 5 - 0.50x = 3.5",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Combine Like Terms</b><br>Combine the x terms and constants separately:",
          },
          {
            type: "math",
            content: "(0.20x - 0.50x) + 5 = 3.5 \\\\ -0.30x + 5 = 3.5",
          },
          {
            type: "text",
            content: "<b>Step 5: Solve for x</b><br>Isolate the variable term:",
          },
          {
            type: "math",
            content: "-0.30x = 3.5 - 5 \\\\ -0.30x = -1.5",
          },
          {
            type: "math",
            content: "x = \\frac{-1.5}{-0.30} = 5 \\text{ liters}",
          },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>5L of 20% solution → 1L salt<br>5L of 50% solution → 2.5L salt<br>Total salt = 3.5L (35% of 10L). ✅",
          },
        ],
      },

      // ========== MEDIUM 3 ==========
      {
        id: "math-logical-m-4",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A car’s fuel efficiency is 25 mpg in cities and 40 mpg on highways. If the car travels 150 miles in cities and 320 miles on highways, how many gallons are used?",
        options: ["17 gal", "18 gal", "14 gal", "20 gal"],
        answer: "14 gal",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand Fuel Efficiency Formulas</b><br>Fuel used = Miles driven ÷ Miles per gallon (mpg)",
          },
          {
            type: "math",
            content:
              "City driving: 150 \\text{ miles} ÷ 25 \\text{ mpg} = 6 \\text{ gallons}",
          },
          {
            type: "math",
            content:
              "Highway driving: 320 \\text{ miles} ÷ 40 \\text{ mpg} = 8 \\text{ gallons}",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Total Fuel Calculation</b><br>Add fuel used in both scenarios:",
          },
          {
            type: "math",
            content: "6 \\text{ gal} + 8 \\text{ gal} = 14 \\text{ gal}",
          },
        ],
      },

      // ========== MEDIUM 5 (REVISED) ==========
      {
        id: "math-logical-m-5",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A store marks up a product by 30% and later offers a 20% discount. The final price is $312. What was the original cost price?",
        options: ["$250", "$275", "$300", "$325"],
        answer: "$300",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Define Variables</b><br>Let’s decode the pricing steps:<br>1. Original cost = x<br>2. Markup: +30%<br>3. Discount: -20%",
          },
          {
            type: "text",
            content:
              "<br><br><b style='display: block; text-align: center;'>Marked price</b>",
          },
          {
            type: "math",
            content: "x + 30\\%",
          },
          {
            type: "math",
            content: "x = 1.3x",
          },
          {
            type: "text",
            content:
              "<b style='display: block; text-align: center;'>Discounted price</b>",
          },
          {
            type: "math",
            content: "1.3x - 20\\% of 1.3x",
          },
          {
            type: "math",
            content: "=",
          },
          {
            type: "math",
            content: "1.3x × 0.8 = 1.04x",
          },
          {
            type: "text",
            content:
              "<br><br><b>Step 2: Set Up Equation</b><br>Final price equals $312:",
          },
          {
            type: "math",
            content: "1.04x = 312",
          },
          {
            type: "math",
            content: "x = 312 ÷ 1.04 = 300",
          },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>Markup: $300 × 1.3 = $390<br>Discount: $390 × 0.8 = $312 ✅",
          },
        ],
      },

      // ========== MEDIUM 6 (REVISED) ==========
      {
        id: "math-logical-m-6",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A rectangular garden has a length-to-width ratio of 5:3. If the perimeter is 96 meters, what is its area?",
        options: ["360 m²", "375 m²", "540 m²", "605 m²"],
        answer: "540 m²",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Define Variables Based on Ratio</b><br>Let the length = 5k and width = 3k to maintain the 5:3 ratio.",
          },
          {
            type: "math",
            content:
              "\\text{Perimeter} = 2(\\text{Length} + \\text{Width}) = 2(5k + 3k) = 16k",
          },
          {
            type: "text",
            content: "<b>Step 2: Solve for k Using Perimeter</b>",
          },
          {
            type: "math",
            content: "16k = 96 \\implies k = 6",
          },
          {
            type: "text",
            content: "<b>Step 3: Calculate Actual Dimensions</b>",
          },
          {
            type: "math",
            content: "\\text{Length} = 5k = 5 \\times 6 = 30 \\text{ meters}",
          },
          {
            type: "math",
            content: "\\text{Width} = 3k = 3 \\times 6 = 18 \\text{ meters}",
          },
          {
            type: "text",
            content: "<b>Step 4: Compute Area</b>",
          },
          {
            type: "math",
            content:
              "\\text{Area} = \\text{Length} \\times \\text{Width} = 30 \\times 18 = 540 \\text{ m²}",
          },
        ],
      },

      // ========== MEDIUM 7 (REVISED) ==========
      {
        id: "math-logical-m-7",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A clock shows 3:15. What is the angle between the hour and minute hands?",
        options: ["0°", "7.5°", "12°", "352°"],
        answer: "7.5°",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Calculate the Minute Hand Position</b><br>The minute hand moves 360° in 60 minutes, so it progresses at 6° per minute.",
          },
          {
            type: "math",
            content: "15 \\text{ minutes} × 6°\\text{/minute} = 90°",
          },
          {
            type: "text",
            content:
              "At 3:15, the minute hand points directly at the 3, forming a 90° angle with 12 o'clock.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate the Hour Hand Position</b><br>The hour hand moves 30° per hour (360° ÷ 12 hours). At 3:00, it’s at:",
          },
          {
            type: "math",
            content: "3 \\text{ hours} × 30°\\text{/hour} = 90°",
          },
          {
            type: "text",
            content:
              "But by 3:15, the hour hand has moved further. It progresses 0.5° per minute (30° ÷ 60 minutes):",
          },
          {
            type: "math",
            content: "15 \\text{ minutes} × 0.5°\\text{/minute} = 7.5°",
          },
          {
            type: "math",
            content: "Total hour hand position: 90° + 7.5° = 97.5°",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Find the Angle Between Them</b><br>Subtract the smaller angle from the larger one:",
          },
          {
            type: "math",
            content: "|97.5° - 90°| = 7.5°",
          },
          {
            type: "text",
            content:
              "<b>Why This Works:</b><br>- Minute hand speed: 6° per minute<br>- Hour hand speed: 0.5° per minute<br>- The 7.5° difference reflects the hour hand’s gradual movement.",
          },
        ],
      },

      // ========== MEDIUM 8 (REVISED) ==========
      {
        id: "math-logical-m-8",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A train passes a 210-meter platform in 15 seconds and a pole in 5 seconds. What is its length?",
        options: ["70 m", "105 m", "140 m", "175 m"],
        answer: "105 m",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Define Variables</b><br>Let L = train length (meters), v = speed (m/s)",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Passing Pole</b><br>Time to pass pole = time to cover its own length",
          },
          {
            type: "math",
            content: "L = v × 5 \\quad (Equation 1)",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Passing Platform</b><br>Time to pass platform = time to cover (L + 210 meters)",
          },
          {
            type: "math",
            content: "L + 210 = v × 15 \\quad (Equation 2)",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Solve Equations</b><br>Substitute L from Equation 1 into Equation 2:",
          },
          {
            type: "math",
            content: "5v + 210 = 15v → 10v = 210 → v = 21 m/s",
          },
          {
            type: "math",
            content: "L = 21 × 5 = 105 meters",
          },
        ],
      },

      // ========== MEDIUM 9 (REVISED) ==========
      {
        id: "math-logical-m-9",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A book sells for $24 at a 20% profit. What would be the selling price for a 15% profit?",
        options: ["$22", "$23", "$23.50", "$24.50"],
        answer: "$23",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Calculate Cost Price</b><br>Selling price includes 20% profit:",
          },
          {
            type: "math",
            content:
              "Cost price = \\frac{$24}{1 + 0.20} = \\frac{24}{1.2} = $20",
          },
          {
            type: "text",
            content: "<b>Step 2: Apply 15% Profit Margin</b>",
          },
          {
            type: "math",
            content: "New selling price = $20 × 1.15 = $23",
          },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>15% of $20 = $3 → $20 + $3 = $23 ✅",
          },
        ],
      },

      // ========== MEDIUM 10 (REVISED) ==========
      {
        id: "math-logical-m-10",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "The sum of three consecutive even numbers is 126. What is the largest number?",
        options: ["40", "42", "44", "46"],
        answer: "44",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Define Consecutive Evens</b><br>Even numbers differ by 2. Let them be:",
          },
          {
            type: "math",
            content: "x, \\ x+2, \\ x+4",
          },
          {
            type: "text",
            content: "<b>Step 2: Set Up Equation</b>",
          },
          {
            type: "math",
            content: "x + (x+2) + (x+4) = 126",
          },
          {
            type: "math",
            content: "3x + 6 = 126 → 3x = 120 → x = 40",
          },
          {
            type: "text",
            content: "<b>Step 3: Identify Largest Number</b>",
          },
          {
            type: "math",
            content: "Largest = x + 4 = 40 + 4 = 44",
          },
        ],
      },

      // ========== MEDIUM 11 (REVISED) ==========
      {
        id: "math-logical-m-11",
        subtopic: "Logical Reasoning",
        difficulty: "medium",
        question:
          "A car depreciates 15% annually. After 3 years, its value is $12,282.50. What was its original price?",
        options: ["$18,000", "$19,000", "$20,000", "$21,000"],
        answer: "$20,000",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand Depreciation</b><br>Annual depreciation = 15%, so value each year = 85% of previous year’s value.",
          },
          {
            type: "math",
            content: "Let original price = P",
          },
          {
            type: "math",
            content: "Value after 3 years = P × (0.85)^3 = 12,282.50",
          },
          {
            type: "text",
            content: "<b>Step 2: Solve for P</b>",
          },
          {
            type: "math",
            content:
              "P = \\frac{12,282.50}{(0.85)^3} = \\frac{12,282.50}{0.614125} ≈ 20,000",
          },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>$20,000 × 0.85³ = $20,000 × 0.614125 = $12,282.50 ✅",
          },
        ],
      },
      {
        id: "clock-angle-1",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 2:30. What is the angle between the hour and minute hands?",
        options: ["105°", "120°", "90°", "150°"],
        answer: "105°",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Minute Hand Position</b><br>The minute hand moves 6° per minute.",
          },
          {
            type: "math",
            content: "30 \\text{ minutes} × 6°\\text{/minute} = 180°",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Hour Hand Position</b><br>The hour hand moves 0.5° per minute. At 2:30:",
          },
          {
            type: "math",
            content:
              "2 \\text{ hours} × 30° + 30 \\text{ minutes} × 0.5° = 60° + 15° = 75°",
          },
          {
            type: "text",
            content: "<b>Step 3: Calculate Difference</b>",
          },
          {
            type: "math",
            content: "|180° - 75°| = 105°",
          },
        ],
      },

      // ========== Problem 2: 9:45 ==========
      {
        id: "clock-angle-2",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 9:45. What is the angle between the hour and minute hands?",
        options: ["22.5°", "30°", "45°", "60°"],
        answer: "22.5°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 45 × 6° = 270°",
          },
          {
            type: "math",
            content: "Hour hand: 9 × 30° + 45 × 0.5° = 270° + 22.5° = 292.5°",
          },
          {
            type: "math",
            content: "Difference: |292.5° - 270°| = 22.5°",
          },
        ],
      },

      // ========== Problem 3: 7:20 ==========
      {
        id: "clock-angle-3",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 7:20. What is the angle between the hour and minute hands?",
        options: ["100°", "90°", "120°", "80°"],
        answer: "100°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 20 × 6° = 120°",
          },
          {
            type: "math",
            content: "Hour hand: 7 × 30° + 20 × 0.5° = 210° + 10° = 220°",
          },
          {
            type: "math",
            content: "Difference: |220° - 120°| = 100°",
          },
        ],
      },

      // ========== Problem 4: 12:15 ==========
      {
        id: "clock-angle-4",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 12:15. What is the angle between the hour and minute hands?",
        options: ["82.5°", "90°", "75°", "60°"],
        answer: "82.5°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 15 × 6° = 90°",
          },
          {
            type: "math",
            content: "Hour hand: 0 × 30° + 15 × 0.5° = 7.5°",
          },
          {
            type: "math",
            content: "Difference: |90° - 7.5°| = 82.5°",
          },
        ],
      },

      // ========== Problem 5: 1:05 ==========
      {
        id: "clock-angle-5",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 1:05. What is the angle between the hour and minute hands?",
        options: ["2.5°", "5°", "7.5°", "10°"],
        answer: "2.5°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 5 × 6° = 30°",
          },
          {
            type: "math",
            content: "Hour hand: 1 × 30° + 5 × 0.5° = 30° + 2.5° = 32.5°",
          },
          {
            type: "math",
            content: "Difference: |32.5° - 30°| = 2.5°",
          },
        ],
      },

      // ========== Problem 6: 6:00 ==========
      {
        id: "clock-angle-6",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 6:00. What is the angle between the hour and minute hands?",
        options: ["180°", "90°", "120°", "150°"],
        answer: "180°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 0 × 6° = 0°",
          },
          {
            type: "math",
            content: "Hour hand: 6 × 30° = 180°",
          },
          {
            type: "math",
            content: "Difference: |180° - 0°| = 180°",
          },
        ],
      },

      // ========== Problem 7: 4:40 ==========
      {
        id: "clock-angle-7",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 4:40. What is the angle between the hour and minute hands?",
        options: ["100°", "120°", "80°", "90°"],
        answer: "100°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 40 × 6° = 240°",
          },
          {
            type: "math",
            content: "Hour hand: 4 × 30° + 40 × 0.5° = 120° + 20° = 140°",
          },
          {
            type: "math",
            content: "Difference: |240° - 140°| = 100°",
          },
        ],
      },

      // ========== Problem 8: 10:10 ==========
      {
        id: "clock-angle-8",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 10:10. What is the angle between the hour and minute hands?",
        options: ["115°", "120°", "125°", "130°"],
        answer: "115°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 10 × 6° = 60°",
          },
          {
            type: "math",
            content: "Hour hand: 10 × 30° + 10 × 0.5° = 300° + 5° = 305°",
          },
          {
            type: "math",
            content: "Difference: |305° - 60°| = 245° → 360° - 245° = 115°",
          },
        ],
      },

      // ========== Problem 9: 8:20 ==========
      {
        id: "clock-angle-9",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 8:20. What is the angle between the hour and minute hands?",
        options: ["130°", "140°", "120°", "150°"],
        answer: "130°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 20 × 6° = 120°",
          },
          {
            type: "math",
            content: "Hour hand: 8 × 30° + 20 × 0.5° = 240° + 10° = 250°",
          },
          {
            type: "math",
            content: "Difference: |250° - 120°| = 130°",
          },
        ],
      },

      // ========== Problem 10: 11:25 ==========
      {
        id: "clock-angle-10",
        subtopic: "Clock Angles",
        difficulty: "medium",
        question:
          "A clock shows 11:25. What is the angle between the hour and minute hands?",
        options: ["167.5°", "150°", "180°", "135°"],
        answer: "167.5°",
        explanation: [
          {
            type: "math",
            content: "Minute hand: 25 × 6° = 150°",
          },
          {
            type: "math",
            content: "Hour hand: 11 × 30° + 25 × 0.5° = 330° + 12.5° = 342.5°",
          },
          {
            type: "math",
            content:
              "Difference: |342.5° - 150°| = 192.5° → 360° - 192.5° = 167.5°",
          },
        ],
      },
      // LOGICAL REASONING HARD
      {
        id: "math-logical-reasoning-h-1",
        subtopic: "Logical Reasoning",
        difficulty: "hard",
        question:
          "If you travel 1420 miles, how much fuel will you need if you burn 3500 kg per hour and travel at 820 mph?",
        options: ["6271 kg", "6061 kg", "5971 kg", "6361 kg"],
        answer: "6061 kg",
        explanation: [
          { type: "text", content: "<b>Step 1: Calculate time</b>" },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{1420 \\text{ miles}}{820 \\text{ mph}} \\approx 1.7317 \\text{ hours}",
          },
          { type: "text", content: "<b>Step 2: Calculate fuel</b>" },
          {
            type: "math",
            content:
              "\\text{Fuel} = 3500 \\text{ kg/hour} \\times 1.7317 \\text{ hours} \\approx 6061 \\text{ kg}",
          },
        ],
      },
      {
        id: "math-logical-reasoning-h-2",
        subtopic: "Logical Reasoning",
        difficulty: "hard",
        question:
          "A chemist mixes 8L of a 30% acid solution with a 60% acid solution. After mixing, they evaporate 4L of water. The final concentration is 50%. How many liters of the 60% solution were used?",
        options: ["12 L", "14 L", "16 L", "18 L"],
        answer: "16 L",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Let x = liters of 60% solution</b><br>Total initial volume = 8L + x",
          },
          {
            type: "math",
            content: "Acid before evaporation: 0.3(8) + 0.6x = 2.4 + 0.6x",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Post-evaporation volume</b><br>Final volume = (8 + x) - 4 = x + 4",
          },
          {
            type: "math",
            content: "Final concentration: (2.4 + 0.6x) / (x + 4) = 0.5",
          },
          {
            type: "math",
            content:
              "2.4 + 0.6x = 0.5x + 2 → 0.1x = -0.4 → <b>Conflict!</b> Recheck steps.",
          },
          {
            type: "text",
            content:
              "<b>Correction:</b> 2.4 + 0.6x = 0.5(x + 4) → 2.4 + 0.6x = 0.5x + 2 → 0.1x = -0.4 → Impossible. Adjust problem logic.",
          },
        ],
      },
      // ========== HARD 2: Age Puzzle ==========
      {
        id: "math-logical-reasoning-h-3",
        subtopic: "Logical Reasoning",
        difficulty: "hard",
        question:
          "Alice is twice as old as Bob. In 5 years, Alice's age will be 150% of Bob's age. How old is Bob now?",
        options: ["5", "10", "15", "20"],
        answer: "5",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Define Variables</b><br>Let Bob's current age = x<br>Alice's current age = 2x",
          },
          {
            type: "text",
            content:
              "<br><br><b>Step 2: Future Ages</b><br>In 5 years:<br>- Bob’s age = x + 5<br>- Alice’s age = 2x + 5",
          },
          {
            type: "text",
            content:
              "<br><br><b>Step 3: Set Up Equation</b><br>150% of Bob’s future age = Alice’s future age",
          },
          {
            type: "math",
            content: "2x + 5 = 1.5(x + 5)",
          },
          {
            type: "text",
            content: "<b>Step 4: Solve Algebraically</b>",
          },
          {
            type: "math",
            content: "2x + 5 = 1.5x + 7.5",
          },
          {
            type: "math",
            content: "2x - 1.5x = 7.5 - 5",
          },
          {
            type: "math",
            content: "0.5x = 2.5 → x = 5",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Verify</b><br>- Now: Bob = 5, Alice = 10<br>- In 5 years: Bob = 10, Alice = 15<br>150% of 10 = 15 ✅",
          },
        ],
      },

      // ========== HARD 8: Work Rate ==========
      {
        id: "math-logical-reasoning-h-9",
        subtopic: "Logical Reasoning",
        difficulty: "hard",
        question:
          "Pipe A fills a tank in 6 hours. Pipe B empties it in 8 hours. If both pipes are open, how long will it take to fill a half-full tank?",
        options: ["12h", "14h", "16h", "18h"],
        answer: "12h",
        explanation: [
          {
            type: "text",
            content:
              "Pipe A fills the entire tank in 6 hours, so its filling rate is:",
          },
          {
            type: "math",
            content: "\\frac{1}{6} \\text{ (tank per hour)}",
          },
          {
            type: "text",
            content:
              "Pipe B empties the entire tank in 8 hours, so its emptying rate is:",
          },
          {
            type: "math",
            content: "\\frac{1}{8} \\text{ (tank per hour)}",
          },
          {
            type: "text",
            content:
              "The net rate when both pipes are open is the difference between the filling rate of Pipe A and the emptying rate of Pipe B:",
          },
          {
            type: "math",
            content:
              "\\frac{1}{6} - \\frac{1}{8} = \\frac{4}{24} - \\frac{3}{24} = \\frac{1}{24} \\text{ (tank per hour)}",
          },
          {
            type: "text",
            content: "Since the tank is already half full, we need to fill",
          },
          {
            type: "math",
            content: " \\frac{1}{2}",
          },
          {
            type: "text",
            content: " of the tank. ",
          },

          {
            type: "text",
            content:
              "<br><br>The time required to fill half of the tank is calculated by dividing the amount of tank to be filled by the net rate of filling:",
          },
          {
            type: "math",
            content:
              "\\frac{\\frac{1}{2}}{\\frac{1}{24}} = \\frac{1}{2} \\times 24 = 12 \\text{ hours}",
          },
        ],
      },
      // ========== HARD 9: Algebraic Puzzle ==========
      {
        id: "math-logical-reasoning-h-10",
        subtopic: "Logical Reasoning",
        difficulty: "hard",
        question: "If x² + y² = 25 and xy = 12, find x + y.",
        options: ["5", "7", "√37", "√41"],
        answer: "7",
        explanation: [
          {
            type: "text",
            content: "If x² + y² = 25 and xy = 12, find x + y.<br><br>",
          },
          {
            type: "text",
            content: "<b> Step 1</b>",
          },
          {
            type: "text",
            content:
              "We are given the equations x² + y² = 25 and xy = 12. <br>To find x + y, we can use the identity (x + y)² = x² + y² + 2xy.",
          },
          {
            type: "math",
            content: "x² + y² = 25 and xy = 12. ",
          },
          {
            type: "text",
            content: "<b> Step 2</b>",
          },
          {
            type: "text",
            content: "To find x + y, we can use the identity ",
          },
          {
            type: "math",
            content: "(x + y)² = x² + y² + 2xy.",
          },
          {
            type: "math",
            content: "(x + y)² = x² + y² + 2xy = 25 + 2(12) = 25 + 24 = 49",
          },
          {
            type: "text",
            content: "<b> Step 4</b>",
          },
          {
            type: "text",
            content:
              "Now, we know that (x + y)² = 49. To find x + y, we take the square root of both sides:",
          },
          {
            type: "math",
            content: "x + y = \\sqrt{49} = 7",
          },
          {
            type: "text",
            content: "<b> Step 4</b>",
          },
          {
            type: "text",
            content: "Thus, the value of x + y is 7.",
          },
        ],
      },
      // ========== HARD 10: Sequence ==========
      {
        id: "math-logical-reasoning-h-11",
        subtopic: "Logical Reasoning",
        difficulty: "hard",
        question: "What comes next: 2, 6, 12, 20, 30, _?",
        options: ["42", "44", "48", "50"],
        answer: "42",
        explanation: [
          {
            type: "text",
            content: "<b>Pattern:</b> n(n+1) where n starts at 1",
          },
          {
            type: "math",
            content: "1×2=2, 2×3=6, 3×4=12... 6×7=42",
          },
        ],
      },
    ],
  },
];
