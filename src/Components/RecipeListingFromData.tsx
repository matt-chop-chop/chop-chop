import { useRecipe } from "@/hooks";
import { ErrorCard, LoadingCard, RecipeListing } from "@/Components";

type RecipeListingProps = {
  id: string;
};

const RecipeListingFromData = ({ id }: RecipeListingProps) => {
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
