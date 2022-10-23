import React from 'react'

export default function Day({day}) {
  const style1=day.day == 1?{gridColumnStart:day.dayWeek+1}:null  
  const style2=day.isWeekEnd?{background:'red',opacity:.4,cursor: 'not-allowed'}:null  
  const style3={background:'green'}
  const style={...style3,...style1,...style2}
  
  return (
    <div key={day.day} className="day" style={style}>
        {day.day}
    </div>
  )
}
