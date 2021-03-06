import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  Inbox as InboxIcon,
  DollarSign as DollarIcon,
  List as ListIcon,
  Type as TypeIcon,
  Home as HomeIcon,
  Link as LinkIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/ugat.png',
  jobTitle: 'Agricultural Production',
  name: 'Ugat'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'My Profile'
  },
  {
    href: '/app/network',
    icon: UsersIcon,
    title: 'Lenders and Investors'
  },
  {
    href: '/app/products',
    icon: HomeIcon,
    title: 'Companies'
  },
  {
    href: '/app/text-converter',
    icon: ListIcon,
    title: 'Upload'
  },
  {
    href: '/app/kanban',
    icon: ListIcon,
    title: 'API Documentation'
  },
  {
    href: '/app/inbox',
    icon: InboxIcon,
    title: 'Inbox',
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {
        //   <Box
        //   sx={{
        //     backgroundColor: 'background.default',
        //     m: 2,
        //     p: 2
        //   }}
        // >
        //   <Typography
        //     align="center"
        //     gutterBottom
        //     variant="h4"
        //   >
        //     Need more?
        //   </Typography>
        //   <Typography
        //     align="center"
        //     variant="body2"
        //   >
        //     Upgrade to PRO version and access 20 more screens
        //   </Typography>
        //   <Box
        //     sx={{
        //       display: 'flex',
        //       justifyContent: 'center',
        //       pt: 2
        //     }}
        //   >
        //     <Button
        //       color="primary"
        //       component="a"
        //       href="https://react-material-kit.devias.io"
        //       variant="contained"
        //     >
        //       See PRO version
        //     </Button>
        //   </Box>
        // </Box>
      }
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden xlDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default DashboardSidebar;
