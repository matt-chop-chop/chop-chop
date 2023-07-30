import { Box, Heading, ToastProps, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { MethodStep, Toast } from "@/Components";
import React from "react";

export type MethodProps = {
  instructions: string[];
};

const Method = ({ instructions }: MethodProps) => {
  const [checkboxes, setCheckboxes] = React.useState<boolean[]>(
    new Array(instructions.length).fill(false)
  );
  const toast = useToast();

  useEffect(() => {
    if (checkboxes.every((checkbox) => checkbox === true)) {
      toast({
        status: "success",
        isClosable: true,
        position: "top-right",
        render: (props: ToastProps) => (
          <Toast
            onClose={props.onClose}
            text="Congratulations, you completed the recipe! Bon Appétit!"
          />
        ),
      });
    }
  }, [checkboxes, toast]);

  const updateCheckboxes = (checked: boolean, index: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox, i) => {
      if (i === index) {
        return checked;
      } else {
        return checkbox;
      }
    });

    setCheckboxes(updatedCheckboxes);
  };

  if (!instructions.length) return null;

  return (
    <Box my={5}>
      <Heading as="h2" mb={4} variant="heading-medium">
        Method
      </Heading>
      {instructions.map((instruction, index) => (
        <MethodStep
          key={index}
          step={instruction}
          checked={checkboxes[index]}
          setChecked={(checked) => updateCheckboxes(checked, index)}
        />
      ))}
    </Box>
  );
};

export default Method;
