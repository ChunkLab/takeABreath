
import { use, useEffect, useState } from "react"

const INITIAL_BREATH_LEFT = 30;
let track = new Audio("23");

export function Session({ isStart, setIsStart }) {
    const [breathLeft, setBreathLeft] = useState(INITIAL_BREATH_LEFT)
    const [breathe, setBreathe] = useState(false);

    useEffect(() => {
        setBreathe(!breathe)
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setBreathe(!breathe)
        }, 5000);
        setBreathLeft(prev => prev - 1)
        return () => {
            clearInterval(interval);
        }

    }, [breathe]);

    function quitterSession() {
        setIsStart(false)
    }
    return (
        <div className="h-[600px] flex flex-col align-center justify-center">
            <div><h1 className="text-blue-600 text-lg">
                Breathe
            </h1>
            </div>
            <div className="circle-wrap">
                <div className="circle-outline"></div>
                <div className={`circle-progress ${breathe && "circle-grow"}`}></div>
            </div>
            <div className="text-red-400 text-lg">
                {breathLeft}
            </div>
            <div className="text-green-300">
                {breathe ? 'in' : 'out'}
            </div>

        </div>
    )
}