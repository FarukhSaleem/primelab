import React from "react";
import { Box } from "@mui/material";
import { ComponentMeta } from "@storybook/react";
import TextField from "./TextField";

export default {
  title: "Component/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <Box maxWidth="lg">
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof TextField>;
export const TextFieldWithLabel = ({
  label = "Test",
  name = "test",
}: {
  label: string;
  name: string;
}) => <TextField label={label} name={name} />;
