import {
  Grid,
  makeStyles,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import heroImg from "../assets/pricing/desktop/hero.jpg";

const useStyles = makeStyles((theme) => ({
  pricing: {
  },
  heroContainer: {
    backgroundImage: "url(" + heroImg + ")",
    backgroundSize: "50% 100%, cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    background: "black",
    width: "100%",
    height: "25em",
  },
  heroDetails: {
    width: "40%",
    margin: "auto 0",
    marginLeft: "4em",
    [theme.breakpoints.down("sm")]: {
      background: "black",
      width: "100%",
      margin: 0,
    },
  },
  heroTitle: {
    color: "white",
    fontSize: "4em",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "4em",
      margin: "auto 0",
      marginTop: "1em",
      marginLeft: "0.33em",

      width: "95%",
    },
  },
  heroSubTitle: {
    color: "white",
    fontSize: "1.2em",
    lineHeight: 1.4,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3em",

      width: "95%",
      marginLeft: "1em",
      marginBottom: "3em",
    },
  },
  colorBlock: {
    background: "linear-gradient(to top, #12c2e9, #c471ed, #f64f59)",
    height: "9em",
    width: "0.35em",
    margin: "auto 0",
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
  },
  plans: {
    marginBottom: "10em",
    marginTop: "4em",
  },
  plansContainer: {
    background: "black",
    width: "20%",
    height: "22em",
    borderTop: "solid 4px transparent",
    borderImage: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    borderImageSlice: 1,
    boxShadow: "5px 7px 5px grey",
    "&:hover": {
      marginTop: "-5em",
      color: "black",
    },
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
    marginTop: "1em",
    marginBottom: "2em",
  },
  planButton: {
    color: "black",
    background: "white",
    borderRadius: 0,
    "&:hover": {
      background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    },
  },
}));

const plans = [
  {
    id: 1,
    name: "Basic",
    details:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthly: "$19.00",
    yearly: "$190.00",
    perMonth: "per month",
    perYearly: "per Year",
  },
  {
    id: 2,
    name: "Pro",
    details:
      " More advanced features available. Recommended for photography veterans and professionals.",
    monthly: "$39.00",
    yearly: "$390.00",
    perMonth: "per month",
    perYearly: "per Year",
  },
  {
    id: 3,
    name: "Business",
    details:
      " Additional features available such as more detailed metrics. Recommended for business owners.",
    monthly: "$99.00",
    yearly: "$990.00",
    perMonth: "per month",
    perYearly: "per Year",
  },
];

const Pricing = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const plan = "Yearly";

  const togglePlan = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Grid className={classes.pricing} direction="column">
      <Grid item container direction="row" className={classes.heroContainer}>
        <div className={classes.colorBlock}></div>
        <Grid item container direction="column" className={classes.heroDetails}>
          <Grid item className={classes.heroTitle}>
            Pricing
          </Grid>
          <Grid item className={classes.heroSubTitle}>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </Grid>
        </Grid>
      </Grid>
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
    </Grid>
  );
};

export default Pricing;
