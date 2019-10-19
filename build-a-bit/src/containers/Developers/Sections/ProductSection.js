import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h4 className={classes.description}>
            Medidoc works as an early-stage disease detector for people who want
            to minimize there medical expenses for severe yet curable diseases
            like Diabetic Retinopathy, skin cancer, and Brain Tumor. The
            accuracy of our service even beats the prediction made by an average
            doctor in respective fields.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
