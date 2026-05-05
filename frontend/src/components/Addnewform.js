import React, {useState} from 'react'
import './Addnewform.css'

export default function Addnewform({setShowForm, addTransactions, setFormData, formData}) {
  return (
    <div className='form-box-overlay'>
        <div className='form-box'>
            <div className='addnew-titlebar'>
              <div className='addnewform-title'>ADD NEW</div>
              <div className='close-button' onClick={()=> setShowForm(false)}>X</div>
            </div>
            <div className='addnewtext'>ADD A NEW TRANSACTION</div>
            <div className='text-field-grid'>
              <input 
                type='date' 
                placeholder='Date' 
                value={formData.date} 
                onChange={(e) => setFormData({
                  ...formData,
                  date: e.target.value})}
              />
              <input 
                type='number' 
                placeholder='Amount'
                value={formData.amount} 
                onChange={(e) => setFormData({
                  ...formData,
                  amount: e.target.value})}                
              />
              <input 
                type='text' 
                placeholder='Payment Name'
                value={formData.name} 
                onChange={(e) => setFormData({
                  ...formData,
                  name: e.target.value.toUpperCase()})}                
              />
              <select 
                name='method' 
                defaultValue='' 
                required
                value={formData.method} 
                onChange={(e) => setFormData({
                  ...formData,
                  method: e.target.value})}                
              >
                <option value='' disabled >Method</option>
                <option value='MOMO'>MOMO</option>
                <option value='VISA'>VISA</option>
                <option value='OTHER'>Other</option>
              </select>
              <select 
                name='category' 
                defaultValue='' 
                required
                value={formData.category} 
                onChange={(e) => setFormData({
                  ...formData,
                  category: e.target.value})}                
              >
                <option value='' disabled>Category</option>
                <option value='INCOME'>Income</option>
                <option value='EXPENSE'>Expense</option>
                <option value='SAVINGS'>Savings</option>
              </select>
              <select 
                name='status' 
                defaultValue='' 
                required
                value={formData.status} 
                onChange={(e) => setFormData({
                  ...formData,
                  status: e.target.value})}                
              >
                <option value='' disabled >Status</option>
                <option value='SUCCESSFUL' >Successful</option>
                <option value='UNSUCCESSFUL' >Unsuccessful</option>
              </select>
            </div>
            <div className='canceldonerow'>
              <div className='doneButton' onClick={() => {

                fetch("http://127.0.0.1:8000/transactions", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(formData)
                })
                .then(res => res.json())
                .then(() => {

                fetch("http://127.0.0.1:8000/transactions")
                .then(res => res.json())
                .then(data => addTransactions(data));

                setShowForm(false);

                setFormData({
                  date: '',
                  amount: '',
                  name: '',
                  method: '',
                  category: '',
                  status: ''
                });

                })
                .catch(err => console.log(err));

              }}>
              Done
              </div>
              <div className='cancelButton' onClick={()=> setShowForm(false)}>Cancel</div>
            </div>
        </div>
    </div>
  )
}
