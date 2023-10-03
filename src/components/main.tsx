import { use, useEffect, useState } from "react"
import { Welcome } from "./welcome";
import { Session } from "./session";
let track = new Audio("23");

const INITIAL_BREATH_LEFT = 30;

export function Main({ name = "Extension" }) {
  const [isStart, setIsStart] = useState(false);
  if (isStart) {
    return <Session isStart={isStart} setIsStart={setIsStart} ></Session>
  } else {
    return <Welcome setIsStart={setIsStart}></Welcome>
  }

}
