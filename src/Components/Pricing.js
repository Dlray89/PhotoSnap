import {
  Grid,
  makeStyles,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  useTheme,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import React, { useState } from "react";
import heroImg from "../assets/pricing/desktop/hero.jpg";
import heroImgTablet from "../assets/pricing/tablet/hero.jpg";
import heroImgMobile from "../assets/pricing/mobile/hero.jpg";
import weInBeta from "../assets/shared/desktop/bg-beta.jpg";
import weInBetaMobile from "../assets/shared/mobile/bg-beta.jpg";

const useStyles = makeStyles((theme) => ({
  pricing: {},
  heroContainer: {
    backgroundImage: "url(" + heroImg + ")",
    backgroundSize: "50% 100%, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    background: "black",
    width: "100%",
    height: "25em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(" + heroImgTablet + ")",
      backgroundSize: "30% 100%, cover",
      backgroundRepeat: "no-repeat",
      height: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + heroImgMobile + ")",
      backgroundSize: "100% 100%, cover",
      backgroundRepeat: "no-repeat",
      height: "25em",
    },
  },
  heroDetails: {
    width: "40%",
    margin: "auto 0",
    marginLeft: "4em",
    [theme.breakpoints.down("md")]: {
      background: "black",
      width: "69%",
      margin: "auto 0",
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%'
    }
  },
  heroTitle: {
    color: "white",
    fontSize: "4em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "3em",
      margin: "auto 0",
      marginTop: "0.55em",
      marginLeft: "0.33em",
      width: "95%",
      textAlign:'center'
    },
  },
  heroSubTitle: {
    color: "white",
    fontSize: "1.2em",
    lineHeight: 1.4,
    [theme.breakpoints.down("md")]: {
      marginLeft: "3.4em",
      width: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "1em",
      marginBottom: "3em",
      textAlign:'center',
      fontSize:'1em',
      margin:'0 auto'
    },
  },
  colorBlock: {
    background: "linear-gradient(to top, #12c2e9, #c471ed, #f64f59)",
    height: "9em",
    width: "0.35em",
    margin: "auto 0",
    [theme.breakpoints.down("md")]: {
      height: "10em",
    },
    [theme.breakpoints.down("sm")]: {
      background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      height: "0.25em",
      width: "15em",
      marginLeft: "2em",
    },
  },
  switch: {
    width: "40%",
    margin: "2em auto",
    [theme.breakpoints.down('sm')]:{
        width:'59%'
    }
  },
  plans: {
    marginBottom: "10em",
    marginTop: "4em",
  },
  plansContainer: {
    background: "black",
    width: "20%",
    height: "25em",
    borderBottom: "solid 4px transparent",
    borderTop: "solid 4px transparent",
    borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    borderImageSlice: 1,
    boxShadow: "5px 7px 5px grey",
    "&:hover": {
      marginTop: "-5em",
      color: "black",
    },
    [theme.breakpoints.down("md")]: {},
  },
  plansTitle: {
    color: "white",

    textAlign: "center",
    marginTop: "3em",
    fontSize: "1.3em",
  },
  plansDetails: {
    color: "white",
    width: "80%",
    textAlign: "center",
    fontSize: "0.85em",
    marginTop: "1em",
    margin: "0 auto",
  },
  plansPrice: {
    color: "white",

    textAlign: "center",
    fontSize: "1.8em",
    marginTop: "1em",
  },
  per: {
    color: "white",

    textAlign: "center",
    fontSize: "0.85em",
  },
  planButtonContainer: {
    textAlign: "center",
    marginTop: "3em",
    marginBottom: "2em",
  },
  planButton: {
    color: "black",
    background: "white",
    borderRadius: 0,
    "&:hover": {
      background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      color: "white",
    },
  },
  wereInBetaContainer: {
    backgroundImage: "url(" + weInBeta + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%, cover",
    width: "100%",
    height: "20em",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(" + weInBetaMobile + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%, cover",
    },
  },
  wereInBetaTitle: {
    color: "white",

    fontSize: "3em",
    width: "30%",
    margin: "auto 2em",
    [theme.breakpoints.down("sm")]: {
      width: "82%",
      margin: "0 auto",
      fontSize: "2.6em",
    },
  },
  wereInBetaButtonContainer: {
    margin: "auto 9em",
    [theme.breakpoints.down("sm")]: {
      width: "82%",
      margin: "0 auto",
    },
  },
  wereInBetaButton: {
    color: "white",
    fontSize: "1.1em",
  },
  tabletPlans: {
    width: "90%",
    margin: "0 auto",
  },
  tabletPlanContainer: {
    width: "90%",
    margin: "2em auto",
    background: "black",
    height: "20em",
    borderLeft: "solid 4px transparent",
    borderRight: "solid 4px transparent",
    borderImage: "linear-gradient(to top, #12c2e9, #c471ed, #f64f59)",
    borderImageSlice: 1,
    boxShadow: "5px 7px 5px grey",
  },
  tabletPlanTitle: {
    color: "white",
    marginTop: "0.26em",
    marginLeft: "1.5em",
    fontSize: "2em",
    width: "100%",
  },
  tabletPlanDetails: {
    color: "white",
    marginTop: "0.75em",
    marginLeft: "2.7em",
    fontSize: "1.1em",
    width: "55%",
  },
  tabletPlanPrice: {
    color: "white",
    fontSize: "3em",
    textAlign: "right",
    width: "85%",
    marginTop: "0.55em",
    marginleft: "2em",
  },
  tabletPlanPer: {
    color: "white",
    textAlign: "right",
    width: "85%",
  },
  tabletPlanButtoneCOntainer: {
    width: "55%",
    marginLeft: "3em",
  },
  tabletPlanButton: {
    background: "#dfdfdf",
    color: "black",
    width: "100%",
    "&:hover": {
      background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      color: "white",
    },
  },
  mobilePlans: {
    marginBottom: "10em",
    marginTop: "4em",
    margin:'0 auto',
    
    width:'100%'

  },
  mobilePlanContainer: {
    background: "black",
    width: "90%",
    height: "20em",
    borderBottom: "solid 4px transparent",
    borderTop: "solid 4px transparent",
    borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    borderImageSlice: 1,
    boxShadow: "5px 7px 5px grey",
    marginBottom:'2em',
    marginLeft:'1.5em'
  },
  mobilePlanTitle: {
    color: "white",


    textAlign: "center",
    marginTop: "1em",
    fontSize: "1.6em",
  },
  mobilePlanDetails: {
    color: "white",
    width: "75%",
    textAlign: "center",
    fontSize: "0.85em",
    marginTop: "0.55em",
    margin: "0 auto",
  },
  mobilePlanPrice: {
    color: "white",

    textAlign: "center",
    fontSize: "2.5em",
    marginTop: "0.55em",
  },
  mobilePlanPer: {
    color: "white",

    textAlign: "center",
    fontSize: "0.85em",
  },
  mobilePlanButtoneCOntainer: {
    textAlign: "center",
    marginTop: "1.8em",
    marginBottom: "2em",
  },
  mobilePlanButton: {
    color: "black",
    background: "white",
    borderRadius: 0,
    "&:hover": {
      background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
      color: "white",
    },
  },
}));

