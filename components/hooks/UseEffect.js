import { useEffect, useState } from "react";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <div className="useeffect">
      <h1>useeffect</h1>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h2>{resourceType}</h2>
      {Object.values(items).map((item,i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}
