import { useState, useEffect} from 'react';

function Timecard(props){
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isRuning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if(isRuning){
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if(prevTime === 0){
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000); // every second
        } else if(!isRuning && timeLeft != 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);

    }, [isRuning]);

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
        const secs = (seconds % 60).toString().padStart(2, "0");
        return `${minutes}:${secs}`;
    }

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        {/* Timer Display */}
        <div className="text-6xl font-mono mb-2">{formatTime(timeLeft)}</div>
        <div className="text-lg text-gray-500 mb-6">Focus Mode</div>

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <button onClick={() => setIsRunning(!isRuning)} className={`${isRuning ? "bg-red-500":"bg-blue-500"} text-white px-4 py-2 rounded-xl hover:opacity-80 transition`}>{isRuning ? "Pause" : "Start"}</button>
          
          
          <button onClick={() => {
            setIsRunning(false);
            setTimeLeft(25 * 60);
          }} className="bg-gray-300 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition">Reset</button>
          
          <button className="bg-gray-300 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition">Skip</button>
        </div>

        {/* Session Counter */}
        <div className="text-sm text-gray-600">🔁 Session Completed: 2</div>

        {/* Optional Quote */}
        <div className="mt-4 italic text-center text-gray-400 text-sm">
          "Small steps every day."
        </div>
        </div>
    );
}

export default Timecard;