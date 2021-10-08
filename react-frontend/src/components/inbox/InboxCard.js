import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import {
  User as UserIcon,
  Hexagon as HexagonIcon,
} from 'react-feather';

const InboxCard = ({ message, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'left',
          pb: 3
        }}
      >
        <UserIcon size="20" variant="square" color={(message.senderType=="Investor")?"red":"blue"}/>
        <Typography
          align="left"
          color="textPrimary"
          gutterBottom
          variant="h5"
          style={{
            'marginLeft': '8px'
          }}
        >
          {message.senderName}
        </Typography>
      </Box>
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {message.title}
      </Typography>
      <Typography
        align="left"
        color="textPrimary"
        variant="body1"
      >
        {message.body}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Received at {message.receivedAt}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <HexagonIcon size="20" variant="square"  />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {message.senderType}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

InboxCard.propTypes = {
  message: PropTypes.object.isRequired
};

export default InboxCard;
