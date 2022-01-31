import { okWords } from '../config/words';

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
  return okWords.includes(word.toUpperCase());
};
