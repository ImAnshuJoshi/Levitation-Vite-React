import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./ProgressBar.css"

const ProgressBarComp = (props : any) => {
  return (
    <ProgressBar
      percent={(props.step + 1) * 25}
      filledBackground="#acffce"
      height="2px"
      style={{ margin: "auto" }}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#005423" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            1
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#005423" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            2
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",

              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#005423" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            3
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#005423" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          >
            4
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default ProgressBarComp;
