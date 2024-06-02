import React from 'react'
import './Features.css'
import feature from '../features.svg'
import profile from '../profile.svg'
import faqs from '../faqs.svg'
import shadow1 from '../shadow1.svg'
import shadow2 from '../shadow2.svg'
import shadow3 from '../shadow3.svg'

export default function Features() {
  return (
    <div>
        <img src={shadow1} alt="" className='shadow1'/>
        <img src={shadow1} alt="" className='shadow2'/>
        <img src={shadow2} alt="" className='shadow3'/>
        <img src={shadow3} alt="" className='shadow4'/>
        <img src={shadow3} alt="" className='shadow5'/>


      <img src={feature} alt="" className='feature'/>
      <img src={profile} alt="" className='profilee' />
      <img src={faqs} alt="" className='faqs'/>

    </div>
  )
}
