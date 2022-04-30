import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Lists = ({people}) => {
  return (
    <Box>
      {people.map((pers)=>{
        const {id,name,age,image}=pers;
        return(
          <List key={id} sx={{width:'100%'}}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt={name} src={image}/> 
              </ListItemAvatar>
              <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {age} Year
              </Typography>
            </React.Fragment>
          }
         />
            </ListItem>
          </List>
        )
      })}
    </Box>
  );
}

export default Lists;
