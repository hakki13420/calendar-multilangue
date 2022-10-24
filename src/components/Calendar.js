import React from 'react'
import './calendar.css'
import DaysName from './DaysName'
import Month from './Month'
import { useCreateDateOfYear as createDateOfYear } from '../hooks/useCreateDateOfYear'
import {useDays} from '../hooks/useDays'
import Language from './Language'
import  lanContext from '../context/lanContext'
import  yearContext from '../context/yearContext'




export default function Calendar() {
    const [actualYear, setActualYear]= React.useState(2022)
    const [months, setMonths]= React.useState([...new Array(12).keys()])
    const [local, setLocal]= React.useState('fr-FR')
    
    
    const days=useDays({year:actualYear,months})   
   

  return (
    <div className='calendar-wrapper' style={local=="ar-AR"?{direction:'rtl'}:null}>      
      <lanContext.Provider value={{local,setLocal}}>
      <yearContext.Provider value={{actualYear, setActualYear}}>
      <Language />      
      <div className="calendar">
        {
          days?
          (days.map((monthsArr,index)=>{
          return <div key={index}  className="month-wraper">                      
            <Month monthsArr={monthsArr} index={index}/>                      
          </div>
          })):"no data"
        }
      </div>      
      </yearContext.Provider>
      </lanContext.Provider>
    </div>
  )
}
