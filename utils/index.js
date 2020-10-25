import { Platform, Dimensions } from "react-native";

export const getRelativeSize = (size) =>
  `${Platform.select({ ios: size, android: size })}px`;

export const getPercentageSizeWidth = (percentage) =>
  `${(Dimensions.get("window").width * percentage) / 100}px`;

export const getPercentageSizeWidthNoPx = (percentage) =>
  (Dimensions.get("window").width * percentage) / 100;

export const getPercentageSizeHeight = (percentage) =>
  (Dimensions.get("window").height * percentage) / 100;

export const getPercentageSizeHeightNoPx = (percentage) =>
  (Dimensions.get("window").height * percentage) / 100;

export const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};
export const formatedText = (text, max) => {
  return text.length > max ? `${text.slice(0, max)}...` : text;
};

export const cpfMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const cnpjMask = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const list = [
  { name: "Indicar amigos" },
  { name: "Transferir" },
  { name: "Depositar" },
  { name: "Recarga de Celular" },
  { name: "Dividir valor" },
  { name: "Cobrar" },
  { name: "Pagar" },
];

export const InfoCardList = [
  { name: "Compra em m.a soluções de ", price: "50" },
  { name: "Compra em m.a soluções de ", price: "500" },
  { name: "Compra em Coop de ", price: "1000" },
  { name: "Compra em MB TI de ", price: "510" },
  { name: "Compra em MB TI de", price: "1000" },
  { name: "Compra em MB TI de ", price: "180" },
  { name: "Compra em MB TI de ", price: "350" },
  { name: "Compra em MB TI de ", price: "5000" },
];
