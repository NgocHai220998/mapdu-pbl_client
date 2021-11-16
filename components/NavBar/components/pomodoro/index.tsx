import { Chip, IconButton } from "@mui/material";
import SyncIcon from '@mui/icons-material/Sync';
import AlarmIcon from '@mui/icons-material/Alarm';
import { NextPage } from "next";
import { useState } from "react";
import { POMODORO_OPTIONS } from "./config";

const PomodoroTimer: NextPage = () => {
  const [pomoSelected, setPomoSelected] = useState<string>(POMODORO_OPTIONS.POMODORO)

  const handleSelectPomo = (value: string) => {
    setPomoSelected(value);
  }
  return (
    <>
      <div className="pomodoro-container background">
        <div className="pomodoro-header">
          <div className="pomodoro-timer">
            <span>00:58</span>
          </div>
          <div className="pomodoro-btn-start">
            <Chip className="el-hover" style={{ color: 'white', paddingLeft: '16px', paddingRight: '16px' }} label="Start" variant="outlined" onClick={() => {}} />
          </div>
          <div className="pomodoro-btn-reset">
            <IconButton className="el-hover" aria-label="delete">
              <SyncIcon style={{ color: 'white' }} />
            </IconButton>
          </div>
          <div className="pomodoro-btn-setting">
            <IconButton className="el-hover" aria-label="delete">
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