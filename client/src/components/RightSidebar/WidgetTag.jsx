import React from 'react'

const WidgetTag = () => {

    const tags = ['c', 'cpp', 'express', 'firebase', 
    'html', 'css', 'MERN', 'NodeJS', 'ReactJs',
     '.NET', 'SQL']

  return (
    <div className='widget-tags'>
        <h3>Watched tags</h3>
           <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div> 
    </div>
  )
}

export default WidgetTag