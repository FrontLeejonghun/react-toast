declare global {
  type ToastContents = {
    message: string;
    type: ToastType;
    id: string;
  };

  type ToastContentType = 'success' | 'error' | 'info';

  type ToastDirection = {
    direction: 'left' | 'right';
  };
}

export default global;
