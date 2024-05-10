import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AssignmentTurnedInTwoToneIcon from '@mui/icons-material/AssignmentTurnedInTwoTone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Container, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {

  const pages=[
    {name:'Home',icon:'/home.svg',link:'#home'}
    , {name:'About',icon:'/about.svg',link:'#about'}
    , {name:'Portfolio',icon:'/project.svg',link:'#portfolio'}
    , {name:'Skils',icon:'/skill.svg',link:'#skills'}
    , {name:'Contact',icon:'/home.svg',link:'#contact'}
]
const skills=[
  {name:'JavaScript',icon:'/js.svg'}
  , {name:'Angular',icon:'/angular.svg'}
  , {name:'React',icon:'/react.svg'}
  , {name:'Vue',icon:'/vue.svg'}
  , {name:'Node',icon:'/node.svg'}
]

const Informations=[
  {name:'Cairo, Egypt',icon:LocationOnIcon}
  , {name:'+20 11 230 83 52',icon:PhoneIcon}
  , {name:'https://www.linkedin.com/in/samar-ali-elsayed',icon:LinkedInIcon}
  , {name:'samaralielsayed52@gmail.com',icon:EmailIcon}
  , {name:'https://github.com/samaralielsayed',icon:GitHubIcon}
]
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#273e4c', height: '380px' }}>
      <Container>

      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="AssignmentTurnedInTwoToneIcon"
          sx={{ mr: 2 }}
        >
          <AssignmentTurnedInTwoToneIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Samar Portfollio
        </Typography>
      </Toolbar>

      <Stack flexDirection="row"
      justifyContent="space-between" >
        <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <ListItem >
          <ListItemText
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: "bold",
                fontSize: "20px",
                
              },
            }}
          >
            Pages
          </ListItemText>
        </ListItem>
        {
        pages.map((page)=>{
          return(
            <ListItem component="a" href={page.link} key={page.name} sx={{color:'white'}}>
          <ListItemIcon>
          <img src={page.icon}  width='30px' />
          </ListItemIcon>
          <ListItemText primary={page.name} />
        </ListItem>
          )
        })
      }
      </List>

      <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <ListItem >
          <ListItemText
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: "bold",
                fontSize: "20px",
                
              },
            }}
          >
           About
          </ListItemText>
        </ListItem>

        {
        Informations.map((info)=>{
          return(
            <ListItem component="a" href={info.name} key={info.name} sx={{color:'white'}}>
          <ListItemIcon>
         
          {info.icon && React.createElement(info.icon, { sx: { color: 'white' } })}
          </ListItemIcon>
          <ListItemText primary={info.name} />
        </ListItem>
          )
        })
      }
      </List>
      
      <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <ListItem >
          <ListItemText
            sx={{
              "& .MuiListItemText-primary": {
                fontWeight: "bold",
                fontSize: "20px",
                
              },
            }}
          >
            Skills
          </ListItemText>
        </ListItem>
        {
       skills.map((skill)=>{
          return(
            <ListItem key={skill.name} sx={{color:'white'}}>
          <ListItemIcon>
          <img src={skill.icon}  width='30px'/>
          </ListItemIcon>
          <ListItemText primary={skill.name} />
        </ListItem>
          )
        })
      }
      </List>
      </Stack>
      </Container>
    </AppBar>
  </Box>
  )
}

export default Footer