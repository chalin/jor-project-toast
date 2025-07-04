import React from 'react';

import * as styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button({ className = '', ...delegated }: ButtonProps): React.ReactElement {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;