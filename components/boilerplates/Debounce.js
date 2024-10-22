import React, { useEffect, useState } from 'react'

export default function Debounce() {
  useEffect(() => {
    getData()
  }, [])

  const [food, setFood] = useState({ main: {}, searched: {} })
  const [search, setSearch] = useState('')

  const getData = async () => {
    const resp = await fetch('/api/food')
    const res = await resp.json()
    setFood({ main: res })
  }

  const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        cb(...args)
      }, d);
    }
  }

  const updateRes = (e) => {
    const searchTerm = e.target.value
    setSearch(searchTerm)
    const res = Object.values(food.main).filter((each) => {
      return each?.info?.name?.toLowerCase()?.includes(searchTerm.toLowerCase())
    })
    console.log(res);
    setFood((prev) => ({ ...prev, searched: res }))
  }

  const updateText = myDebounce(updateRes, 800)

  const searchHandling = (e) => {
    setSearch(e.target.value)
    updateText(e)
  }

  return (
    <div className='section'>
      <h1>Debounce Demo</h1>
      <div className='data_section'>
        <div className='search_section'>
          <label className='lbl_search'>Search category</label>
          <input type='text' className='ip_text' value={search} onChange={(e) => searchHandling(e)} />
        </div>
        <div className='section_cards'>
          <ul>
            {Object.values(food?.searched?.length > 0 ? (food?.searched) : (food.main))?.map((each) => {
              return (
                <li className='cards_list' key={each?.info?.name}>
                  <span>{each?.info?.name}</span>
                  <span>{each?.info?.locality}</span>
                  <span>{each?.info?.avgRating}</span>
                </li>
              )
            })
            }
          </ul>
        </div>
      </div>
      <style global jsx>{
        `
        .lbl_search
          {
            color: black;
            padding: 10px;
        }
        .search_section{
          padding: 10px;
        }
        .data_section{
          background-color: #f8f8f8f8;
          height: 50vh;
      }
      .ip_text{
        background-color: cadetblue;
        color: black;
    }
    .cards_list{
        display: flex;
        flex-direction: column;
        gap: 20px;
     width: 200px;
     border: 1px solid black;
     padding: 5px;
  }
  ul{
      color: black;
      display: flex;
      flex-direction: row;
      gap:10px
  }
        `
      }</style>
    </div>
  )
}
