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
    name: 'Apple',
    imageUrl: '/static/images/logos/apple.png',
    updatedAt: 'Calamansi'
  },
  {
    id: uuid(),
    name: 'Meta',
    imageUrl: '/static/images/logos/meta.png',
    updatedAt: 'Potatoes, carrots'
  },
  {
    id: uuid(),
    name: 'Netflix',
    imageUrl: '/static/images/logos/netflix.png',
    updatedAt: 'wheat'
  },
  {
    id: uuid(),
    name: 'Opensea',
    imageUrl: '/static/images/logos/opensea.png',
    updatedAt: 'Cattle, sheep'
  },
  {
    id: uuid(),
    name: 'Boeing',
    imageUrl: '/static/images/logos/boeing.png',
    updatedAt: 'Almonds'
  }
];

const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Favorite Companies"
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
