import { download } from "@/utils";
import { DownloadIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";
import { RecipeDetailsGrid, RecipeImage, RecipeTags } from "@/Components";

type RecipeHeaderProps = {
  recipe: Recipe;
};

const RecipeHeader = ({ recipe }: RecipeHeaderProps) => {
  return (
    <Flex
      borderBottom="2px solid var(--chakra-colors-light-emphasis)"
      flexDirection="column"
      p={4}
    >
      <RecipeImage image={recipe.image} />
      <Flex alignItems="center" justifyContent="space-between" width="100%">
        <Heading
          as="h1"
          mt={6}
          textDecoration="underline"
          variant="heading-large"
        >
          {recipe.name}
        </Heading>
        <DownloadIcon
          boxSize={5}
          cursor="pointer"
          onClick={() => download(recipe)}
          transition="transform 250ms ease-out"
          _hover={{
            transition: "transform 250ms ease-in",
            transform: "scale(1.5)",
          }}
        />
      </Flex>
      <RecipeDetailsGrid
        area={recipe.area}
        category={recipe.category}
        ingredientCount={recipe.ingredientCount}
        time={recipe.time}
      />
      <RecipeTags tags={recipe.tags} />
    </Flex>
  );
};

export default RecipeHeader;
