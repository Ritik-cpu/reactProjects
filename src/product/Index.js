import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Prods from './Prods';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import url from '../data/Urls'



export default function Products() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct]=useState([]);
  // const [remove, setRemove] = useState(true); 

  const removeProd=(id) => {
    const newProd=product.filter((prod)=>prod.id!==id);
    setProduct(newProd);
  }

  const fetchProduct= async()=>{
        setLoading(true)
        try {
          const response = await fetch(url);
        const productList=await response.json();
        setLoading(false);
        setProduct(productList)         
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
  };

  useEffect(()=>{
    fetchProduct();
  },[])
   
  if(loading){
    return(
      <div>
         <Loading/>
      </div>
    )
  };
  if(product.length === 0){
    return(
      <div>
          <Typography variant="h4" color="initial">
            No product found
          </Typography>
          <Button onClick={fetchProduct}
           variant="contained" color="primary">
            refresh
          </Button>
      </div>
    )
  }
  return(
    <div>
        <Prods product={product} removeProd={removeProd}/>
    </div>
  )
  
}
