import { STATUS_OPTIONS, PRIORITY_OPTIONS } from './config';
export const getColorByValue = (value: string) => {
  switch (value) {
    case STATUS_OPTIONS.TODO:
    case PRIORITY_OPTIONS.LOW:
      return 'default'
    case STATUS_OPTIONS.DOING:
    case PRIORITY_OPTIONS.NORMAL:
      return 'info'
    case STATUS_OPTIONS.DONE:
      return 'success'
    case PRIORITY_OPTIONS.HIGHT:
      return 'error'
    default:
      return 'info'
  }
}