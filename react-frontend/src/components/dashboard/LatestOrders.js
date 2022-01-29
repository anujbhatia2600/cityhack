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
import { red } from '@material-ui/core/colors';

const orders = [
  {
    id: uuid(),
    ref: 'Apple',
    amount: 30.5,
    customer: {
      name: 'Guy Kawasaki'
    },
    createdAt: 'Dec 2021',
    status: 'Updated'
  },
  {
    id: uuid(),
    ref: 'Google',
    amount: 25.1,
    customer: {
      name: 'Reuters'
    },
    createdAt: 'Aug 2021',
    status: 'No Update'
  },
  {
    id: uuid(),
    ref: 'Citi Bank',
    amount: 10.99,
    customer: {
      name: 'Yahoo Finance'
    },
    createdAt: 'Feb 2021',
    status: 'No Update'
  },
  {
    id: uuid(),
    ref: 'Meta',
    amount: 96.43,
    customer: {
      name: 'Bloomberg'
    },
    createdAt: 'July 2020',
    status: 'Updated'
  },
  {
    id: uuid(),
    ref: 'Netflix',
    amount: 32.54,
    customer: {
      name: 'Refinitiv'
    },
    createdAt: 'May 2020',
    status: 'Updated'
  },
  {
    id: uuid(),
    ref: 'Amazon',
    amount: 16.76,
    customer: {
      name: 'Yahoo finance'
    },
    createdAt: 'Dec 2019',
    status: 'No Update'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Recently fetched APIs" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Company Title
              </TableCell>
              <TableCell>
                Data source
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
                    Time
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
                    color={order.status !== "No Update" ? "primary" : 'secondary'}
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
