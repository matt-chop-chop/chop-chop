import { Box, Flex, Image } from "@chakra-ui/react";

type RecipeImageProps = {
  image: string;
};

const RecipeImage = ({ image }: RecipeImageProps) => {
  return (
    <Box>
      {image.length !== 0 ? (
        <Image
          alt="A recipe image"
          maxHeight={["200px", "300px", "400px"]}
          objectFit="cover"
          src={image}
          width="100%"
        />
      ) : (
        <Flex
          alignItems="center"
          background="var(--chakra-colors-light-background)"
          height={["200px", "300px", "400px"]}
          justifyContent="center"
          objectFit="cover"
          p={1}
          width="100%"
        >
          <Image alt="Chop Chop Logo" height="75%" src="/images/logo.png" />
        </Flex>
      )}
    </Box>
  );
};

export default RecipeImage;
