import React from 'react'
import './Analytics.css'
import Navbar from '../components/Navbar'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

export default function Analytics() {
  return (
    <div className='baseAnalytics'>
      <Navbar titlename='Analytics' titlemessage='Track your spending habits'/>
      <div className='chart1'>
          <Bar 
            data={{
                labels:['Jan', 'Feb', 'March', 'Apr' ,'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets:[
                    {
                        label: 'Income',
                        data: [5000, 10000, 15000, 20000, 3000, 8000, 10000, 7000, 8000, 9000, 11000, 6000],
                        borderRadius: 5,
                        backgroundColor: '#343438'
                    },
                    {
                        label: 'Expenses',
                        data: [2000, 8000, 10000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
                        borderRadius: 5,
                        backgroundColor: '#56565E'
                    },
                ]
            }}
          />
      </div>
      <div className='bottomCharts'>
        <div className='chart2'>
          <Doughnut
            data={{
              labels:['Food', 'Water', 'Transport'],
              datasets:[
                {
                  label: 'Spending Overview',
                  data:[80, 100, 120]
                }
                
              ]
            }}
          />
        </div>
        <div className='chart3'>
          <Line
            data={{
              labels:['Food', 'Water', 'Transport'],
              datasets:[
                {
                  label: 'Spending Overview',
                  data:[80, 100, 120]
                }
                
              ]
            }}
          />
        </div>
      </div>
    </div>
  )
}
