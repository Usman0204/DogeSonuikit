import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#F9AC61",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#fff",
  background: "#1A1A27",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#000",
  inputSecondary: "#000",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#fff",
  textDisabled: "#666171",
  textSubtle: "#F9AC61",
  borderColor: "#524B63",
  card: "#101017",
  gradients: {
    bubblegum: "#000",
  },
};

export const darkColors: Colors = {
  

  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};
