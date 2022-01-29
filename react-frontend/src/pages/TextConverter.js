import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import './TextConverter.css';
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
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead
} from '@material-ui/core';
import { FileUploader } from 'react-drag-drop-files';
import BasicModal from '../components/Modal';
import Spinner from '../components/Spinner';

const fileTypes = ['JSON', 'CSV'];

const tableData = {
  '12 months ended': ['Sep 25, 2021', 'Sep 26, 2020', 'Sep 28, 2019', 'Sep 29, 2018', 'Sep 30, 2017', 'Sep 24, 2016'],
  Products: ['2,97,392', '2,20,747', '2,13,883', '2,25,847', '1,96,534', '0'],
  Services: ['68,425', '53,768', '46,291', '39,748', '32,700', '0'],
  'Net sales(legacy)': ['0', '0', '0', '0', '0', '2,15,639'],
  'Net sales': ['3,65,817', '2,74,515', '2,60,174', '2,65,595', '2,29,234', '2,15,639'],
  Products: ['-1,92,266', '-1,51,286', '-1,44,996', '-1,48,164', '-1,26,337', '0'],
  Services: ['-20,715', '-18,273', '-16,786', '-15,592', '-14,711', '0'],
  'Cost of sales(legacy)': ['0', '0', '0', '0', '0', '-1,31,376'],
  'Cost of sales': ['-2,12,981', '-1,69,559', '-1,61,782', '-1,63,756', '-1,41,048', '-1,31,376'],
  'Gross margin': ['1,52,836', '1,04,956', '98,392', '1,01,839', '88,186', '84,263'],
  'Research and development': ['-21,914', '-18,752', '-16,217', '-14,236', '-11,581', '-10,045'],
  'Selling, general and administrative': ['-21,973', '-19,916', '-18,245', '-16,705', '-15,261', '-14,194'],
  'Operating expenses': ['-43,887', '-38,668', '-34,462', '-30,941', '-26,842', '-24,239'],
  'Operating income': ['1,08,949', '66,288', '63,930', '70,898', '61,344', '60,024'],
  'Interest and dividend income': ['2,843', '3,763', '4,961', '5,686', '5,201', '3,999'],
  'Interest expense': ['-2,645', '-2,873', '-3,576', '-3,240', '-2,323', '-1,456'],
  'Other income (expense), net': ['60', '-87', '422', '-441', '-133', '-1,195'],
  'Other income (expense), net': ['258', '803', '1,807', '2,005', '2,745', '1,348'],
  'Income before provision for income taxes': ['1,09,207', '67,091', '65,737', '72,903', '64,089', '61,372'],
  'Provision for income taxes': ['-14,527', '-9,680', '-10,481', '-13,372', '-15,738', '-15,685'],
  'Net income': ['94,680', '57,411', '55,256', '59,531', '48,351', '45,687']
};

const TextConverter = () => {
  const [file, setFile] = useState(null);
  const [isModal, setIsModal] = useState(null);
  const handleChange = (file) => {
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
        <title>Upload</title>
      </Helmet>
      {(!file)
        ? (
          <Box marginTop="250px" marginLeft="400px" align="center">
            {loading && <Spinner />}
            <FileUploader
              style={{ height: '200px' }}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
          </Box>
        )
        : isModal ? (
          <Dialog
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
          </Dialog>
        )
          : (
            <Grid container spacing={6}>
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
                    <Table>
                      <TableBody>
                        <TableHead>
                          Apple Inc. (Consolidated Income Statement)
                        </TableHead>
                        {/* <TableRow>
                        <TableCell>
                          Consolidated Income Statement
                        </TableCell>
                      </TableRow> */}
                        {Object.values(tableData).map((values, index) => (
                          <TableRow>
                            <TableCell>{Object.keys(tableData)[index]}</TableCell>
                            {values.map((value) => <TableCell>{value}</TableCell>)}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <BasicModal />
                  </Container>
                </Box>
              </Grid>
            </Grid>
          )}

    </>
  );
};

export default TextConverter;
