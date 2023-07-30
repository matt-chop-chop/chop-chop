import { Hero, FilterSelectForm, FilterResults } from "@/Components";
import { siteDescription } from "@/constants";
import { useAreas, useCategories, useIngredients } from "@/hooks";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  let {
    ingredients,
    loading: ingredientsLoading,
    error: ingredientsError,
  } = useIngredients();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const { areas, loading: areasLoading, error: areasError } = useAreas();

  const [area, setArea] = useState("None");
  const [ingredient, setIngredient] = useState("None");
  const [category, setCategory] = useState("None");

  return (
    <Box>
      <Hero title="Welcome to Chop Chop!" message={siteDescription} />
      <Flex flexDirection="column" mt="40px" mb="40px">
        <Heading as="h2" variant="heading-medium">
          What kind of recipe would you like to cook?
        </Heading>
        <FilterSelectForm
          error={ingredientsError}
          label="What would you like the main ingredient of your recipe to be?"
          id="select-ingredient"
          loading={ingredientsLoading}
          options={ingredients}
          setSelection={(ingredient) => setIngredient(ingredient)}
          errorMessage="Ingredients could not be loaded"
        />
        <FilterSelectForm
          error={categoriesError}
          label="What category of recipe would you like to cook?"
          id="select-category"
          loading={categoriesLoading}
          options={categories}
          setSelection={(category) => setCategory(category)}
          errorMessage="Categories could not be loaded"
        />
        <FilterSelectForm
          error={areasError}
          label="What area would you like your recipe to be from?"
          id="select-area"
          loading={areasLoading}
          options={areas}
          setSelection={(area) => setArea(area)}
          errorMessage="Areas could not be loaded"
        />
      </Flex>
      <FilterResults area={area} category={category} ingredient={ingredient} />
    </Box>
  );
};

export default Home;
