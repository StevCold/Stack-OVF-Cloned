import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Questions = ({question}) => {
    return (
        <div className='home-container-1'>
          <LeftSidebar />
            <div className='home-container-2'>
              <HomeMainbar/>
              <RightSidebar/>
            </div>
        </div>
      )
}

export default Questions