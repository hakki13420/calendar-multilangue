import React from 'react'
import { locals } from '../services/data'
import lanContext from '../context/lanContext'

export default function DaysName() {
  const {local, setLocal}= React.useContext(lanContext)

  const dayNames=locals.filter(el=>el.local==local)[0].dayNames

  
  return (
    <div className={local=='ar-AR'?"daysAr":"days"} >
        {          
            dayNames.map(day=>{
              console.log(local)
            return <p key={day} className="dayName">
                {day}
            </p>
            })
        }
        </div>
  )
}
