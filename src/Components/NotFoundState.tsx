import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const NotFoundState = () => {
  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-background)"
      flexDirection="column"
      justifyContent="center"
      minHeight="250px"
      mt="100px"
      p={4}
      width="100%"
    >
      <Text textAlign="center" variant="body-bold">
        <InfoOutlineIcon mr={2} />
        This page could not be found. The URL entered did not match any pages on
        this site.
      </Text>
      <Text mt={2} variant="body">
        Adjust the URL entered or return to the homepage.
      </Text>
      <Link
        as={NextLink}
        href="/"
        mt={2}
        transition="transform 250ms ease-out"
        _hover={{
          transition: "transform 250ms ease-in",
          transform: "scale(1.1)",
        }}
      >
        <Button variant="primary">Home</Button>
      </Link>
    </Flex>
  );
};

export default NotFoundState;
