import React from 'react'
const boldStyle = { fontWeight: "bold" };

const AboutAuth = () => {
  return (
    <div className="auth-container-1">
        <h1>Join THE OVERFLOW <br />
            Community</h1>
        <p style={boldStyle} >Join the Stack!</p>
        <p style={boldStyle}>And get unstuck..</p>
        <p style={boldStyle}>NOW you can vote, comment,</p>
        <p style={boldStyle}>Save tags, filters and jobs..</p>
        <p style={boldStyle}>Earn reputation and badges..</p>
        <p style={boldStyle}>In other words, MATTER</p>
        <p style={{fontSize: '13px', color: '#666767'}}>Colab with random people of the internet</p>
        <p style={{fontSize: '13px', color: '#007ac6'}}>The best version of The Stack.</p>
    </div>
  )
}

export default AboutAuth