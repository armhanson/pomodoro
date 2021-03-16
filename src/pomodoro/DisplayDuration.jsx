import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

export default function DisplayDuration({ isTimerRunning, allTheThings }) {
  function theHappening() {
    let titleText = "";
    if (allTheThings.focusBreak) {
      titleText = `Focusing for ${minutesToDuration(
        allTheThings.focusVal
      )} minutes`;
    } else if (!allTheThings.focusBreak) {
      titleText = `On Break for ${minutesToDuration(
        allTheThings.breakVal
      )} minutes`;
    }

    let subTitleText = `${secondsToDuration(
      allTheThings.secondsRemaining
    )} remaining`;

    return (
      <>
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">{titleText}</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {subTitleText}
            </p>
          </div>
        </div>
        {isTimerRunning ? null : <h2>PAUSED</h2>}
        <ProgressBar allTheThings={allTheThings}/>
      </>
    );
  }

  if (allTheThings.hasStarted) {
  return theHappening();
  } else {
  return null;
  }
}
