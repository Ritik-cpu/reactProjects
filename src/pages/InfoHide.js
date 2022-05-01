import React from 'react'
import Container from '@mui/material/Container'
import { data }from '../data/data'
import InfoList from '../component/InfoList';


export default function InfoHide() {
  return (
    
    <Container maxWidth="lg" sx={{background:'skyblue',padding:'1rem'}}>
      <Container maxWidth="sm" sx={{background:'lightgreen',padding:'16px'}}>
      {data.map((dash)=>{
        return (
          <InfoList key={dash.id} {...dash}/>
        )
      })
      }
      </Container>
   </Container>
  
  )
}

