import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import {
  User as UserIcon,
} from 'react-feather';

export default function ProductCard({ product, ...rest }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
        {...rest}
        onClick={handleClickOpen}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pb: 3
            }}
          >
            <Avatar
              alt="Product"
              src={product.media}
              variant="square"
            />
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {product.title}
            (
            {product.ticker}
            )
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="body1"
          >
            {product.description}
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Want to access the data of
          {' '}
          {product.title}
          ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The data can be accessed on the InvestoBit's website or using an API endpoint. Upon  successful access a flat fee for would be applied.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>API endpoint</Button>
          <Button onClick={handleClose} autoFocus>
            InvestoBit Website
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
