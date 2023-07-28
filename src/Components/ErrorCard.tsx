import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

type ErrorCardProps = {
  error: Error;
};

const ErrorCard = ({ error }: ErrorCardProps) => {
  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-surface)"
      border="2px solid var(--chakra-colors-light-emphasis)"
      borderRadius={4}
      flexDirection="column"
      justifyContent="center"
      minHeight="250px"
      p={4}
      width="100%"
    >
      <Text textAlign="center" variant="body-bold">
        <InfoOutlineIcon mr={2} />
        This recipe could not be loaded due to the following error: &quot;
        {error.message}&quot;
      </Text>
      <Text mt={2} variant="body">
        Try refreshing the page
      </Text>
      <Link as={NextLink} href="/" mt={2}>
        <Button variant="primary">Refresh</Button>
      </Link>
    </Flex>
  );
};

export default ErrorCard;
