import React from 'react';
import ReactDOM from 'react-dom';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import Logo from '../components/Logo';

const LandingPage = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  return (
    <>
      <Helmet>
        <title>Welcome to AsiaDHRRA-RPO</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Logo
            src="/static/AsiaDhraaLogo.png"
            height="80px"
            style={{
              display: 'block',
              margin: '0 auto',
              marginBottom: 40,
              backgroundColor: 'green',
              borderRadius: 15,
            }}
          />
          <Button
            color="primary"
                // disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            style={{ marginBottom: 15 }}
            href="/login"
          >
            Login
          </Button>
          <Button
            color="primary"
                // disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            href="/register"
          >
            Register
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
