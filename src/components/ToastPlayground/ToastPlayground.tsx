import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { type Variant, VARIANT_OPTIONS } from '../Toast';

import * as styles from './ToastPlayground.module.css';
import { useToastShelf } from '../ToastShelf/Provider';

const defaultVariant = 'notice';

function ToastPlayground(): React.ReactElement {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState<Variant>(defaultVariant);
  const { addToast } = useToastShelf();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Please enter a message for the toast.');
      return;
    }

    addToast({ message, variant });

    // Reset the form state
    setVariant(defaultVariant);
    setMessage('');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <MessageInput message={message} setMessage={setMessage} />
          </div>

          <div className={styles.row}>
            <VariantsInput variant={variant} setVariant={setVariant} />
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
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
