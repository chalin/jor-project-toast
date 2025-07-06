import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastShelfProvider from '../ToastShelf/Provider';

function App(): React.ReactElement {
  return (
    <>
      <ToastShelfProvider>
        <ToastPlayground />
      </ToastShelfProvider>
      <Footer />
    </>
  );
}

export default App;
