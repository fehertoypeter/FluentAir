import React, { useState } from "react";
import "./PerformanceGraph.css";
import TestPerformanceData from "../../data/TestPerformanceData";
import AssessmentDataCircle from "./AssessmentDataCircle";

const PerformanceGraph = ({ defaultType = "math" }) => {
  const [selectedType, setSelectedType] = useState(defaultType);
  const [viewMode, setViewMode] = useState("test"); // "test" or "daily"
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const testPerformanceData = TestPerformanceData();

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleViewModeChange = (event) => {
    setViewMode(event.target.value);
  };

  const processDailyData = (data) => {
    const dailyData = {};

    // Group data by date and calculate daily averages using `percentage`
    data.forEach((test) => {
      const date = new Date(test.date).toISOString().split("T")[0];
      if (!dailyData[date]) {
        dailyData[date] = { totalPercentage: 0, count: 0 };
      }
      dailyData[date].totalPercentage += test.percentage;
      dailyData[date].count += 1;
    });

    // Generate last 30 days including today
    const today = new Date();
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const formattedDate = date.toISOString().split("T")[0];
      const dayData = dailyData[formattedDate];

      // Calculate average percentage
      const averagePercentage =
        dayData && dayData.count > 0
          ? Math.round(dayData.totalPercentage / dayData.count)
          : 0;

      // Add formatted month and day for display
      const shortDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      return {
        date: formattedDate,
        shortDate: shortDate, // Add short date format
        percentage: averagePercentage,
        placeholder: !dayData,
      };
    });

    return last30Days;
  };

  const filteredData = testPerformanceData
    .filter((test) => test.type === selectedType)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const displayedData =
    viewMode === "daily"
      ? processDailyData(filteredData)
      : filteredData.slice(0, 30);

  // Always generate exactly 30 slots for the graph
  const graphData =
    viewMode === "daily"
      ? displayedData
      : Array.from(
          { length: 30 },
          (_, index) =>
            displayedData[index] || { percentage: 0, placeholder: true }
        );

  const getColorByPercentage = (percentage) => {
    if (percentage <= 40) {
      return "#FF5A60"; // Red
    } else if (percentage <= 80) {
      return "#F5AB00"; // Yellow
    } else {
      return "#6EB462"; // Green
    }
  };

  return (
    <div className="desktop-container">
      <div className="selection-container">
        <p htmlFor="type-select">Select Test Type: </p>
        <select
          id="type-select"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="visual">Visual</option>
          <option value="numerical">Numerical</option>
          <option value="decoding">Decoding</option>
          <option value="3d">3D</option>
          <option value="verbal">Verbal</option>
          <option value="english">English</option>
          <option value="memory">Memory</option>
          <option value="sequence">Sequence</option>
          <option value="geometry">Geometry</option>
          <option value="concentration">Concentration</option>
        </select>

        <p htmlFor="view-mode-select">View mode: </p>
        <select
          id="view-mode-select"
          value={viewMode}
          onChange={handleViewModeChange}
        >
          <option value="test">Test-based</option>
          <option value="daily">Daily average</option>
        </select>
      </div>
      <div className="performance-graph">
        <AssessmentDataCircle />

        <div className="graph-main-container">
          <div className="graph-container">
            {graphData.map((entry, index) => (
              <div
                key={index}
                className="bar-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`bar ${entry.placeholder ? "empty" : "filled"}`}
                  style={{
                    height: `${entry.percentage}%`,
                    backgroundColor: entry.placeholder
                      ? "rgba(173, 216, 230, 0.5)" // Light blue for empty bars
                      : getColorByPercentage(entry.percentage),
                  }}
                >
                  {hoveredIndex === index && !entry.placeholder && (
                    <div className="percentage-tooltip">
                      {entry.percentage}%
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="x-axis-labels">
            {graphData.map((entry, index) => {
              const isXAxisLabel =
                viewMode === "daily"
                  ? [0, 5, 10, 15, 20, 25, 30].includes(index)
                  : [0, 4, 9, 14, 19, 24, 29].includes(index);

              return (
                <div
                  key={index}
                  className="x-axis-label"
                  style={{ width: `${100 / 30}%` }}
                >
                  {isXAxisLabel &&
                    (viewMode === "daily" ? entry.shortDate : index + 1)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph;
