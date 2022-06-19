import React from 'react'
import "./header.css"
import people from '../../assets/people.png'
import main from '../../assets/main.svg'

const Header = () => {
  return (
    <div className='akgec__header section__padding' id='home'>
      <div className='akgec__header-content'>
        <h1 className='gradient__text'>
          Industrial Training Program on Embedded Systems & IoT By FabLAB AKGEC
        </h1>
        <h2>
          It's time to shape your career with right and contemporary skills in technology with AKGEC Skills Foundation. 
          If you are pursuing Engineering and desire to work in the domain of embedded systems & IoT,
          you may join this face to face (offline) Industrial Training Program.
        </h2>
        <div className='akgec__header-content__people'>
          <img src={people}/>
          <h2>More than 600 people successfully completed their training with us.</h2>
        </div>
      </div>
      <div className='akgec__header-image'>
          <img src={main}/>
      </div>
    </div>
  )
}

export default Header