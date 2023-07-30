import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export type ToastProps = {
  text: string;
  onClose?: () => void;
  background?: string;
};

const Toast = ({
  text,
  onClose,
  background = "var(--chakra-colors-light-success)",
}: ToastProps) => {
  return (
    <Flex
      alignItems="center"
      background={background}
      border="none"
      borderRadius={4}
      justifyContent="space-between"
      px={5}
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
