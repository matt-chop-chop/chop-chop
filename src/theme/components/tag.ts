import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  container: {
    bg: "light.emphasis",
    borderRadius: "16px",
    color: "light.background",
    fontSize: "13px",
    fontWeight: "normal",
    lineHeight: "14px",
    mr: 2,
    mt: 2,
    px: 2,
    py: 1,
  },
});

export const Tag = defineStyleConfig({
  baseStyle,
});
