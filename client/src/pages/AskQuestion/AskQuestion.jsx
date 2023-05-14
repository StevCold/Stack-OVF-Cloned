import React from 'react'

import { useNavigate } from 'react-router-dom';

import './AskQuestion.css'

const AskQuestion = () => {
    
    

  return (
   
  <div className='ask-question'>
    <div className="ask-ques-container">
      <h1>Ask a public Question</h1>
      <form>
        <div className='ask-form-container'>
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Ask a SPECIFIC Question!</p>
              <input type="text" id='ask-ques-title' placeholder='e.g Cum se scrie corect Servus?' />
            </label>

            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the info!</p>
              <textarea name="text" id="ask-ques-body cols=" rows="10"></textarea>
            </label>

            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>ADD up to 5 tags!</p>
              <input type="text" id='ask-ques-Tags' placeholder='e.g Html, CSS, JS..' />
            </label>
        </div>
      </form>
      <input type="submit" value='Review your question' className='review-btn'/>
    </div>
  </div>
  )
}

export default AskQuestion