import React from 'react'
import "./brand.css"
import {aia, auto, cii, fpsi, gma, nsdc, asic} from "./imports";


const Brand = () => {
  return (
    <div className='akgec__brand section__padding'>
      <div>
        <img src={aia} alt="aia"/>
      </div>
      <div>
        <img src={auto} alt="auto"/>
      </div>
      <div>
        <img src={cii} alt="cii"/>
      </div>
      <div>
        <img src={fpsi} alt="fpsi"/>
      </div>
      <div>
        <img src={gma} alt="gma"/>
      </div>
      <div>
        <img src={nsdc} alt="nsdc"/>
      </div>
      <div>
        <img src={asic} alt="asic"/>
      </div>
    </div>
  )
}

export default Brand