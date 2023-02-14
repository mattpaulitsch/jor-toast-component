import React from "react";

import Toast from "../Toast";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const [message, setMessage] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast variant={variant} message={message} isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className={styles.controlsWrapper}>
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
            <Button onClick={() => setIsVisible(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
