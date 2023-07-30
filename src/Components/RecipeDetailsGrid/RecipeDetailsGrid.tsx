import { fromatCookingTime } from "@/utils";
import { TimeIcon } from "@chakra-ui/icons";
import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";

export type RecipeDetailsGridProps = {
  area: string;
  category: string;
  ingredientCount: number;
  time: number;
  gridTemplateColumns?: string[];
};

const RecipeDetailsGrid = ({
  area,
  category,
  ingredientCount,
  time,
  gridTemplateColumns = ["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
}: RecipeDetailsGridProps) => {
  return (
    <Grid
      columnGap={[8, 8, 6]}
      gridAutoRows="1fr"
      gridTemplateColumns={gridTemplateColumns}
      mt={8}
      rowGap={8}
    >
      <Flex flexDirection="column">
        <Flex alignItems="center">
          <Text variant="body-bold">Cooking Time</Text>
          <TimeIcon boxSize={[3, 4, 4]} ml={[1, 2, 2]} />
        </Flex>
        <Text mt={1} variant="body">
          {fromatCookingTime(time)}
        </Text>
      </Flex>
      <Flex flexDirection="column">
        <Text variant="body-bold">Ingredient Count</Text>
        <Text mt={1} variant="body">
          {ingredientCount}
        </Text>
      </Flex>
      <Flex flexDirection="column">
        <Text variant="body-bold">Meal Type</Text>
        <Text mt={1} variant="body">
          {category}
        </Text>
      </Flex>
      <Flex flexDirection="column">
        <Text variant="body-bold">Place of Origin</Text>
        <Text mt={1} variant="body">
          {area}
        </Text>
      </Flex>
    </Grid>
  );
};

export default RecipeDetailsGrid;
