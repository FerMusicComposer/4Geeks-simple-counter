import React, { useEffect, useState } from 'react';

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [hours, setHours] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let interval;

        //MAKES SURE THAT THE COUNTER STARTS AND UPDATES AUTOMATICALLY WHEN ISACTIVE === TRUE
        if (isActive) {
            interval = setInterval(() => {
                //CALCULATIONS TO UPDATE SECS, MINS AND HRS WITH THE APPROPRIATE VALUES
                const secondsCount = counter % 60;
                const minutesCount = Math.floor(counter / 60);
                const hoursCount = Math.floor(counter / 3600);

                //IF VALUE OF EITHER OF THE TIME COUNTERS IS 1, ADDS A 0 TO THE LEFT FOR BETTER DISPLAY
                const computedSeconds = String(secondsCount).length === 1 ? `0${secondsCount}` : secondsCount;
                const computedMinutes = String(minutesCount).length === 1 ? `0${minutesCount}` : minutesCount;
                const computedHours = String(hoursCount).length === 1 ? `0${hoursCount}` : hoursCount;

                setSeconds(computedSeconds);
                setMinutes(computedMinutes);
                setHours(computedHours);
                setCounter(counter => counter + 1);
            }, 1000);
        }
        //ENSURES THE INTERVAL IS PROPERLY RESET
        return () => clearInterval(interval);
    }, [isActive, counter]);

    const reset = () => {
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        setCounter(0);
        setIsActive(false);
    };

    return (
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <div className="counter">
                    <span className="h1 display-1 mx-3">
                        {hours}:{minutes}:{seconds}
                    </span>
                </div>
                <div className="mt-3">
                    <button
                        onClick={() => {
                            setIsActive(true);
                        }}
                        className="btn btn-outline-success fs-4"
                    >
                        Start
                    </button>
                    <button
                        onClick={() => {
                            setIsActive(false);
                        }}
                        className="btn btn-outline-danger fs-4 mx-2"
                    >
                        Stop
                    </button>
                    <button
                        onClick={() => {
                            reset();
                        }}
                        className="btn btn-outline-warning fs-4"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;
