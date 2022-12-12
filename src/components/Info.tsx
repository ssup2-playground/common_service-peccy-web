import React, { useEffect, useState } from 'react';
import { getInfoName, infoPictureURL } from '../api/info';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Info = () => {
  const [name, setName] = useState<string>();

  useEffect(() => {
    getInfoName().then((response) => {
      setName(response.data.name)
    })
  }, []);

  return (
    <Paper elevation={3} sx={{ m: 2, p: 2 }}>
      <Typography variant="h6" >
        Infomation
      </Typography>
      <List>
        <ListItem>
          <img src={infoPictureURL} width={128} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Name: " + name} />
        </ListItem>
      </List>
    </Paper>
  )
}

export default Info;