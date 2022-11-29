import React, { useEffect, useState } from 'react';
import { listHobby, createHobby } from '../api/hobby';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

const Hobby = () => {
  const [hobbies, setHobbies] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    listHobby().then((response) => {
      console.log(response.data.hobbies)
      setHobbies(response.data.hobbies)
    })
  }, []);

  return (
    <Paper elevation={3} sx={{ m: 2, p: 2 }}>
      <Typography variant="h6" >
        Hobby
      </Typography>
      <List>
        <ListItem
          secondaryAction={
            <IconButton onClick={createHobby} edge="end" >
              <AddBoxIcon />
            </IconButton>
          }>
          <TextField label="Create" variant="outlined" sx={{ width: "100%" }} />
        </ListItem>
        {hobbies.map((hobby) => (
          <ListItem
            key={hobby.id}
            secondaryAction={
              <IconButton edge="end" >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={hobby.name} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Hobby;