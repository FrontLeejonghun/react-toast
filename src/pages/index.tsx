import { NextPage } from 'next';
import { ToastContainer } from 'components';
import { ToastEventEmitter } from 'utils';

const randomUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const Home: NextPage = () => {
  const { openToast } = ToastEventEmitter();
  const onClick = (type: ToastContentType) =>
    openToast({ message: 'Hello World', type: type, id: randomUUID() });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', gap: 10 }}>
      <button className={'button success'} onClick={() => onClick('success')}>
        success
      </button>
      <button className={'button error'} onClick={() => onClick('error')}>
        error
      </button>
      <button className={'button info'} onClick={() => onClick('info')}>
        info
      </button>
      <ToastContainer direction="right" />
    </div>
  );
};

export default Home;
