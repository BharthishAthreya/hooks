import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(1)
  const inputRef = useRef()
  const nameRef = useRef('')

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    nameRef.current = name
  },[name])

  const focus = () =>{
    inputRef.current.focus()
  }

  return (
    <div>
      {console.log("home")}
      <input value={name} ref={inputRef} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} and used to be {nameRef.current}</div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      <button onClick={focus}>Focus</button>
    </div>
  );
}
