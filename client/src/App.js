import React, { useState, useEffect } from "react";
import { hitApi } from "./apis/api";
import axios from "axios";
import { getReq } from "./apis/axiosInstance";
import "./App.css";

function App() {
  const [fetchRes, setFetchRes] = useState("");
  const [axiosRes, setAxiosRes] = useState("");
  const [fetchClick, setFetchClick] = useState("");
  const [axiosClick, setAxiosClick] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetchRes("fetch request created");
    hitApi(signal).then((res) => {
      setFetchRes(res);
    });
    return () => {
      controller.abort();
    };
  }, [fetchClick]);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setAxiosRes("axios request created");
    getReq(source).then((res) => {
      setAxiosRes(res);
    });
    return () => {
      source.cancel("axios request cancelled");
    };
  }, [axiosClick]);

  return (
    <div className="App">
      <div>
        <p>This is usig fetch</p>
        <p>The response is = {fetchRes}</p>
        <button type="button" onClick={() => setFetchClick(!fetchClick)}>
          Create Request
        </button>
      </div>
      <div>
        <p>This is usig Axios</p>
        <p>The response is = {axiosRes}</p>
        <button type="button" onClick={() => setAxiosClick(!axiosClick)}>
          Create Axios Request
        </button>
      </div>
    </div>
  );
}

export default App;
