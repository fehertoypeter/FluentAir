export const TimeCalculations = [
  {
    topic: "Matek",
    questions: [
      {
        id: "math-dc-e-1",
        subtopic: "Time Calculation",
        difficulty: "easy",
        question: "How many hours is 5 days and 6 hours?",
        options: ["126 hours", "120 hours", "116 hours", "110 hours"],
        answer: "126 hours",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert days to hours</b><br>5 days = 5 × 24 = 120 hours<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining hours</b><br>120 hours + 6 hours = 126 hours ✅",
          },
        ],
      },
      {
        id: "math-dc-e-2",
        subtopic: "Time Calculation",
        difficulty: "easy",
        question: "How many minutes is 3 days 13 hours and 46 minutes?",
        options: [
          "4986 minutes",
          "5026 minutes",
          "5126 minutes",
          "5146 minutes",
        ],
        answer: "5146 minutes",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert days to hours</b><br>3 days = 3 × 24 hours = 72 hours<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining hours</b><br>72 hours + 13 hours = 85 hours<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert hours to minutes</b><br>85 hours × 60 minutes/hour = 5100 minutes<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining minutes</b><br>5100 minutes + 46 minutes = 5146 minutes  ✅",
          },
        ],
      },
      // MEDIUM
      {
        id: "math-dc-m-1",
        subtopic: "Time Calculation",
        difficulty: "medium",
        question: "How many hours is 2 weeks 3 days and 18 hours?",
        options: ["420 hours", "426 hours", "444 hours", "456 hours"],
        answer: "426 hours",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert weeks to days</b><br>2 weeks = 2 × 7 days = 14 days<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining days</b><br>14 days + 3 days = 17 days<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert days to hours</b><br>17 days × 24 = 408 hours<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining hours</b><br>408 hours + 18 hours = 426 hours ✅",
          },
        ],
      },
      {
        id: "math-dc-m-2",
        subtopic: "Time Calculation",
        difficulty: "medium",
        question: "How many minutes is 4 days 7 hours and 33 minutes?",
        options: [
          "6,153 minutes",
          "6,203 minutes",
          "6,213 minutes",
          "6,333 minutes",
        ],
        answer: "6,213 minutes",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert days to hours</b><br>4 days = 4 × 24 = 96 hours<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining hours</b><br>96 hours + 7 hours = 103 hours<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert hours to minutes</b><br>103 hours × 60 = 6,180 minutes<br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining minutes</b><br>6,180 minutes + 33 minutes = 6,213 minutes ✅",
          },
        ],
      },
      {
        id: "math-dc-m-3",
        subtopic: "Time Calculation",
        difficulty: "medium",
        question: "How many minutes is 2 days 12 hours and 45 minutes?",
        options: [
          "3,645 minutes",
          "3,565 minutes",
          "3,485 minutes",
          "3,405 minutes",
        ],
        answer: "3,645 minutes",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert days to hours</b><br>2 days = 2 × 24 = 48 hours <br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining hours</b><br>48 hours + 12 hours = 60 hours <br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert hours to minutes</b><br>60 hours × 60 = 3,600 minutes <br><br>",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining minutes</b><br>3,600 minutes + 45 minutes = 3,645 minutes  ✅",
          },
        ],
      },
      {
        id: "math-dc-h-4",
        subtopic: "Time Calculation",
        difficulty: "medium",
        question: "How many hours is 1 week 2 days and 10 hours?",
        options: ["210 hours", "216 hours", "222 hours", "228 hours"],
        answer: "222 hours",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Convert weeks to days</b><br>1 week = 7 days",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining days</b><br>7 days + 2 days = 9 days",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert days to hours</b><br>9 days × 24 = 216 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining hours</b><br>216 hours + 10 hours = 226 hours",
          },
        ],
      },
      //HARD
      {
        id: "math-dc-h-1",
        subtopic: "Time Calculation",
        difficulty: "hard",
        question: "How many seconds is 1 day 5 hours and 12 minutes?",
        options: [
          "101,520 seconds",
          "104,320 seconds",
          "105,120 seconds",
          "106,920 seconds",
        ],
        answer: "105,120 seconds",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Convert days to hours</b><br>1 day = 24 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining hours</b><br>24 hours + 5 hours = 29 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert hours to minutes</b><br>29 hours × 60 = 1740 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining minutes</b><br>1740 minutes + 12 minutes = 1752 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Convert to seconds</b><br>1752 minutes × 60 = 105,120 seconds",
          },
        ],
      },
      {
        id: "math-dc-h-2",
        subtopic: "Time Calculation",
        difficulty: "hard",
        question:
          "How many seconds is 1 week 2 days 9 hours 15 minutes and 30 seconds?",
        options: [
          "792,900 seconds",
          "802,530 seconds",
          "812,130 seconds",
          "822,930 seconds",
        ],
        answer: "802,530 seconds",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Convert weeks to days</b><br>1 week = 7 days",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining days</b><br>7 days + 2 days = 9 days",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert days to hours</b><br>9 days × 24 = 216 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining hours</b><br>216 hours + 9 hours = 225 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Convert hours to minutes</b><br>225 hours × 60 = 13,500 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 6: Add remaining minutes</b><br>13,500 minutes + 15 minutes = 13,515 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 7: Convert to seconds</b><br>13,515 minutes × 60 = 810,900 seconds",
          },
          {
            type: "text",
            content:
              "<b>Step 8: Add remaining seconds</b><br>810,900 seconds + 30 seconds = 810,930 seconds",
          },
        ],
      },
      {
        id: "math-dc-h-2",
        subtopic: "Time Calculation",
        difficulty: "hard",
        question:
          "How many seconds is 3 weeks 1 day 8 hours 20 minutes and 15 seconds?",
        options: [
          "1,923,215 seconds",
          "1,932,015 seconds",
          "1,932,115 seconds",
          "1,932,215 seconds",
        ],
        answer: "1,932,015 seconds",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert weeks to days</b><br>3 weeks = 3 × 7 = 21 days",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Add remaining days</b><br>21 days + 1 day = 22 days",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert days to hours</b><br>22 days × 24 = 528 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Add remaining hours</b><br>528 hours + 8 hours = 536 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Convert hours to minutes</b><br>536 hours × 60 = 32,160 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 6: Add remaining minutes</b><br>32,160 minutes + 20 minutes = 32,180 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 7: Convert to seconds</b><br>32,180 minutes × 60 = 1,930,800 seconds",
          },
          {
            type: "text",
            content:
              "<b>Step 8: Add remaining seconds</b><br>1,930,800 seconds + 15 seconds = 1,930,815 seconds",
          },
        ],
      },

      {
        id: "math-dc-h-3",
        subtopic: "Time Calculation",
        difficulty: "hard",
        question:
          "How many minutes is 1 month (30 days) 2 weeks 3 days 5 hours and 50 minutes?",
        options: [
          "54,170 minutes",
          "55,010 minutes",
          "55,850 minutes",
          "56,690 minutes",
        ],
        answer: "55,850 minutes",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Convert month to days</b><br>1 month = 30 days",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Convert weeks to days</b><br>2 weeks = 2 × 7 = 14 days",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Add all days</b><br>30 days + 14 days + 3 days = 47 days",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Convert days to hours</b><br>47 days × 24 = 1,128 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Add remaining hours</b><br>1,128 hours + 5 hours = 1,133 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 6: Convert hours to minutes</b><br>1,133 hours × 60 = 67,980 minutes",
          },
          {
            type: "text",
            content:
              "<b>Step 7: Add remaining minutes</b><br>67,980 minutes + 50 minutes = 68,030 minutes",
          },
        ],
      },
    ],
  },
];
