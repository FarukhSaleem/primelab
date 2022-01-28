import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useStyles from "./Login.style";
import Button from "../../components/core/Button/Button";
import TextField from "../../components/core/TextField/TextField";
import { fetchUser } from "../../store/user/user.actions";
import { getUserSelector } from "../../store/user/user.selector";
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
  ErrorMessage,
  FormikFormProps,
  FormikProps
} from "formik";
import { FormSchema } from "./Login.types";
import { validationSchema } from "./Login.validation";
import { UserType } from "../../store/user/user.types";

export function LogIn() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(getUserSelector);
  const initialValue: FormSchema = {
    email: "",
    password: "",
  };

  const handleSubmit = (
    values: UserType,
    props: any
  ) => {
    console.log("propssssss", props)
    dispatch(fetchUser(values));
    props.resetForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box className={classes.box}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({errors, touched})=> (
          <Form data-testid="login-form">
            <Field
              as={TextField}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              helperText={<ErrorMessage name="email" />}
              error={errors.email && touched.email ? true : false}
              data-testid="email"
              data-cy="login-input-email"
            />
            <Field
              as={TextField}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={<ErrorMessage name="password" />}
              error={errors.password && touched.password ? true : false}
              data-testid="password"
              data-cy="login-input-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              data-testid="remember"
            />
            <Button
              label="Log In"
              type="submit"
              fullWidth
              variant="contained"
              data-testid="submitbutton"
              data-cy="login-submit"
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
