import React from 'react';

import * as styles from './Footer.module.css';

function Footer(): React.ReactElement {
  return (
    <footer className={styles.wrapper}>
      <p>
        This project is from{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://joyofreact.com"
        >
          The Joy of React
        </a>
        , a comprehensive React.js course.
      </p>
      <p>© 2022-present Joshua Comeau. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

// cSpell:ignore noreferrer noopener Comeau
