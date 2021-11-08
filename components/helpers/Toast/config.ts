export interface IToast {
  isOpen?: boolean,
  message?: String;
  vertical?: 'top' | 'bottom';
  horizontal?: 'center' | 'right';
  type?: 'error' | 'success';
}
