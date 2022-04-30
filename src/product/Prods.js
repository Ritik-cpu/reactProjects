import React from 'react'
import Prod from './Prod';
import Typography from '@mui/material/Typography'

const Prods = ({product,removeProd}) => {
  return (
   <div>
     <Typography textAlign={'center'} mt={2} variant="h5" color="initial">Our {product.length} Products </Typography>
    {
      product.map((prods)=>{
        return <Prod key={prods.id} {...prods} removeProd={removeProd}></Prod>
      })
    }
  
    </div>
  )
}

export default Prods;