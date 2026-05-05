import React, { useState, useEffect } from 'react'
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import { Bar} from 'react-chartjs-2'
import './AnalyticsCardPreview.css'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function AnalyticsPreviewCard() {
    const [transactions, setTransactions] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/transactions')
        .then(res => res.json())
        .then(data => setTransactions(data))
        .catch(err => console.log(err))
    }, [])
    let grouped = {};
    for (let i = 0; i < transactions.length; i++) {
        let tx = transactions[i];

        let date = tx.date;

        if (!grouped[date]) {
            grouped[date] = {
            income: 0,
            expense: 0,
            savings: 0
            };
        }

        if (tx.category === "INCOME") {
            grouped[date].income += Number(tx.amount);
        }

        if (tx.category === "EXPENSE") {
            grouped[date].expense += Number(tx.amount);
        }

        if (tx.category === "SAVINGS") {
            grouped[date].savings += Number(tx.amount);
        }
    }
    let dates = [];
    let incomes = [];
    let expenses = [];
    let savings = [];

    for (let date in grouped) {
        dates.push(date);
        incomes.push(grouped[date].income);
        expenses.push(grouped[date].expense);
        savings.push(grouped[date].savings);
    }

    return (
        <div className='analyticspreviewmaincard'>
            <Bar 
                data={{
                    labels:dates,
                    datasets:[
                        {
                            label: 'Income',
                            data: incomes,
                            borderRadius: 5,
                            backgroundColor: '#343438'
                        },
                        {
                            label: 'Expenses',
                            data: expenses,
                            borderRadius: 5,
                            backgroundColor: '#56565E'
                        },
                        {
                            label: 'Savings',
                            data: savings,
                            borderRadius: 5,
                            backgroundColor: '#19191a'
                        },
                    ]
                }}
            />
        </div>
    )
}
