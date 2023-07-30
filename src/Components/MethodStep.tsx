import { Checkbox, Flex, Text } from "@chakra-ui/react";

type MethodStepProps = {
  step: string;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const MethodStep = ({ step, checked, setChecked }: MethodStepProps) => {
  return (
    <Flex
      background="var(--chakra-colors-light-background)"
      border="2px solid var(--chakra-colors-light-text)"
      borderRadius={8}
      mt={4}
      onClick={(e) => {
        e.preventDefault();
        setChecked(!checked);
      }}
      p={4}
      transition="transform 250ms ease-out"
      _hover={{
        cursor: "pointer",
        transition: "transform 250ms ease-in",
        transform: "scale(1.01)",
      }}
    >
      <Checkbox
        isChecked={checked}
        mr={4}
        onClick={() => {
          setChecked(!checked);
        }}
      />
      <Text variant="body-large">{step}</Text>
    </Flex>
  );
};

export default MethodStep;
