import React, { useEffect, useState } from 'react'
import Question from '../Question/Question'
import styles from './QuizAnswerContainer.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function FinalExamAnswers() {
  const { courseID } = useParams()
  const [questions, setQuistions] = useState()
  const [loading, setLoading] = useState(false)
  const [isDeleteQuestion, setIsDeleteQuestion] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(`https://courses-website-q0gf.onrender.com/api/course?courseId=${courseID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response)
        setQuistions(response.data.finalQuiz)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [isDeleteQuestion])

  if (loading || questions === undefined) return <div>Loading ....</div>
  return (
    <div className={`${styles.question_container}`}>
      <button className={`${styles.add_btn}`} onClick={() => navigate(`/addQuestion/${courseID}`)}>
        Add Question
      </button>
      {!questions?.length ? (
        <div>Empty</div>
      ) : (
        questions?.map((question, index) => (
          <Question
            question={question}
            questionIndex={index}
            key={question.id}
            setIsDeleteQuestion={setIsDeleteQuestion}
          />
        ))
      )}
    </div>
  )
}

export default FinalExamAnswers
