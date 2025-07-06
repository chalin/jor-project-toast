import React from 'react';

import * as styles from './ToastShelf.module.css';
import Toast from '../Toast';
import { useToastShelf } from './Provider';

function ToastShelf(): React.ReactElement {
  const { toasts, dismissToast } = useToastShelf();

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            handleDismiss={() => dismissToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
