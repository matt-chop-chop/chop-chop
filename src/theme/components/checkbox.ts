import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle((props) => {
  return {
    control: {
      borderColor: "light.surface",
      borderWidth: "1px",

      _checked: {
        background: "light.surface",
        borderColor: "light.surface",

        color: "light.background",

        _active: {
          background: "light.surface",
          borderColor: "light.surface",
          opacity: 0.4,
        },

        _hover: {
          background: "light.surface",
          borderColor: "light.surface",
          opacity: 0.8,
        },
      },
    },
  };
});

export const Checkbox = defineMultiStyleConfig({ baseStyle });
