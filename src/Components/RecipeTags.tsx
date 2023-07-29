import { Flex, Tag } from "@chakra-ui/react";

type RecipeTagsProps = {
  tags: string[];
};

const RecipeTags = ({ tags }: RecipeTagsProps) => {
  if (tags.length === 0) return null;

  return (
    <Flex mt={1}>
      {tags.map((tag: string, index: number) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </Flex>
  );
};

export default RecipeTags;
