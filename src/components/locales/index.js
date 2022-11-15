import { LANGUAGE } from "../tools/constabts";
import { ru } from "./RU";
import { en } from "./EN";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "en" ? en[word] : ru[word];
};