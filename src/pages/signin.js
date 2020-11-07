import { Formik } from "formik";
import {connect} from "react-redux";

// components

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// styles

import styles from "../styles/Signin.module.scss";

// validationSchema

import { validate } from "../validation/signin"

// actions

import { loginRequest } from "../store/actions/authActions";


function Signin(props) {

  const submitHandler = values => props.loginRequest(values);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
              remember: false
            }}
            onSubmit={submitHandler}
            validate={validate}
            validateOnChange={false}
          >
            {({
                values,
                errors,
                handleSubmit,
                handleChange
            }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    value={values.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    value={values.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={
                      <Checkbox
                          checked={values.remember}
                          onChange={handleChange}
                          name="remember"
                          color="primary"
                      />
                    }
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                  Sign In
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </Container>
  );
}

export default connect(null, { loginRequest })(Signin);
