import React from 'react'

export function useDaysOfMonth(year, month) {
    return new Date(year, month+1, 0).getDate()
}
