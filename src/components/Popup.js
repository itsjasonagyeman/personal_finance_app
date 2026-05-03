import React from 'react'
import './Popup.css'

export default function Popup({setShowPopup}) {
  return (
    <div className='popupoverlay'>
        <div className='popupbase'>
            <div className='popuptitle'>ARE YOU SURE YOU WANT TO DELETE THE TRANSACTION?</div>
            <div className='popupbuttons'>
                <div className='popupyes' onClick={()=> setShowPopup(false)}>YES</div>
                <div className='popupno' onClick={()=> setShowPopup(false)}>NO</div>
            </div>
        </div>
    </div>
  )
}
