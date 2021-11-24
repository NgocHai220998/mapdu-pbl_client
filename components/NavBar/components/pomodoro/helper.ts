import { SECOND_TIME, POMODORO_OPTIONS, ITimerValue } from './config';

export const convertTime = (time: number) => {
  const minute: number = (time - time % SECOND_TIME) / SECOND_TIME
  const second: number = time % SECOND_TIME

  return `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
}

export const getTimeByTimerSelected = (value: string, timer: ITimerValue) => {
  switch (value) {
    case POMODORO_OPTIONS.POMODORO:
      return timer.pomo
    case POMODORO_OPTIONS.SHORT_BREAK:
      return timer.shortTime
    case POMODORO_OPTIONS.LONG_BREAK:
      return timer.longTime
    default:
      return timer.pomo
  }
}

export const isRunning = (pomoSelected: string, time: number, timer: ITimerValue) => {
  const timeRunning: number = getTimeByTimerSelected(pomoSelected, timer) * SECOND_TIME;

  return time < timeRunning ? true : false;
}
