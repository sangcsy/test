import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/index")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

export default App;
