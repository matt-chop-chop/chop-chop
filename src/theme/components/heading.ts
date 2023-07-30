import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "light.text",
  fontFamily: "Roboto",
  fontWeight: 590,
});

const headingSmall = defineStyle({
  fontSize: "28px",
  lineHeight: "33px",
});

const headingMedium = defineStyle({
  fontSize: "32px",
  lineHeight: "38px",
});

const headingLarge = defineStyle({
  fontSize: "40px",
  lineHeight: "48px",
});

const variants = {
  "heading-small": headingSmall,
  "heading-medium": headingMedium,
  "heading-large": headingLarge,
};

export const Heading = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {},
});
