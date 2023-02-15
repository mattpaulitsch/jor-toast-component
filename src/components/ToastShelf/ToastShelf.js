import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  console.log(toasts)
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li className={styles.toastWrapper} key={toast.key}>
            {toast.element}
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
