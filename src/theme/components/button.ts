import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",
  padding: "10px 16px",

  _focusVisible: {
    boxShadow: "outline",
  },

  _disabled: {
    boxShadow: "none",
    cursor: "not-allowed",
    opacity: 0.4,
  },
});

const buttonPrimary = defineStyle({
  background: "light.emphasis",
  color: "light.background",

  _active: {
    opacity: 0.4,
  },

  _hover: {
    opacity: 0.8,
  },
});

const variants = {
  primary: buttonPrimary,
};

export const Button = defineStyleConfig({
  baseStyle,
  variants,
});
