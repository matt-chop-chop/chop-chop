import Select from "react-select";
import { Option, styles } from "./custom";

type SelectItem = {
  name: string;
  description?: string;
};

type SelectProps = {
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
}: SelectProps) => {
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
