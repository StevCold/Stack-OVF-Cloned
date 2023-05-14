import React from 'react'

import { useParams, Link } from 'react-router-dom'

import upvote from '../../assets/upvote.png'
import downvote from '../../assets/downvote.png'

import Avatar from '../../components/Avatar/Avatar'

import './Questions.css'
import DisplayAnswers from './DisplayAnswers'

const QuestionsDetails = () => {

    const { id } = useParams()

    var questionsList = [{ 
        _id: '1', 
        upVotes: 3,
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
          }]
        },{   
        _id: '2', 
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0, 
        questionTitle: "How to use React Router?",
        questionBody: "I am trying to implement React Router in my app but I'm having trouble getting it to work. Can someone provide a simple example of how to use it?",
        questionTags: ["React", "React Router"],
        userPosted: "johndoe",
        userId: 2,
        askedOn: "May 5",
            answers: [{
            answerBody: "Here's a simple example:",
            userAnswered: "janedoe",
            answeredOn: "May 6",
            userId: 4,
            }]
        },{
        _id: '3', 
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0, 
        questionTitle: "What is a function?", 
        questionBody: "It meant to be", 
        questionTags: ["javascript", "R", "python"], 
        userPosted: "mano", 
        askedOn: "jan 1" ,
        answers: [{
            answerBody: "Answer 1",
            userAnswered: "mano",
            answeredOn: "jan 1",
            userId: 2,
          }]
        },{
          _id: '4', 
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0, 
        questionTitle: "What is a function?", 
        questionBody: "It meant to be", 
        questionTags: ["javascript", "R", "python"], 
        userPosted: "mano", 
        askedOn: "jan 1",
        answers: [{
            answerBody: "Answer 1",
            userAnswered: "mano",
            answeredOn: "jan 1",
            userId: 2,
          }]
        },{
          _id: '5', 
        upVotes: 3,
        downVotes: 2, 
        noOfAnswers: 0, 
        questionTitle: "What is a function?", 
        questionBody: "It meant to be", 
        questionTags: ["javascript", "R", "python"], 
        userPosted: "mano", 
        askedOn: "jan 1",
        answers: [{
            answerBody: "Answer 1",
            userAnswered: "mano",
            answeredOn: "jan 1",
            userId: 2,
          }]
        }]

  return (
    <div className='question-details-page'>
        
        {
            questionsList === null ? 
            <h1>loading...</h1> :
            <>
                {
                    questionsList.filter(question => question._id === id).map(question => (
                    <div key={question._id}>
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">
                                    <img src={upvote} alt="upvote" width='40' className='votes-icon'/>
                                    <p style={{fontSize: "30px"}}>{question.upVotes - question.downVotes}</p>
                                    <img src={downvote} alt="downvote" width='35'  className='votes-icon'/>
                                </div>
                                <div style={{width: "100%"}}>
                                    <p className='questions-body'>{question.questionBody}</p>
                                    <div className="question-details-tags">
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag}>{tag}</p>
                                            )) 
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button'>Share</button>
                                            <button type='button'>Delete</button>
                                        </div>
                                        <div>
                                            <p>Asked {question.askedOn}</p>
                                            <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgroundColor="orange" px='8px' py='5px'>
                                                    {question.userPosted.charAt(0).toUpperCase()}
                                                </Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {
                            question.noOfAnswers !== 0 && (
                                <section  >
                                    <h3>
                                        {question.noOfAnswers} Answers
                                    </h3>
                                    <DisplayAnswers key={question._id} question={question} />
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <input className='post-ans-btn' type="submit" value="Post Your Answer" />
                            </form>
                            
                            <p>
                                Browse other questions tagged 
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tags'> {tag}</Link>
                                    ))
                                }   or 
                                <Link to ='/AskQuestion' style={{textDecoration: "none", color:"#009dff" }}> Ask your own question</Link>
                            </p>
                        </section>
                    </div>
                   ))
                }
            </>
            
        }

    </div>
  )
}

export default QuestionsDetails