import React from 'react'
import Card from '../component/CardToPortfolio'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'

const Portfolio = () => {
  
 const projects=[
    {
      image:'blog.jpg',
      gitHub:'https://github.com/samaralielsayed/Blog-React-API-Node.js',
      liveDemo:'https://blog-react-green.vercel.app/',
      name:'Blog Website'

    },
    {
      image:'',
      gitHub:'https://github.com/abrarhussien/E-commerce-Angular',
      liveDemo:'https://e-commerce-zero-two.vercel.app/home',
      name:'E-commerce website'

    },
    {
      image:'blog.jpg',
      gitHub:'https://github.com/samaralielsayed/Blog-React-API-Node.js',
      liveDemo:'https://blog-react-green.vercel.app/',
      name:'Blog Website'

    }
  ]
  return (
    <Box sx={{minHeight: '700px',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#273e4c66'}}>
      {/* ontainer  */}
      <Container >
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginBottom:'50px'}}>

      <Typography variant="h3" sx={{color:'#273e4c'}} >My Portfolio</Typography>
      {/* <Box sx={{width:'60px',height:'4px' ,backgroundColor:'#922f45',marginTop:'10px'}}></Box> */}
      <Box sx={{width:'130px',height:'4px' ,backgroundColor:'#922f45',marginTop:'10px'}}></Box>
        </Box>
      <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-between"  > 

        
        {
      projects.map((project)=>{
        return(<Card  name={project.name} key={project.name} image={project.image} gitHub={project.gitHub} liveDemo={project.liveDemo}/>)

      })
    }
      </Stack>

        

      </Container>
      
    </Box>
  )
}

export default Portfolio