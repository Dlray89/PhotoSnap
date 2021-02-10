import React from "react";
import {
  makeStyles,
  Grid,
  Button,
//   useTheme,
//   useMediaQuery,
  Hidden,
} from "@material-ui/core";

import voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/desktop/architecturals.jpg";
import waves from "../assets/stories/desktop/behind-the-waves.jpg";
import calmWaters from "../assets/stories/desktop/calm-waters.jpg";
import cityScapes from "../assets/stories/desktop/cityscapes.jpg";
import darkForest from "../assets/stories/desktop/dark-forest.jpg";
import Africa from "../assets/stories/desktop/king-on-africa.jpg";
import landOfDreams from "../assets/stories/desktop/land-of-dreams.jpg";
import milkyWay from "../assets/stories/desktop/milky-way.jpg";
import appalacia from "../assets/stories/desktop/moon-of-appalacia.jpg";
import mountains from "../assets/stories/desktop/mountains.jpg";
import rageOfTheSea from "../assets/stories/desktop/rage-of-the-sea.jpg";
import runningFree from "../assets/stories/desktop/running-free.jpg";
import somwarpet from "../assets/stories/desktop/somwarpet.jpg";
import tripsToNowhere from "../assets/stories/desktop/trip-to-nowhere.jpg";
import unforseen from "../assets/stories/desktop/unforeseen-corners.jpg";
import worldTour from "../assets/stories/desktop/world-tour.jpg";

import voyageMobile from "../assets/stories/mobile/18-days-voyage.jpg";
import architecturalsMobile from "../assets/stories/mobile/architecturals.jpg";
import wavesMobile from "../assets/stories/mobile/behind-the-waves.jpg";
import calmWatersMobile from "../assets/stories/mobile/calm-waters.jpg";
import cityScapesMobile from "../assets/stories/mobile/cityscapes.jpg";
import darkForestMobile from "../assets/stories/mobile/dark-forest.jpg";
import AfricaMobile from "../assets/stories/mobile/king-on-africa.jpg";
import landOfDreamsMobile from "../assets/stories/mobile/land-of-dreams.jpg";
import milkyWayMobile from "../assets/stories/mobile/milky-way.jpg";
import appalaciaMobile from "../assets/stories/mobile/moon-of-appalacia.jpg";
import mountainsMobile from "../assets/stories/mobile/mountains.jpg";
import rageOfTheSeaMobile from "../assets/stories/mobile/rage-of-the-sea.jpg";
import runningFreeMobile from "../assets/stories/mobile/running-free.jpg";
import somwarpetMobile from "../assets/stories/mobile/somwarpet.jpg";
import tripsToNowhereMobile from "../assets/stories/mobile/trip-to-nowhere.jpg";
import unforseenMobile from "../assets/stories/mobile/unforeseen-corners.jpg";
import worldTourMobile from "../assets/stories/mobile/world-tour.jpg";

