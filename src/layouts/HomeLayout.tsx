import { Outlet } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { homeLayoutAppBarStyles, homeLayoutContainerStyles, homeLayoutOutletContainer } from './HomeLayout.styles';

export function HomeLayout() {
  return (
    <Box sx={homeLayoutContainerStyles}>
      <AppBar position="static" sx={homeLayoutAppBarStyles}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Farms Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={homeLayoutOutletContainer}>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
