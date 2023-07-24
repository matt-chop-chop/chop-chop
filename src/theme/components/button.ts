import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontSize: "14px",
  lineHeight: "20px",
  borderRadius: "4px",
  fontWeight: 500,
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
  _focus: {
    outline: "none",
    boxShadow: "none",
  },
});

export const Button = defineStyleConfig({
  baseStyle,
});
