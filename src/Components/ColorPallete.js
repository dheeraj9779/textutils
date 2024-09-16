import React from 'react'

export default function ColorPallete(props) {

  return (
    <div>
      <div className='float-right d-flex mb-0'>
      <div className='border-0 rounded-circle ' onClick={() => {props.selector.toggleMode("#FFFFFF")}} style={{width: '35px',height:'35px', margin: '0 10px 0 0', backgroundColor:"#FFFFFF", cursor: 'pointer'}}></div>
      <div className='border-0 rounded-circle ' onClick={() => {props.selector.toggleMode("#074a60")}} style={{width: '35px',height:'35px', margin: '0 10px 0 0', backgroundColor:"#074a60", cursor: 'pointer'}}></div>
      <div className='border-0 rounded-circle ' onClick={() => {props.selector.toggleMode("#400D02")}} style={{width: '35px',height:'35px', margin: '0 10px 0 0', backgroundColor:"#400D02", cursor: 'pointer'}}></div>
      <div className='border-0 rounded-circle ' onClick={() => {props.selector.toggleMode("#2D4038")}} style={{width: '35px',height:'35px', margin: '0 10px 0 0', backgroundColor:"#2D4038", cursor: 'pointer'}}></div>
      <div className='border-0 rounded-circle ' onClick={() => {props.selector.toggleMode("#0a2855")}} style={{width: '35px',height:'35px', margin: '0 10px 0 0', backgroundColor:"#0a2855", cursor: 'pointer'}}></div>
      </div>
    </div>
  )
}
