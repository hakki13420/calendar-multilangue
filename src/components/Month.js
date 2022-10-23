import React from 'react'
import Day from './Day'
import DaysName from './DaysName'
import MonthName from './MonthName'
import lanContext from '../context/lanContext'
import yearContext from '../context/yearContext'


export default function Month({monthsArr,index}) { 
  const {local}=React.useContext(lanContext)
  const {actualYear}=React.useContext(yearContext)

  
  return (
    <>
      <DaysName local={local}/>                
      <div className="month">
        {                       
            monthsArr.map(day=>{
            return <Day key={day.day} day={day} />
            })
        }
      </div>
      <MonthName actualYear={actualYear} month={index} local={local}/>
    </>
  )
}
