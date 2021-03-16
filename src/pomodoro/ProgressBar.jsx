import React from "react";

export default function ProgressBar({ allTheThings }) {
  
  const focusSecondsTotal = allTheThings.focusVal * 60;
  const breakSecondsTotal = allTheThings.breakVal * 60;

  let percentage = 0;

  if (allTheThings.focusBreak) {
    percentage = 100 - ((allTheThings.secondsRemaining / focusSecondsTotal) * 100)
  } else {
    percentage = 100 - ((allTheThings.secondsRemaining / breakSecondsTotal) * 100)
  }
  
  return (
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={percentage} // TODO: Increase aria-valuenow as elapsed time increases
            style={{ width: `${percentage}%` }} // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  );
}
