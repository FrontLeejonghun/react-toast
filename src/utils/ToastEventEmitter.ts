const EventEmitter = require('eventemitter3');
const eventEmitterInstance = new EventEmitter();

export const ToastEventEmitter = () => {
  return {
    openToast: ({ message, type, id }: ToastContents) => {
      return eventEmitterInstance.emit('openToast', { message, type, id });
    },

    closeToast: (toastId: string) => {
      return eventEmitterInstance.emit('closeToast', toastId);
    },

    on: (event: string, fn: Function) => {
      return eventEmitterInstance.on(event, fn);
    },

    off: (event: string, fn: Function) => {
      return eventEmitterInstance.off(event, fn);
    },
  };
};
