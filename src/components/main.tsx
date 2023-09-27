import { useEffect, useState } from "react"

let track = new Audio("");

const INITIAL_BREATH_LEFT = 30;

export function Main({ name = "Extension" }) {
  const [breathLeft, setBreathLeft] = useState(INITIAL_BREATH_LEFT)  
  const [isPlaying, setIsPlaying] = useState(false);
  const [breathe, setBreathe] = useState(false);

  const togglePlaying = () => {
    console.log("togglePlaying", isPlaying);
    setIsPlaying(!isPlaying);
  }
  
  useEffect(() => {
    if(isPlaying){
      track.play();
    } else {
      track.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setBreathe(!breathe)}, 5000);
        setBreathLeft(prev => prev -1)
        return () => {
          clearInterval(interval);
        }
      }
    }, [breathe, isPlaying]);
  
  return (
    <div className="flex flex-col align-center justify-center">
      <h1 className="text-blue-600 text-lg">
        Breathe
      </h1>
      <div className="circle-wrap">
      <div className="circle-outline"></div>
      <div className={`circle-progress ${breathe && "circle-grow"}`}></div>
    </div>
      <div className="text-red-400 text-lg">
        {breathLeft}
      </div>
      <div className="text-green-300">
        {breathe ? 'in': 'out'}
      </div>
      <button onClick={togglePlaying}>{isPlaying ? 'pause' : 'start'}</button>
    </div>
  )
}
