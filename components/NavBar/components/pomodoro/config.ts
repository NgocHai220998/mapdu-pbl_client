import { TIMER_SETTINGS } from "./components/settings/config"

export const POMODORO_OPTIONS = {
  POMODORO: 'POMODORO',
  SHORT_BREAK: 'SHORT_BREAK',
  LONG_BREAK: 'LONG_BREAK'
}

export const SECOND_TIME = 60;

export interface ITimerValue {
  pomo: number;
  shortTime: number;
  longTime: number;
}

export const TIMER_VALUES: ITimerValue = {
  pomo: TIMER_SETTINGS.POMODORO_TIME,
  shortTime: TIMER_SETTINGS.SHORT_TIME,
  longTime: TIMER_SETTINGS.LONG_TIME
}
