import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
const cx = classNames.bind(styles);

interface ToastProps extends ToastContents {
  onClose: (id: string) => void;
  autoCloseDelay: number;
  direction: string;
}

export const Toast = ({
  message,
  type = 'success',
  id,
  onClose,
  autoCloseDelay = 3000,
  direction,
}: ToastProps) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const animation = setTimeout(() => {
      setClosing(true);
    }, autoCloseDelay);

    const timeOutClose = setTimeout(() => {
      onClose(id);
    }, autoCloseDelay + 500);

    return () => {
      clearTimeout(timeOutClose);
      clearTimeout(animation);
    };
  }, []);

  return (
    <div
      className={cx('toast-item-wrap', type, direction, { closing: closing })}
      onClick={() => onClose(id)}
    >
      <div className={cx('toast')}>{message}</div>
      <div style={{ animationDuration: `${autoCloseDelay}ms` }} className={cx('progress')} />
    </div>
  );
};
