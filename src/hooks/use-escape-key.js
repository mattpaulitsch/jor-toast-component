import React from "react";

export function useEscapeKey(keyType, actionOnEscape) {
  React.useEffect(() => {
    function applyAction(event) {
      if (event.key === keyType) {
        actionOnEscape();
      }
    }
    window.addEventListener("keydown", applyAction);

    return () => window.removeEventListener("keydown", applyAction);
  });
}