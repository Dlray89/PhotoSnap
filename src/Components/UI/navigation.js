import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  makeStyles,
  IconButton,
  useTheme,
  useMediaQuery,
  Hidden
} from "@material-ui/core";
import Hamburger from "@material-ui/icons/Menu";
import logo from "../../assets/shared/desktop/logo.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "white",
    zIndex:  1,
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down('sm')]:{
    
    }
  },
  toolbar:{
    [theme.breakpoints.down('sm')]:{
    }
  },
  logoContainer: {
    color: "black",
    width: "15%",
    [theme.breakpoints.down('sm')]:{
        width:'45%',
        marginLeft:'3em'
    }
  },
  Logo: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
    },
  },
  linksContainer: {
    color: "black",
    width: "50%",
    [theme.breakpoints.down("md")]: {},
  },
  links:{
      textDecoration:'none',
      color: 'black',
      '&:hover':{
        color:'#dfdfdf'
      }
  },
  
  navButtonContainer: {
      
  },
  navButton: {
      background:'black',
      color:'white',
      borderRadius:0,
      '&:hover':{
        color:'black',

      }
  },
  mobileNavDrawer:{
      height:'20em',
      width:'100%'


  },
  mobileLinksContainer:{
    [theme.breakpoints.down('sm')]:{
    }
  },
  menuButton:{
    [theme.breakpoints.down('sm')]:{
        width:'20%'
    }
  },
  exitButtonContainer:{
    color:'black', 
    width:'20%',
    textAlign:'center'
  },
  exitButton:{
    width:'100%'
  },
  menuButtonContainer:{
      [theme.breakpoints.down('sm')]:{
          textAlign:'center',
          marginBottom:'1em'
      }
  },
  menuNavButton:{
      margin: '0 auto',
      borderRadius:0,
      background:'black',
      color:'white'
  }
}));

const Navigation = () => {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const [toggleNav, setToggleNav] = useState(false)
  const theme = useTheme()
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'))


  // const handleMobileOpen = () => {
  //   setOpen(true);
  // };

  // const handleMobileClose = () => {
  //   setOpen(false);
  // };

  const toggleNavOpen = () => {
      setToggleNav(true)
  }

  const toggleNavClose= () => {
    setToggleNav(false)
}

  const deskTopNav = (
    <React.Fragment>
      <Grid
        className={classes.linksContainer}
        item
        container
        justify="space-evenly"
        alignItems="center"
        direction="row"
      >
        <Grid item component={Link} to='/stories' className={classes.links}>
          Stories
        </Grid>
        <Grid item component={Link} to='/features' className={classes.links}>
          Features
        </Grid>
        <Grid item component={Link} to='/pricing' className={classes.links}>
          Pricing
        </Grid>
      </Grid>
    </React.Fragment>
  );





  const mobileNavBar = (
    <React.Fragment>
         <Hidden smDown>
        <Grid container direction="column" className={classes.mobileLinksContainer}>
           
          <Grid item className={classes.mobileLink}>Stories</Grid>
          <Grid item>Features</Grid>
          <Grid item>Pricing</Grid>
          
        </Grid>
        </Hidden>
        {toggleNav ? 
        <Grid container direction='column' alignItems='center' className={classes.exitButtonContainer}>
            <Grid item container alignItems='center'>
                <Grid item component={Button} onClick={toggleNavClose} className={classes.exitButton} >
                    X
                </Grid>
            </Grid>

            <Grid  item container direction='column' justify='space-between' alignItems='center' style={{ position:'absolute', bottom:'-10em', left:'0%', width:'100%',  background:'#eeeff4', height:'10em'}} >         
            <Grid  item component={Link} style={{textDecoration:'none', color:'black'}} to='/stories' onClick={toggleNavClose} >Stories</Grid>
             <Grid  item  component={Link} style={{textDecoration:'none', color:'black'}} to='/features' onClick={toggleNavClose}>Features</Grid>
             <Grid  item component={Link} style={{textDecoration:'none', color:'black'}} to='/pricing' onClick={toggleNavClose}>Pricing</Grid>
            <Grid  item  className={classes.menuButtonContainer} ><Button className={classes.menuNavButton} variant='contained'>Get an invite</Button></Grid>
        
            
            
            </Grid>
           </Grid>
:
       <IconButton onClick={toggleNavOpen} className={classes.menuButton}> 
        <Hamburger />
      </IconButton>
      
}
     
    </React.Fragment>
  );

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify={matchSM ? 'space-between' : "space-evenly"}
            alignItems="center"
          >
            <Grid component={Link} to='/' item container className={classes.logoContainer} onClick={toggleNavClose}>
              <img
                className={classes.Logo}
                alt="logo of photosnap"
                src={logo}
              />
            </Grid>
                {matchSM ? mobileNavBar : deskTopNav}
            <Hidden smDown>
            <Grid item className={classes.navButtonContainer}>
              <Button variant="contained" className={classes.navButton}>
                Get an Invite
              </Button>
            </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
