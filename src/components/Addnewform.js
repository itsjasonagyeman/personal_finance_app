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
              <input type='date' placeholder='Date'/>
              <input type='text' placeholder='Amount'/>
              <input type='text' placeholder='Payment Name'/>
              <select name='method' defaultValue='' required>
                <option value='' disabled selected >Method</option>
                <option value='momo'>MOMO</option>
                <option value='visa'>VISA</option>
                <option value='other'>Other</option>
              </select>
              <select name='category' defaultValue='' required>
                <option value='' disabled selected>Category</option>
                <option value='inp'>Income</option>
                <option value='exp'>Expense</option>
              </select>
              <select name='status' defaultValue='' required>
                <option value='' disabled selected>Status</option>
                <option value='succ'>Successful</option>
                <option value='unsucc'>Unsuccessful</option>
              </select>
            </div>
            <div className='canceldonerow'>
              <div className='doneButton'>Done</div>
              <div className='cancelButton'>Cancel</div>
            </div>
        </div>
    </div>
  )
}
