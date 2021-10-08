import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
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
  MenuItem
} from '@material-ui/core';


const TextConverter = () => {
    return (
        <>
        <Helmet>
          <title>Text Converter</title>
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
          <Container maxWidth="sm" style={{ overflow: 'auto' }}>
            <Formik
              initialValues={{
                email: '',
                orgName: '',
                socMed: '',
                password: '',
                country: '',
                address: '',
                policy: false,
                gender: '',
                contactPerson: '',
                contactPersonPosition: '',
              }}
              validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                orgName: Yup.string().max(255).required('Organization name is required'),
                password: Yup.string().max(255).required('password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked'),
                country: Yup.string().max(255).required('Country is required'),
                address: Yup.string().max(255).required('address is required'),
                gender: Yup.string().max(255).required('gender is required'),
                contactPerson: Yup.string().max(255).required('Contact Person is required'),
                contactPersonPosition: Yup.string().max(255).required('Required'),
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
                    Website
                  </Typography>
                  <TextField
                    error={Boolean(touched.socMed && errors.socMed)}
                    fullWidth
                    helperText={touched.socMed && errors.socMed}
                    label="Social media website"
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
                      checked={values.policy}
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Association
                    </Typography>
                    <Checkbox
                      checked={values.policy}
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      NGO
                    </Typography>
                    <Checkbox
                      checked={values.policy}
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Foundation
                    </Typography>
                    <Checkbox />
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Network of NGOs
                    </Typography>
                  </Box>
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
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
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
                    Contact Person
                  </Typography>
                  <TextField
                    error={Boolean(touched.contactPerson && errors.contactPerson)}
                    fullWidth
                    helperText={touched.contactPerson && errors.contactPerson}
                    label="Contact Person Name"
                    margin="normal"
                    name="contactPerson"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contactPerson}
                    variant="outlined"
                  />
                  <Select
                    error={Boolean(touched.gender && errors.gender)}
                    fullWidth
                    helperText={touched.gender && errors.gender}
                    label="Gender"
                    name="gender"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gender}
                    variant="outlined"
                  >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Prefer not to say</MenuItem>
                  </Select>
                  <TextField
                    error={Boolean(touched.contactPersonPosition && errors.contactPersonPosition)}
                    fullWidth
                    helperText={touched.contactPersonPosition && errors.contactPersonPosition}
                    label="Contact Person Position"
                    margin="normal"
                    name="contactPersonPosition"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contactPersonPosition}
                    variant="outlined"
                  />
  
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      ml: -1
                    }}
                  >
                  </Box>
                  {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>
                    {errors.policy}
                  </FormHelperText>
                  )}
                  <Box sx={{ py: 2 }}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Confirm information
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Container>
        </Box>
      </>
    )
}

export default TextConverter
