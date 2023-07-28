import { Flex, Link, Text } from "@chakra-ui/react";
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
      background="var(--chakra-colors-light-surface)"
      borderBottom="1px solid var(--chakra-colors-light-emphasis)"
      position="fixed"
      px={4}
      py={2}
      width="100%"
      zIndex={1000}
    >
      <Logo />
      {!isHomeActive && (
        <Link as={NextLink} href="/" ml={6}>
          <Text variant="body-large">Home</Text>
        </Link>
      )}
    </Flex>
  );
};

export default Header;
