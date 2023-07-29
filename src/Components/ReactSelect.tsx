import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Tooltip } from "@chakra-ui/react";
import Select, { StylesConfig, components, OptionProps } from "react-select";

type Item = {
  name: string;
  description?: string;
  type: string;
};

type SelectProps = {
  options: Item[];
  onSelectedChange: (selectedItem: string) => void;
};

const chakraStyles: StylesConfig<
  { label: string; value: string; description: string; type: string },
  false
> = {
  menu: (provided) => ({
    ...provided,
    margin: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    background: "var(--chakra-colors-light-emphasis)",
    borderRadius: "none",
    padding: 0,
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    background: isFocused
      ? "var(--chakra-colors-light-surface)"
      : "var(--chakra-colors-light-emphasis)",
    color: "var(--chakra-colors-light-background)",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",
    _hover: {
      background: "var(--chakra-colors-light-surface)",
    },
  }),
  control: (provided, { isFocused }) => {
    const borderColor = isFocused ? "var(--chakra-colors-light-surface)" : "";
    return {
      background: "var(--chakra-colors-light-background)",
      border: "1px solid var(--chakra-colors-light-emphasis)",
      borderColor,
      borderRadius: "4px",
      color: "var(--chakra-colors-light-emphasis)",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "28px",
    };
  },
  valueContainer: (provided) => ({
    ...provided,
    paddingX: "14px",
    paddingY: "4px",
  }),
};

const Option = ({
  ...props
}: OptionProps<
  { label: string; value: string; description: string; type: string },
  false
>) => {
  const { description, label } = props.data;

  if (description.length > 0) {
    return (
      <components.Option {...props}>
        <Flex alignItems="center" justifyContent="space-between">
          {label}
          <Tooltip label={description} placement="left" hasArrow>
            <InfoOutlineIcon mr={3} />
          </Tooltip>
        </Flex>
      </components.Option>
    );
  }

  return <components.Option {...props} />;
};

const ReactSelect = ({ options, onSelectedChange }: SelectProps) => {
  const handleOnChange = (
    newValue: {
      value: string;
      label: string;
      description: string;
      type: string;
    } | null
  ) => {
    if (newValue !== null) onSelectedChange(`${newValue.value}`);
  };

  const formattedOptions = options.map((option) => {
    return {
      label: option.name,
      value: option.name,
      description: option?.description ? option.description : "",
      type: option.type,
    };
  });

  return (
    <Select<
      { label: string; value: string; description: string; type: string },
      false
    >
      styles={chakraStyles}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Option,
      }}
      id="select"
      onChange={handleOnChange}
      options={formattedOptions}
      placeholder="Select a value..."
    />
  );
};

export default ReactSelect;
