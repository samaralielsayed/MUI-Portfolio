import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
const CardToPortfolio = (props) => {
  const{name, image,gitHub,liveDemo,lang}=props
  return (
    <Box>

<Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}
        </Typography>
        
      </CardContent>
      <CardActions sx={{justifyContent:"space-between"}}>
        
        <Box component="a" className="icon" sx={{color:"#273e4c", "&:hover": { color: "#922f45" }}}
    href={gitHub} ><GitHubIcon /></Box>

<Box sx={{fontWeight:'bold',color:"#273e4c","&:hover": { color: "#922f45" ,cursor:'pointer'}}} > {lang}</Box>
<Box>
<Button component="a"  href={liveDemo} variant="outlined"  sx={{backgroundColor:'#273e4c',color:'white',"&:hover": { color: "#922f45", borderColor:'#922f45'}}}>Live Demo</Button>
</Box>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </Box>
  )
}

export default CardToPortfolio 