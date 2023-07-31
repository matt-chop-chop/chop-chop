import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FilterSelect } from "@/Components";
import React from "react";

export type FilterSelectFormProps = {
  label: string;
  id: string;
  loading: boolean;
  options: (Ingredient | Category | Area)[];
  setSelection: (selection: string) => void;
  errorMessage: string;
  error?: Error;
};

const FilterSelectForm = ({
  label,
  id,
  loading,
  options,
  setSelection,
  errorMessage,
  error,
}: FilterSelectFormProps) => {
  return (
    <FormControl isInvalid={!!error} mt={5}>
      <FormLabel htmlFor={id} variant="body">
        {label}
      </FormLabel>
      <FilterSelect
        id={id}
        isDisabled={!!error}
        isLoading={loading}
        options={options}
        onSelectedChange={setSelection}
      />
      <FormErrorMessage>
        {errorMessage}
        {error?.message && `: ${error.message}`}
      </FormErrorMessage>
    </FormControl>
  );
};

export default FilterSelectForm;
