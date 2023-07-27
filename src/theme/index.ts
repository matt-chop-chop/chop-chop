import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Button, Text } from "./components";
import { breakpoints, colorsDark, colorsLight, fonts } from "./foundations";
import { styles } from "./styles";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  ...colorsLight,
  ...colorsDark,
};

export const overrides = {
  styles,
  breakpoints,
  colors,
  fonts,
  components: {
    Button,
    Text,
  },
};

export const theme = extendTheme(overrides, config);
