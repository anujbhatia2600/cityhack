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
            {/* <Box sx={{ ml:"1rem", mb:"2rem" }}>
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
                <MiniDashboard name="Ilocos Association of Farmers" location=" Pangasinan,  The Philippines"
                    description="The Ilocos Region occupies the narrow plain between the Cordillera Central mountain range and the South China Sea, and the northern portion of the Central Luzon."/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Cordillera Agricultural Organization" location="Benguet, The Philippines"
                    description="Cordillera Administrative Region (CAR), also known as Cordillera Region is an administrative region in the Philippines, situated within the island of Luzon."/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Cagayan Farmers' Union" location="Tuguegarao, The Philippines"
                    description="Cagayan is a province in the Philippines located in the Cagayan Valley region and the northeastern tip of the Luzon. Its capital is the city of Tuguegarao."/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Central Luzon Farmers" location="Bulacan, The Philippines"
                    description="Central Luzon, designated as Region III, is an administrative region in the Philippines, primarily serving to organize the 7 provinces of the vast central plains of the island of Luzon, for administrative convenience."/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Caraga's Association of Agriculture" location="Butuan, The Philippines"
                    description="Caraga, officially the Caraga Administrative Region and designated as Region XIII, is an administrative region in the Philippines occupying the northeastern section of Mindanao. "/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xs={12}
            >
                <MiniDashboard name="Bicol Farmers' Organization" location="Legazpi City, The Philippines"
                    description="Bicol is a region in the Philippines encompassing the southern part of Luzon Island and nearby island provinces. Caramoan, a peninsula in the east, is dotted with caves, limestone cliffs and white-sand beaches. "/>
            </Grid>
            </Grid>
        </Container> */}

            <Box sx={{ ml: "1rem", my: "2rem" }}>
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
                        <MiniDashboard name="Banana" location="Manilla, The Philippines" investors="true"
                            description="A berry." />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <MiniDashboard name="JP Morgan & Chase Co" location="Hong Kong, Hong Kong" investors="true"
                            description="More well known as the organizer of Code for Good." />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <MiniDashboard name="Salikneta Farm" location="San Jose del Monte, The Philippines" investors="true"
                            description="Farmers can be investors too." />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <MiniDashboard name="Coca Cola" location="Manilla, The Philippines" investors="true"
                            description="." />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <MiniDashboard name="Boeing" location="Manilla, The Philippines" investors="true"
                            description="They sell planes, but but please do not let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer's table." />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <MiniDashboard name="BMW" location="Manilla, The Philippines" investors="true"
                            description="Vrmm vrmm" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);

export default Network;
