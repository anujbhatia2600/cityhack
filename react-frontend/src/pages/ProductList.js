import { Helmet } from 'react-helmet';
import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from '../components/product/ProductListToolbar';
import ProductCard from '../components/product/ProductCard';
import products from '../__mocks__/products';

const ProductList = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar search={search} setSearch={setSearch} />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {products.filter((x) => x.title.toLowerCase().includes(search)).map((product) => (
                <Grid
                  item
                  key={product.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small"
            />
          </Box>
        </Container>
      </Box>
    </>

  )
};

export default ProductList;
