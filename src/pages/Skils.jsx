// import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from '../component/CardToPortfolio'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'

const Skils = () => {
  const skils= [
    {
      name: "HTML5",
      img: "/html.svg",
    },
    {
      name: "CSS3",
      img: "/css.svg",
    },
    {
      name: "Javascript",
      img: "/js.svg",
    },
    {
      name: "Tailwind",
      img: "/tailwind.svg",
    },
    {
      name: "Material UI",
      img: "/mui.svg",
    },
    {
      name: "React",
      img: "/react.svg",
    },
    {
      name: "Angular",
      img: "/angular.svg",
    },
    {
      name: "Vue",
      img: "/vue.svg",
    },
    {
      name: "Node",
      img: "/node.svg",
    },
    {
      name: "MongoDB",
      img: "/mongoDB.svg",
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#273e4c66",
      }}
      id="skills"
    >
      {/* ontainer  */}
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h3" sx={{ color: "#273e4c" }}>
            My Skills
          </Typography>
          {/* <Box sx={{width:'60px',height:'4px' ,backgroundColor:'#922f45',marginTop:'10px'}}></Box> */}
          <Box
            sx={{
              width: "130px",
              height: "4px",
              backgroundColor: "#922f45",
              marginTop: "10px",
            }}
          ></Box>
        </Box>

        <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-between"  > 

        
        {
      skils.map((skil)=>{
        return(
        <Box sx={{display:'flex',justifyContent:'space-between',margin:'20px 0',alignItems:'center',borderRadius:'5px',backgroundColor:'white',padding:'15px  ',width:'200px'}} > 

          <img src={skil.img} width='41px'/>
          <Typography>
            {skil.name}
          </Typography>
        </Box>
      )
      })
    }
      </Stack>
      </Container>
    </Box>
  );
};

export default Skils;
