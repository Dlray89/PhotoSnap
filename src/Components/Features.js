import { Grid, makeStyles, Button, Hidden, useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";
import heroImg from "../assets/features/desktop/hero.jpg";
import heroImgMobile from "../assets/features/mobile/hero.jpg";

import exposure from "../assets/features/desktop/boost-exposure.svg";
import customDomain from "../assets/features/desktop/custom-domain.svg";
import dragDrop from "../assets/features/desktop/drag-drop.svg";
import embed from "../assets/features/desktop/embed.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import responsive from "../assets/features/desktop/responsive.svg";

import weInBeta from '../assets/shared/desktop/bg-beta.jpg'
import weInBetaMobile from '../assets/shared/mobile/bg-beta.jpg'
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";

const features = [
  {
    id: 1,
    icon: responsive,
    title: " 100% Responsive",
    details:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    id: 2,
    icon: noLimit,
    title: "  No Photo Upload Limit",
    details:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    id: 3,
    icon: embed,
    title: " Available to Embed",
    details:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
  {
    id: 4,
    icon: customDomain,
    title: "Custom Domain",
    details:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    id: 5,
    icon: exposure,
    title: "Boost Your Exposure",
    details:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    id: 6,
    icon: dragDrop,
    title: "Drag & Drop Image",
    details:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

const useStyles = makeStyles((theme) => ({
  features: {},
  heroContainer: {
    backgroundImage: "url(" + heroImg + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 100%, cover",
    backgroundPosition: "right",
    width: "100%",
    height: "25em",
    background: "black",
    [theme.breakpoints.down('sm')]:{
        backgroundSize:'100% 100%, cover',
        backgroundImage: "url(" + heroImgMobile + ")",
        backgroundRepeat: "no-repeat",
        height:'20em'
    }
  },
  heroDetails: {
    width: "40%",
    margin: "auto 0",
    marginLeft: "4em",
    [theme.breakpoints.down('sm')]:{
        background:'black',
        width:'100%',
        margin:0,
        
    }
  },
  heroTitle: {
    color: "white",
    fontSize: "4em",
    [theme.breakpoints.down('sm')]:{
        color:'white',
        fontSize:'4em',
        margin:'auto 0',
        marginTop:'1em',
        marginLeft:"0.33em",
        
        width:'95%'
    }
  },
  heroSubTitle: {
    color: "white",
    fontSize: "1.2em",
    lineHeight: 1.4,
    [theme.breakpoints.down('sm')]:{
        fontSize:'1.3em',
        
        width:'95%',
        marginLeft:'1em',
        marginBottom:'3em'
    }
  },
  colorBlock: {
    background: "linear-gradient(to top, #12c2e9, #c471ed, #f64f59)",
    height: "9em",
    width: "0.35em",
    margin: "auto 0",
    [theme.breakpoints.down('sm')]:{
        background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
        height:'0.25em',
        width:'15em',
        marginLeft:'2em'
    }
  },
  featureContainer: {
      padding:'3em'
  },
  featureBlock: {
   
    width: "30%",
    margin: "0 auto",
    marginBottom:'2em',
    [theme.breakpoints.down('md')]:{
        width:'50%',
        
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%'
    }
  },
  featureLogoContainer: {
    
  },
  featureLogo: {
      width:'5em'
  },
  featureTitle: {
      fontWeight:500,
  },
  featureDetails: {
      width:'90%',
      margin:'0 auto',
      textAlign:'center',
      [theme.breakpoints.down('md')]:{
          
          width:'60%'
      },
      [theme.breakpoints.down('sm')]:{
          width:'100%'
      }
  },
  wereInBetaContainer:{
    backgroundImage:'url(' + weInBeta +')',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100% 100%, cover',
    width:'100%',
    height:'20em',
    borderLeft: "solid 4px transparent",
    borderImage: "linear-gradient(to top, #12c2e9, #c471ed, #f64f59)",
    borderImageSlice: 1,
    [theme.breakpoints.down('sm')]:{
        backgroundImage:'url(' + weInBetaMobile +')',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100% 100%, cover',
    }
  },
  wereInBetaTitle:{
    color:'white',
    
    fontSize:'3em',
    width:'30%',
    margin:'auto 2em',
    [theme.breakpoints.down('sm')]:{
        width:'82%',
        margin:'0 auto',
        fontSize:'2.6em'
    }
  },
  wereInBetaButtonContainer:{
    
    margin:'auto 9em',
    [theme.breakpoints.down('sm')]:{
        width:'82%',
        margin:'0 auto'
    }
  },
  wereInBetaButton:{
    color:'white',
    fontSize:'1.1em',
    "&:hover": {
      textDecoration: "underline",
    },
    
  }

}));

const Features = () => {
  const classes = useStyles();
  const theme = useTheme()
  const matchSm = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Grid className={classes.features} container>
      <Grid item container direction="row" className={classes.heroContainer}>
          <Hidden smDown><div className={classes.colorBlock}></div></Hidden>
        
        <Hidden smDown>
        <Grid item container direction="column" className={classes.heroDetails}>
          <Grid item className={classes.heroTitle}>
            Features
          </Grid>
          <Grid item className={classes.heroSubTitle}>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </Grid>
        </Grid>
        </Hidden>
      </Grid>

      <Hidden mdUp>
      <Grid item container direction="column" className={classes.heroDetails}>
      <div className={classes.colorBlock}></div>
          <Grid item className={classes.heroTitle}>
            Features
          </Grid>
          <Grid item className={classes.heroSubTitle}>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </Grid>
        </Grid>
      </Hidden>

      <Grid item container direction='row' className={classes.featureContainer}>
        {features.map((feature) => (
          <Grid
            item
            container
            direction="column"
            justify="space-evenly"
            alignItems='center'
            className={classes.featureBlock}
          >
            <Grid item className={classes.featureLogoContainer}>
              <img className={classes.featureLogo} src={feature.icon} alt='icons' />
            </Grid>

            <Grid item className={classes.featureTitle}>{feature.title}</Grid>

            <Grid item className={classes.featureDetails}>{feature.details}</Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item container direction={matchSm ? "column":'row'} justify={matchSm ? 'space-evenly':'space-between'} className={classes.wereInBetaContainer}>
          <Grid item className={classes.wereInBetaTitle}>
                WE'RE IN BETA.
                GET YOUR Invite
                TODAY!
          </Grid>

          <Grid item className={classes.wereInBetaButtonContainer}>
              <Button className={classes.wereInBetaButton}>Get an invite <ArrowRightAlt /></Button>
          </Grid>

      </Grid>
    </Grid>
  );
};

export default Features;
