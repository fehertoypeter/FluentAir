import React from "react";

import "./TestPage.css";

const lectureCardsData = [];
const ConnectionLine = ({
  verticalLength = 173,
  marginTop = 132,
  mirrored = false,
}) => {
  const startY = 21;
  const endY = startY + verticalLength;
  const curveExtension = 20;
  const strokeWidth = 3;
  const paddingAdjustment = strokeWidth;

  const bottomCurveEnd = endY + curveExtension;
  const totalHeight = mirrored
    ? bottomCurveEnd + paddingAdjustment
    : bottomCurveEnd + 2;

  const mirrorY = (y) =>
    mirrored ? totalHeight + 2 - y - paddingAdjustment : y;

  return (
    <div
      className="connection-line"
      style={{
        marginTop: `${marginTop}px`,
        width: "100px",
        height: `${totalHeight}px`,
        overflow: "hidden",
      }}
    >
      <svg width="100%" height="100%">
        <defs>
          <filter id="lineShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="2"
              dy="2"
              stdDeviation="2"
              floodColor="rgba(0,0,0,0.5)"
            />
          </filter>
        </defs>

        <path
          d={`
            M 1 ${mirrorY(1)} 
            L 30 ${mirrorY(1)} 
            Q 50 ${mirrorY(1)}, 50 ${mirrorY(startY)} 
            L 50 ${mirrorY(endY)} 
            Q 50 ${mirrorY(bottomCurveEnd)}, 70 ${mirrorY(bottomCurveEnd)} 
            L 99 ${mirrorY(bottomCurveEnd)}
          `}
          stroke="black"
          strokeWidth={strokeWidth}
          strokeDasharray="5"
          fill="none"
        />
      </svg>
    </div>
  );
};
const MobileConnectionLine = () => {
  return (
    <div className="mobile-connection-line">
      <svg width="100%" height="50">
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="50"
          stroke="black"
          strokeWidth="3"
          strokeDasharray="5"
        />
      </svg>
    </div>
  );
};
const LectureCard = ({
  id,
  title,
  description,
  buttons,
  position,
  isFirstCard,
}) => {
  return (
    <div className={`lecture-card card-${id}`}>
      {position !== "bottom" && <div className={`dot ${position}`}></div>}
      {!isFirstCard && <div className="dot top"></div>}{" "}
      {/* Csak ha NEM az első kártya */}
      <h2>{title}</h2>
      {description && <h3>{description}</h3>}
      <div className="button-container">
        {buttons.map((buttonText, index) => (
          <button key={index}>
            <p>{buttonText}</p>
          </button>
        ))}
      </div>
      {position === "bottom" && <div className="dot bottom"></div>}
    </div>
  );
};

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="academy-container">
        <h1>airBaltic Assessment Masterclass</h1>
        <div className="card-rows-container">
          {/* Desktop Layout */}
          <div className="desktop-columns">
            <div className="column column-1">
              {lectureCardsData
                .filter((card) => card.id % 2 === 1)
                .map((card) => (
                  <LectureCard key={card.id} {...card} position="left" />
                ))}
            </div>
            <div className="column column-2">
              <ConnectionLine verticalLength={133} marginTop={154} />
              <ConnectionLine
                mirrored={true}
                verticalLength={111}
                marginTop={0}
              />
              <ConnectionLine verticalLength={273} marginTop={0} />
              <ConnectionLine
                mirrored={true}
                verticalLength={100}
                marginTop={0}
              />
              <ConnectionLine verticalLength={239} marginTop={0} />
              <ConnectionLine
                mirrored={true}
                verticalLength={172}
                marginTop={0}
              />
              <ConnectionLine verticalLength={90} marginTop={0} />
              <ConnectionLine
                mirrored={true}
                verticalLength={158}
                marginTop={0}
              />
              <ConnectionLine verticalLength={211} marginTop={0} />
              <ConnectionLine
                mirrored={true}
                verticalLength={267}
                marginTop={0}
              />
              <ConnectionLine verticalLength={247} marginTop={0} />
              <ConnectionLine
                mirrored={true}
                verticalLength={267}
                marginTop={0}
              />
              <ConnectionLine verticalLength={254} marginTop={0} />
            </div>
            <div className="column column-3">
              <div className="progress-counter-dashboard">
                <div className="cube-dashboard-element">
                  <h2>78</h2>
                  <p>Total</p>
                </div>
                <div className="cube-dashboard-element">
                  <h2>11</h2>
                  <p>Completed</p>
                </div>
                <div className="cube-dashboard-element">
                  <h2>67</h2>
                  <p>Upcoming</p>
                </div>
              </div>
              {lectureCardsData
                .filter((card) => card.id % 2 === 0)
                .map((card) => (
                  <LectureCard key={card.id} {...card} position="right" />
                ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="mobile-column">
            <div className="progress-counter-dashboard">
              <div className="cube-dashboard-element">
                <h2>78</h2>
                <p>Total</p>
              </div>
              <div className="cube-dashboard-element">
                <h2>11</h2>
                <p>Completed</p>
              </div>
              <div className="cube-dashboard-element">
                <h2>67</h2>
                <p>Upcoming</p>
              </div>
            </div>
            {lectureCardsData
              .sort((a, b) => a.id - b.id)
              .map((card, index, array) => (
                <React.Fragment key={card.id}>
                  <LectureCard
                    {...card}
                    position="bottom"
                    isFirstCard={index === 0}
                    hideBottomDot={index === array.length - 1} // Az utolsónál elrejti a .dot.bottom-ot
                  />
                  {index !== array.length - 1 && <MobileConnectionLine />}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
