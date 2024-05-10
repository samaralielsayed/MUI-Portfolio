import { Typography ,Grid, Avatar, Stack, Button} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import image from "../assets/images/IMG-20230711-WA0083-removebg-preview.png"




const About = () => {
  return (
    <Box id="about" >
    <Box sx={{backgroundColor:'#273e4c66',color:'black', minHeight: "700px",}} >

      <Container maxWidth="lg" >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            
          }}
        >
          <Grid container   alignItems="center">
          <Grid item xs={6} >
         {/* <Box alt='' src={image }  /> */}
           <Box component="img" src={image} alt='hh' />
           
         </Grid>
          <Grid item xs={6} >
          <Typography variant="h3" sx={{color:'#273e4c'}}>About Me</Typography>
          <Box sx={{width:'60px',height:'4px' ,backgroundColor:'#922f45',marginTop:'10px'}}></Box>
          {/* <Box sx={{width:'150px',height:'3px' ,backgroundColor:'#922f45',marginTop:'4px'}}></Box> */}

         <Typography  sx={{margin:'30px 0'}}>UI and web Development 9 Months Diploma, Information Technology Institute (ITI),
Ismailia Branch.</Typography>
          <Stack sx={{flexDirection:'row',justifyContent:'space-between',border:"1px solid #922f45" ,padding:'30px 20px',marginBottom:'30px' }}>

          <Box>
            <Typography >Name : Samar Ali </Typography>
            <Typography sx={{margin:'8px 0'}}>Address :Cairo, Egypt  </Typography>
            <Typography> Age  :23 </Typography>
          </Box>
          <Box>
            <Typography>Phone  : +20 11 230 83 52 </Typography>
            <Typography sx={{margin:'8px 0'}}> Email  : samaralielsayed52@gmail.com  </Typography>
            <Typography> Faculty  :Computers and Artificial Intelligence </Typography>
          </Box>
          </Stack>
          <Button component="a" variant="outlined" sx={{color:'white',backgroundColor:'#922f45' ,borderColor:'#922f45',"&:hover": {borderColor:'#922f45', color: "#922f45", backgroundColor:'transparent'}}}  download
            href="../assets/samar_cv.pdf">DOWNLOAD CV</Button>

          </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </Box>
  );
};

export default About;
