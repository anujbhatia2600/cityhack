import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const orders = [
  {
    id: uuid(),
    ref: 'Calamansi Production Technology Trainings',
    amount: 30.5,
    customer: {
      name: 'Asiadhrra and GA'
    },
    createdAt: 'Dec 2021',
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'Development of Calamansi Learning Site with IDOFS',
    amount: 25.1,
    customer: {
      name: 'Asiadhrra and DAR'
    },
    createdAt: 'Aug 2021',
    status: 'ongoing'
  },
  {
    id: uuid(),
    ref: 'Construction of new processing facility',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 'Feb 2021',
    status: 'ongoing'
  },
  {
    id: uuid(),
    ref: 'Construction of water refilling station (Completion)',
    amount: 96.43,
    customer: {
      name: 'DTI and ADMU'
    },
    createdAt: 'July 2020',
    status: 'finished'
  },
  {
    id: uuid(),
    ref: 'Construction of water services facility',
    amount: 32.54,
    customer: {
      name: 'Asiadhrra and MARCCO'
    },
    createdAt: 'May 2020',
    status: 'finished'
  },
  {
    id: uuid(),
    ref: 'Renovation of existing office/meeting hall',
    amount: 16.76,
    customer: {
      name: 'Asiadhrra'
    },
    createdAt: 'Dec 2019',
    status: 'finished'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Previous Projects" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Project Title
              </TableCell>
              <TableCell>
                Funding Partner
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Start Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.customer.name}
                </TableCell>
                <TableCell>
                  {order.createdAt}
                </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={order.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default LatestOrders;
