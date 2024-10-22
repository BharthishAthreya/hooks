import { useState } from "react"

export default function UseState() {
    const [count,setCount] = useState(2)
    const [theme,setTheme] = useState("blue")
    const incCount = () => {
        setCount((prevCount) => prevCount +1)

/* Below code increments only once because it increments from initial value not previous state */
        // setCount(count +1)
        // setCount(count +1)

    }
    const decCount = () => {
        setCount((prevCount) => prevCount -1)
    }
  return (
    <div>
        <div>usestate</div>
        <button onClick={() => decCount()}>-</button>
        <span>{count}</span>{" "}
        <span>{theme}</span>
        <button onClick={() => incCount()}>+</button>
    </div>
  )
}
