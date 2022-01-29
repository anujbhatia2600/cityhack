import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import './TextConverter.css'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Select,
  MenuItem,
  Grid,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import { FileUploader } from 'react-drag-drop-files';
import BasicModal from '../components/Modal';
import Spinner from '../components/Spinner';

const fileTypes = ["JSON", "CSV"];

const TextConverter = () => {
  const [file, setFile] = useState(null);
  const [isModal, setIsModal] = useState(null);
  const handleChange = file => {
    // setIsModal(true);
    setloading(true);
    setTimeout(() => {
      setFile(file);
      console.log(file);
    }, 3000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [loading, setloading] = useState(false);
  return (
    <>
      <Helmet>
        <title>Text Converter</title>
      </Helmet>
      {(!file) ?
        <Box marginTop="250px" marginLeft="400px" align="center">
          {loading && <Spinner />}
          <FileUploader
            style={{ height: "200px" }}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </Box> :
        isModal ? <Dialog
          open={isModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Use Google's location service?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog> :
          <Grid container spacing={10}>
            <Grid item md={6} height="100%">
              <img style={{ width: '100%', marginTop: '20px', marginLeft: '30px' }} src={URL.createObjectURL(file)} />
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'center'
                }}
              >
                <Container maxWidth="sm" style={{ overflow: 'auto', marginTop: '20px' }}>
                  <Formik
                    initialValues={{
                      email: 'banasifarmers@gmail.com',
                      orgName: 'Banasi Formers Association',
                      socMed: 'N/A',
                      country: 'Philippines',
                      address: '11 Victoneta Avenue, Malabon',
                      association: true,
                      NGO: false,
                      foundation: false,
                      networkNGO: false,
                      contactNumber: '+63 2234567',
                      web: 'banasifarmers.ph',
                      dateFounded: '02.10.2017',
                      member: '15.06.2019',
                      orgStrength: false,
                      par: false,
                      instiLink: true,
                      agriProduct: true,
                    }}
                    validationSchema={
                      Yup.object().shape({
                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                        orgName: Yup.string().max(255).required('Organization name is required'),
                        country: Yup.string().max(255).required('Country is required'),
                        address: Yup.string().max(255).required('address is required'),
                      })
                    }
                    onSubmit={(values) => {
                      console.log(values);
                      navigate('/app/dashboard', { replace: true });
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            color="textPrimary"
                            variant="h2"
                            gutterBottom
                          >
                            Confirm details
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="body2"
                          >
                            Double check if there is any error in the conversion
                          </Typography>
                        </Box>
                        <Typography
                          color="textPrimary"
                          variant="h4"
                          gutterBottom
                        >
                          Organization
                        </Typography>
                        <TextField
                          error={Boolean(touched.orgName && errors.orgName)}
                          fullWidth
                          helperText={touched.orgName && errors.orgName}
                          label="Name of the organization"
                          margin="normal"
                          name="orgName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.orgName}
                          variant="outlined"
                        />
                        <Typography
                          color="textPrimary"
                          variant="h4"
                          gutterBottom
                        >
                          Country
                        </Typography>
                        <TextField
                          error={Boolean(touched.country && errors.country)}
                          fullWidth
                          helperText={touched.country && errors.country}
                          label="Country"
                          margin="normal"
                          name="country"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.country}
                          variant="outlined"
                        />
                        <Typography
                          color="textPrimary"
                          variant="h4"
                          gutterBottom
                        >
                          Main Office Address
                        </Typography>
                        <TextField
                          error={Boolean(touched.address && errors.address)}
                          fullWidth
                          helperText={touched.address && errors.address}
                          label="Address"
                          margin="normal"
                          name="address"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.address}
                          variant="outlined"
                        />
                        <Typography
                          color="textPrimary"
                          variant="h4"
                        >
                          Contacts
                        </Typography>
                        <TextField
                          error={Boolean(touched.contactNumber && errors.contactNumber)}
                          fullWidth
                          helperText={touched.contactNumber && errors.contactNumber}
                          label="Contact Number"
                          margin="normal"
                          name="contactNumber"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contactNumber}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          label="Email Address"
                          margin="normal"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.web && errors.web)}
                          fullWidth
                          helperText={touched.web && errors.web}
                          label="Website URL"
                          margin="normal"
                          name="web"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.web}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.socMed && errors.socMed)}
                          fullWidth
                          helperText={touched.socMed && errors.socMed}
                          label="Social media URL"
                          margin="normal"
                          name="socMed"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.socMed}
                          variant="outlined"
                        />
                        <Typography
                          color="textPrimary"
                          variant="h4"
                          gutterBottom
                        >
                          Legal Form
                        </Typography>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                            ml: -1
                          }}
                        >
                          <Checkbox
                            checked={values.association}
                            name="association"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Association
                          </Typography>
                          <Checkbox
                            checked={values.NGO}
                            name="NGO"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            NGO
                          </Typography>
                          <Checkbox
                            checked={values.foundation}
                            name="foundation"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Foundation
                          </Typography>
                          <Checkbox
                            checked={values.networkNGO}
                            name="networkNGO"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Network of NGOs
                          </Typography>
                        </Box>

                        <Typography
                          color="textPrimary"
                          variant="h4"
                          gutterBottom
                        >
                          Key Figures
                        </Typography>
                        <TextField
                          error={Boolean(touched.dateFounded && errors.dateFounded)}
                          fullWidth
                          helperText={touched.dateFounded && errors.dateFounded}
                          label="Date Founded"
                          margin="normal"
                          name="dateFounded"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.dateFounded}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.member && errors.member)}
                          fullWidth
                          helperText={touched.member && errors.member}
                          label="Member of AsiaDHRAA since"
                          margin="normal"
                          name="member"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.member}
                          variant="outlined"
                        />

                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                            ml: -1
                          }}
                        >
                          <Checkbox
                            checked={values.orgStrength}
                            name="Organizational Strengthening"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Organizational Strengthening
                          </Typography>
                          <Checkbox
                            checked={values.par}
                            name="par"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Policy, Advocacy, Research
                          </Typography>
                          <Checkbox
                            checked={values.instiLink}
                            name="instiLink"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Institutional Linkage
                          </Typography>
                          <Checkbox
                            checked={values.agriProduct}
                            name="agriProduct"
                            onChange={handleChange}
                          />
                          <Typography
                            color="textSecondary"
                            variant="body1"
                          >
                            Agricultural Production
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex',
                            ml: -1
                          }}
                        />
                        {Boolean(touched.policy && errors.policy) && (
                          <FormHelperText error>
                            {errors.policy}
                          </FormHelperText>
                        )}
                        <Box sx={{ py: 2 }}>
                          <BasicModal />
                        </Box>
                      </form>
                    )}
                  </Formik>
                </Container>
              </Box>
            </Grid>
          </Grid>}

    </>
  );
};

export default TextConverter;
