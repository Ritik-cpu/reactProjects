import { SkipPrevious,SkipNext } from '@mui/icons-material'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React,{useState} from 'react'
import { data } from '../data/data'

export default function Flip() {
const [index, setIndex] = useState(0);
const {name,age,description,image} = data[index];


const checkFlip=(number)=>{
    
        if(number > data.length-1){
            return 0;
        }
        if(number < 0){
            return data.length - 1;
        }
        return number;
}
const NextFlip=()=>{
    setIndex((index)=>{
        let newIndex=index+1;
        return checkFlip(newIndex);
    })
}

const PreviousFlip=()=>{
    setIndex((index)=>{
        let newIndex=index-1;
        return checkFlip(newIndex);
    })
}

const randomFlip=()=>{
    let rand=Math.floor(Math.random()*data.length);
    setIndex(rand);
    console.log(rand)
}

  return (
    <div>
        <Card sx={{width: '100%'}}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {name} --{age} Year
                  </Typography>
                    <Typography>
                        {description}
                     </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{display:'flex', justifyContent:'space-between',  width:'100%'}} >
                <Button onClick={PreviousFlip} variant="contained" size="small" color="primary">
                   <SkipPrevious/>
                </Button>
                <Button variant="contained" color="primary" onClick={randomFlip} >
                    Suprise
                </Button>
                <Button onClick={NextFlip} variant="contained" size="small" color="primary" sx={{marginRight:'16px'}}>
                   <SkipNext />
                </Button>
            </CardActions>
        </Card>

    </div>
  )
}
