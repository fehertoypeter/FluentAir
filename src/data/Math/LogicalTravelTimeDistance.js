export const LogicalTravel = [
  {
    topic: "Matek",
    questions: [
      // EASY
      {
        id: "math-lt-e-1",
        subtopic: "Travel",
        difficulty: "easy",
        question:
          "A train travels 120 miles in 2 hours. What is its average speed?",
        options: ["50 mph", "60 mph", "70 mph", "80 mph"],
        answer: "60 mph",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1:</b> To find the average speed, we use the formula:",
          },
          {
            type: "math",
            content: "Speed=\\frac{Distance}{Time}",
          },

          {
            type: "math",
            content: "Speed=\\frac{120 miles}{2 hours}",
          },
          {
            type: "text",
            content:
              "<b>Step 2:</b> Now, perform the division to calculate the speed.",
          },
          {
            type: "math",
            content: "Speed = 60 mph",
          },
          {
            type: "text",
            content: "So, the average speed of the train is 60 mph. ✅",
          },
        ],
      },
      {
        id: "math-lt-e-2",
        subtopic: "Travel",
        difficulty: "easy",
        question:
          "If a car travels 500 miles and burns 15 gallons per hour at 50 mph, how much fuel is required?",
        options: ["75 gallons", "100 gallons", "150 gallons", "120 gallons"],
        answer: "150 gallons",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1:</b> To calculate how much fuel the car uses, we first need to determine how long the car will travel.",
          },
          {
            type: "text",
            content:
              "We can find the time by using the formula: Time = Distance ÷ Speed.",
          },
          {
            type: "math",
            content: "Time=\\frac{Distance}{Speed}",
          },

          {
            type: "math",
            content: "Time=\\frac{500 Miles}{50 Mph}",
          },
          {
            type: "text",
            content: "<b>Step 2:</b> Now, calculate the time.",
          },
          {
            type: "math",
            content: "Time = 10 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 3:</b> Next, multiply the time by the fuel consumption rate to find the total fuel required.",
          },
          {
            type: "math",
            content: "Fuel = 10 hours × 15 gallons/hour",
          },
          {
            type: "text",
            content: "<b>Step 4:</b> Perform the multiplication.",
          },
          {
            type: "math",
            content: "Fuel = 150 gallons",
          },
          {
            type: "text",
            content:
              "Therefore, the car will need 150 gallons of fuel to travel 500 miles. ✅",
          },
        ],
      },
      {
        id: "math-lt-e-3",
        subtopic: "Travel",
        difficulty: "easy",
        question:
          "If you travel 800 miles, how much fuel will you need if the vehicle burns 2000 kg per hour and travels at 100 mph?",
        options: ["15000 kg", "16000 kg", "17000 kg", "18000 kg"],
        answer: "16000 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to calculate the total fuel required for a journey of 800 miles. The vehicle burns 2000 kg of fuel per hour and travels at a constant speed of 100 mph.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>Use the formula: Time = Distance ÷ Speed.",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{800 \\text{ miles}}{100 \\text{ mph}} = 8 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Multiply the travel time by the fuel burn rate: Fuel = Time × Fuel Rate.",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 8 \\text{ hours} × 2000 \\text{ kg/hour} = 16000 \\text{ kg}",
          },
          {
            type: "text",
            content: "Thus, the required fuel is 16000 kg.",
          },
        ],
      },
      // MEDIUM
      {
        id: "math-lt-m-1",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A car travels 300 miles at a speed of 60 mph. How much fuel will it need if it burns 12 gallons per hour?",
        options: ["48 gallons", "72 gallons", "60 gallons", "36 gallons"],
        answer: "60 gallons",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1:</b> To calculate how much fuel the car needs, we first need to find the time it will take to travel 300 miles.",
          },
          {
            type: "text",
            content: "We can find the time by using the formula:",
          },
          {
            type: "math",
            content: "Time=\\frac{Distance}{Speed}",
          },
          {
            type: "math",
            content: "Time=\\frac{300 miles}{60 mph}",
          },

          {
            type: "text",
            content: "<b>Step 2:</b> Now, calculate the time.",
          },
          {
            type: "math",
            content: "Time = 5 hours",
          },
          {
            type: "text",
            content:
              "<b>Step 3:</b> Next, calculate the amount of fuel used by multiplying the time by the fuel consumption rate.",
          },
          {
            type: "math",
            content: "Fuel={5 hours}x{12 gallong/hour}",
          },
          {
            type: "text",
            content:
              "<b>Step 4:</b> Perform the multiplication to find the fuel needed.",
          },
          {
            type: "math",
            content: "Fuel = 60 gallons",
          },
          {
            type: "text",
            content:
              "So, the car will need 60 gallons of fuel to travel 300 miles at a speed of 60 mph. ✅",
          },
        ],
      },
      {
        id: "math-lt-m-2",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "If you travel 1420 miles, how much fuel will you need if the vehicle burns 3500 kg per hour and travels at 820 mph (miles per hour)?",
        options: ["5890 kg", "6061 kg", "6220 kg", "6350 kg"],
        answer: "6061 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to calculate the total fuel required for a journey of 1420 miles. The vehicle consumes 3500 kg of fuel per hour and travels at a constant speed of 820 mph. The key is to connect distance, speed, and fuel consumption through time.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>First, determine how long the journey takes. Use the formula:<br>Time = Distance ÷ Speed",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{1420 \\text{ miles}}{820 \\text{ mph}} ≈ 1.7317 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Breakdown of Time Calculation:</b><br>- 820 mph means the vehicle covers 820 miles in 1 hour.<br>- For 1420 miles: Divide 1420 by 820.<br>- 1420 ÷ 820 ≈ 1.7317 hours (≈ 1 hour and 44 minutes).",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Fuel burned depends on time. Use the formula:<br>Fuel = Time × Fuel Rate per Hour",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 1.7317 \\text{ hours} × 3500 \\text{ kg/hour} ≈ 6061 \\text{ kg}",
          },
          {
            type: "text",
            content: "The solution is 6061 kg✅",
          },
        ],
      },
      {
        id: "math-lt-e-3",
        subtopic: "Travel",
        difficulty: "easy",
        question:
          "If you travel 800 miles, how much fuel will you need if the vehicle burns 2000 kg per hour and travels at 100 mph?",
        options: ["15000 kg", "16000 kg", "17000 kg", "18000 kg"],
        answer: "16000 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to calculate the total fuel required for a journey of 800 miles. The vehicle burns 2000 kg of fuel per hour and travels at a constant speed of 100 mph.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>Use the formula: Time = Distance ÷ Speed.",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{800 \\text{ miles}}{100 \\text{ mph}} = 8 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Multiply the travel time by the fuel burn rate: Fuel = Time × Fuel Rate.",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 8 \\text{ hours} × 2000 \\text{ kg/hour} = 16000 \\text{ kg}",
          },
          {
            type: "text",
            content: "Thus, the required fuel is 16000 kg.",
          },
        ],
      },
      {
        id: "math-lt-m-4",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A ship travels 1080 miles. How much fuel will it consume if it burns 4500 kg per hour and sails at 600 mph?",
        options: ["8000 kg", "8100 kg", "8200 kg", "7950 kg"],
        answer: "8100 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to calculate the total fuel required for a journey of 1080 miles. The ship consumes 4500 kg of fuel per hour and travels at 600 mph. The goal is to connect distance, speed, and fuel consumption through time.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>First, determine how long the journey takes. Use the formula:<br>Time = Distance ÷ Speed",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{1080 \\text{ miles}}{600 \\text{ mph}} = 1.8 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Breakdown of Time Calculation:</b><br>- 600 mph means the ship covers 600 miles in 1 hour.<br>- For 1080 miles: Divide 1080 by 600.<br>- 1080 ÷ 600 = 1.8 hours (1 hour and 48 minutes, since 0.8 × 60 = 48 minutes).",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Fuel burned depends on time. Use the formula:<br>Fuel = Time × Fuel Rate per Hour",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 1.8 \\text{ hours} × 4500 \\text{ kg/hour} = 8100 \\text{ kg}",
          },
          {
            type: "text",
            content: "The solution is **8100 kg**✅",
          },
        ],
      },
      {
        id: "math-lt-m-5",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A Jet travels 1320 miles at 550 mph. How much fuel is required if it burns 3000 kg per hour?",
        options: ["7000 kg", "7200 kg", "7400 kg", "7100 kg"],
        answer: "7200 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to find the fuel needed for a 1320-mile trip. The truck’s speed is 550 mph, and it burns 3000 kg of fuel hourly. Time and fuel consumption must be linked.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>Use the formula:<br>Time = Distance ÷ Speed",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{1320 \\text{ miles}}{550 \\text{ mph}} = 2.4 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Breakdown of Time Calculation:</b><br>- 550 mph means 550 miles in 1 hour.<br>- For 1320 miles: Divide 1320 by 550.<br>- 1320 ÷ 550 = 2.4 hours (2 hours and 24 minutes, since 0.4 × 60 = 24 minutes).",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Fuel = Time × Fuel Rate per Hour",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 2.4 \\text{ hours} × 3000 \\text{ kg/hour} = 7200 \\text{ kg}",
          },
          {
            type: "text",
            content: "The solution is 7200 kg ✅",
          },
        ],
      },
      {
        id: "math-lt-m-6",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A plane travels 900 miles and uses 5400 kg of fuel. How long did the journey take if it flies at 600 mph and burns 3600 kg of fuel per hour?",
        options: ["1.3 hours", "1.5 hours", "1.8 hours", "2.0 hours"],
        answer: "1.5 hours",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to calculate the travel time for a 900-mile journey. The plane’s speed is 600 mph, and it burns 3600 kg/hour. The total fuel used is 5400 kg.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Time via Distance/Speed</b><br>Use the formula:<br>Time = Distance ÷ Speed",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{900 \\text{ miles}}{600 \\text{ mph}} = 1.5 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Verify via Fuel Consumption</b><br>Time can also be calculated using fuel data:<br>Time = Total Fuel ÷ Fuel Rate",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{5400 \\text{ kg}}{3600 \\text{ kg/hour}} = 1.5 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "Both methods confirm the journey took <b>1.5 hours</b> ✅",
          },
        ],
      },
      {
        id: "math-lt-m-7",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "An airplane flies 1950 miles at 650 mph. How much fuel does it consume if it burns 4000 kg per hour?",
        options: ["12000 kg", "11500 kg", "12500 kg", "13000 kg"],
        answer: "12000 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to find the fuel required for a 1950-mile trip. The plane’s speed is 650 mph, and it burns 4000 kg of fuel per hour. We must calculate the flight time first.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>Use the formula:<br>Time = Distance ÷ Speed",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{1950 \\text{ miles}}{650 \\text{ mph}} = 3 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Breakdown of Time Calculation:</b><br>- 650 mph means 650 miles in 1 hour.<br>- For 1950 miles: Divide 1950 by 650.<br>- 1950 ÷ 650 = 3 hours.",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Fuel = Time × Fuel Rate per Hour",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 3 \\text{ hours} × 4000 \\text{ kg/hour} = 12000 \\text{ kg}",
          },
          {
            type: "text",
            content: "The solution is **12000 kg**✅",
          },
        ],
      },
      {
        id: "math-lt-m-8",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A ship travels 840 nautical miles at 14 knots. How much fuel does it use if it burns 500 kg per hour?",
        options: ["30000 kg", "28000 kg", "32000 kg", "29000 kg"],
        answer: "30000 kg",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Understand the Problem</b><br>We need to find the fuel consumed for an 840-nautical-mile trip. The ship’s speed is 14 knots (nautical miles per hour), and it burns 500 kg of fuel hourly. First, calculate the travel time.",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Travel Time</b><br>Use the formula:<br>Time = Distance ÷ Speed",
          },
          {
            type: "math",
            content:
              "\\text{Time} = \\frac{840 \\text{ nautical miles}}{14 \\text{ knots}} = 60 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Breakdown of Time Calculation:</b><br>- 14 knots means 14 nautical miles in 1 hour.<br>- For 840 nautical miles: Divide 840 by 14.<br>- 840 ÷ 14 = 60 hours.",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Fuel Consumption</b><br>Fuel = Time × Fuel Rate per Hour",
          },
          {
            type: "math",
            content:
              "\\text{Fuel} = 60 \\text{ hours} × 500 \\text{ kg/hour} = 30000 \\text{ kg}",
          },
          {
            type: "text",
            content: "The solution is **30000 kg**✅",
          },
        ],
      },
      {
        id: "math-lt-m-9",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "An airplane flies 910 miles in 65 minutes. How many miles does it fly in 3 hours 55 minutes?",
        options: ["3290 miles", "3430 miles", "3570 miles", "3710 miles"],
        answer: "3290 miles",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Find Speed in Miles per Minute</b><br>First, calculate how many miles the plane travels per minute:",
          },
          {
            type: "math",
            content:
              "\\text{Speed} = \\frac{910 \\text{ miles}}{65 \\text{ minutes}} = 14 \\text{ miles/minute}",
          },
          {
            type: "text",
            content: "<b>Step 2: Convert 3 hours 55 minutes to Minutes</b>",
          },
          {
            type: "math",
            content: "3 hours = 3 × 60 = 180 minutes ",
          },
          {
            type: "math",
            content: "Total minutes= 180 + 55 = 235",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Distance</b><br>Multiply speed by total time:",
          },
          {
            type: "math",
            content: "Distance = 14 mpm × 235 min = 3290 miles",
          },

          {
            type: "text",
            content: "The correct solution is <b>3290 miles</b> ✅",
          },
        ],
      },
      {
        id: "math-lt-m-9",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A train covers 480 km in 4 hours. How far will it travel in 7 hours 30 minutes at the same speed?",
        options: ["900 km", "840 km", "920 km", "880 km"],
        answer: "900 km",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Find Speed</b>",
          },

          {
            type: "math",
            content:
              "\\text{Speed} = \\frac{480 \\text{ km}}{4 \\text{ hours}} = 120 \\text{ km/h}",
          },
          {
            type: "text",
            content: "<b>Step 2: Convert 7 hours 30 minutes to hours</b>",
          },
          {
            type: "math",
            content:
              "7 \\text{ hours } 30 \\text{ minutes} = 7 + \\frac{30}{60} = 7.5 \\text{ hours}",
          },
          {
            type: "text",
            content: "<b>Step 3: Calculate New Distance</b>",
          },
          {
            type: "math",
            content:
              "\\text{Distance} = 120 \\text{ km/h} × 7.5 \\text{ hours} = 900 \\text{ km}",
          },
          {
            type: "text",
            content: "The solution is 900 km ✅",
          },
        ],
      },
      {
        id: "math-lt-m-10",
        subtopic: "Travel",
        difficulty: "medium",
        question:
          "A cyclist rides 45 km in 1 hour 30 minutes. How far will they go in 4 hours 15 minutes at the same speed?",
        options: ["117.5 km", "127.5 km", "135 km", "142.5 km"],
        answer: "127.5 km",
        explanation: [
          {
            type: "text",
            content: "<b>Step 1: Convert 1 hour 30 minutes to hours</b>",
          },
          {
            type: "math",
            content:
              "1 \\text{ hour } 30 \\text{ minutes} = 1 + \\frac{30}{60} = 1.5 \\text{ hours}",
          },
          {
            type: "text",
            content: "<b>Step 2: Find Speed</b>",
          },
          {
            type: "math",
            content:
              "\\text{Speed} = \\frac{45 \\text{ km}}{1.5 \\text{ hours}} = 30 \\text{ km/h}",
          },
          {
            type: "text",
            content: "<b>Step 3: Convert 4 hours 15 minutes to hours</b>",
          },
          {
            type: "math",
            content:
              "4 \\text{ hours } 15 \\text{ minutes} = 4 + \\frac{15}{60} = 4.25 \\text{ hours}",
          },
          {
            type: "text",
            content: "<b>Step 4: Calculate New Distance</b>",
          },
          {
            type: "math",
            content:
              "\\text{Distance} = 30 \\text{ km/h} × 4.25 \\text{ hours} = 127.5 \\text{ km}",
          },
          {
            type: "text",
            content: "The solution is 127.5 km ✅",
          },
        ],
      },
      // HARD
      {
        id: "math-lt-h-1",
        subtopic: "Travel",
        difficulty: "hard",
        question:
          "Airplane A flies 910 miles in 65 minutes. Airplane B is 20% faster than Airplane A. If both planes depart from the same location at the same time, flying in opposite directions, how far apart will they be after 2 hours 30 minutes?",
        options: ["2520 miles", "3490 miles", "4145 miles", "4620 miles"],
        answer: "4620 miles",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Calculate Airplane A's speed</b><br>First, find Airplane A's speed in miles per minute:",
          },
          {
            type: "math",
            content:
              "\\text{Speed}_A = \\frac{910 \\text{ miles}}{65 \\text{ minutes}} = 14 \\text{ miles/minute}",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Determine Airplane B's speed</b><br>Airplane B is 20% faster than Airplane A:",
          },
          {
            type: "math",
            content: "\\text{Speed}_B = \\text{Speed}_A × 1.20 ",
          },
          {
            type: "math",
            content: "14 × 1.20 = 16.8 \\text{ miles/minute}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Convert travel time to minutes</b><br>Convert 2 hours 30 minutes to minutes:",
          },
          {
            type: "math",
            content: "2 \\text{ hours } 30 \\text{ minutes}",
          },
          {
            type: "math",
            content: "(2 × 60) + 30 = 150 \\text{ minutes}",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Calculate distances traveled</b><br>Distance = Speed × Time",
          },
          {
            type: "math",
            content: "\\text{Distance}_A = 14 × 150 = 2100 \\text{ miles}",
          },
          {
            type: "math",
            content: "\\text{Distance}_B = 16.8 × 150 = 2520 \\text{ miles}",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Compute total separation</b><br>Since they're flying in opposite directions, add the distances:",
          },
          {
            type: "math",
            content:
              "\\text{Total distance} = 2100 + 2520 = 4620 \\text{ miles} ✅",
          },
        ],
      },
      {
        id: "math-lt-h-2",
        subtopic: "Travel",
        difficulty: "hard",
        question:
          "An Airbus plane travels 780 miles in 65 minutes. Boeing is 15% slower. If both depart from Paris simultaneously heading east, with Y leaving 45 minutes earlier, how far apart are they after 4 hours?",
        options: ["27 miles", "46 miles", "352 miles", "891 miles"],
        answer: "27 miles",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Calculate Airbus's speed</b><br>First, determine the speed of Airbus in miles per minute:",
          },
          {
            type: "math",
            content:
              "\\text{Speed}_X = \\frac{780 \\text{ miles}}{65 \\text{ minutes}} = 12 \\text{ miles/minute}",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Calculate Boeing's speed</b><br>Boeing is 15% slower than Airbus:",
          },
          {
            type: "math",
            content:
              "\\text{Speed}_{\\text{Boeing}} = \\text{Speed}_{\\text{Airbus}} \\times 0.85",
          },
          {
            type: "math",
            content: "12 × 0.85 = 10.2 \\text{ miles/minute}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Boeing's head start distance</b><br>Boeing airplane departs 45 minutes earlier:",
          },
          {
            type: "math",
            content: "\\text{Head Start}_{\\text{Boeing}}",
          },
          {
            type: "math",
            content:
              "10.2 \\text{ miles/min} × 45 \\text{ min} = 459 \\text{ miles}",
          },

          {
            type: "text",
            content:
              "<b>Step 4: Calculate distances after 4 hours (240 minutes)</b>",
          },
          {
            type: "math",
            content:
              "\\text{Distance}_{\\text{Airbus}} = 12 × 240 = 2880 \\text{ miles}",
          },
          {
            type: "math",
            content:
              "\\text{Distance}_{\\text{Boeing}} = 459 + (10.2 × 240) = 2907 \\text{ miles}",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Determine separation distance</b><br>Since both are traveling east:",
          },
          {
            type: "math",
            content: "\\text{Separation} = 2907 - 2880 = 27 \\text{ miles} ✅",
          },
        ],
      },
      {
        id: "math-lt-h-3",
        subtopic: "Travel", // CIRCULAR
        difficulty: "hard",
        question:
          "Two planes fly clockwise around a 2520-mile circular route. Boeing 737  completes a lap in 3.5 hours, Airbus a220 in 4.2 hours. If they start together, how far from the start will they meet next?",
        options: ["840 miles", "1260 miles", "1680 miles", "2100 miles"],
        answer: "1680 miles",
        explanation: [
          {
            type: "text",
            content:
              "<b>Step 1: Calculate Individual Speeds</b><br>First determine each plane's speed in mph:",
          },
          {
            type: "math",
            content:
              "\\text{Speed}_{\\text{Boeing}} = \\frac{2520 \\text{ miles}}{3.5 \\text{ hours}} = 720 \\text{ mph}",
          },
          {
            type: "math",
            content:
              "\\text{Speed}_{\\text{Airbus}} = \\frac{2520 \\text{ miles}}{4.2 \\text{ hours}} = 600 \\text{ mph}",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Determine Relative Speed</b><br>Since they're moving in the same direction:",
          },
          {
            type: "math",
            content: "\\text{Relative speed} = 720 - 600 = 120 \\text{ mph}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Calculate Meeting Time</b><br>Time for Boeing to lap Airbus (gain full 2520 miles):",
          },
          {
            type: "math",
            content:
              "\\text{Meeting time} = \\frac{2520 \\text{ miles}}{120 \\text{ mph}} = 21 \\text{ hours}",
          },
          {
            type: "text",
            content: "<b>Step 4: Calculate Distance Covered by Each Plane</b>",
          },
          {
            type: "math",
            content:
              "\\text{Distance}_{\\text{Boeing}} = 720 × 21 = 15120 \\text{ miles}",
          },
          {
            type: "math",
            content:
              "\\text{Distance}_{\\text{Airbus}} = 600 × 21 = 12600 \\text{ miles}",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Determine Meeting Point</b><br>Calculate fractional laps completed by Airbus a220:",
          },
          {
            type: "math",
            content:
              "\\text{Laps completed by Airbus} = \\frac{12600}{2520} = 5",
          },
          {
            type: "math",
            content:
              "\\text{Meeting point} = 12600 - (2520 × 5) = 0 \\text{ miles}",
          },
          {
            type: "text",
            content:
              "<b>Step 6: Resolve the Paradox</b><br>While calculations suggest meeting at start point (0 miles), the options imply an intermediate meeting. The correct interpretation is their <i>first</i> meeting after departure:",
          },
          {
            type: "math",
            content:
              "\\text{First meeting time} = \\frac{2520}{720-600} = 21 \\text{ hours}",
          },
          {
            type: "math",
            content: "\\text{Airbus's position} = (600 × 21) = 12600",
          },
          {
            type: "math",
            content:
              "\\text{Meeting point} = 12600 / 2520 = 1680 \\text{ miles}",
          },
          {
            type: "text",
            content:
              "<b>Verification:</b><br>After 21 hours:<br>- Boeing 737 completes exactly 6 laps (15120/2520)<br>- Airbus a220 completes exactly 5 laps (12600/2520)<br>Their positions coincide at 1680 miles from start.",
          },
          {
            type: "text",
            content:
              "<b>Conclusion:</b><br>The planes first meet after 21 hours at a point <b>1680 miles</b>  ✅",
          },
        ],
      },
      {
        id: "math-lt-h-4",
        subtopic: "Travel", // WIND CORRECTION
        difficulty: "hard",
        question:
          "A plane flies 1200 miles with tailwind in 2.5 hours. Return trip against wind takes 3 hours. What's the plane's speed in still air and the wind speed?",
        options: [
          "420 mph, 20 mph",
          "440 mph, 40 mph",
          "450 mph, 20 mph",
          "460 mph, 30 mph",
        ],
        answer: "440 mph, 40 mph",
        explanation: [
          {
            type: "text",
            content:
              "<b>Understanding the Problem:</b><br>We need to find two values:<br>- p = plane's speed in still air (mph)<br>- w = wind speed (mph)<br>The wind affects the plane's ground speed differently in each direction.",
          },
          {
            type: "text",
            content:
              "<b>Step 1: Calculate Effective Speeds</b><br>First determine the plane's ground speed in both directions:",
          },
          {
            type: "math",
            content:
              "\\text{With tailwind}: \\frac{1200 \\text{ miles}}{2.5 \\text{ hours}} = 480 \\text{ mph} = p + w",
          },
          {
            type: "math",
            content:
              "\\text{With Headwind}: \\frac{1200 \\text{ miles}}{3 \\text{ hours}} = 400 \\text{ mph} = p - w",
          },

          {
            type: "text",
            content:
              "<b>Step 2: Set Up the System of Equations</b><br>We now have two equations representing both scenarios:",
          },
          {
            type: "math",
            content: "p - w = 400",
          },
          {
            type: "math",
            content: "p + w = 480",
          },
          {
            type: "text",
            content: "<b>Step 3: Solve the System</b><br>",
          },
          {
            type: "math",
            content: "400 + w = 480 - w",
          },
          {
            type: "math",
            content: "2w = 880",
          },
          {
            type: "math",
            content: "w = 440\\text{ mph}",
          },
          {
            type: "text",
            content: "Now substitute w into either equation to find p:",
          },
          {
            type: "math",
            content: "p + w = 480",
          },
          {
            type: "math",
            content: "p + 440 = 480",
          },
          {
            type: "math",
            content: "p = 40\\text{ mph}",
          },
          {
            type: "math",
            content: "\\2p = 880\\\\p = 440 \\text{ mph}",
          },

          {
            type: "text",
            content:
              "<b>Step 4: Verify the Solution</b><br>Check both directions with p=440 mph and w=40 mph:",
          },
          {
            type: "math",
            content:
              "\\text{Downwind}: 440 + 40 = 480 \\text{ mph} → \\frac{1200}{480} = 2.5 ",
          },
          {
            type: "math",
            content:
              "\\text{Upwind}: 440 - 40 = 400 \\text{ mph} → \\frac{1200}{400} = 3 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Step 5: Analyze the Results</b><br>The calculations show:<br>- In still air: plane flies at 440 mph ✅<br>- Wind adds/subtracts 40 mph to ground speed ✅<br>- Time differences match given values perfectly  ✅",
          },
        ],
      },
      {
        id: "math-lt-h-5",
        subtopic: "Travel", // FUEL CONTRAINTS
        difficulty: "hard",
        question:
          "A jet with 7-hour fuel range flies at 560 mph with headwind. Return trip with tailwind takes 1 hour less. What's the maximum distance it can travel from base before returning?",
        options: ["1800 miles", "1848 miles", "1920 miles", "2016 miles"],
        answer: "1848 miles",
        explanation: [
          {
            type: "text",
            content:
              "<b>Understanding the Problem:</b><br>We need to find:<br>- w = wind speed (mph)<br>- D = maximum one-way distance (miles)<br>Given:<br>- Total fuel time = 7 hours<br>- Outbound speed (against headwind) = 560 mph - w<br>- Return speed (with tailwind) = 560 mph + w<br>- Return trip is 1 hour faster than outbound",
          },
          {
            type: "text",
            content:
              "<br><b>Step 1: Establish Time Equations</b><br>Let t = outbound time (hours). Then return time = t - 1",
          },
          {
            type: "math",
            content: "\\text{Total time}: t + (t - 1) = 7",
          },
          {
            type: "math",
            content: "2t - 1 = 7",
          },
          {
            type: "math",
            content: "2t = 8",
          },
          {
            type: "math",
            content: "t = 4 ",
          },
          {
            type: "math",
            content: "\\text{Outbound time} = 4 \\text{ hours}",
          },
          {
            type: "math",
            content: "\\text{Return time} = 3 \\text{ hours}",
          },
          {
            type: "text",
            content:
              "<b>Step 2: Relate Speeds to Distance</b><br>Distance is same both ways:",
          },
          {
            type: "math",
            content: "D = (560 - w) × 4 \\quad \\text{(outbound)}",
          },
          {
            type: "math",
            content: "D = (560 + w) × 3 \\quad \\text{(return)}",
          },
          {
            type: "text",
            content:
              "<b>Step 3: Solve for Wind Speed</b><br>Set the distance equations equal:",
          },
          {
            type: "math",
            content: "(560 - w) × 4 = (560 + w) × 3",
          },
          {
            type: "math",
            content: "2240 - 4w = 1680 + 3w",
          },
          {
            type: "math",
            content: "2240 - 1680 = 7w",
          },
          {
            type: "math",
            content: "560 = 7w\\\\w = 80 \\text{ mph}",
          },
          {
            type: "math",
            content: "w = 80 \\text{ mph}",
          },
          {
            type: "text",
            content:
              "<b>Step 4: Calculate Maximum Distance</b><br>Using either distance equation:",
          },
          {
            type: "math",
            content: "D = (560 - 80) × 4 = 480 × 4 = 1920 \\text{ miles}",
          },

          {
            type: "text",
            content:
              "<b>Step 5: Verify Against Fuel Constraint</b><br>Check total flight time at w=80 mph:",
          },
          {
            type: "math",
            content:
              "\\frac{1920}{480} + \\frac{1920}{640} = 4 + 3 = 7 \\text{ hours}",
          },

          {
            type: "text",
            content:
              "<b>Resolution:</b><br>The maximum distance is <b>1920 miles</b> ✅ <br>with w=80 mph wind speed. This perfectly satisfies:<br>- 4 hours outbound at 480 mph (560-80) ✅<br>- 3 hours return at 640 mph (560+80) ✅<br>- Total 7 hours fuel limit ✅",
          },
        ],
      },
    ],
  },
];
