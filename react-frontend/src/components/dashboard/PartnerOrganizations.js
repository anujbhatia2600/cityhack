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
    ref: 'MarketWatch',
    status: "Jim Cramer literally drowns Cathie Wood's ARK as flagship funds falter ",
    createdAt: '29-Jan-2022',
  },
  {
    id: uuid(),
    ref: 'Morningstar research ',
    status: "Analyst report: Synchrony Financial ",
    createdAt: '24-Jan-2022',
  },
  {
    id: uuid(),
    ref: 'Barrons.com',
    status: "Tech Is Still Getting Crushed. Here Are 15 Stocks to Buy in a Changed World.",
    createdAt: '21-Jan-2022',
  },
  {
    id: uuid(),
    ref: 'MarketWatch',
    status: "‘Easter Bunny cartoon cash’ — how Bill Maher called the Bitcoin crash",
    createdAt: '11-Jan-2022',
  },
  {
    id: uuid(),
    ref: 'MarketWatch',
    status: "Intel stock hits lowest price in more than a year, and there is another shoe to drop",
    createdAt: '01-Jan-2022',
  },
  {
    id: uuid(),
    ref: 'Yahoo Finance',
    status: "Tesla rival Rivian's stock could skyrocket at least 160%, says top analyst",
    createdAt: '29-Dec-2021',
  },
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Latest Updates" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Data source
              </TableCell>
              <TableCell>
                Title
              </TableCell>
              <TableCell>
                Created at
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
                  {order.status}
                </TableCell>
                <TableCell>
                  {order.createdAt}
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
