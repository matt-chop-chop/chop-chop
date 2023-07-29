import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

type IngredientListProps = {
  ingredients: RecipeIngredient[];
};

const IngredientList = ({ ingredients }: IngredientListProps) => {
  if (!ingredients.length) return null;

  return (
    <Box my={5}>
      <Heading as="h2" mb={4} variant="heading-medium">
        Ingredients
      </Heading>
      {ingredients.map((ingredient, index) => (
        <Flex key={index} width="100%">
          <Text ml={[4, 6, 8]} mt={2} variant="body-large">
            • {ingredient.measurement} {ingredient.name}
          </Text>
          {ingredient.image && (
            <Image
              alt="An ingredient image"
              maxHeight="50px"
              ml={4}
              src={ingredient.image}
            />
          )}
        </Flex>
      ))}
    </Box>
  );
};

export default IngredientList;
