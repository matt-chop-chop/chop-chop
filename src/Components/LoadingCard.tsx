import { CircularProgress, Flex } from "@chakra-ui/react";

const LoadingCard = () => {
  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-background)"
      border="2px solid var(--chakra-colors-light-emphasis)"
      borderRadius={4}
      height="100%"
      justifyContent="center"
      minHeight="250px"
      p={4}
      width="100%"
    >
      <CircularProgress
        color="var(--chakra-colors-light-surface)"
        isIndeterminate
        size={100}
      />
    </Flex>
  );
};

export default LoadingCard;
