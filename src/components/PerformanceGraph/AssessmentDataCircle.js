import React, { useState, useEffect, useMemo } from "react";
import TestPerformanceData from "../../data/TestPerformanceData";

import "./AssessmentDataCircle.css";

const AssessmentDataCircle = () => {
  const initialSubjects = useMemo(
    () => [
      "Numerical",
      "Decoding",
      "3D",
      "Verbal",
      "English",
      "Memory",
      "Sequence",
      "Geometry",
      "Concentration",
      "Math",
      "Physics",
      "Visual",
    ],
    []
  ); // Memoize the array, only recompute if it changes

  const [averages, setAverages] = useState(Array(12).fill(0));

  useEffect(() => {
    const performanceData = TestPerformanceData();
    const averagesData = initialSubjects.map((subject) => {
      const relevantScores = performanceData
        .filter((data) => data.type.toLowerCase() === subject.toLowerCase())
        .map((data) => data.percentage);

      if (relevantScores.length === 0) return 0;
      const total = relevantScores.reduce((acc, curr) => acc + curr, 0);
      return Math.round(total / relevantScores.length);
    });
    setAverages(averagesData);
  }, [initialSubjects]); // Now, useMemo guarantees initialSubjects stays stable

  const createSegmentPath = (startAngle, angle, radius, outerRadius = 200) => {
    const x1 = radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = radius * Math.cos(((startAngle + angle) * Math.PI) / 180);
    const y2 = radius * Math.sin(((startAngle + angle) * Math.PI) / 180);
    const largeArcFlag = angle > 180 ? 1 : 0;
    return `M 0,0 L ${x1},${y1} A ${outerRadius},${outerRadius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;
  };

  const calculateTextPosition = (startAngle, angle, radius) => {
    const midAngle = startAngle + angle / 2;
    const x = (radius + 30) * Math.cos((midAngle * Math.PI) / 180);
    const y = (radius + 30) * Math.sin((midAngle * Math.PI) / 180);
    return { x, y };
  };

  const getSegmentColor = (percentage) => {
    if (percentage <= 40) return "rgb(255, 90, 96)";
    if (percentage <= 80) return "rgb(245, 171, 0)";
    return "rgb(110, 180, 98)";
  };

  const angles = Array(12).fill(30);

  return (
    <div
      className="assessment-data-circle-container"
      style={{ position: "relative", textAlign: "center" }}
    >
      <p>All Subjects</p>
      <svg
        width="450"
        height="450"
        viewBox="-250 -250 500 580"
        style={{ margin: "0 auto" }}
      >
        {/* Marker vonalak minden 30 foknál */}
        <circle
          cx="0"
          cy="0"
          r="200"
          fill="#C0D9E7"
          stroke="#e4e9f7"
          strokeWidth="1"
        />
        <circle
          cx="0"
          cy="0"
          r="160"
          fill="#ABCBDC"
          stroke="#e4e9f7"
          strokeWidth="1"
        />
        <circle
          cx="0"
          cy="0"
          r="80"
          fill="#80B1C4"
          stroke="#e4e9f7"
          strokeWidth="1"
        />

        {/* Kiinduló vonalak */}
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = index * 30;
          const x1 = 0;
          const y1 = 0;
          const x2 = 200 * Math.cos((angle * Math.PI) / 180);
          const y2 = 200 * Math.sin((angle * Math.PI) / 180);
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#e4e9f7"
              strokeWidth="1"
            />
          );
        })}

        {
          angles.reduce(
            (acc, angle, index) => {
              const startAngle = acc.startAngle;
              const radius = (averages[index] / 100) * 160; // Inner radius based on percentage
              const outerRadius = 200; // Outer radius of the circle
              const path = (
                <path
                  key={index}
                  d={createSegmentPath(startAngle, angle, radius, outerRadius)}
                  fill={
                    averages[index] === 0
                      ? "transparent"
                      : getSegmentColor(averages[index])
                  }
                  stroke="white"
                  strokeWidth="1"
                />
              );
              acc.startAngle += angle;
              acc.paths.push(path);
              return acc;
            },
            { startAngle: 0, paths: [] }
          ).paths
        }

        {
          angles.reduce(
            (acc, angle, index) => {
              const startAngle = acc.startAngle;
              const radius = (averages[index] / 100) * 200;
              const path = (
                <path
                  key={index}
                  d={createSegmentPath(startAngle, angle, radius)}
                  fill={getSegmentColor(averages[index])}
                  stroke="#e4e9f7"
                  strokeWidth="1"
                />
              );
              acc.startAngle += angle;
              acc.paths.push(path);
              return acc;
            },
            { startAngle: 0, paths: [] }
          ).paths
        }

        {
          angles.reduce(
            (acc, angle, index) => {
              const startAngle = acc.startAngle;
              const { x, y } = calculateTextPosition(startAngle, angle, 220);
              const text = (
                <text
                  key={index}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  style={{ fontSize: "12px", fill: "#333" }}
                >
                  {initialSubjects[index]} ({averages[index]}%)
                </text>
              );
              acc.startAngle += angle;
              acc.texts.push(text);
              return acc;
            },
            { startAngle: 0, texts: [] }
          ).texts
        }
      </svg>
    </div>
  );
};

export default AssessmentDataCircle;
