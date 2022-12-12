import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { getEnv } from '../env';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Peccy (Sample service by ssupp@amazon.com)
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 0 }}>
            AWS Region - {getEnv().AWS_REGION} / Version - v0.1.1
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header