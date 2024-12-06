"use client";

import React, { useEffect, useState, useCallback } from "react";

const CountdownTimer: React.FC<{ targetDate: string; show: boolean }> = ({
  targetDate,
  show,
}) => {
  // Memoize the calculateTimeLeft function using useCallback
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  // Initialize the state for time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Set the interval for updating the time left
  useEffect(() => {
    if (show) {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      // Cleanup the interval on component unmount or when show becomes false
      return () => clearInterval(timer);
    }
  }, [calculateTimeLeft, show]);

  if (!show) {
    return null;
  }

  return (
    <div className="hidden md:flex justify-center items-center gap-6 text-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={index}>
          <p className="text-sm text-gray-500 font-medium capitalize">{unit}</p>
          <p className="text-3xl font-bold">{String(value).padStart(2, "0")}</p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
