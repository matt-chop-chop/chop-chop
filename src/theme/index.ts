import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import {
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Tag,
  Text,
  Tooltip,
} from "./components";
import { breakpoints, colorsLight, fonts } from "./foundations";
import { styles } from "./styles";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  ...colorsLight,
};

export const overrides = {
  styles,
  breakpoints,
  colors,
  fonts,
  components: {
    Button,
    Checkbox,
    FormLabel,
    Heading,
    Tag,
    Text,
    Tooltip,
  },
};

export const theme = extendTheme(overrides, config);
