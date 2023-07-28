import { Hero, RecipeListingGrid } from "@/Components";
import { siteDescription } from "@/constants";
import { useRandomRecipe } from "@/hooks";

const Home = () => {
  return (
    <>
      <Hero title="Welcome to Chop Chop!" message={siteDescription} />
      <RecipeListingGrid />
    </>
  );
};

export default Home;
