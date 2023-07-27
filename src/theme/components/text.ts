import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "light.emphasis",
  fontFamily: "Roboto",
  fontWeight: 400,
});

const variantBody = defineStyle({
  fontSize: "16px",
  lineHeight: "28px",
});

const variantBodySmall = defineStyle({
  fontSize: "14px",
  lineHeight: "24px",
});

const variantBodyLarge = defineStyle({
  fontSize: "20px",
  lineHeight: "32px",
});

const variants = {
  body: variantBody,
  "body-small": variantBodySmall,
  "body-large": variantBodyLarge,
};

export const Text = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {},
});
