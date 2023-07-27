import React from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { Logo } from "@/Components";

export const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <Flex
      alignItems={["center", "center", "start"]}
      flexDirection="column"
      textAlign={["center", "center", "left"]}
      p={4}
    >
      <Image alt="Chop Chop logo" height="64px" src="/images/logo.png" />
      <Text variant="body-small" mt={4} width={["80%", "80%", "40%"]}>
        Chop Chop is a site designed to allow you to quickly and easily make
        restaurant-quality dishes with what you currently have in your cupboard.
      </Text>
      <Text variant="body-small" mt={4}>
        © Chop Chop {currentYear}
      </Text>
    </Flex>
  );
};

export default Footer;
