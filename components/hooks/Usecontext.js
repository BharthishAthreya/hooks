import React, { createContext, useEffect, useState } from 'react'
import Movies from './movies'
export const MovieContext = createContext()
export default function Usecontext() {
    const [dt, setDt] = useState({})
    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const resp = await fetch('/api/cntxt')
        const res = await resp.json()
        setDt(res)
    }

  return (
    <div>
        <MovieContext.Provider value={{dt}}>
            <Movies/>
        </MovieContext.Provider>
        {/* <Movies data={dt}/> */}
    </div>
  )
}
