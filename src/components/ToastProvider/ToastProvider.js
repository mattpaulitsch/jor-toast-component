import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();
export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

class ToastData {
  constructor(variant, message, id) {
    this.variant = variant;
    this.message = message;
    this.id = id;
  }
}

function ToastProvider({ children }) {
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);
  const escapeKey = useEscapeKey('Escape', deleteAllToasts);

  function deleteAllToasts() {
    setToasts([]);
  }

  function addNewToast(event) {
    // prevent default event behavior (page reload)
    event.preventDefault();

    const newToast = new ToastData(variant, message, crypto.randomUUID());

    // update toast list state
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);

    // clear message input field and reset radio input to default
    setMessage("");
    setVariant(DEFAULT_VARIANT);
  }

  function deleteToast(key) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== key;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        variant,
        setVariant,
        message,
        setMessage,
        toasts,
        setToasts,
        addNewToast,
        deleteToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
