import { cssVar, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle((props) => {
  const arrowBg = cssVar("popper-arrow-bg");

  return {
    bg: "light.background",
    boxShadow: "0px 1px 5px 1px var(--chakra-colors-light-emphasis)",
    color: "light.emphasis",
    maxWidth: "20rem",
    paddingX: "3",
    paddingY: "2",
    [arrowBg.variable]: "var(--chakra-colors-light-background)",
  };
});

export const Tooltip = defineStyleConfig({
  baseStyle,
  defaultProps: {},
});
