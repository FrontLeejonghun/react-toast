import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Toast } from 'components';
import { ToastEventEmitter } from 'utils';
import styles from './ToastContainer.module.scss';

const cx = classNames.bind(styles);

export const ToastContainer = ({ direction = 'left' }: ToastDirection) => {
  const [toastItems, setToastItems] = useState<ToastContents[]>([]);
  const { on, off } = ToastEventEmitter();

  useEffect(() => {
    on('openToast', openToast);
    return () => off('openToast', openToast);
  }, []);

  const openToast = (toastOptions: ToastContents) => {
    setToastItems((prevState) => [...prevState, toastOptions]);
  };

  const closeToast = (id: string) => {
    setToastItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className={cx('toast-container-wrap', direction)}>
      {toastItems.map((v) => {
        return (
          <Toast
            key={v.id}
            {...v}
            onClose={closeToast}
            direction={direction}
            autoCloseDelay={3000}
          />
        );
      })}
    </div>
  );
};
