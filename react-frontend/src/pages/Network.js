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

const Network = () => (
  <>
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
                <MiniDashboard name="RPO #1" location="City #1, Country #1"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="RPO #2" location="City #2, Country #2"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="RPO #3" location="City #3, Country #3"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="RPO #4" location="City #4, Country #4"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="RPO #5" location="City #5, Country #5"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="RPO #6" location="City #6, Country #6"/>
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
                <MiniDashboard name="Investor #7" location="City #7, Country #7"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Investor #8" location="City #8, Country #8"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Investor #9" location="City #9, Country #9"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Investor #10" location="City #10, Country #10"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Investor #11" location="City #11, Country #11"/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Investor #12" location="City #12, Country #12"/>
            </Grid>
            </Grid>
        </Container>
    </Box>
  </>
);

export default Network;
