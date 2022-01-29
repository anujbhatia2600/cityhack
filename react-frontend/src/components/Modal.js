import * as React from 'react';
import {
  Box,
  Button,
  Typography,
  Modal
} from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <Button
        onClick={handleOpen}
        color="primary"
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Submit Details

      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2" sx={{ textAlign: 'center', p: 1 }}>
            Transaction Cost: 0.2IBT
          </Typography>
          <Button
            onClick={refreshPage}
            color="primary"
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Confirm Transaction
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
