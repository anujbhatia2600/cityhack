import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const products = [
  {
    id: uuid(),
    name: 'Fruits',
    imageUrl: '/static/images/products/product_1.jpeg',
    updatedAt: 'Calamansi'
  },
  {
    id: uuid(),
    name: 'Vegetables',
    imageUrl: '/static/images/products/product_2.jpeg',
    updatedAt: 'Potatoes, carrots'
  },
  {
    id: uuid(),
    name: 'Cereals',
    imageUrl: '/static/images/products/product_3.jpeg',
    updatedAt: 'wheat'
  },
  {
    id: uuid(),
    name: 'Livestock',
    imageUrl: '/static/images/products/product_4.jpeg',
    updatedAt: 'Cattle, sheep'
  },
  {
    id: uuid(),
    name: 'Nuts',
    imageUrl: '/static/images/products/product_5.jpeg',
    updatedAt: 'Almonds'
  }
];

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Focused Commondity"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`${product.updatedAt}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
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

export default LatestProducts;
