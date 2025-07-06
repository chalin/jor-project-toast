import React from 'react';

import Toast, { type Variant } from '../Toast';
import * as styles from './ToastShelf.module.css';

interface ToastData {
  id: string;
  variant: Variant;
  message: string;
}

const MOCK_TOAST_DATA: ToastData[] = [
  { id: '1', variant: 'notice', message: 'Example notice toast' },
  { id: '2', variant: 'error', message: 'Example error toast' },
];

function ToastShelf(): React.ReactElement {
  const [toasts, setToasts] = React.useState<ToastData[]>(MOCK_TOAST_DATA);

  const handleDismiss = (id: string) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            handleDismiss={() => handleDismiss(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
