import { useRecipe } from "@/hooks";
import { ErrorCard, LoadingCard, RecipeListing } from "@/Components";
import React from "react";

export type RecipeListingFromDataProps = {
  id: string;
};

const RecipeListingFromData = ({ id }: RecipeListingFromDataProps) => {
  const { recipe, loading, error } = useRecipe(id);

  if (loading) {
    return <LoadingCard />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!recipe) {
    return <ErrorCard error={new Error("Recipe could not be found")} />;
  }

  return <RecipeListing recipe={recipe} />;
};

export default RecipeListingFromData;
