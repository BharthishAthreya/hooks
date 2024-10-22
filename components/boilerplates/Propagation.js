import React from 'react'

export default function Propagation() {
  return (
    <div>
      <div className='prop' onClick={(e) => { alert("currenttarget = ",e.currentTarget)}}>
        DIV
        <form action='' onClick={(e) => { alert("currenttarget = ",e.currentTarget)}}>
          FORM
          <button onClick={(e) => {
            e.preventDefault();
            // e.stopPropagation();
            // console.log("button click", e);
            alert("currenttarget = ",e.currentTarget)
            }}>
            BUTTON
          </button>
        </form>
      </div>
      <span>Propagation: Event propagation is a way to describe the “stack” of events that are fired in a web browser</span>
      <style global jsx>
        {`
        .prop{
          margin: 10px;
    padding: 10px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
        }
        form{display: flex;
          flex-direction: column;
          width: 100%;
          padding: 10px;
          border: 1px solid red;
        }
        button{
          display: flex;
          flex-direction: column;
          width: 100px;
          margin: 10px;
          padding: 10px;
          border: 1px solid red;
        }
          
        `}
      </style>
    </div>
  )
}
