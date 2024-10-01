import { useState, useEffect } from 'react'
import axios from 'axios'

const Jeopardy = () => {
  const [question, setQuestion] = useState({})
  const [score, setScore] = useState(0)

  // Get a new random question from the API
  const getNewQuestion = () => {
    axios.get('https://jservice.xyz/api/random-clue').then(result => {
      setQuestion(result.data)
    })
  }

  // Use useEffect to get the first question when the component mounts
  useEffect(() => {
    getNewQuestion()
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {JSON.stringify(question)}
    </div>
  )
}

export default Jeopardy