const useStyles = makeStyles((theme) => ({
  stories: {},
  heroContainer: {
    backgroundImage: "url(" + appalacia + ")",
    backgroundSize: "100% 100%, cover",
    backgroundRepeat: "no-repeat",
    height: "40em",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + appalaciaMobile + ")",
      backgroundSize: "100% 100%, cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "20em",
    },
  },
  heroBoxOne: {
    width: "30%",
    color: "white",
    marginTop: "5em",
    marginLeft: "2.5em",
    textAlign: "left",
    fontSize: "1.2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
      marginLeft: "2.15em",
      marginTop: "7em",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      fontSize:'0.75em',
      marginTop:'3em',
      marginLeft:'3.95em',
      width:'70%'

    },
  },
  heroBoxTwo: {
    width: "30%",
    fontSize: "3.5em",
    color: "white",
    marginLeft: "0.86em",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      fontSize: "2.5em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      fontSize: "2.5em",
      width:'70%',
      marginLeft:'1.2em',
      marginTop:'0.25em'

    },
  },
  heroBoxThree: {
    width: "30%",
    marginLeft: "3em",
    marginTop: "5em",
    color: "white",
    marginBottom: "1.5em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "70%",
      marginLeft:'3.95em',
      fontSize:'0.75em',
      marginTop:'4em'
    },
  },
  heroBoxThreeDate: {
    width: "30%",
    textAlign: "left",
    marginRight: "2em",
    [theme.breakpoints.down('sm')]:{
        
    }
  },
  heroBoxThreeAuthor: {},
  heroBoxFour: {
    width: "30%",
    color: "white",
    marginLeft: "3em",
    lineHeight: 1.5,
    textAlign: "left",
    marginBottom: "1em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      fontSize: "0.95em",
      width: "70%",
      marginTop:'2em',
      marginLeft:'3em',
      lineHeight:1.5,
      opacity:'60%'
    },
  },
  heroBoxFive: {
    width: "30%",
    marginLeft: "3em",
    textAlign: "left",
    [theme.breakpoints.down('sm')]:{
        width:'70%',
        marginLeft:'2.85em',
        marginTop:'1em',
        marginBottom:'2em'
    }
  },
  heroBoxButton: {
    color: "white",
    [theme.breakpoints.down('sm')]:{
        opacity:'60%'
    }
  },
  storyCards: {
    width: "25%",
    height: "31em",
    backgroundRepeat: "no-repeat",
    "&:hover": {
      marginTop: "-1em",
      borderBottom: "solid 4px transparent",
      borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      borderImageSlice: 1,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      width: "50%",
      backgroundSize: "100% 100%, cover",
      height: "40em",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        backgroundSize: "100% 100%, cover",
        height: "25em",
      },
    },
  },
  storyInfo: {
    marginTop: "23em",
    background: "rgba(27, 20, 17, 0.3)",
    height: "7.95em",
    [theme.breakpoints.down("md")]: {
      marginTop: "32em",
      height: "8em",
      background: "rgba(27, 20, 17, 0.3)",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  storyDate: {
    color: "white",
    marginTop: "0em",
    fontSize: "0.85em",
    marginLeft: "1.2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2.4em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      color: "red",
      
    },
  },
  storyTitle: {
    color: "white",
    fontSize: "1.5em",
    marginLeft: "0.55em",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.2em",
    },
  },
  storyAuthor: {
    color: "white",
    fontSize: "0.85em",
    marginLeft: "1.2em",
    marginBottom: "1em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2.4em",
    },
  },
  storyButtonContainer: {
    color: "white",
    borderTop: "solid 2px white",
    width: "90%",
    margin: "0 auto",
    textAlign: "left",
  },
  storyButton: {
    color: "white",
  },
  mobilestoryCards:{
    
    width: "100%",
    backgroundSize: "100% 100%, cover",
    height: "25em",
    
  },
  mobilestoryInfo: {
   marginTop:'16em',
   background: "rgba(27, 20, 17, 0.3)",
    height:'8.7em'
  },
  mobilestoryDate: {
    marginLeft:'1.4em',
    color:'white',
    marginTop:'0.85em'
  },
  mobilestoryTitle: {
    color:'white',
   marginLeft:'0.85em',
   fontSize:'1.5em'
  },
  mobilestoryAuthor: {
   color:'white',
   marginLeft:'1.4em'
  },
  mobilestoryButtonContainer: {
    borderTop:'solid 2px white',
    width:'90%',
    margin:'0 auto',
    textAlign:'left'

  },
  mobilestoryButton: {
    color: "white",
  },
}));

