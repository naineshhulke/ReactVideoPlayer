import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/rishabha.jpg";

const useStyles = makeStyles(styles);

const github = function() {
  window.location = "https://github.com/rishabh-997";
};
const linkedin = function() {
  window.location = "https://www.linkedin.com/in/rishabh-997/";
};
const facebook = function() {
  window.location = "https://www.facebook.com/dhandharia1";
};
const instagram = function() {
  window.location = "https://www.instagram.com/rishabh7512/";
};

export default function RishabhA() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        <img src={team1} alt="..." className={imageClasses} />
      </GridItem>
      <h4 className={classes.cardTitle}>
        Rishabh Agarwal
        <br />
        <small className={classes.smallTitle}>Android Developer</small>
      </h4>
      <CardBody>
        <p className={classes.description}>
          You can write here details about one of your team members. You can
          give more details about what they do. Feel free to add some{" "}
          <a href="#pablo">links</a> for people to be able to follow them
          outside the site.
        </p>
      </CardBody>
      <CardFooter className={classes.justifyCenter}>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={github}
        >
          <i className={classes.socials + " fab fa-github"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={linkedin}
        >
          <i className={classes.socials + " fab fa-linkedin"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={facebook}
        >
          <i className={classes.socials + " fab fa-facebook"} />
        </Button>
        <Button
          justIcon
          color="transparent"
          className={classes.margin5}
          onClick={instagram}
        >
          <i className={classes.socials + " fab fa-instagram"} />
        </Button>
      </CardFooter>
    </Card>
  );
}
