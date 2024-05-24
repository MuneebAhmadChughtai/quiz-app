// import Store from "@/store/store"
import { useEffect } from "react"
import data from "./dummyData.json"

function QuizHome() {
  useEffect(()=>console.log(data.questions), [])

  return (
    <div>Welcome to Quiz Home</div>
  )
}

export default QuizHome