import React, { useContext } from 'react'
import MovieNames from './MovieNames'
import { MovieContext } from '../Usecontext'

export default function Movies({data}) {
    // console.log(dt);
  return (
    <div>Languages

        {/* <MovieNames data={data}/> */}
        <MovieNames />
    </div>
  )
}
