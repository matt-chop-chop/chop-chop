import { Container, Flex, Link, Text } from "@chakra-ui/react";
import { Logo } from "@/Components";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const isHomeActive = pathname === "/";

  return (
    <Flex
      alignItems="center"
      background="var(--chakra-colors-light-emphasis)"
      borderBottom="1px solid var(--chakra-colors-light-text)"
      position="fixed"
      px={4}
      py={2}
      width="100%"
      zIndex={1000}
    >
      <Container maxWidth="1320px" width="100%">
        <Logo />
        {!isHomeActive && (
          <Link
            as={NextLink}
            href="/"
            ml={6}
            transition="transform 250ms ease-out"
            _hover={{
              transition: "transform 250ms ease-in",
              transform: "scale(1.1)",
            }}
          >
            <Text variant="body-large">Home</Text>
          </Link>
        )}
      </Container>
    </Flex>
  );
};

export default Header;
