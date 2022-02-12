import { okWords } from "../config/words";
import sf_1 from "../assets/sound/sf_1.mp3";
import sf_2 from "../assets/sound/sf_2.mp3";
import sf_3 from "../assets/sound/sf_3.mp3";
import sf_4 from "../assets/sound/sf_4.mp3";
import sf_5 from "../assets/sound/sf_5.mp3";
import sf_6 from "../assets/sound/sf_6.mp3";

export const authKey = (newKey, keyTable) => {
  return keyTable.find((key) => key.toLowerCase() === newKey.toLowerCase());
};

export const pushIfNotExisting = (item, array) => {
  if (!array.includes(item.toLowerCase())) {
    return [...array, item];
  } else {
    return [...array];
  }
};

export const wordIsExisting = (word) => {
  return okWords.includes(word?.toUpperCase());
};

export const tuorp = () => {
  const randSix = Math.floor(Math.random() * 6);
  const audios = [sf_1, sf_2, sf_3, sf_4, sf_5, sf_6];
  const audio = new Audio(audios[randSix]);
  audio.play();
};

export const getRandomWordIndex = () => {
  const randIndex = Math.floor(Math.random() * okWords.length);
  return randIndex;
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(function (err) {
    console.error("Async: Could not copy text: ", err);
  });
};
