import { Flex, Image } from "@chakra-ui/react";
import React from "react";

export type RecipeImageProps = {
  image: string;
  maxHeight?: string[];
  defaultLogoWidth?: string[];
};

const RecipeImage = ({
  image,
  maxHeight = ["200px", "300px", "400px"],
  defaultLogoWidth = [],
}: RecipeImageProps) => {
  return (
    <Image
      alt="A recipe image"
      fallback={
        <Flex
          alignItems="center"
          background="var(--chakra-colors-light-background)"
          height={maxHeight}
          justifyContent="center"
          objectFit="cover"
          p={1}
          width="100%"
        >
          <Image
            alt="Chop Chop Logo"
            height="75%"
            src="/images/logo.png"
            width={defaultLogoWidth}
          />
        </Flex>
      }
      maxHeight={maxHeight}
      objectFit="cover"
      src={image}
      width="100%"
    />
  );
};

export default RecipeImage;
