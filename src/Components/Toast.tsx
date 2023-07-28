import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export interface SuccessToastProps {
  text: string;
  onClose?: () => void;
  background?: string;
}
const Toast = ({
  text,
  onClose,
  background = "var(--chakra-colors-light-success)",
}: SuccessToastProps) => {
  return (
    <Flex
      alignItems="center"
      background={background}
      border="none"
      borderRadius={4}
      justifyContent="space-between"
      pl={5}
      pr={2}
      py={2}
      width="260px"
    >
      <Text color="var(--chakra-colors-light-background)" variant="body">
        {text}
      </Text>
      {onClose && (
        <CloseIcon
          boxSize={3}
          color="var(--chakra-colors-light-background)"
          cursor="pointer"
          ml={5}
          onClick={onClose}
        />
      )}
    </Flex>
  );
};

export default Toast;
