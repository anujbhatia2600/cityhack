import {
  Box,
  Button,
  
} from '@material-ui/core';


const ProductListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <Button>
        Import
      </Button>
      <Button sx={{ mx: 1 }}>
        Export
      </Button>
      <Button
        color="primary"
        variant="contained"
      >
        Add product
      </Button>
    </Box>
  </Box>
);

export default ProductListToolbar;
