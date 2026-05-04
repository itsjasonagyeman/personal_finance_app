import React from 'react'
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import { Bar} from 'react-chartjs-2'
import './AnalyticsCardPreview.css'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function AnalyticsPreviewCard() {
  return (
    <div className='analyticspreviewmaincard'>
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
  )
}
