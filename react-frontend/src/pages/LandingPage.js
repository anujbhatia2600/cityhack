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
        <title>Welcome to InvestoBit</title>
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
          <div style={{ backgroundColor: "#e9f0e9", borderRadius: 15, padding: "20px", boxShadow: "10px 5px #d0d9d1" }}>
            <Logo
              src="/static/AsiaDhraaLogo.png"
              height="80px"
              style={{
                display: 'block',
                margin: '0 auto',
                marginBottom: 20,
                borderRadius: 15,
              }}
            />
            <h1 style={{ margin: "0 auto", textAlign: "center", marginTop: 20, marginBottom: 20, color: "", fontFamily: "Roboto" }}>Welcome to InvestoBit</h1>


            <Button
              color="primary"
              // disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              style={{
                marginBottom: 15,
                borderRadius: 10,
                fontSize: 20, height: 50
              }}
              href="/login"
            >
              Login
            </Button>
            <h3 style={{ margin: "0 auto", textAlign: "center", marginTop: 5, marginBottom: 20, color: "", fontFamily: "Roboto" }}>New to InvestoBit? Register Now</h3>
            <Button
              color="primary"
              // disabled={isSubmitting}
              fullWidth
              size="middle"
              type="submit"
              variant="contained"
              style={{
                marginBottom: 15,
                borderRadius: 10,
                fontSize: 20, height: 50
              }}
              href="/register"
            >
              Register
            </Button>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
