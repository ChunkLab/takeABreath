import { useEffect, useState } from "react"

let track = new Audio("https://www.alislam.org/archives/sermons/mp3/FSA20221223-UR.mp3");

export function Main({ name = "Extension" }) {
  const [data, setData] = useState("")
  
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => {
    console.log("togglePlaying", isPlaying);
    setIsPlaying(!isPlaying);
  }
  
  useEffect(() => {
    console.log("useeefffect", isPlaying);
    if(isPlaying){
      track.play();
    } else {
      track.pause();
    }
  }, [isPlaying]);
  return (
    <div>
      <h1 className=" text-blue-600">
        Bonjour ! 
      </h1>
      <button onClick={togglePlaying}>C'est partie !!! </button>
      
    </div>
  )
}
