import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Tooltip } from "@chakra-ui/react";
import { StylesConfig, components, OptionProps } from "react-select";

export const Option = ({ ...props }: OptionProps<SelectOption, false>) => {
  const { description, label } = props.data;

  return (
    <components.Option {...props}>
      <Flex alignItems="center" justifyContent="space-between">
        {label}
        {description && (
          <Tooltip hasArrow label={description} placement="left">
            <InfoOutlineIcon mr={3} />
          </Tooltip>
        )}
      </Flex>
    </components.Option>
  );
};

export const styles: StylesConfig<SelectOption, false> = {
  control: (_, { isDisabled, isFocused }) => {
    const borderColor = isFocused ? "var(--chakra-colors-light-emphasis)" : "";
    const opacity = isDisabled ? 0.4 : 1;

    return {
      alignItems: "center",
      background: "var(--chakra-colors-light-background)",
      border: "2px solid var(--chakra-colors-light-text)",
      borderColor,
      borderRadius: "4px",
      color: "var(--chakra-colors-light-text)",
      cursor: "pointer",
      display: "flex",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "28px",
      opacity,
    };
  },
  menu: (provided) => ({
    ...provided,
    margin: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    background: "var(--chakra-colors-light-text)",
    borderRadius: "none",
    padding: 0,
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    background: isFocused
      ? "var(--chakra-colors-light-emphasis)"
      : "var(--chakra-colors-light-text)",
    color: "var(--chakra-colors-light-background)",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",

    ":active": {
      backgroundColor: "var(--chakra-colors-light-emphasis)",
    },

    ":hover": {
      background: "var(--chakra-colors-light-emphasis)",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    paddingX: "14px",
    paddingY: "4px",
  }),
};
