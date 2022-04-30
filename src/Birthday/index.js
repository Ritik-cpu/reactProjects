import {  Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { data } from '../data/data';
import Lists from './Lists'
import './index.css'
export default function Birthday() {
  const [people, setPeople]=useState(data);
  return (
    <div className='birthday'>
        <Typography variant="h5" color="initial">{people.length} Item in this List</Typography>
         <Lists people={people}/>
         <Button fullWidth  variant='contained' 
         onClick={()=>{setPeople([])}}
         >
          Clear all
         </Button>
    </div>
  )
}
