import { useState } from "react"

export function Main({ name = "Extension" }) {
  const [data, setData] = useState("")

  return (
    <div>
      <h1 className=" text-blue-600">
        Bonjour ! 
      </h1>
      
    </div>
  )
}
