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
import InboxCard from '../components/inbox/InboxCard';
import InboxListToolbar from 'src/components/inbox/InboxListToolbar';
import products from '../__mocks__/products';
import messages from '../__mocks__/messages';



const Inbox = () => {
    const [search, setSearch] = useState('');


    return (
  <>
    <Helmet>
      <title>Inbox</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <InboxListToolbar search={search} setSearch={setSearch} />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {messages.filter((x)=>x.title.includes(search)).map((message) => (
              <Grid
                item
                key={message.id}
                lg={4}
                md={6}
                xs={12}
              >
                <InboxCard message={message} />
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
)};

export default Inbox;
