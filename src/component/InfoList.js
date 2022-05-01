import { Add, Remove } from '@mui/icons-material'
import { Button, List, ListItem, Typography } from '@mui/material'
import React,{useState} from 'react'



export default function InfoList({name, description}) {
    const [info, setInfo] = useState(false)

  return (
    <div>
                <List sx={{background:'white', margin:'16px', padding:'16px'}} component="nav">
                <ListItem  >
                  <Button onClick={()=>setInfo(!info)}>
                     {info?<Remove/>: <Add/>}
                  </Button>
                 <Typography variant="h5" color="initial" sx={{marginLeft:'32px'}}>
                   {name}
                 </Typography>
              </ListItem>
              <Typography sx={{marginLeft:'110px', }}>
                 {info ? description: `${description.substring(0,0)}`}</Typography>
              </List>
              
    </div>
  )
}
