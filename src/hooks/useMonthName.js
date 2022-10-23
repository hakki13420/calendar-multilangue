import React from 'react'


export function useMonthName({year,month,local}) {    

    const intl=new Intl.DateTimeFormat(local,{month:'long'})
    return {monthName:intl.format(new Date(year,month)), local}  
}
