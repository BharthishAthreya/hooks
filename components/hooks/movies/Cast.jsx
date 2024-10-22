import React, { useContext } from 'react'
import { MovieContext } from '../Usecontext'

export default function Cast({data}) {
    const {dt} = useContext(MovieContext)
  return (
    // <div>Cast of {data?.movies?.en[0]} are {data?.cast?.[data?.movies?.en[0]]}</div>
    <div>Cast of {dt?.movies?.en[0]} are {dt?.cast?.[dt?.movies?.en[0]]}</div>
  )
}
