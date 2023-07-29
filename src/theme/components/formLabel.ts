import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "light.emphasis",
  fontFamily: "Roboto",
  fontWeight: 400,
});

const bodyVariant = defineStyle({
  fontSize: "16px",
  lineHeight: "28px",
});

const variants = {
  body: bodyVariant,
};

export const FormLabel = defineStyleConfig({
  baseStyle,
  variants,
});
