import { useState, useEffect } from "react";

function Timecard() {
  const [timeLeft, setTimeLeft] = useState(1 * 60); // 1 minute for testing
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("focus"); // "focus" or "break"

  const [sessionCount, setSessionCount] = useState(() => {
    const saved = localStorage.getItem("sessionCount");
    return saved ? parseInt(saved) : 0;
  });

  // Countdown interval
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Handle what happens when timer hits 0
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);

      if (mode === "focus") {
        setSessionCount((prev) => prev + 1);
        setMode("break");
        setTimeLeft(1 * 60); // 1-minute break
      } else {
        setMode("focus");
        setTimeLeft(1 * 60); // back to focus
      }
    }
  }, [timeLeft, isRunning, mode]);

  // Save sessionCount to localStorage
  useEffect(() => {
    localStorage.setItem("sessionCount", sessionCount.toString());
  }, [sessionCount]);

  // Format seconds to MM:SS
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  // Skip to next mode manually
  function handleSkip() {
    setIsRunning(false);

    if (mode === "focus") {
      setMode("break");
      setTimeLeft(1 * 60);
    } else {
      setMode("focus");
      setTimeLeft(1 * 60);
    }
  }

  // Reset timer only
  function handleReset() {
    setIsRunning(false);
    setTimeLeft(1 * 60);
  }

  return (
    <div
      className={`w-full max-w-md ${
        mode === "focus" ? "bg-bittersweet" : "bg-regent"
      } rounded-2xl shadow-lg p-8 flex flex-col items-center`}
    >
      {/* Timer Display */}
      <div className="text-6xl font-mono mb-2">{formatTime(timeLeft)}</div>
      <div className="text-lg text-gray-500 mb-6">
        {mode === "focus" ? "Focus Mode" : "Break Time"}
      </div>

      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`${
            isRunning ? "bg-red-500" : "bg-blue-500"
          } text-white px-4 py-2 rounded-xl hover:opacity-80 transition`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-300 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition"
        >
          Reset
        </button>

        <button
          onClick={handleSkip}
          className="bg-gray-300 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition"
        >
          Skip
        </button>
      </div>

      {/* Session Counter */}
      <div className="text-sm text-gray-600">
        🔁 Sessions Completed: {sessionCount}
      </div>

      {/* Optional Quote */}
      <div className="mt-4 italic text-center text-gray-400 text-sm">
        "Small steps every day."
      </div>
    </div>
  );
}

export default Timecard;
