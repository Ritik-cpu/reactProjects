import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React,{useState} from 'react'

export default function Prod({id,image,category,description,price, removeProd}) {
    const [learn, setLearn] = useState(false)
  return (
    <div>
        <Card sx={{maxWidth:450,margin:'16px'}} >
            <CardActionArea>
                <CardMedia  
                    height={340}
                    component="img"
                    image={image}
                    title={category}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {category}
                  </Typography>
                    <Typography>
                        {learn ? description: `${description.substring(0,100)}...`}
                  </Typography>
                  <Button 
                  onClick={()=>{setLearn(!learn)}}
                  size="small" color="primary">
                    {learn ?'Learn Less':'Learn More'}
                </Button>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button fullWidth onClick={()=>removeProd(id)} size="small" variant='outlined' color="error">
                    Not interested
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}
