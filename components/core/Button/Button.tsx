import React from "react";
import MaterialButton from "@mui/material/Button";
import { Props } from "./Button.type";
import useStyles from "./Button.style";

const Button = ({ label, ...restProps }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <MaterialButton className={classes.button} {...restProps}>
      {label}
    </MaterialButton>
  );
};
export default Button;
