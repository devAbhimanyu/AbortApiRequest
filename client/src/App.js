import React, { useState, useEffect } from "react";
import { hitApi, abort } from "./api";
import "./App.css";

function App() {
  const [res, setRes] = useState("");
  const [click, setClick] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setRes("request created");
    hitApi(signal).then((res) => {
      setRes(res);
    });
    return () => {
      controller.abort();
    };
  }, [click]);

  return (
    <div className="App">
      <div>
        <p>The response is = {res}</p>
        <button type="button" onClick={() => setClick(!click)}>
          Create Request
        </button>
      </div>
    </div>
  );
}

export default App;
