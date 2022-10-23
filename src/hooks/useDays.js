import React from 'react'
import { useCreateDateOfYear as createDateOfYear } from './useCreateDateOfYear';

export  function useDays({year,months}) {
    const [days, setDays]= React.useState([])
    
    React.useEffect(()=>{
         const allDates=createDateOfYear(year, months);  
         
         setDays(allDates)                            
         console.log('days '+year,days)

    },[year])    
    
    return days
}
