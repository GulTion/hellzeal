import React from 'react'
import Footer from './Container/Footer'
import QuestionBody from './Container/QuestionBody'
import QuestionHeader from './Container/QuestionHeader'
import Subheader from './Container/Subheader'

export default function Container({que,onChoose,len}) {
  return (
    <div className="Container ">
    <div className="Toasters_Toasters__14kRO" />
    <span className="leftBarToggle ">
      <img src="./static/media/Vector.4166cc96.svg" />
    </span>
   <Subheader />
  <QuestionHeader que={que}></QuestionHeader>
   <QuestionBody que={que} />
   <Footer onChoose={onChoose} len={len} />
  </div>
  )
}
