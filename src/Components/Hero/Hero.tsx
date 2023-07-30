import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export type HeroProps = {
  title: string;
  message: string;
};

const Hero = ({ title, message }: HeroProps) => {
  return (
    <Flex alignItems="center" flexDirection="column" textAlign="center">
      <Image alt="Chop Chop logo" height="128px" src="/images/logo.png" />
      <Heading
        as="h1"
        maxWidth={["none", "880px", "880px"]}
        mt={[3, 5, 5]}
        variant={["heading-medium", "heading-large", "heading-large"]}
      >
        {title}
      </Heading>
      <Text
        maxWidth={["none", "740px", "740px"]}
        mt={[3, 5, 5]}
        px={3}
        variant={["body", "body-large", "body-large"]}
      >
        {message}
      </Text>
    </Flex>
  );
};

export default Hero;
