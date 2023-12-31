import { Container, Flex } from "@chakra-ui/react";
import { Header, Footer } from "@/Components";
import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      flexDirection="column"
      height="100vh"
      justifyContent="space-between"
      width="100%"
    >
      <Flex flexDirection="column" width="100%">
        <Container centerContent maxWidth="100%" p={0} width="100%">
          <Header />
        </Container>

        <Container
          centerContent
          maxWidth="1320px"
          py={["108px", "108px", "140px"]}
        >
          <Flex flexDirection="column" width="100%">
            {children}
          </Flex>
        </Container>
      </Flex>

      <Container centerContent maxWidth="1320px" p={0} width="100%">
        <Footer />
      </Container>
    </Flex>
  );
};

export default Layout;
