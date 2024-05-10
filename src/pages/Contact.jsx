import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Grid, Typography, Button } from '@mui/material';


const Contact = () => {
  return (
<Box sx={{minHeight: '800px',backgroundColor:'#273e4c66',display:'flex',alignItems:'center',justifyContent:'center'}} id="contact">

    <Container >
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginBottom:'50px'}}>

        <Typography variant="h3" sx={{color:'#273e4c'}} >Contact With Me</Typography>
        {/* <Box sx={{width:'60px',height:'4px' ,backgroundColor:'#922f45',marginTop:'10px'}}></Box> */}
        <Box sx={{width:'130px',height:'4px' ,backgroundColor:'#922f45',marginTop:'10px'}}></Box>
    </Box>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1}
    }}
    noValidate
    autoComplete="off"
  >
 
    <Grid container justifyContent='center'  alignItems="center" >
    <Grid item  xs={10}  >
    <TextField rows={8} label="Message" multiline id="outlined-textarea"   sx={{width:'100%'}}
          />
      </Grid>
      <Grid item xs={5}>
        
       <TextField id="outlined-search" label="First Name" sx={{width:'95%'}}/>
      </Grid>
      <Grid item  xs={5} >
      <TextField id="outlined-search" label="Last Name" sx={{width:'100%'}}/>
      </Grid>
      <Grid item  xs={10}  >
      <TextField id="outlined-search" label="Email"  sx={{width:'100%'}}/>
      </Grid>
      <Grid item  xs={10}  >
        <Button component="a" variant="outlined" sx={{width:'30%',color:'white',margin:'8px 15px',backgroundColor:'#922f45',padding:'10px 0px' ,borderColor:'#922f45',"&:hover": {borderColor:'#922f45', color: "#922f45", backgroundColor:'transparent'}}}  download
              href="../assets/samar_cv.pdf">Send COntact</Button>
      </Grid>
      
    </Grid>
   
    </Box>
    </Container >
</Box>
  )
}

export default Contact