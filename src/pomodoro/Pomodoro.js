import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import ButtonComponent from "./Button";
import DisplayDuration from "./DisplayDuration";
import StopButton from "./StopButton";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  // define variable to hold object of all integer values possible by button press
  const [allTheThings, setAllTheThings] = useState({
    focusAdjust: 5,
    breakAdjust: 1,
    focusVal: 25,
    focusMin: 5,
    focusMax: 60,
    breakVal: 5,
    breakMin: 1,
    breakMax: 15,
    focusBreak: 1, // determine whether on focus or break: boolean
    secondsRemaining: 25 * 60,
    hasStarted: false, // the first time play is pressed, it should switch to true, stop switches to false
  });

  useInterval(
    () => {
      // if focusBreak is true (on focus) and secondsRemaining is 0,
      // change focusBreak to false (on break)
      // then set secondsRemaining to breakVal * 60. play the sound.
      // and vice versa

      if (allTheThings.focusBreak && allTheThings.secondsRemaining === 0) {
        setAllTheThings({
          ...allTheThings,
          focusBreak: 0,
          secondsRemaining: allTheThings.breakVal * 60,
        });
        new Audio(`https://vgmsite.com/soundtracks/donkey-kong-country-snes/zzprueftal/23%20Fanfare.mp3`).play();
      } else if (
        !allTheThings.focusBreak &&
        allTheThings.secondsRemaining === 0
      ) {
        setAllTheThings({
          ...allTheThings,
          focusBreak: 1,
          secondsRemaining: allTheThings.focusVal * 60,
        });
        new Audio(`https://vgmsite.com/soundtracks/donkey-kong-country-snes/tzzbepdfam/29%20Extra%20Life%20Balloon.mp3`).play();
      } else {
        setAllTheThings({
          ...allTheThings,
          secondsRemaining: allTheThings.secondsRemaining - 1,
        });
      }
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    if (!allTheThings.hasStarted) {
      setAllTheThings({ ...allTheThings, hasStarted: true });
    }
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span
              className="input-group-text"
              data-testid="duration-focus"
              value="duration-focus"
            >
              Focus Duration:{" "}
              {allTheThings.focusVal >= 10
                ? allTheThings.focusVal
                : `0${allTheThings.focusVal}`}
              :00
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <ButtonComponent
                allTheThings={allTheThings}
                setAllTheThings={setAllTheThings}
                dataTestid="decrease-focus"
                className="oi oi-minus"
              />
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <ButtonComponent
                allTheThings={allTheThings}
                setAllTheThings={setAllTheThings}
                dataTestid="increase-focus"
                className="oi oi-plus"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration:{" "}
                {allTheThings.breakVal >= 10
                  ? allTheThings.breakVal
                  : `0${allTheThings.breakVal}`}
                :00
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <ButtonComponent
                  allTheThings={allTheThings}
                  setAllTheThings={setAllTheThings}
                  dataTestid="decrease-break"
                  className="oi oi-minus"
                />
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <ButtonComponent
                  allTheThings={allTheThings}
                  setAllTheThings={setAllTheThings}
                  dataTestid="increase-break"
                  className="oi oi-plus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <StopButton
              allTheThings={allTheThings}
              setAllTheThings={setAllTheThings}
              setIsTimerRunning={setIsTimerRunning}
            />
          </div>
        </div>
      </div>
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        {/* possibly stick this section in a different component/file??? */}
        {/* or just delete it in a state magic trick */}
        <DisplayDuration
          isTimerRunning={isTimerRunning}
          allTheThings={allTheThings}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
