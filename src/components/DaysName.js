import React from 'react'
import { locals } from '../services/data'
import lanContext from '../context/lanContext'

export default function DaysName() {
  const {local, setLocal}= React.useContext(lanContext)

  const dayNames=locals.filter(el=>el.local==local)[0].dayNames

  
  return (
    <div className="days" style={local=='ar-AR'?{fontSize:16+'px'}:null} >
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
