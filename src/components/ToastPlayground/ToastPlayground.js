import React from "react";

import Toast from "../Toast";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const [message, setMessage] = React.useState("");
  // const [isVisible, setIsVisible] = React.useState(true);
  const [toasts, setToasts] = React.useState([]);

  function handleDelete(id) {
    console.log('id', id);
    console.log('before', toasts);

    const nextToasts = toasts.filter(toast => {
      return toast.key !== id;
    });


    // const studentsWhoPassed = students.filter(student => {
    //   return student.grade >= 60
    // });
    console.log('after', nextToasts);

    setToasts(nextToasts);
  }

  function addNewToast(event) {
    // prevent default event behavior (page reload)
    event.preventDefault();

    const key = crypto.randomUUID();
    const toastContainer = {
      element: (
        <Toast variant={variant} removeToast={() => {handleDelete(key)}} id={key}>
          {message}
        </Toast>
      ),
      key: key,
    };

    // update toast list state
    const nextToasts = [...toasts, toastContainer]
    setToasts(nextToasts);

    // clear message input field and reset radio input to default
    setMessage("");
    setVariant(DEFAULT_VARIANT);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form className={styles.controlsWrapper} onSubmit={addNewToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((currentVariant) => {
              return (
                <label htmlFor="variant-notice" key={currentVariant}>
                  <input
                    id={currentVariant}
                    type="radio"
                    name="variant"
                    value={currentVariant}
                    checked={variant === currentVariant}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {currentVariant}
                </label>
              );
            })}
            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
