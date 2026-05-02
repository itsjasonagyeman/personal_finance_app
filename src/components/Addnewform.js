import React from 'react'
import './Addnewform.css'

export default function Addnewform() {
  return (
    <div className='form-box-overlay'>
        <div className='form-box'>
            <div className='addnew-titlebar'>
              <div className='addnewform-title'>ADD NEW</div>
              <div className='close-button'>X</div>
            </div>
            <div className='addnewtext'>ADD A NEW TRANSACTION</div>
            <div className='text-field-grid'>
              <input type='text' placeholder='Date'/>
              <input type='text' placeholder='Date'/>
              <input type='text' placeholder='Date'/>
              <input type='text' placeholder='Date'/>
              <input type='text' placeholder='Date'/>
              <input type='text' placeholder='Date'/>
            </div>
            <div className='canceldonerow'>
              <div className='doneButton'>Done</div>
              <div className='cancelButton'>Cancel</div>
            </div>
        </div>
    </div>
  )
}
