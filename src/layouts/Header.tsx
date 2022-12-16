import { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { getDebugRegion, getDebugVersion } from '../api/debug';
import { getEnv } from '../env';

const Header = () => {
  const [region, setRegion] = useState<string>();
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    getDebugRegion().then((response) => {
      setRegion(response.data.region)
    })
    getDebugVersion().then((response) => {
      setVersion(response.data.version)
    })
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Peccy (Sample Service by ssupp@amazon.com)
          </Typography>
          <Typography variant="body1" component="div" sx={{ flexGrow: 0 }}>
            Web - {getEnv().AWS_REGION} v0.1.1 / App - Local v0.1.0
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header