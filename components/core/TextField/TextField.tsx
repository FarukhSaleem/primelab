import React from "react";
import MaterialTextField from "@mui/material/TextField";
import { Props } from "./TextField.type";
import useStyles from "./TextField.style";

const TextField = ({ label, id, name, ...restProps }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <MaterialTextField
      className={classes.textField}
      required
      fullWidth
      label={label}
      id={id}
      name={name}
      {...restProps}
    />
  );
};
export default TextField;
