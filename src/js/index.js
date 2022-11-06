//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import {SecondsCounter} from "./component/secondsCounter.jsx";

//render your react application
let segundos=0;
setInterval (()=>{
    let segString = segundos.toString()
    let unidad = segString [segString.length -1]
    let decenas = segString [segString.length -2]
    let centenas = segString [segString.length -3]
    let mil = segString [segString.length -4]
    ReactDOM.render(<SecondsCounter unidad={unidad} decenas={decenas} centenas={centenas} mil={mil}  />, document.querySelector("#app"));
    segundos++
},1000)

ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
