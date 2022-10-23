import React from 'react'
import { useDaysOfMonth as getDaysOfMonth } from './useDaysOfMonth'
//import { useMonthName } from './useMonthName'


export function useCreateDateOfYear(year, months) {
    let daysRecord=[]    
    months.map(month=>{
      let daysRecordItem=[]
    
      for (let i=0;i<getDaysOfMonth(year, month);i++){
        const date=new Date(year,month,i+1)
        const daysRecordItemTemp=daysRecordItem.push({
          day:i+1,
          dayWeek:date.getDay(),          
          month:"Jan"//useMonthName({year,month}).monthName,                    
        });      
        (date.getDay()==5 || date.getDay()==6)?
          daysRecordItem[i].isWeekEnd=true :null
      }                             
    daysRecord.push(daysRecordItem)      
  })  

    return daysRecord
}
