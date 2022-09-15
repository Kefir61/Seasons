import React from 'react'
import gorisontal from '../assets/icons/gbv.svg'
import vertical from '../assets/icons/vbv.svg'
function BorderHome() {
     return (
          <>
               <div className='gorisontal gorisontal--top'><img src={gorisontal} /></div>
               <div className='vertical vertical--left'><img src={vertical} /></div>
               <div className='vertical vertical--right'><img src={vertical} /></div>
               <div className='gorisontal gorisontal--bottom'><img src={gorisontal} /></div>
          </>
     )
}

export default BorderHome