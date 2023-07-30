import { Flex, Tag } from "@chakra-ui/react";

type RecipeTagsProps = {
  tags: string[];
};

const RecipeTags = ({ tags }: RecipeTagsProps) => {
  if (tags.length === 0) return null;

  return (
    <Flex flexWrap="wrap" mt={1}>
      {tags.map((tag: string, index: number) => {
        if (tag.length > 0) {
          return <Tag key={index}>{tag}</Tag>;
        }
        return null;
      })}
    </Flex>
  );
};

export default RecipeTags;
