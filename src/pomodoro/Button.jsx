import React from "react";

export default function ButtonComponent({
  allTheThings,
  setAllTheThings,
  dataTestid,
  className,
}) {
  function clamp(n, min, max) {
    return n > max ? max : n < min ? min : n;
  }
  const doSomething = () => {
    if (dataTestid === "decrease-focus") {
      const newValue = clamp(
        allTheThings.focusVal - allTheThings.focusAdjust,
        allTheThings.focusMin,
        allTheThings.focusMax
      );
      setAllTheThings({
        ...allTheThings,
        focusVal: newValue,
        secondsRemaining: newValue * 60,
      });
    } else if (dataTestid === "increase-focus") {
      const newValue = clamp(
        allTheThings.focusVal + allTheThings.focusAdjust,
        allTheThings.focusMin,
        allTheThings.focusMax
      );
      setAllTheThings({
        ...allTheThings,
        focusVal: newValue,
        secondsRemaining: newValue * 60,
      });
    } else if (dataTestid === "decrease-break") {
      const newValue = clamp(
        allTheThings.breakVal - allTheThings.breakAdjust,
        allTheThings.breakMin,
        allTheThings.breakMax
      );
      setAllTheThings({ ...allTheThings, breakVal: newValue });
    } else if (dataTestid === "increase-break") {
      const newValue = clamp(
        allTheThings.breakVal + allTheThings.breakAdjust,
        allTheThings.breakMin,
        allTheThings.breakMax
      );
      setAllTheThings({ ...allTheThings, breakVal: newValue });
    }
    console.log(dataTestid, className);
  };

  return (
    <button
      type="button"
      className="btn btn-secondary"
      data-testid={dataTestid}
      onClick={doSomething}
      disabled={allTheThings.hasStarted}
    >
      <span className={className} />
    </button>
  );
}
