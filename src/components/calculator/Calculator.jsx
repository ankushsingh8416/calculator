import React, { useState, useEffect } from "react";
import "./calulator.css";

const Calculator = () => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("calculatorValue") || "";
  });

  useEffect(() => {
    localStorage.setItem("calculatorValue", value);
  }, [value]);

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="display">
            <input type="text" readOnly value={value} />
          </div>

          <div className="buttons">
            <button
              className="operator yellowgreen"
              value="AC"
              onClick={() => setValue("")}
            >
              AC
            </button>
            <button
              className="operator yellowgreen"
              value="DEL"
              onClick={() => setValue(value.slice(0, -1))}
            >
              DEL
            </button>
            <button
              className="operator yellowgreen"
              value="%"
              onClick={(e) => setValue(value + e.target.value)}
            >
              %
            </button>
            <button
              className="operator yellowgreen"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            >
              /
            </button>
            <button value="7" onClick={(e) => setValue(value + e.target.value)}>
              7
            </button>
            <button value="8" onClick={(e) => setValue(value + e.target.value)}>
              8
            </button>
            <button value="9" onClick={(e) => setValue(value + e.target.value)}>
              9
            </button>
            <button
              className="operator yellowgreen"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            >
              *
            </button>

            <button value="4" onClick={(e) => setValue(value + e.target.value)}>
              4
            </button>
            <button value="5" onClick={(e) => setValue(value + e.target.value)}>
              5
            </button>
            <button value="6" onClick={(e) => setValue(value + e.target.value)}>
              6
            </button>
            <button
              className="operator yellowgreen"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            >
              -
            </button>

            <button value="1" onClick={(e) => setValue(value + e.target.value)}>
              1
            </button>
            <button value="2" onClick={(e) => setValue(value + e.target.value)}>
              2
            </button>
            <button value="3" onClick={(e) => setValue(value + e.target.value)}>
              3
            </button>
            <button
              className="operator yellowgreen"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            >
              +
            </button>

            <button
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            >
              00
            </button>
            <button value="0" onClick={(e) => setValue(value + e.target.value)}>
              0
            </button>
            <button value="." onClick={(e) => setValue(value + e.target.value)}>
              .
            </button>
            <button
              className="operator equal"
              value="="
              onClick={() => setValue(eval(value))}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
