import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Budget from '../components/dashboard/Budget';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import TasksProgress from '../components/dashboard/TasksProgress';
import TotalCustomers from '../components/dashboard/TotalCustomers';
import TotalProfit from '../components/dashboard/TotalProfit';
import TrafficByDevice from '../components/dashboard/TrafficByDevice';
import MiniDashboard from 'src/components/MiniDashboard';
import { Typography } from '@material-ui/core';
import NetworkListToolbar from '../components/dashboard/NetworkListToolbar'

const Network = () => (
  <>
    <Container maxWidth={false}><NetworkListToolbar /></Container>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >   
        <Box sx={{ ml:"1rem", mb:"2rem" }}>
            <Typography
                align='left'
                color="textPrimary"
                variant="h1"
            >
                Other RPOs
            </Typography>
        </Box>
        <Container maxWidth={false}>
            <Grid
            container
            spacing={3}
            >
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Ilocos Association of Farmers" location=" Pangasinan,  The Philippines"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Cordillera Agricultural Organization" location="Benguet, The Philippines"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Cagayan Farmers' Union" location="Santiago, The Philippines"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Central Luzon Farmers" location="Bulacan, The Philippines"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Caraga's Association of Agriculture" location="Butuan, The Philippines"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Bicol Farmers' Organization" location="Legazpi City, The Philippines"/>
            </Grid>
            </Grid>
        </Container>
        
        <Box sx={{ ml:"1rem", my:"2rem" }}>
            <Typography
                align='left'
                color="textPrimary"
                variant="h1"
            >
                Investors
            </Typography>
        </Box>
        <Container maxWidth={false}>
            <Grid
            container
            spacing={3}
            >
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Banana" location="City #7, The Philippines" investors="true"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="JP Morgan & Chase Co" location="City #8, The Philippines"  investors="true"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Salikneta Farm" location="City #9, The Philippines"  investors="true"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Coca Cola" location="City #10, The Philippines"  investors="true"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Boeing" location="City #11, The Philippines" investors="true"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="BMW" location="City #12, The Philippines" investors="true"/>
            </Grid>
            </Grid>
        </Container>
    </Box>
  </>
);

export default Network;
