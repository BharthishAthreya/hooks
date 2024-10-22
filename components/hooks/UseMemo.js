import { useEffect, useMemo, useState } from "react";

export default function UseMemo() {
  const slowFunction = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  const [number, setnumber] = useState(0);
  const [dark, setdark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // const doubleNumber = slowFunction(number);
  // const themeStyles = useMemo(() => {
  //   return {
  //     backgroundColor: dark ? "black" : "white",
  //     color: dark ? "white" : "black",
  //   };
  // }, [dark]);

  const themeStyles = {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
  };

  // useEffect(() => {
  //   console.log("theme changed");
  // }, [themeStyles]);

  return (
    <div className="usememo">
      <div>UseMemo</div>
      <input
        type="number"
        value={isNaN(number) ? "" : number}
        onChange={(e) => setnumber(parseInt(e.target.value))}
      />
      <button onClick={() => setdark((prevdark) => !prevdark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{isNaN(doubleNumber) ? 0:doubleNumber}</div>
    </div>
  );
}
