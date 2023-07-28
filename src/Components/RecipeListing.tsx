import { useRandomRecipe } from "@/hooks";
import { Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

type RecipeListingProps = {
  recipe: Recipe;
};

const RecipeListing = ({ recipe }: RecipeListingProps) => {
  const onClick = () => {};

  return (
    <Flex
      background="var(--chakra-colors-light-surface)"
      border="2px solid var(--chakra-colors-light-emphasis)"
      borderRadius={4}
      flexDirection="column"
      minHeight="250px"
      onClick={onClick}
      p={4}
      transition="transform 250ms ease-out"
      width="100%"
      _hover={{
        border: "2px solid var(--chakra-colors-light-subtle)",
        cursor: "pointer",
        transition: "transform 250ms ease-in",
        transform: "scale(1.01)",
      }}
    >
      {recipe?.thumbnail ? (
        <Image
          alt="a recipe listing thumbnail image"
          height="200px"
          objectFit="cover"
          src={recipe.thumbnail}
          width="100%"
        />
      ) : (
        <Flex
          alignItems="center"
          background="var(--chakra-colors-light-background)"
          height="200px"
          justifyContent="center"
          objectFit="cover"
          p={1}
          width="100%"
        >
          <Image
            alt="Chop Chop Logo"
            height="75%"
            src="/images/logo.png"
            width={["60%", "70%", "55%"]}
          />
        </Flex>
      )}
      <Heading
        as="h3"
        textDecoration="underline"
        mt={4}
        variant="heading-small"
      >
        {recipe.name}
      </Heading>
      <Flex justifyContent="space-between" mt={4}>
        <Flex flexDirection="column">
          <Flex alignItems="center">
            <Text variant="body-bold">Cooking Time</Text> <TimeIcon ml={2} />
          </Flex>

          <Text mt={1} variant="body">
            {recipe.time} minutes
          </Text>
          <Text mt={3} variant="body-bold">
            Ingredient Count
          </Text>
          <Text mt={1} variant="body">
            {recipe.ingredientCount}
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text variant="body-bold">Meal Type</Text>
          <Text mt={1} variant="body">
            {recipe.category}
          </Text>
          <Text mt={3} variant="body-bold">
            Place of Origin
          </Text>
          <Text mt={1} variant="body">
            {recipe.area}
          </Text>
        </Flex>
      </Flex>
      {recipe.tags.length > 0 && (
        <Flex mt={1}>
          {recipe.tags.map((tag: string, index: number) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default RecipeListing;