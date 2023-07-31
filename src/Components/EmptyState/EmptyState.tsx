import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const EmptyState = () => {
  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-background)"
      border="2px solid var(--chakra-colors-light-text)"
      borderRadius={4}
      flexDirection="column"
      justifyContent="center"
      minHeight="250px"
      p={4}
      width="100%"
    >
      <Text textAlign="center" variant="body-bold">
        No matching recipes found
      </Text>
      <Text mt={2} variant="body">
        Try updating the selected parameters
      </Text>
    </Flex>
  );
};

export default EmptyState;
