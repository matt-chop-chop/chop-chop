import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle(() => {
  return {
    control: {
      borderColor: "light.emphasis",
      borderWidth: "1px",

      _checked: {
        background: "light.emphasis",
        borderColor: "light.emphasis",

        color: "light.background",

        _active: {
          background: "light.emphasis",
          borderColor: "light.emphasis",
          opacity: 0.4,
        },

        _hover: {
          background: "light.emphasis",
          borderColor: "light.emphasis",
          opacity: 0.8,
        },
      },
    },
  };
});

export const Checkbox = defineMultiStyleConfig({ baseStyle });
