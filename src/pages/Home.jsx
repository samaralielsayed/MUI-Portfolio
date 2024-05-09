import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid,Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import backgroundImage from "../assets/images/23.svg"
import { TypeAnimation } from 'react-type-animation';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Home = () => {
  return (
    <Box id="home">
    {/* backgroundImage: `url(${backgroundImage})`,    minHeight: '700px',color:'white',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover', */}
    <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',minHeight: '700px',backgroundColor:'#273e4c66'}}>
{/* sx={{ backgroundColor:"",minHeight: '700px',minWidth:'100%'}} */}
    <Box  sx={{width:'100%'} }  > 
        
<Container >


  <Grid 
        container spacing={2}
        justifyContent="space-between"sx={{width:'100%'}}>
    
  <Grid item xs={8} >
  <Typography variant="h4" sx={{ 
    color: '#ec5b53',
    marginBottom: '10px',
    
    textTransform: 'uppercase',color: '#ec5b53',
    fontWeight:'bold' }}>
     Hi There!
  </Typography>
  <Typography  sx={{fontWeight:'bold',color:'#273e4c'}}>

  <TypeAnimation 
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Samar Ali ',
    1000,
    'Samar Ali Front-End Developer',
    1000,
    
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
  </Typography>
  {/* <Typography sx={{marginBottom: '37px'}}>jhorem rfpsum golor sidt amet, consectetur adipiscing elit, 
    eiusmod tempor incididunt utcjhg labore bet dolore magna aliqua.
     Quis ipsum suspendisse ultrices gravida.</Typography> */}
     <Stack spacing={3} direction="row" sx={{marginTop:'40px'}}>
     {/* <Button variant="contained" sx={{backgroundColor:'#273e4c'}}>Learn More</Button>
    <Button variant="outlined" sx={{color:'#273e4c',borderColor:'#273e4c'}}>Hire Me</Button> */}
    <Box
    component="a"
    sx={{ color:"#273e4c", "&:hover": { color: "#434f56" } ,border:'1px solid #273e4c',borderRadius:'50% ',padding:' 15px 14px 10px 14px'}}
    className="icon"
    href="https://github.com/samaralielsayed"
  >
    
    <EmailIcon  />
  </Box>

  <Box
    component="a"
    sx={{ color:"#273e4c", "&:hover": { color: "#434f56" } ,border:'1px solid #273e4c',borderRadius:'50% ',padding:' 15px 14px 10px 14px'}}
    className="icon"
    href="https://github.com/samaralielsayed"
  >
    
    <GitHubIcon />
  </Box>
  <Box 
  
    component="a"
    sx={{ color:"#273e4c", "&:hover": { color: "#434f56" } ,border:'1px solid #273e4c',borderRadius:'50% ',padding:' 15px 14px 10px 14px'}}
    className="icon"
    href="https://github.com/samaralielsayed"
  >
    
    <LinkedInIcon/>
  </Box>
  <Box
    component="a"
    sx={{ color:"#273e4c", "&:hover": { color: "#434f56" } ,border:'1px solid #273e4c',borderRadius:'50% ',padding:' 15px 14px 10px 14px'}}
    className="icon"
    href="https://github.com/samaralielsayed"
  >
    
    <FacebookOutlinedIcon/>
  </Box>
   
    
    


     </Stack>
 
  </Grid>
  <Grid  item xs={4}>


  <img src={backgroundImage}/>
  </Grid>
  </Grid>

</Container>
    </Box>
    </Box>
    </Box>
  )
}

export default Home