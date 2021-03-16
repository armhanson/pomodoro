import React from "react";

export default function StopButton({
  allTheThings,
  setAllTheThings,
  setIsTimerRunning,
}) {
  const doTheMagic = () => {
    if (allTheThings.hasStarted === true) {
      setAllTheThings({
        ...allTheThings,
        hasStarted: false,
        focusBreak: 1,
        secondsRemaining: allTheThings.focusVal * 60,
      });
      setIsTimerRunning(false);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-secondary"
      title="Stop the session"
      onClick={doTheMagic}
    >
      <span className="oi oi-media-stop" />
    </button>
  );
}
