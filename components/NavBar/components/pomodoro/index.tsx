import { Chip, IconButton, Popover } from "@mui/material";
import SyncIcon from '@mui/icons-material/Sync';
import AlarmIcon from '@mui/icons-material/Alarm';
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ITimerValue, POMODORO_OPTIONS, SECOND_TIME, TIMER_VALUES } from "./config";
import TimerSetting from "./components/settings";
import { getItem, KEY_TYPES } from "../../../../utils/localStoreTools";
import { convertTime, getTimeByTimerSelected, isRunning } from "./helper";

const PomodoroTimer: NextPage = () => {
  const [pomoSelected, setPomoSelected] = useState<string>(POMODORO_OPTIONS.POMODORO)
  const [time, setTime] = useState<number>(TIMER_VALUES.pomo * SECOND_TIME);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [machineTime, setMachineTime] = useState<any>(null);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [timer, setTimer] = useState<ITimerValue>(TIMER_VALUES)

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSaveTimer = (value: ITimerValue) => {
    setTimer(value)
    setTime(getTimeByTimerSelected(pomoSelected, value) * SECOND_TIME)
    handleStopPomodoro();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleSelectPomo = (value: string) => {
    setPomoSelected(value);
    setTime(getTimeByTimerSelected(value, timer) * SECOND_TIME)
    handleStopPomodoro()
  }

  const runPomodoro = () => {
    setIsStarted(true);
    setMachineTime(setInterval(() => {
      setTime((value: number) => {
        console.log(value)
        return value - 1;
      });
    }, 1000))
  }

  const handleStopPomodoro = () => {
    setIsStarted(false);
    clearInterval(machineTime)
    setMachineTime(null)
  }

  const handleResetPomodoro = () => {
    const timerValues: ITimerValue = getItem(KEY_TYPES.TIMER_SETTING)
    setTimer(timerValues);
    setTime(timerValues.pomo * SECOND_TIME);
    handleStopPomodoro();
  }

  useEffect(() => {
    const timerValues: ITimerValue = getItem(KEY_TYPES.TIMER_SETTING)
    setTimer(timerValues);
    setTime(timerValues.pomo * SECOND_TIME);
  }, []);

  return (
    <>
      <div className="pomodoro-container background">
        <div className="pomodoro-header">
          <div className="pomodoro-timer">
            <span>{convertTime(time)}</span>
          </div>
          <div className="pomodoro-btn-start">
            <Chip 
              className="el-hover"
              style={{
                color: 'white',
                paddingLeft: '8px',
                paddingRight: '8px',
                backgroundColor: isStarted ? '#cb2020' : isRunning(pomoSelected, time, timer) ? '#3369bb' : '#00000000'
              }}
              label={isStarted ? 'Pause' : isRunning(pomoSelected, time, timer) ? 'Continue' : 'Start'} variant="outlined"
              onClick={isStarted ? handleStopPomodoro : runPomodoro}
            />
          </div>
          <div className="pomodoro-btn-reset">
            <IconButton onClick={handleResetPomodoro} className="el-hover" aria-label="delete">
              <SyncIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
          <div className="pomodoro-btn-setting">
            <IconButton onClick={handleClick} className="el-hover" aria-label="delete">
              <AlarmIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
        </div>
        <div className="pomodoro-footer">
          <div
            className={`pomodoro-btn el-hover
              ${pomoSelected === POMODORO_OPTIONS.POMODORO ? ' pomo-selected' : ''}`
            }
            onClick={() => handleSelectPomo(POMODORO_OPTIONS.POMODORO)}
          >
            <span>Pomodoro</span>
          </div>
          <div
            className={`pomodoro-short-break-btn el-hover
              ${pomoSelected === POMODORO_OPTIONS.SHORT_BREAK ? ' pomo-selected' : ''}`
            }
            onClick={() => handleSelectPomo(POMODORO_OPTIONS.SHORT_BREAK)}
          >
            <span>Short Break</span>
          </div>
          <div
            className={`pomodoro-long-break-btn el-hover
              ${pomoSelected === POMODORO_OPTIONS.LONG_BREAK ? ' pomo-selected' : ''}`
            }
            onClick={() => handleSelectPomo(POMODORO_OPTIONS.LONG_BREAK)}
          >
            <span>Long Break</span>
          </div>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <TimerSetting handleSaveTimer={handleSaveTimer} handleClose={handleClose} />
      </Popover>
      <style jsx>{`
        .pomodoro-container {
          margin-right: 12px;
          border-radius: 5px;
          padding: 8px 16px;
        }
        .pomodoro {
          &-header {
            display: flex;
          }

          &-footer {
            display: flex;
            justify-content: space-around;
          }

          &-timer {
            span {
              color: white;
              font-size: 40px;
              font-weight: bold;
              font-family: "Comic Sans MS", "Comic Sans", cursive;
            }
          }
          &-btn-start {
            line-height: 56px;
            margin-left: auto;
          }
          &-btn-reset {
            line-height: 56px;
          }
          &-btn-setting {
            line-height: 56px;
          }

          &-btn, &-short-break-btn, &-long-break-btn {
            margin: 8px 8px 8px 0px;
            span {
              color: white;
            }

            &:hover {
              span {
                color: rgba(255, 255, 255, 0.65);
              }
            }
          }
        }

        .pomo-selected {
          border-bottom: 3px solid white;
          padding-bottom: 4px;
        }
      `}
      </style>
    </>
  )
}

export default PomodoroTimer