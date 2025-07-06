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
  setVisible: (visible: boolean) => void;
}

function Toast({
  children,
  variant = 'notice',
  setVisible,
}: ToastProps): React.ReactElement {
  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <div className={styles.content}>{children}</div>
      <button className={styles.closeButton} onClick={() => setVisible(false)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export { VARIANT_OPTIONS };
export default Toast;
