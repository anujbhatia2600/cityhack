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
              marginBottom: 20,
              backgroundColor: 'green',
              borderRadius: 15,
            }}
          />
          <h1 style={{margin: "0 auto",textAlign:"center",marginTop: 20,marginBottom: 20,color:"",fontFamily:"Roboto"}}>Welcome to Platform</h1>


          <Button
            color="primary"
                // disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            style={{ marginBottom: 15,
              borderRadius: 10,
            fontSize: 20, height: 50}}
            href="/login"
          >
            Login
          </Button>
          <h3 style={{margin: "0 auto",textAlign:"center",marginTop: 5,marginBottom: 20,color:"",fontFamily:"Roboto"}}>New to this platform? Register Now</h3>
          <Button
            color="primary"
                // disabled={isSubmitting}
            fullWidth
            size="middle"
            type="submit"
            variant="contained"
            style={{ marginBottom: 15,
              borderRadius: 10,
              fontSize: 20, height: 50}}
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
