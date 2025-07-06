import React from 'react';

import Button from '../Button';
import Toast, { type Variant, VARIANT_OPTIONS } from '../Toast';

import * as styles from './ToastPlayground.module.css';

function ToastPlayground(): React.ReactElement {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState<Variant>('notice');
  const [isToastVisible, setIsToastVisible] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast variant={variant} setVisible={setIsToastVisible}>
          {message}
        </Toast>
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <MessageInput message={message} setMessage={setMessage} />
        </div>

        <div className={styles.row}>
          <VariantsInput variant={variant} setVariant={setVariant} />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsToastVisible(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageInput({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) {
  return (
    <>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: 'baseline' }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </>
  );
}

function VariantsInput({
  variant,
  setVariant,
}: {
  variant: Variant;
  setVariant: (variant: Variant) => void;
}) {
  return (
    <>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((option) => (
          <label key={option} htmlFor={`variant-${option}`}>
            <input
              id={`variant-${option}`}
              type="radio"
              name="variant"
              value={option}
              checked={variant === option}
              onChange={() => setVariant(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </>
  );
}

export default ToastPlayground;
