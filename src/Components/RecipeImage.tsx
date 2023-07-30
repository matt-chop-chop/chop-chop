import { Box, Flex, Image } from "@chakra-ui/react";

type RecipeImageProps = {
  image: string;
  maxHeight?: string[];
  defaultLogoWidth?: string[];
};

const imageExists = (image: string): boolean => {
  var http = new XMLHttpRequest();

  http.open("HEAD", image, false);
  http.send();

  return http.status != 404;
};

const RecipeImage = ({
  image,
  maxHeight = ["200px", "300px", "400px"],
  defaultLogoWidth = [],
}: RecipeImageProps) => {
  return (
    <Box>
      {image.length !== 0 && imageExists(image) ? (
        <Image
          alt="A recipe image"
          maxHeight={maxHeight}
          objectFit="cover"
          src={image}
          width="100%"
        />
      ) : (
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
      )}
    </Box>
  );
};

export default RecipeImage;
