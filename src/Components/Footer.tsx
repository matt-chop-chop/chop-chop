import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { siteDescription } from "@/constants";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <Flex
      alignItems={["center", "center", "start"]}
      flexDirection="column"
      textAlign={["center", "center", "left"]}
      mt={8}
      p={4}
      width="100%"
    >
      <Image alt="Chop Chop logo" height="64px" src="/images/logo.png" />
      <Text variant="body-small" mt={4} width={["80%", "80%", "40%"]}>
        {siteDescription}
      </Text>
      <Text variant="body-small" mt={4}>
        © Chop Chop {currentYear}
      </Text>
    </Flex>
  );
};

export default Footer;
