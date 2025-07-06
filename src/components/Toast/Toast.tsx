import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import * as styles from './Toast.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'] as const;
export type Variant = (typeof VARIANT_OPTIONS)[number];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

interface ToastProps {
  children: React.ReactNode;
  variant?: Variant;
}

function Toast({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'notice',
}: ToastProps): React.ReactElement {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>16 photos have been uploaded</p>
      <button className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export { VARIANT_OPTIONS };
export default Toast;
