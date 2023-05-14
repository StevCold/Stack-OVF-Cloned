import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


import './HomeMainbar.css'
import QuestionList from './QuestionList'



const HomeMainbar = () => {
  const user = 1;
  const navigate = useNavigate()
  const location = useLocation()

  var questionsList = 
  [
    { 
      _id: 1, 
      upVotes: 13,
      downVotes: 2,
      noOfAnswers: 2, 
      questionTitle: "What is a function?", 
      questionBody: "It meant to be", 
      questionTags: ["Java", "node js", "react js", "mongoDB"],
      userPosted: "mano-il-mano", 
      userId: 1,
      askedOn: "jan 1",
        answers: 
        [{
          answerBody: "Answer 1 sadasdas",
          userAnswered: "mano",
          answeredOn: "jan 1",
          userId: 2,
        },{
          answerBody: "Answer 2",
          userAnswered: "man323",
          answeredOn: "jan 21",
          userId: 2,
        }
      
      ],
        
    },
    {   
      _id: 2,
      upVotes: 5,
      downVotes: 1,
      noOfAnswers: 1,
      questionTitle: "How to use React Router?",
      questionBody: "I am trying to implement React Router in my app but I'm having trouble getting it to work. Can someone provide a simple example of how to use it?",
      questionTags: ["React", "React Router"],
      userPosted: "johndoe",
      userId: 3,
      askedOn: "May 5",
        answers: [{
          answerBody: "Here's a simple example:",
          userAnswered: "janedoe",
          answeredOn: "May 6",
          userId: 4,
          }]
    },{
      _id: 3,
      upVotes: 20,
      downVotes: 0,
      noOfAnswers: 3,
      questionTitle: "What are the best practices for using MongoDB with Node.js?",
      questionBody: "I am new to using MongoDB with Node.js and I'm not sure what the best practices are. Can someone provide some guidance on how to use it properly?",
      questionTags: ["Node.js", "MongoDB"],
      userPosted: "johndoe",
      userId: 3,
      askedOn: "April 1",
    },{
      _id: 54, 
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 0, 
    questionTitle: "What is a function?", 
    questionBody: "It meant to be", 
    questionTags: ["javascript", "R", "python"], 
    userPosted: "mano", 
    askedOn: "jan 1",
      answers: [{
        answerBody: "Here are some best practices for using MongoDB with Node.js:",
        userAnswered: "janedoe",
        answeredOn: "April 2",
        userId: 4,
        },{
        answerBody: "Another best practice is to use Mongoose as an ORM for MongoDB in Node.js applications.",
        userAnswered: "bobsmith",
        answeredOn: "April 3",
        userId: 5,
        }, {
        answerBody: "Also, be sure to properly secure your MongoDB database by setting up authentication and access control.",
        userAnswered: "sarahjones",
        answeredOn: "April 4",
        userId: 6,
        }]
    },{
      _id: 5, 
    upVotes: 3,
    downVotes: 2, 
    noOfAnswers: 0, 
    questionTitle: "What is a function?", 
    questionBody: "It meant to be", 
    questionTags: ["javascript", "R", "python"], 
    userPosted: "mano", 
    askedOn: "jan 1" 
    }]

    const checkAuth = () => {
      if (user === null) {
        alert("Login or Signup to ask a question");
        navigate('/Auth');
      } else {
        navigate('/AskQuestion');
      }
    }



    return(
        <div className='main-bar'>
                    <div className='main-bar-header'>
                        {
                          location.pathname === '/' ? <h1>TopQuestions</h1> : <h1>All Questions</h1>
                        }
                        <button to='/AskQuestion' onClick={checkAuth} className='ask-btn'>Ask Question</button>
                    </div>
                    <div>
                      {
                        questionsList === null ?
                        <h1>Loading...</h1> :
                        <>
                          <p>{ questionsList.length } questions </p> 
                          <QuestionList questionsList={questionsList} />        
                        </>
                        
                      }
                    </div>
        </div>
    )
}

export default HomeMainbar
