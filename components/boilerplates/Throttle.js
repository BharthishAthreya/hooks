import React, { useState } from 'react'

export default function Throttle() {
  const [search, setSearch] = useState({ def: "", deb: "", thr: "" })
  const[inp, setInp] = useState('')
  const searchHandling = (e) => {
    setSearch((prev) => ({ ...prev, def: e.target.value }))
    // updateDebounceText(e)
    updateThrottleText(e)
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

  const myThrottle = (cb, d = 1000) => {
    let shouldWait = false
    let waitingArgs;

    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, d)
      }
    }

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, d)
    }
  }

  const updateDebounceFunc = (e) => {
    setSearch((prev) => ({ ...prev, deb: e.target.value }))
  }

  const updateThrottleFunc = (e) => {
    setInp(e.target.value)
  }

  // const updateDebounceText = myDebounce(updateDebounceFunc, 800)
  const updateThrottleText = myThrottle(updateThrottleFunc, 8000)

  return (
    <div className='section'>
      <h1>Debounce Demo</h1>
      <div className='data_section'>
        <div className='search_section'>
          <label className='lbl_search'>Search category</label>
          <input type='text' className='ip_text' value={search.def} onChange={(e) => searchHandling(e)} />
        </div>
        <div className='section_cards'>
          <span>
            <strong>Default: </strong>{search.def}
          </span>
          <span>
            <strong>Debounce: </strong>{search.deb}
          </span>
          <span>
            <strong>Throttle: </strong>{inp}
          </span>
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
  .section_cards{
    display: flex;
    flex-direction: column;
    color: black;
    gap: 20px;
    padding: 10px;
}
        `
      }</style>
    </div>
  )
}

// import React, { useEffect } from 'react';

// // Throttle function
// const throttle = (func, delay) => {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       func(...args);
//       lastCall = now;
//     }
//   };
// };

// const ScrollComponent = () => {
//   console.log("scrolled");
//   const handleScroll = throttle(() => {
//     console.log('Scrolled!');
//     // Your scroll handling logic here
//   }, 2000); // Set the throttle delay in milliseconds

//   useEffect(() => {
//     // Attach the throttled scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <div style={{ height: '1000px', background: '#eee' }}>
//       {/* Content to make the page scrollable */}
//       <p>Scroll down to trigger the throttled scroll event.</p>
//     </div>
//   );
// };

// export default ScrollComponent;
