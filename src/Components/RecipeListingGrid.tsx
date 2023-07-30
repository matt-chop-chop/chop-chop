import { Grid } from "@chakra-ui/react";
import { RandomRecipeListing, RecipeListingFromData } from "@/Components";

type RecipeListingGridProps = {
  numberOfListings?: number;
  recipes?: string[];
};

const RecipeListingGrid = ({
  numberOfListings = 12,
  recipes = [],
}: RecipeListingGridProps) => {
  console.log(recipes);
  const listings = Array.from(Array(numberOfListings).keys());

  return (
    <Grid
      columnGap={[0, 8, 6]}
      gridAutoRows="1fr"
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      mt={[6, 8, 8]}
      rowGap={[6, 8, 8]}
    >
      {listings.map((_, index) => {
        if (recipes.length > 0) {
          return <RecipeListingFromData id={recipes[index]} key={index} />;
        }

        return <RandomRecipeListing key={index} listingIndex={index} />;
      })}
    </Grid>
  );
};
export default RecipeListingGrid;
