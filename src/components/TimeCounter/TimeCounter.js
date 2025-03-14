import { useState, useRef } from "react";

const useTimer = () => {
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);
  const startTimeRef = useRef(null);

  // Időmérő indítása
  const startTimer = () => {
    if (startTimeRef.current === null) {
      startTimeRef.current = Date.now(); // Mentjük az aktuális időt
      console.log("Timer started");
    }
  };

  // Időmérő leállítása és az eltelt idő hozzáadása
  const stopTimer = () => {
    if (startTimeRef.current !== null) {
      const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000); // Másodpercekben az eltelt idő
      setTotalTimeSpent((prevTotal) => prevTotal + timeSpent); // Hozzáadjuk az összesített időhöz
      // console.log(`Elapsed time: ${timeSpent} seconds`);
      startTimeRef.current = null; // Időmérő alaphelyzetbe állítása
    }
  };

  // Az összesített idő újraindítása
  const resetTimer = () => {
    setTotalTimeSpent(0);
    startTimeRef.current = null;
    console.log("Timer reset");
  };

  return { totalTimeSpent, startTimer, stopTimer, resetTimer };
};

export default useTimer;
