import React from "react";
import Iframe from "react-iframe";

const Calculator = ()=>{
    return(
        <div className="iframeWrapper">
            <Iframe src="https://www.calculator.net/calorie-calculator.html"  scrolling="no"/>
        </div>
    )
}

export default Calculator