const plans = [
  {
    id: 1,
    name: "Basic",
    details:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthly: "$19.99",
    yearly: "$200.00",
    perMonth: "per month",
    perYearly: "per year",
  },
  {
    id: 2,
    name: "Pro",
    details:
      " More advanced features available. Recommended for photography veterans and professionals.",
    monthly: "$39.99",
    yearly: "$380.00",
    perMonth: "per month",
    perYearly: "per year",
  },
  {
    id: 3,
    name: "Business",
    details:
      " Additional features available such as more detailed metrics. Recommended for business owners.",
    monthly: "$99.99",
    yearly: "$1,100.00",
    perMonth: "per month",
    perYearly: "per year",
  },
];

const Pricing = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [checked, setChecked] = useState(false);
  const plan = "Yearly";

  const togglePlan = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid className={classes.pricing} direction="column">
      <Grid item container direction="row" className={classes.heroContainer}>
        <Hidden smDown>
          {" "}
          <div className={classes.colorBlock}></div>
        </Hidden>
        <Hidden smDown>
          <Grid
            item
            container
            direction="column"
            className={classes.heroDetails}
          >
            <Grid item className={classes.heroTitle}>
              Pricing
            </Grid>
            <Grid item className={classes.heroSubTitle}>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </Grid>
          </Grid>
        </Hidden>
      </Grid>

      <Hidden mdUp>
      <Grid
            item
            container
            direction="column"
            className={classes.heroDetails}
          >
            <Grid item className={classes.heroTitle}>
              Pricing
            </Grid>
            <Grid item className={classes.heroSubTitle}>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </Grid>
          </Grid>
      </Hidden>
      <Grid item>
        <FormGroup className={classes.switch}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              style={{ marginRight: "0.85em", marginBottom: "0.25em" }}
            >
              Monthly
            </Grid>
            <Grid item>
              <FormControlLabel
                label={plan}
                control={
                  <Switch
                    checked={checked}
                    name="Monthly"
                    color="secondary"
                    onChange={togglePlan}
                  />
                }
              />
            </Grid>
          </Grid>
        </FormGroup>
      </Grid>

      <Hidden mdDown>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.plans}
        >
          {plans.map((plan) => (
            <Grid
              item
              direction="column"
              container
              className={classes.plansContainer}
            >
              <Grid item className={classes.plansTitle}>
                {plan.name}
              </Grid>
              <Grid item className={classes.plansDetails}>
                {plan.details}
              </Grid>
              {checked ? (
                <Grid item direction="column" container>
                  <Grid item className={classes.plansPrice}>
                    {plan.yearly}
                  </Grid>
                  <Grid item className={classes.per}>
                    {plan.perYearly}
                  </Grid>
                </Grid>
              ) : (
                <Grid item direction="column" container>
                  <Grid item className={classes.plansPrice}>
                    {plan.monthly}
                  </Grid>
                  <Grid item className={classes.per}>
                    {plan.perMonth}
                  </Grid>
                </Grid>
              )}

              <Grid item className={classes.planButtonContainer}>
                <Button className={classes.planButton}>Pick a plan</Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>

      {/* tablet plans container */}

      <Hidden smDown  lgUp>
        <Grid
          item
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          className={classes.tabletPlans}
        >
          {plans.map((plan) => (
            <Grid
              item
              direction="row"
              container
              className={classes.tabletPlanContainer}
            >
              <Grid
                style={{ width: "60%" }}
                item
                direction="column"
                justify="space-evenly"
                alignItems="flex-start"
                container
              >
                <Grid item className={classes.tabletPlanTitle}>
                  {plan.name}
                </Grid>
                <Grid item className={classes.tabletPlanDetails}>
                  {plan.details}
                </Grid>
                <Grid item className={classes.tabletPlanButtoneCOntainer}>
                  <Button className={classes.tabletPlanButton}>
                    Pick a plan
                  </Button>
                </Grid>
              </Grid>
              <Grid
                style={{ width: "40%" }}
                direction="column"
                alignItems="flex-end"
                item
                container
              >
                {checked ? (
                  <Grid item direction="column" container>
                    <Grid item className={classes.tabletPlanPrice}>
                      {plan.yearly}
                    </Grid>
                    <Grid item className={classes.tabletPlanPer}>
                      {plan.perYearly}
                    </Grid>
                  </Grid>
                ) : (
                  <Grid item direction="column" container>
                    <Grid item className={classes.tabletPlanPrice}>
                      {plan.monthly}
                    </Grid>
                    <Grid item className={classes.tabletPlanPer}>
                      {plan.perMonth}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>

      {/* Small plans container */}

      <Hidden mdUp>
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          justify="space-evenly"
          alignItems="center"
          className={classes.mobilePlans}
        >
          {plans.map((plan) => (
            <Grid
              item
              direction="column"
              container
              className={classes.mobilePlanContainer}
            >
              <Grid item className={classes.mobilePlanTitle}>
                {plan.name}
              </Grid>
              <Grid item className={classes.mobilePlanDetails}>
                {plan.details}
              </Grid>
              {checked ? (
                <Grid item direction="column" container>
                  <Grid item className={classes.mobilePlanPrice}>
                    {plan.yearly}
                  </Grid>
                  <Grid item className={classes.mobilePlanPer}>
                    {plan.perYearly}
                  </Grid>
                </Grid>
              ) : (
                <Grid item direction="column" container>
                  <Grid item className={classes.mobilePlanPrice}>
                    {plan.monthly}
                  </Grid>
                  <Grid item className={classes.mobilePlanPer}>
                    {plan.perMonth}
                  </Grid>
                </Grid>
              )}

              <Grid item className={classes.mobilePlanButtoneCOntainer}>
                <Button className={classes.mobilePlanButton}>Pick a plan</Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Hidden>

      <Grid
        item
        container
        direction={matchSm ? "column" : "row"}
        justify={matchSm ? "space-evenly" : "space-between"}
        className={classes.wereInBetaContainer}
      >
        <Grid item className={classes.wereInBetaTitle}>
          WE'RE IN BETA. GET YOUR Invite TODAY!
        </Grid>

        <Grid item className={classes.wereInBetaButtonContainer}>
          <Button className={classes.wereInBetaButton}>Get an invite</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pricing;
