import { ErrorCard, LoadingCard, MethodStep, Toast } from "@/Components";
import { useRecipe } from "@/hooks";
import { DownloadIcon, EmailIcon, TimeIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Tag,
  Text,
  ToastProps,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NextLink from "next/link";
import { fromatCookingTime } from "@/utils";

const parseRecipe = (recipe: Recipe): string => {
  let response =
    recipe.name +
    "\n" +
    `Cooking Time: ${recipe.time}` +
    "\n" +
    `Ingredient Count: ${recipe.ingredientCount}` +
    "\n" +
    `Meal Type: ${recipe.category}` +
    "\n" +
    `Place of Origin: ${recipe.area}` +
    "\n" +
    "Tags:";
  recipe.tags.map((tag) => response + " " + tag);
  response += "\n" + "Ingredients:";
  recipe.ingredients.map(
    (ingredient) =>
      (response += "\n" + `• ${ingredient.measurement} ${ingredient.name}`)
  );
  response += "\n" + "Method:";
  recipe.instructions.map(
    (instruction) => (response += "\n" + `- ${instruction}`)
  );
  response +=
    "\n" +
    `Youtube Tutorial: ${recipe.youtube}` +
    "\n" +
    `Recipe Source: ${recipe.source}`;
  return response;
};

const download = (filename: string, recipe: Recipe) => {
  const link = document.createElement("a");
  link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(parseRecipe(recipe))
  );
  link.setAttribute("download", filename);

  link.style.display = "none";
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const Recipe = () => {
  const { recipe, loading, error } = useRecipe();
  const [checkboxes, setCheckboxes] = useState<boolean[]>([]);

  const toast = useToast();

  useEffect(() => {
    if (!loading && recipe && checkboxes.length === 0) {
      setCheckboxes(new Array(recipe.instructions.length).fill(false));
    }
  }, [checkboxes, loading, recipe]);

  if (loading) {
    return <LoadingCard />;
  }

  if (error) {
    return <ErrorCard error={error} />;
  }

  if (!recipe) {
    return <ErrorCard error={new Error("Recipe could not be found")} />;
  }

  const checkRecipeComplete = (updateCheckboxes: boolean[]) => {
    if (
      updateCheckboxes.every((checkbox) => checkbox === true) &&
      updateCheckboxes.length > 0
    ) {
      toast({
        status: "success",
        isClosable: true,
        position: "top-right",
        render: (props: ToastProps) => (
          <Toast
            onClose={props.onClose}
            text="Congratulations, you completed the recipe! Enjoy!"
          />
        ),
      });
    }
  };

  const updateCheckboxes = (checked: boolean, index: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox, i) => {
      if (i === index) return checked;
      else return checkbox;
    });
    setCheckboxes(updatedCheckboxes);

    checkRecipeComplete(updatedCheckboxes);
  };

  return (
    <Flex flexDirection="column">
      <Flex
        borderBottom="2px solid var(--chakra-colors-light-emphasis)"
        flexDirection="column"
        p={4}
      >
        {recipe?.thumbnail ? (
          <Image
            alt="a recipe listing image"
            maxHeight={["200px", "300px", "400px"]}
            objectFit="cover"
            src={recipe.image}
            width="100%"
          />
        ) : (
          <Flex
            alignItems="center"
            background="var(--chakra-colors-light-background)"
            height={["200px", "300px", "400px"]}
            justifyContent="center"
            objectFit="cover"
            p={1}
            width="100%"
          >
            <Image alt="Chop Chop Logo" height="75%" src="/images/logo.png" />
          </Flex>
        )}
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          <Heading
            as="h1"
            textDecoration="underline"
            mt={6}
            variant="heading-large"
          >
            {recipe.name}
          </Heading>
          <DownloadIcon
            boxSize={5}
            cursor="pointer"
            onClick={() => download(`${recipe.name}.txt`, recipe)}
          />
        </Flex>

        <Grid
          columnGap={[8, 8, 6]}
          gridAutoRows="1fr"
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          mt={8}
          rowGap={8}
        >
          <Flex flexDirection="column">
            <Flex alignItems="center">
              <Text variant="body-bold">Cooking Time</Text> <TimeIcon ml={2} />
            </Flex>
            <Text mt={1} variant="body">
              {fromatCookingTime(recipe.time)}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text variant="body-bold">Ingredient Count</Text>
            <Text mt={1} variant="body">
              {recipe.ingredientCount}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text variant="body-bold">Meal Type</Text>
            <Text mt={1} variant="body">
              {recipe.category}
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text variant="body-bold">Place of Origin</Text>
            <Text mt={1} variant="body">
              {recipe.area}
            </Text>
          </Flex>
        </Grid>
        {recipe.tags.length > 0 && (
          <Flex mt={1}>
            {recipe.tags.map((tag: string, index: number) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Flex>
        )}
      </Flex>
      <Flex flexDirection="column" p={4}>
        <Heading as="h2" mb={4} mt={6} variant="heading-medium">
          Ingredients
        </Heading>
        {recipe.ingredients.map((ingredient, index) => (
          <Flex key={index} width="100%">
            <Text ml={[4, 6, 8]} mt={2} variant="body-large">
              • {ingredient.measurement} {ingredient.name}
            </Text>
            {ingredient.image && (
              <Image
                alt="an ingredient image"
                maxHeight="50px"
                ml={4}
                src={ingredient.image}
              />
            )}
          </Flex>
        ))}
        <Heading as="h2" mb={4} mt={6} variant="heading-medium">
          Method
        </Heading>
        {recipe.instructions.map((instruction, index) => (
          <MethodStep
            key={index}
            step={instruction}
            checked={checkboxes[index]}
            setChecked={(checked) => updateCheckboxes(checked, index)}
          />
        ))}
        {recipe.youtube.length > 0 && (
          <Box border="1px solid var(--chakra-colors-light-emphasis)" mt="80px">
            <AspectRatio maxW="100%" ratio={16 / 9}>
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                src={recipe.youtube.replace("watch?v=", "embed/")}
                title="YouTube video player"
              ></iframe>
            </AspectRatio>
          </Box>
        )}
        <Link as={NextLink} href={recipe.source} isExternal mt={4}>
          Click to see the original recipe source
        </Link>
      </Flex>
    </Flex>
  );
};

export default Recipe;
