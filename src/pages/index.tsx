import {
  Hero,
  RecipeListingGrid,
  ReactSelect,
  RecipeListingGrid2,
} from "@/Components";
import { siteDescription } from "@/constants";
import { useAreas, useCategories, useIngredients } from "@/hooks";
import { Flex, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const { ingredients } = useIngredients();
  const { categories } = useCategories();
  const { areas } = useAreas();

  const [area, setArea] = useState("None");
  const [ingredient, setIngredient] = useState("None");
  const [category, setCategory] = useState("None");

  categories.unshift({ name: "None" });
  areas.unshift({ name: "None" });
  ingredients.unshift({ name: "None" });

  return (
    <>
      <Hero title="Welcome to Chop Chop!" message={siteDescription} />
      <Flex flexDirection="column" mt="40px" mb="40px">
        <Heading as="h2" variant="heading-medium">
          What kind of recipe would you like to cook?
        </Heading>
        <FormControl mt={5}>
          <FormLabel htmlFor="select" variant="body">
            What would you like the main ingredient of your recipe to be?
          </FormLabel>
          <ReactSelect
            options={ingredients.map((ingredient) => {
              return { ...ingredient, type: "i" };
            })}
            onSelectedChange={(ingredient) => setIngredient(ingredient)}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="select" variant="body">
            What category of recipe would you like to cook?
          </FormLabel>
          <ReactSelect
            options={categories.map((category) => {
              return { ...category, type: "c" };
            })}
            onSelectedChange={(category) => setCategory(category)}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="select" variant="body">
            What area would you like your recipe to be from?
          </FormLabel>
          <ReactSelect
            options={areas.map((area) => {
              return { ...area, type: "a" };
            })}
            onSelectedChange={(area) => setArea(area)}
          />
        </FormControl>
      </Flex>
      {category === "None" && area === "None" && ingredient === "None" ? (
        <RecipeListingGrid />
      ) : (
        <RecipeListingGrid2
          category={category}
          ingredient={ingredient}
          area={area}
        />
      )}
    </>
  );
};

export default Home;
