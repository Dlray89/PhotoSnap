import React from "react";
import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import HeroCardImg from "../assets/home/desktop/create-and-share.jpg";
import beautifulCard from "../assets/home/desktop/beautiful-stories.jpg";
import designedCard from "../assets/home/desktop/designed-for-everyone.jpg";
import responsive from "../assets/features/desktop/responsive.svg";
import noLimit from "../assets/features/desktop/no-limit.svg";
import embed from "../assets/features/desktop/embed.svg";

import mountains from "../assets/stories/desktop/mountains.jpg";
import cityscapes from "../assets/stories/desktop/cityscapes.jpg";
import voyage from "../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../assets/stories/desktop/architecturals.jpg";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import HeroCardMobile from "../assets/home/mobile/create-and-share.jpg";
import beautifulMobile from "../assets/home/mobile/beautiful-stories.jpg";
import designedMobile from "../assets/home/mobile/designed-for-everyone.jpg";

import mountainsMobile from "../assets/stories/mobile/mountains.jpg";
import cityscapesMobile from "../assets/stories/mobile/cityscapes.jpg";
import voyageMobile from "../assets/stories/mobile/18-days-voyage.jpg";
import architecturalsMobile from "../assets/stories/mobile/architecturals.jpg";

const useStyles = makeStyles((theme) => ({
  landingPage: {},
  firstCOntainer: {
    background: "url(" + HeroCardImg + ")",
    backgroundRepeat: "no-repeat",
    height: "30em",
    backgroundPosition: "right",
    backgroundSize: "60%",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "40% 100%, cover",
    },
    [theme.breakpoints.down("sm")]: {
      background: "url(" + HeroCardMobile + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%, cover",
      width: "100%",
      marginRight: "auto",
      height: "20em",
    },
  },
  colorBlock: {
    background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    height: "16em",
    width: "0.35em",
    margin: "auto 0",
    [theme.breakpoints.down("sm")]: {
      height: "0.55em",
      width: "40%",
    },
  },
  HeroCard: {
    width: "39%",
    margin: "auto 0",
    marginRight: "2em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0em",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      background: "black",
      width: "100%",
    },
  },
  heroCardTitle: {
    color: "white",
    textAlign: "left",
    margin: "0 auto",
    fontSize: "2.3em",
    width: "50%",
    marginBottom: "0.35em",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        width: "65%",
        margin: "0 auto",
        fontSize: "2.8em",
        marginBottom: "0.25em",
        marginTop: "2em",
      },
    },
  },
  heroCardSubtitle: {
    color: "white",
    textAlign: "left",
    margin: "0 auto",
    width: "50%",
    fontSize: "0.82em",
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1em",
      width: "60%",
      [theme.breakpoints.down("sm")]: {
        background: "black",
        width: "65%",
        margin: "0 auto",
        marginBottom: "2em",
      },
    },
  },
  heroCardButtonContainer: {
    marginLeft: "8em",
    [theme.breakpoints.down("md")]: {
      width: "60%",

      margin: "0 auto",
      textAlign: "left",
    },
    [theme.breakpoints.down("sm")]: {
      background: "black",
      width: "65%",
      margin: "0 auto",
      marginBottom: "3em",
    },
  },
  heroCardButton: {
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
    [theme.breakpoints.down("md")]: {},
  },
  secondCOntainer: {
    background: "url(" + beautifulCard + ")",
    backgroundRepeat: "no-repeat",
    height: "30em",
    backgroundPosition: "left",
    backgroundSize: "57.5%",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "40% 100%, cover",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + beautifulMobile + ")",
      backgroundSize: "100% 100%, cover",
      marginRight: "auto",
      height: "20em",
    },
  },
  beautifulCard: {
    width: "39%",
    margin: "auto 0",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      marginRight: "auto",
    },
  },
  beautifulTitle: {
    color: "black",
    textAlign: "left",
    margin: "0 auto",
    fontSize: "3em",
    width: "62%",
    marginBottom: "0.35em",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
      width: "60%",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "70%",
        margin: "0 auto",
        fontSize: "2.8em",
        marginBottom: "0.25em",
        marginTop: "1em",
        textAlign: "left",
      },
    },
  },
  beautifulSubtitle: {
    color: "black",
    textAlign: "left",
    margin: "0 auto",
    width: "62%",
    fontSize: "0.82em",
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1em",
      width: "60%",
      margin: "1em auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: "0 auto",
      marginBottom: "2em",
      textAlign: "left",
    },
  },
  beautifulButtonCard: {
    marginRight: "18em",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      margin: "0 auto",
      textAlign: "left",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: "0 auto",
      marginBottom: "3em",
    },
  },
  beautifulButton: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  thirdContainer: {
    background: "url(" + designedCard + ")",
    backgroundRepeat: "no-repeat",
    height: "37em",
    backgroundPosition: "right",
    backgroundSize: "60%  cover",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "45% 100%,  cover",
    },
    [theme.breakpoints.down("sm")]: {
      background: "url(" + designedMobile + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%, cover",
      marginRight: "auto",
      height: "20em",
    },
  },
  DesignedCard: {
    width: "39%",
    margin: "auto 0",
    marginRight: "2em",
    [theme.breakpoints.down("md")]: {
      width: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: 0,
      marginRight: "auto",
    },
  },
  designedTitle: {
    color: "black",
    textAlign: "left",
    margin: "0 auto",
    fontSize: "2.3em",
    width: "50%",
    marginBottom: "0.35em",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
      width: "55%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: "0 auto",
      fontSize: "2.8em",
      marginBottom: "0.25em",
      marginTop: "1em",
      textAlign: "left",
    },
  },
  designedSubtitle: {
    color: "black",
    textAlign: "left",
    margin: "0 auto",
    width: "50%",
    fontSize: "0.82em",
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: "0 auto",
      marginBottom: "2em",
      textAlign: "left",
    },
  },
  designedButtonContainer: {
    marginLeft: "8em",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "50%",
      textAlign: "left",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      margin: "0 auto",
      marginBottom: "3em",
    },
  },
  designedButton: {
    color: "black",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  story1: {
    backgroundImage: "url(" + mountains + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%, cover",

    height: "30em",
    width: "25%",
    "&:hover": {
      marginTop: "-2em",
      borderBottom: "solid 4px transparent",
      borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      borderImageSlice: 1,
    },
  },

  story2: {
    backgroundImage: "url(" + cityscapes + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%, cover",


    height: "30em",
    width: "25%",
    "&:hover": {
      marginTop: "-2em",
      borderBottom: "solid 4px transparent",
      borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      borderImageSlice: 1,
    },
  },
  story3: {
    backgroundImage: "url(" + voyage + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%, cover",

    height: "30em",
    width: "25%",
    "&:hover": {
      marginTop: "-2em",
      borderBottom: "solid 4px transparent",
      borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      borderImageSlice: 1,
    },
  },
  story4: {
    backgroundImage: "url(" + architecturals + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%, cover",

    height: "30em",
    width: "25%",
    "&:hover": {
      marginTop: "-2em",
      borderBottom: "solid 4px transparent",
      borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      borderImageSlice: 1,
    },
  },
  storyTitle: {
    color: "white",
    width: "50%",
    fontSize: "1.2em",
    textAlign: "left",
    marginTop: "18em",
    marginLeft: "1.9em",
    [theme.breakpoints.down("md")]: {
      marginTop: "35em",
      marginLeft: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginTop: "18em",
      marginLeft: "2.15em",
    },
  },
  storyAuthor: {
    color: "white",
    fontSize: "0.85em",
    width: "50%",
    textAlign: "left",
    marginBottom: "1.5em",
    marginLeft: "2.6em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4.5em",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginBottom: "1em",
      marginLeft: "3em",
    },
  },
  storyButtonContainer: {
    color: "white",
    borderTop: "solid 1px white",
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      borderTop: "solid 1px white",
      width: "80%",
      margin: "0 auto",
    },
  },
  storyButton: {
    color: "white",
    fontSize: "0.75em",
    width: "100%",
  },
  features: {
    marginTop: "2em",
    marginBottom: "2em",
    [theme.breakpoints.down("sm")]: {
      
      margin: 0,
      marginRight: "auto",
    },
  },
  featuresContainer: {
    width: "30%",
    height: "11em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      
    },
  },
  featureLogoContainer: {},
  featureLogo: {},
  featureTitle: {},
  featureSubtitle: {},
  tabletStoryContainer: {
    marginTop: "-1.7em",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      marginRight: "auto",
    },
  },
  tabletStoriesOne: {
    width: "50%",
    maxheight: "53em",
    backgroundImage: "url(" + mountains + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + mountainsMobile + ")",
      backgroundSize: "100% 100%, cover",
      backgroundRepeat: "no-repeat",
      height: "30em",
      width: "100%",
      marginRight: "auto",
    },
  },
  tabletStoriesTwo: {
    width: "50%",
    maxheight: "53em",
    backgroundImage: "url(" + cityscapes + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + cityscapesMobile + ")",
      backgroundSize: "100% 100%, cover",
      backgroundRepeat: "no-repeat",
      height: "30em",
      width: "100%",
      marginRight: "auto",
    },
  },
  tabletStoriesThree: {
    width: "50%",
    maxheight: "53em",
    backgroundImage: "url(" + voyage + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + voyageMobile + ")",
      backgroundSize: "100% 100%, cover",
      backgroundRepeat: "no-repeat",
      height: "30em",
      width: "100%",
      marginRight: "auto",
    },
  },
  tabletStoriesFour: {
    width: "50%",
    maxheight: "53em",
    backgroundImage: "url(" + architecturals + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + architecturalsMobile + ")",
      backgroundSize: "100% 100%, cover",
      backgroundRepeat: "no-repeat",
      height: "30em",
      width: "100%",
      marginRight: "auto",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));

  const storiesDeskTOp = (
    <React.Fragment>
      <Grid item container direction="row">
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.story1}
        >
          <Grid item className={classes.storyTitle}>
            The Mountains
          </Grid>
          <Grid item className={classes.storyAuthor}>
            by John Appleseed
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.story2}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.storyTitle}>
            {" "}
            Sunset Cityscapes
          </Grid>
          <Grid item className={classes.storyAuthor}>
            {" "}
            by Benjamin Cruz
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.story3}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.storyTitle}>
            18 Days Voyage
          </Grid>
          <Grid item className={classes.storyAuthor}>
            {" "}
            by Alexei Borodin
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.story4}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.storyTitle}>
            {" "}
            Architecturals
          </Grid>
          <Grid item className={classes.storyAuthor}>
            {" "}
            by Samantha Brooke
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );

  const tabletStories = (
    <Grid
      item
      container
      direction="column"
      justify="center"
      className={classes.tabletStoryContainer}
    >
      <Grid item container direction={matchSM ? "column" : "row"}>
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.tabletStoriesOne}
        >
          <Grid item className={classes.storyTitle}>
            The Mountains
          </Grid>
          <Grid item className={classes.storyAuthor}>
            by John Appleseed
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.tabletStoriesTwo}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.storyTitle}>
            {" "}
            Sunset Cityscapes
          </Grid>
          <Grid item className={classes.storyAuthor}>
            {" "}
            by Benjamin Cruz
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction={matchSM ? "column" : "row"}>
        <Grid
          item
          container
          className={classes.tabletStoriesThree}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.storyTitle}>
            18 Days Voyage
          </Grid>
          <Grid item className={classes.storyAuthor}>
            {" "}
            by Alexei Borodin
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.tabletStoriesFour}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item className={classes.storyTitle}>
            {" "}
            Architecturals
          </Grid>
          <Grid item className={classes.storyAuthor}>
            {" "}
            by Samantha Brooke
          </Grid>

          <Grid item container className={classes.storyButtonContainer}>
            <Button className={classes.storyButton}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>Read Story</Grid>
                <Grid item>
                  <ArrowRightAltIcon />{" "}
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return (
    <Grid
      className={classes.landingPage}
      container
      direction="column"
      alignItems="center"
    >
      <Grid item container direction="row" className={classes.firstCOntainer}>
        <Hidden mdDown>
          <Grid item className={classes.colorBlock}></Grid>
        </Hidden>

        <Hidden smDown>
          <Grid
            className={classes.HeroCard}
            item
            container
            direction="column"
            alignItems="flex-start"
          >
            <Grid item className={classes.heroCardTitle}>
              Create and share your photo Stories
            </Grid>

            <Grid item className={classes.heroCardSubtitle}>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </Grid>
            <Grid item className={classes.heroCardButtonContainer}>
              <Button className={classes.heroCardButton}>Get an invite</Button>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <Hidden mdUp>
        <Grid
          className={classes.HeroCard}
          item
          container
          direction="column"
          alignItems="flex-start"
        >
          <Hidden mdUp>
            <Grid item className={classes.colorBlock}></Grid>
          </Hidden>
          <Grid item className={classes.heroCardTitle}>
            Create and share your photo Stories
          </Grid>

          <Grid item className={classes.heroCardSubtitle}>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Grid>
          <Grid item className={classes.heroCardButtonContainer}>
            <Button className={classes.heroCardButton}>Get an invite</Button>
          </Grid>
        </Grid>
      </Hidden>

      <Grid item container className={classes.secondCOntainer}>
        <Hidden smDown>
          <Grid
            className={classes.beautifulCard}
            item
            container
            direction="column"
            alignItems="flex-end"
          >
            <Grid item className={classes.beautifulTitle}>
              Beautiful stories everytime
            </Grid>

            <Grid item className={classes.beautifulSubtitle}>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </Grid>

            <Grid item className={classes.beautifulButtonCard}>
              <Button className={classes.beautifulButton}>
                View the stories
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <Hidden mdUp>
        <Grid
          className={classes.beautifulCard}
          item
          container
          direction="column"
          alignItems="flex-end"
        >
          <Grid item className={classes.beautifulTitle}>
            Beautiful stories everytime
          </Grid>

          <Grid item className={classes.beautifulSubtitle}>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </Grid>

          <Grid item className={classes.beautifulButtonCard}>
            <Button className={classes.beautifulButton}>
              View the stories
            </Button>
          </Grid>
        </Grid>
      </Hidden>

      <Grid item container direction="row" className={classes.thirdContainer}>
        <Hidden smDown>
          <Grid
            className={classes.DesignedCard}
            item
            container
            direction="column"
            alignItems="flex-start"
          >
            <Grid item className={classes.designedTitle}>
              Designed for everyone
            </Grid>

            <Grid item className={classes.designedSubtitle}>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </Grid>
            <Grid item className={classes.designedButtonContainer}>
              <Button className={classes.designedButton}>
                {" "}
                View the stories
              </Button>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <Hidden mdUp>
        <Grid
          className={classes.DesignedCard}
          item
          container
          direction="column"
          alignItems="flex-start"
        >
          <Grid item className={classes.designedTitle}>
            Designed for everyone
          </Grid>

          <Grid item className={classes.designedSubtitle}>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </Grid>
          <Grid item className={classes.designedButtonContainer}>
            <Button className={classes.designedButton}>
              {" "}
              View the stories
            </Button>
          </Grid>
        </Grid>
      </Hidden>

      {matchMD ? tabletStories : storiesDeskTOp}

      <Grid
        item
        container
        direction={matchMD ? "column" : "row"}
        justify="center"
        alignItems="center"
        className={classes.features}
      >
        <Grid
          item
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className={classes.featuresContainer}
        >
          <Grid item className={classes.featureLogoContainer}>
            <img
              className={classes.featureLogo}
              alt="logo of three screens"
              src={responsive}
            />
          </Grid>

          <Grid item className={classes.featureTitle}>
            100% Responsive
          </Grid>

          <Grid item className={classes.featureSubtitle}>
            No matter which the device you’re on, our site is fully responsive
            and stories look beautiful on any screen.
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          style={{ height: "11em" }}
          className={classes.featuresContainer}
        >
          <Grid
            item
            style={{ marginBottom: "1em", marginTop: "1em" }}
            className={classes.featureLogoContainer}
          >
            <img
              className={classes.featureLogo}
              alt="logo of three screens"
              src={noLimit}
            />
          </Grid>

          <Grid item className={classes.featureTitle}>
            {" "}
            No Photo Upload Limit
          </Grid>

          <Grid item className={classes.featureSubtitle}>
            Our tool has no limits on uploads or bandwidth. Freely upload in
            bulk and share all of your stories in one go.
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className={classes.featuresContainer}
        >
          <Grid item className={classes.featureLogoContainer}>
            <img
              className={classes.featureLogo}
              alt="logo of three screens"
              src={embed}
            />
          </Grid>

          <Grid item className={classes.featureTitle}>
            {" "}
            Available to Embed
          </Grid>

          <Grid item className={classes.featureSubtitle}>
            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
            videos, Google Maps, and more.
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
