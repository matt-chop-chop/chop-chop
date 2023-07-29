import { ErrorCard, IngredientList, LoadingCard, Method } from "@/Components";
import { useRecipe } from "@/hooks";
import { AspectRatio, Box, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { RecipeHeader } from "@/Components";

const Recipe = () => {
  const { recipe, loading, error } = useRecipe();

  if (loading) {
    return <LoadingCard />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!recipe) {
    return <ErrorCard error={new Error("Recipe could not be found.")} />;
  }

  return (
    <Flex flexDirection="column">
      <RecipeHeader recipe={recipe} />
      <Flex flexDirection="column" p={4}>
        <IngredientList ingredients={recipe.ingredients} />
        <Method instructions={recipe.instructions} />
        {recipe.youtube.length > 0 && (
          <Box border="1px solid var(--chakra-colors-light-text)" mt="80px">
            <AspectRatio maxWidth="100%" ratio={16 / 9}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                src={recipe.youtube.replace("watch?v=", "embed/")}
                title={`${recipe.name} tutorial video`}
              />
            </AspectRatio>
          </Box>
        )}
        <Link
          as={NextLink}
          href={recipe.source}
          isExternal
          mt={8}
          width="fit-content"
          transition="transform 250ms ease-out"
          _hover={{
            transition: "transform 250ms ease-in",
            transform: "scale(1.1)",
          }}
        >
          <Text variant="body"> Click to see the original recipe source</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Recipe;
