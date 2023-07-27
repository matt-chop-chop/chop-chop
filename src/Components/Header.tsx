import { Flex } from "@chakra-ui/react";
import { Logo } from "@/Components";

export const Header = () => {
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
    </Flex>
  );
};

export default Header;
