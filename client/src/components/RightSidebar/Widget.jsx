import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'

const boldStyle = { fontWeight: "bold" };

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The OverBlog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
              <img src={pen} alt="pen" width='18'/>
              <p>This is some boring hardcoded stuff</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
            <p>I would like to say.....................................</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={pen} alt="pen" width='18'/>
            <p>"No servus, sper ca iti place clona"..</p>
             </div>
        </div>
        <h4>Hot stuff</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
              <img src={comment} alt="comment" width='18'/>
              <p>Some boring hardcoded TEXT</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18'/>
            <p>Some boring hardcoded TEXT</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={comment} alt="comment" width='18'/>
            <p>Some boring hardcoded TEXT</p>
             </div>
        </div>
        <h4>Hot meta posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
              <p style={boldStyle}>38</p>
              <p>Some boring hardcoded TEXT</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p style={boldStyle}>68</p>
            <p>Some boring hardcoded TEXT</p>
            </div>
            <div className='right-sidebar-div-2'>
            <p style={boldStyle}>18</p>
            <p>Some boring hardcoded TEXT</p>
             </div>
        </div>
    </div>
  )
}

export default Widget