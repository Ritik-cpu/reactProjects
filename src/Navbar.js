import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


export default function Navbar() {
  return (
    <Box sx={{marginBottom:'100px',}}>
       <AppBar color="primary" >
         <Box sx={{display:'flex'}}>
         <Toolbar>
           <Typography variant="h6">
           <Link to="/">Home</Link>
           </Typography>
           </Toolbar>
           <Toolbar>
           <Typography variant="h6">
           <Link to="menuproject">MenuProject</Link>
            </Typography>
            </Toolbar>
            <Toolbar>
            <Typography variant="h6">
            <Link to="/infohide">InfoHide</Link>
            </Typography>
         </Toolbar>
         </Box>
       </AppBar>
    </Box>
  )
}
