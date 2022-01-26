import { makeStyles } from '@material-ui/core/styles'
import "../styles/main.css";
import fetch from "node-fetch";
import "@storybook/addon-console";
import { withContexts } from "@storybook/addon-contexts/react";
import { addDecorator } from "@storybook/react";
import { contexts } from "./contexts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withContexts(contexts));