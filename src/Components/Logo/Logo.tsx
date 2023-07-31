import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Link } from "@chakra-ui/next-js";
import React from "react";

const Logo = () => {
  return (
    <Link as={NavLink} href="/" width="fit-content">
      <Image
        alt="Chop Chop logo"
        height="80px"
        src="/images/logo.png"
        transition="transform 250ms ease-out"
        _hover={{
          transition: "transform 250ms ease-in",
          transform: "scale(1.1)",
        }}
      />
    </Link>
  );
};

export default Logo;
