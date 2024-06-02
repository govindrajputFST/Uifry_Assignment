import React from 'react'
import get from  '../get.svg';
import './Home.css'
import starLine from  '../starLine.svg'
//  import line from '../line.svg'
import sdsds from '../sdsds.svg'
import iphone from '../iphone.svg'
import mobile from '../mobile.svg'
import circle from '../circle.svg'
import mobile2 from '../mobile2.svg'
import heroShadow from '../hero2shadow.svg'
export default function Home() {
  return (
    <div>
        <div className='grid-container'>
            <div  className='star2'><img src={sdsds} alt="hii" /></div>
        <div className='hero1'>
      <img src={circle} alt="" className='circle'/>
            <h1>
                Make The Best <br /> Financial Decisions
            </h1>
            <p> Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        
      <img src={get} alt="hii" className='get' />
      <div>
        

      <img src={sdsds} alt="hii" className='star3' />
        
      <img src={starLine} alt="hii" className='starline'/>
      </div>
        </div>
        <div className='hero2'>
        <img src={mobile} alt="hii" className='mobileline' />
        <img src={mobile2} alt="" className='mobileline2' />
        <img src={iphone} alt="" className='mobileline1' />
        <img src={heroShadow} alt="" className='iphoneshadow' />
        
        </div>
        </div>

    </div>
  )
}
