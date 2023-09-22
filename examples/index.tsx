import { Button } from "antd";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Container from "../src/Container";

import config from "./schema"


const App = () => {

    const ref = useRef<any>();

    return (
        <>
            <Container config={config} ref={ref}/>
            <Button onClick={() => console.log(ref.current.getData())}>click</Button>
        </>
            
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);