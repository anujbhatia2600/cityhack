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
    ref: 'Oriental Mindoro Provincial Government',
    amount: 30.5,
    customer: {
      name: 'Government'
    },
    createdAt: 'Local',
    status: 'Oriental Mindoro is now acclaimed as one of the most visited provinces in the region and one of the major tourist destination in the Philippines.',
    class: 'Local'
  },
  {
    id: uuid(),
    ref: 'DTI',
    amount: 25.1,
    customer: {
      name: 'Government'
    },
    createdAt: 'National',
    status: 'Department of Trade and Indsutry Philippines is responsible for realizing the countrys goal of globally competitive and innovative industry and services sector',
    class: 'National'
  },
  {
    id: uuid(),
    ref: 'Provincial Agriculture Office',
    amount: 10.99,
    customer: {
      name: 'Government'
    },
    createdAt: 'Local',
    status: 'The Department is the government agency responsible for the promotion of agricultural development by providing the policy framework, public investments, and support services needed for domestic and export-oriented business enterprises.',
    class: 'Local'
  },
  {
    id: uuid(),
    ref: 'DAR',
    amount: 96.43,
    customer: {
      name: 'Government'
    },
    createdAt: 'National',
    status: 'DAR is the lead government agency that holds and implements comprehensive and genuine agrarian reform which actualizes equitable land distribution, ownership, agricultural productivity, and tenurial security for, of and with the tillers of the land towards the improvement of their quality of life.',
    class: 'National'
  },
  {
    id: uuid(),
    ref: 'DOST',
    amount: 32.54,
    customer: {
      name: 'Government'
    },
    createdAt: 'National',
    status: 'The Department of Science and Technology (DOST) is the premiere science and technology body in the country charged with the twin mandate of providing central direction, leadership and coordination.',
    class: 'Regional'
  },
  {
    id: uuid(),
    ref: 'Municipality of Pola',
    amount: 16.76,
    customer: {
      name: 'NGO'
    },
    createdAt: 'Local',
    status: 'Pola is a 3rd class municipality in the province of Oriental Mindoro, Philippines. ',
    class: 'Local'
  }
];

const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Partner Organizations / Agency" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Classification
              </TableCell>
              <TableCell>
                Level of implementation
              </TableCell>
              <TableCell>
                Partnership info
              </TableCell>
              <TableCell>
                Other Classifications
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
                  {order.status}
                </TableCell>
                <TableCell>
                  {order.class}
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
