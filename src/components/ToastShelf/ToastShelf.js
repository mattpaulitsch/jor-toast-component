import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  function handleDelete(key) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== key;
    });

    setToasts(nextToasts);
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              variant={variant}
              removeToast={() => {
                handleDelete(id);
              }}
              id={id}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
