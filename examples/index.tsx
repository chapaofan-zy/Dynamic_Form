import { Button } from "antd";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Container from "../src";
import { Theme, UI } from "../src/interface";

import config from "./schema"


const App = () => {

    const ref = useRef<any>();

    const control = ({ getData, setConfig }: any) => {
      const val = getData(['name']);
      if (val[Object.keys(val)[0]] === '000') {
        setConfig('select', 'ui', {
                type: UI.select,
                theme: Theme.antd,
                options: [
                    { value: 'disabled', label: 'Disabled', disabled: true },
                ]
            });
      }
    }

    return (
        <>
            <Container config={config} ref={ref} changeKeys={['name']} control={control}/>
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