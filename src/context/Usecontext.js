import React, { useReducer } from 'react'
import { createContext } from 'react'
import { opticsReducer } from './Reducer'

export const opticsData = createContext()

export const OpticsProvider = ({children}) => {
  const initialState = {
    cart:[],
    total: 0
}

  const [state,dispatch] = useReducer(opticsReducer,initialState)

  return (
    <opticsData.Provider value={{state,dispatch}}>
      {children}
    </opticsData.Provider>
  )
} 