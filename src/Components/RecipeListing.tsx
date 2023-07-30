import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { RecipeDetailsGrid, RecipeImage, RecipeTags } from ".";

type RecipeListingProps = {
  recipe: Recipe;
};

const RecipeListing = ({ recipe }: RecipeListingProps) => {
  return (
    <Link
      as={NextLink}
      href={`/recipe/${recipe.id}`}
      _hover={{ textDecoration: "none" }}
    >
      <Flex
        background="var(--chakra-colors-light-background)"
        border="2px solid var(--chakra-colors-light-text)"
        borderRadius={4}
        flexDirection="column"
        height="100%"
        justifyContent="space-between"
        minHeight="300px"
        p={4}
        transition="transform 250ms ease-out"
        width="100%"
        _hover={{
          border: "2px solid var(--chakra-colors-light-emphasis)",
          cursor: "pointer",
          transition: "transform 250ms ease-in",
          transform: "scale(1.01)",
        }}
      >
        <Box>
          <RecipeImage
            image={recipe.thumbnail}
            maxHeight={["200px", "200px", "200px"]}
            defaultLogoWidth={["60%", "70%", "55%"]}
          />
          <Heading
            as="h3"
            textDecoration="underline"
            mt={4}
            variant="heading-small"
          >
            {recipe.name}
          </Heading>
          <RecipeDetailsGrid
            area={recipe.area}
            category={recipe.category}
            ingredientCount={recipe.ingredientCount}
            time={recipe.time}
            gridTemplateColumns={[
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
          />
        </Box>
        <RecipeTags tags={recipe.tags} />
      </Flex>
    </Link>
  );
};

export default RecipeListing;
