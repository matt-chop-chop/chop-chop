import { Hero } from "@/Components";
import { siteDescription } from "@/constants";

const Home = () => {
  return <Hero title="Welcome to Chop Chop!" message={siteDescription} />;
};

export default Home;
