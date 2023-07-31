import { CircularProgress, Flex } from "@chakra-ui/react";
import React from "react";

export type LoadingCardProps = {
  showBorder?: boolean;
  mt?: string;
};

const LoadingCard = ({ showBorder = true, mt = "0px" }: LoadingCardProps) => {
  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-background)"
      border={showBorder ? "2px solid var(--chakra-colors-light-text)" : ""}
      borderRadius={4}
      height="100%"
      justifyContent="center"
      minHeight="250px"
      mt={mt}
      p={4}
      width="100%"
    >
      <CircularProgress
        color="var(--chakra-colors-light-emphasis)"
        isIndeterminate
        size={100}
      />
    </Flex>
  );
};

export default LoadingCard;
