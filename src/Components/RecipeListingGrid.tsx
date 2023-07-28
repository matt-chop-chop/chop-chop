import { Grid } from "@chakra-ui/react";
import { RandomRecipeListing } from "@/Components";

type RecipeListingGridProps = {
  numberOfListings?: number;
};

const RecipeListingGrid = ({
  numberOfListings = 12,
}: RecipeListingGridProps) => {
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
      {listings.map((_, index) => (
        <RandomRecipeListing key={index} listingIndex={index} />
      ))}
    </Grid>
  );
};
export default RecipeListingGrid;
