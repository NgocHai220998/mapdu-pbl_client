import { Button } from "@mui/material";
import { NextPage } from "next"
import { useState } from "react";
import { KEY_TYPES, setItem } from "../../../../../../utils/localStoreTools";
import { TIMER_SETTINGS } from "./config";

interface ITimerSettingProps {
  handleClose: () => void
}

const TimerSetting: NextPage<ITimerSettingProps> = (props: ITimerSettingProps) => {
  const { handleClose } = props;
  const [pomo, setPomo] = useState<number>(TIMER_SETTINGS.POMODORO_TIME)
  const [shortTime, setShortTime] = useState<number>(TIMER_SETTINGS.SHORT_TIME)
  const [longTime, setLongTime] = useState<number>(TIMER_SETTINGS.LONG_TIME)

  const handleSave = () => {
    setItem(KEY_TYPES.TIMER_SETTING, {
      pomo,
      shortTime,
      longTime
    })

    handleClose();
  }

  return (
    <>
      <div className="timer-setting">
        <h3 className="timer-title">Timer Settings</h3>
        <div className="timer-contents">
          <div className="timer-pomo">
            <label>Pomodoro</label>
            <br />
            <input
              min={0}
              max={60}
              type="number"
              value={pomo}
              onChange={(e: any) => setPomo(e.target.value)}
            />
          </div>
          <div className="timer-short">
            <label>Short Break</label>
            <br />
            <input
              min={0}
              max={60}
              type="number"
              value={shortTime}
              onChange={(e: any) => setShortTime(e.target.value)}
            />
          </div>
          <div className="timer-long">
            <label>Long Break</label>
            <br />
            <input
              min={0}
              max={60}
              type="number"
              value={longTime}
              onChange={(e: any) => setLongTime(e.target.value)}
            />
          </div>
        </div>
        <Button
          variant="contained"
          fullWidth
          size="small"
          className="el-hover"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
      <style jsx>{`
        .timer-setting {
          padding: 8px;
          background-color: #232931;
          * {
            color: white;
          }

          .timer {
            &-title {
              margin: 0px;
              margin-bottom: 16px;
              font-family: "Comic Sans MS", "Comic Sans", cursive;
            }
            &-contents {
              display: flex;
              margin-bottom: 16px;

              .timer-pomo, .timer-short {
                margin-right: 16px;
              }

              input {
                width: 86px;
                color: rgba(21, 21, 21);
              }
            }
          }
        }
      `}
      </style>
    </>
  )
}

export default TimerSetting