const stories = [
  {
    id: 1,
    img: mountains,
    date: "April 16th 2020",
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    id: 2,
    img: cityScapes,
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    id: 3,
    img: voyage,
    date: "April 11th 2020",
    title: " 18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    id: 4,
    img: architecturals,
    date: "April 9th 2020",
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
  {
    id: 5,
    img: worldTour,
    date: "April 7th 2020",
    title: "World Tour 2019",
    author: "by Timothy Wagner",
  },
  {
    id: 6,
    img: unforseen,
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    author: "by William Malcolm",
  },
  {
    id: 7,
    img: Africa,
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    author: "by Tim Hillenburg",
  },
  {
    id: 8,
    img: tripsToNowhere,
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
  },
  {
    id: 9,
    img: rageOfTheSea,
    date: "March 19th 2020",
    title: "Rage of The Sea",
    author: "by Mohammed Abdul",
  },
  {
    id: 10,
    img: runningFree,
    date: "March 16th 2020",
    title: "Running Free",
    author: "by Michelle",
  },
  {
    id: 11,
    img: waves,
    date: "March 11th 2020",
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
  },
  {
    id: 12,
    img: calmWaters,
    date: "March 9th 2020",
    title: "Calm Waters",
    author: "by Samantha Brooke",
  },
  {
    ID: 13,
    img: milkyWay,
    date: "March 5th 2020",
    title: "The Milky Way",
    author: "by Benjamin Cruz",
  },
  {
    id: 14,
    img: darkForest,
    date: "March 4th 2020",
    title: "Night at The Dark Forest",
    author: "by  Mohammed Abdul",
  },
  {
    id: 15,
    img: somwarpet,
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    author: "by Michelle",
  },
  {
    id: 16,
    img: landOfDreams,
    date: "February 25th 2020",
    title: "Land of Dreams",
    author: " by William Malcolm",
  },
];

const storiesMobile = [
  {
    id: 1,
    img: mountainsMobile,
    date: "April 16th 2020",
    title: "The Mountains",
    author: "by John Appleseed",
  },
  {
    id: 2,
    img: cityScapesMobile,
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    author: "by Benjamin Cruz",
  },
  {
    id: 3,
    img: voyageMobile,
    date: "April 11th 2020",
    title: " 18 Days Voyage",
    author: "by Alexei Borodin",
  },
  {
    id: 4,
    img: architecturalsMobile,
    date: "April 9th 2020",
    title: "Architecturals",
    author: "by Samantha Brooke",
  },
  {
    id: 5,
    img: worldTourMobile,
    date: "April 7th 2020",
    title: "World Tour 2019",
    author: "by Timothy Wagner",
  },
  {
    id: 6,
    img: unforseenMobile,
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    author: "by William Malcolm",
  },
  {
    id: 7,
    img: AfricaMobile,
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    author: "by Tim Hillenburg",
  },
  {
    id: 8,
    img: tripsToNowhereMobile,
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    author: "by Felicia Rourke",
  },
  {
    id: 9,
    img: rageOfTheSeaMobile,
    date: "March 19th 2020",
    title: "Rage of The Sea",
    author: "by Mohammed Abdul",
  },
  {
    id: 10,
    img: runningFreeMobile,
    date: "March 16th 2020",
    title: "Running Free",
    author: "by Michelle",
  },
  {
    id: 11,
    img: wavesMobile,
    date: "March 11th 2020",
    title: "Behind the Waves",
    author: "by Lamarr Wilson",
  },
  {
    id: 12,
    img: calmWatersMobile,
    date: "March 9th 2020",
    title: "Calm Waters",
    author: "by Samantha Brooke",
  },
  {
    ID: 13,
    img: milkyWayMobile,
    date: "March 5th 2020",
    title: "The Milky Way",
    author: "by Benjamin Cruz",
  },
  {
    id: 14,
    img: darkForestMobile,
    date: "March 4th 2020",
    title: "Night at The Dark Forest",
    author: "by  Mohammed Abdul",
  },
  {
    id: 15,
    img: somwarpetMobile,
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    author: "by Michelle",
  },
  {
    id: 16,
    img: landOfDreamsMobile,
    date: "February 25th 2020",
    title: "Land of Dreams",
    author: " by William Malcolm",
  },
];

const StoriesPage = () => {
  const classes = useStyles();
//   const theme = useTheme();
//   const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid className={classes.stories} container direction="column">
        
      <Grid item container direction="column" className={classes.heroContainer}>
          <Hidden smDown>
        <Grid item className={classes.heroBoxOne}>
          {" "}
          Last month's featured story
        </Grid>
        <Grid item className={classes.heroBoxTwo}>
          {" "}
          Hazy full moon of Appalachia
        </Grid>

        <Grid item container direction="row" className={classes.heroBoxThree}>
          <Grid item className={classes.heroBoxThreeDate}>
            {" "}
            March 2nd 2020
          </Grid>
          <Grid item className={classes.heroBoxThreeAuthor}>
            {" "}
            by John Appleseed
          </Grid>
        </Grid>
        <Grid item className={classes.heroBoxFour}>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </Grid>

        <Grid item className={classes.heroBoxFive}>
          <Button className={classes.heroBoxButton}>Read the Story</Button>
        </Grid>
      </Hidden>
      </Grid>  
      

      <Hidden mdUp>
      <Grid item container direction="column" style={{background:'black'}}>
          
          <Grid item className={classes.heroBoxOne}>
            {" "}
            Last month's featured story
          </Grid>
          <Grid item className={classes.heroBoxTwo}>
            {" "}
            Hazy full moon of Appalachia
          </Grid>
  
          <Grid item container direction="row" className={classes.heroBoxThree}>
            <Grid item className={classes.heroBoxThreeDate}>
              {" "}
              March 2nd 2020
            </Grid>
            <Grid item className={classes.heroBoxThreeAuthor}>
              {" "}
              by John Appleseed
            </Grid>
          </Grid>
          <Grid item className={classes.heroBoxFour}>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </Grid>
  
          <Grid item className={classes.heroBoxFive}>
            <Button className={classes.heroBoxButton}>Read the Story</Button>
          </Grid>
        
        </Grid>  

      </Hidden>

      <Grid item container>
        <Hidden smDown>
          {stories.map((story) => (
            <Grid
              item
              className={classes.storyCards}
              style={{ backgroundImage: "url(" + story.img + ")" }}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="flex-start"
                className={classes.storyInfo}
              >
                <Grid item className={classes.storyDate}>
                  {story.date}
                </Grid>
                <Grid item className={classes.storyTitle}>
                  {story.title}
                </Grid>
                <Grid item className={classes.storyAuthor}>
                  {story.author}
                </Grid>
                <Grid item className={classes.storyButtonContainer}>
                  {" "}
                  <Button className={classes.storyButton}>See Story</Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Hidden>

        <Hidden mdUp>
          {storiesMobile.map((story) => (
            <Grid
              item
              className={classes.mobilestoryCards}
              style={{ backgroundImage: "url(" + story.img + ")" }}
            >
              <Grid
                item
                container
                direction="column"
                alignItems="flex-start"
                className={classes.mobilestoryInfo}
              >
                <Grid item className={classes.mobilestoryDate}>
                  {story.date}
                </Grid>
                <Grid item className={classes.mobilestoryTitle}>
                  {story.title}
                </Grid>
                <Grid item className={classes.mobilestoryAuthor}>
                  {story.author}
                </Grid>
                <Grid item className={classes.mobilestoryButtonContainer}>
                  {" "}
                  <Button className={classes.mobilestoryButton}>See Story</Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default StoriesPage;
