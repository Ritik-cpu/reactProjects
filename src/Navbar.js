import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


export default function Navbar() {
  return (
    <div>
       <AppBar position="static"  color="primary"  >
         <Box sx={{display:'flex'}}>
         <Toolbar>
           <Typography variant="h6">
           <Link to="/">Home</Link>
           </Typography>
           </Toolbar>
           <Toolbar>
           <Typography variant="h6">
           <Link to="about">About</Link>
            </Typography>
            </Toolbar>
            <Toolbar>
            <Typography variant="h6">
            <Link to="/contact">Contact</Link>
            </Typography>
         </Toolbar>
         </Box>
       </AppBar>
    </div>
  )
}
