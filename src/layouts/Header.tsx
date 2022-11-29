import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Peccy (Sample service by ssupp)
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 0 }}>
            Version v0.1.0
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header