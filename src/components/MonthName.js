import React from 'react'
import { useMonthName } from '../hooks/useMonthName'

export default function MonthName({actualYear, month,local}) {
    const monthName=useMonthName({year:actualYear,month,local}).monthName    
  
    return (
    <div className='monthName'>
        {monthName}
    </div>
  )
}
