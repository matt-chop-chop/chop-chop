import { styles } from "./style";
import React from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Flex, Tooltip } from "@chakra-ui/react";
import Select, { components, OptionProps } from "react-select";

const Option = ({ ...props }: OptionProps<SelectOption, false>) => {
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

export type SelectOption = {
  label: string;
  value: string;
  description?: string;
};

type SelectItem = {
  name: string;
  description?: string;
};

export type FilterSelectProps = {
  options: SelectItem[];
  onSelectedChange: (selectedItem: string) => void;
  id?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
};

const FilterSelect = ({
  options,
  onSelectedChange,
  id = "select",
  isDisabled = false,
  isLoading = false,
}: FilterSelectProps) => {
  const getFormattedOptions = (options: SelectItem[]): SelectOption[] => {
    return options.map((option) => {
      return {
        label: option.name,
        value: option.name,
        description: option?.description,
      };
    });
  };

  const handleOnChange = (newValue: SelectOption | null) => {
    if (newValue !== null) onSelectedChange(newValue.value);
  };

  return (
    <Select<SelectOption, false>
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Option,
      }}
      id={id}
      instanceId={id}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onChange={handleOnChange}
      options={getFormattedOptions(options)}
      placeholder="Select a value..."
      styles={styles}
    />
  );
};

export default FilterSelect;
