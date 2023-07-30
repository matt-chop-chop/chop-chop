import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "light.text",
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

const variantBodyBold = defineStyle({
  ...variantBody,
  fontWeight: 700,
});

const variantBodySmallBold = defineStyle({
  ...variantBodySmall,
  fontWeight: 700,
});

const variantBodyLargeBold = defineStyle({
  ...variantBodyLarge,
  fontWeight: 700,
});

const variants = {
  body: variantBody,
  "body-small": variantBodySmall,
  "body-large": variantBodyLarge,
  "body-bold": variantBodyBold,
  "body-small-bold": variantBodySmallBold,
  "body-large-bold": variantBodyLargeBold,
};

export const Text = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {},
});
