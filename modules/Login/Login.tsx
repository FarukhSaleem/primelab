import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "./Login.style";
import Button from "../../components/core/Button/Button";

export function Login() {
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [isActiveEmail, setIsActiveEmail] = React.useState<boolean>(true);
  const [isActivePhone, setIsActivePhone] = React.useState<boolean>(false);
  const [disabled, setDisabled] = React.useState<boolean>(true);
  const [placeholer, setPlaceHolder] =
    React.useState<string>("johndoe@gmail.com");
  const handleChange = (e: any) => {
    if (isActiveEmail === true) {
      setEmail(e.target.value);
    } else if (isActivePhone === true) {
      setPhone(e.target.value);
    }
    if (!e.target.value) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  };
  const handleButtonClick = (name: string) => {
    switch (name) {
      case "email":
        setIsActivePhone(false);
        setIsActiveEmail(true);
        setPlaceHolder("johndoe@gmail.com");
        setPhone("");
        setDisabled(true);
        break;
      case "phone":
        setIsActivePhone(true);
        setIsActiveEmail(false);
        setEmail("");
        setPlaceHolder("Ex (337) 378 8383");
        setDisabled(true);
        break;
      default:
        break;
    }
  };
  const handleContinue = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
