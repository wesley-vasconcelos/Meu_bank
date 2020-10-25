import { getRelativeSize } from "./utils";

const colors = {
  primaryLight: "#191970",
  primary: "#3CB371",
  primaryDark: "#1C1C1C",
  secundary: "#151938",
  caution: "#CDC0B0",
  default: "#2a333a",
  whitePure: "#ffffff",
  black: "#000000",
  input: "#F5F7F7",
  inputCancel: "#44c5ee",
  greyLighter: "#696969",
  cardError: "#ffff",
  textError: "#ffff",
};

const theme = {
  color: {
    general: { ...colors },
    text: { ...colors },
    button: { ...colors },
    input: { ...colors },
  },
  radius: {
    small: 4,
    medium: 8,
    large: 50,
    ball: 200,
  },
  space: {
    small: 6,
    medium: 12,
    large: 16,
  },
  text: {
    display: getRelativeSize(34),
    title1: getRelativeSize(28),
    title2: getRelativeSize(22),
    subtitle: getRelativeSize(20),
    headline: getRelativeSize(17),
    body: getRelativeSize(16),
    label: getRelativeSize(14),
    caption: getRelativeSize(12),
  },
};

export default theme;
