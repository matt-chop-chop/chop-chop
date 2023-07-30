import { useFilteredRecipes } from "@/hooks";
import {
  EmptyState,
  ErrorCard,
  LoadingCard,
  RecipeListingGrid,
} from "@/Components";
import React from "react";

export type FilterResultsProps = {
  area: string;
  category: string;
  ingredient: string;
};

const FilterResults = ({ area, category, ingredient }: FilterResultsProps) => {
  const { recipes, loading, error } = useFilteredRecipes(
    area,
    category,
    ingredient
  );

  const showRandom =
    area === "None" && category === "None" && ingredient === "None";

  if (loading) {
    return <LoadingCard />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!showRandom && recipes.length === 0) {
    return <EmptyState />;
  }

  return <RecipeListingGrid recipes={recipes} showRandom={showRandom} />;
};

export default FilterResults;
