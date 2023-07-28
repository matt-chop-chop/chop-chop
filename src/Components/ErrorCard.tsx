import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useRouter } from "next/router";

type ErrorCardProps = {
  error: Error;
};

const ErrorCard = ({ error }: ErrorCardProps) => {
  const router = useRouter();
  const { pathname } = router;
  const id = router.query["id"];

  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-background)"
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
      <Link as={NextLink} href={pathname === "/" ? "/" : `${id}`} mt={2}>
        <Button variant="primary">Refresh</Button>
      </Link>
    </Flex>
  );
};

export default ErrorCard;
