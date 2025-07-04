import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

import * as styles from './Toast.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

interface ToastProps {
  children: React.ReactNode;
  variant?: 'notice' | 'warning' | 'success' | 'error';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Toast({ children, variant = 'notice' }: ToastProps): React.ReactElement {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
        16 photos have been uploaded
      </p>
      <button className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;