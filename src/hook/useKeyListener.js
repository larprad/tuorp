import { useEffect, useState } from "react";

export const useKeyListener = (eventName = "keydown", element = window, debounceDelay=100) => {
  const [keyPressed, setKeyPressed] = useState("");
  const eventListener = (e) => {
    setKeyPressed(e.key);
  };

  useEffect(() => {
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);

  useEffect(() => {
    const debounceKey = setTimeout( () => setKeyPressed(''), debounceDelay)
    return () => clearTimeout(debounceKey)
  }, [debounceDelay, keyPressed])

  return { keyPressed };
};
