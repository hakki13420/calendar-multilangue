import React from 'react'
import {locals} from '../services/data'
import lanContext from '../context/lanContext'
import yearContext from '../context/yearContext'

const yearsInit=new Array(51)
                    .fill()
                    .map((el,i)=>({year:i+1990}))

export default function Language() {
  const [years, setYears]= React.useState(yearsInit)
  const {local,setLocal}=React.useContext(lanContext)
  const {actualYear,setActualYear}=React.useContext(yearContext)

  
  
  const onChangeHandl=(e)=>{
    setLocal(e.target.value)
  }
  
  const onChangeHandlYear=(e)=>{
    setActualYear(e.target.value)
  }
  return (
    <div className="languages">
      <h3>select language</h3>
        <select name="lan" onChange={onChangeHandl}>
        {
          locals.map(lan=>{                 
            return <option key={lan.local} value={lan.local}>{lan.language}</option>
          })
        }
        </select>

      <h3>select year</h3>
        <select name="year" onChange={onChangeHandlYear} value={actualYear}>
        {
          years.map(lan=>{                 
            return <option key={lan.year} value={lan.year}>{lan.year}</option>
          })
        }
        </select>
      </div>
  )
}
