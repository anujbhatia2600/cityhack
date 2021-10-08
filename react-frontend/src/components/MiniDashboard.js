import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    Divider
  } from '@material-ui/core';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  import MoneyIcon from '@material-ui/icons/Money';
  import { red } from '@material-ui/core/colors';
  
  const MiniDashboard = (props) => (
    <Card
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
    >
      <CardContent>
      <Avatar
          align="center"
          alt="Product"
          src= {!props.investors ? "/static/rand.png" : "/static/investor.jpg"}
          variant="square"
          sx={{ width: 100, height: 80}}
      />
      <Typography
        noWrap="true"
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {!props.name ? "Name here" : props.name}
      </Typography>
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="body1"
      >
        {!props.description ? "The description about the organization goes here. The descriptions can span multiple lines" : props.description}
      </Typography>
      <Divider />
      <Box sx={{ mt: 1 }}>
        <Typography
            align="left"
            color="textSecondary"
            variant="body2"
        >
            {!props.location ? "Location here" : props.location}
        </Typography>
      </Box>
    </CardContent>
    </Card>
  );
  
  export default MiniDashboard;
  