import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "@material-ui/icons/Dashboard";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import BlurCircularTwoToneIcon from "@material-ui/icons/BlurCircularTwoTone";
import PanToolTwoToneIcon from "@material-ui/icons/PanToolTwoTone";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const description_dr = `DR affects roughly 20 million Indians and is likely to affect 57 million by 2025.
  This means India will continue to have more people with diabetes than any other country.
  It is the leading cause of visual in working-age adults.
  Detecting DR is a time-consuming and manual process that requires a trained clinician to diagnose.
  While this approach is effective, it's resources demands are high and have failed to serve in rural areas`;

const description_bt = `Statics in an article by 'The Hindu' reveals that every year around 40,000 new Brain Tumour cases are reported in India.
According to a report in 2018, the country is facing a severe shortage of caregivers with merely 2000 Oncologists
to look after around 10 million patients. The condition is much worse in rural areas.
According to the doctors, if the cases are detected early, 90% of the tumor cases are curable.`;

const description_sk = `A skin lesion is defined as a superficial growth or patch of a skin that is visually different
and has a different texture than it's surrounding area.
It is often difficult to differentiate early melanomas from benign melanocytic even by expert dermatologists.
The estimated 5-year survival rate for patients whose melanoma is detected early is about 98%.
The survival rate falls to 8% when the disease metastasizes to distant organs.`;

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About</h2>
          <h5 className={classes.description}>
            Medidoc works as an early-stage disease detector for people who want
            to minimize there medical expenses for severe yet curable diseases
            like Diabetic Retinopathy, skin cancer, and Brain Tumor. The
            accuracy of our service even beats the prediction made by an average
            doctor in respective fields.
          </h5>
        </GridItem>
      </GridContainer>
      <div className={classes.container}>
        <div id="navigation-pills">
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Diabetic Retinopathy",
                    tabIcon: Dashboard,
                    tabContent: (
                      <InfoArea
                        title="Diabetic Retinopathy"
                        description={description_dr}
                        icon={VisibilityTwoToneIcon}
                        iconColor="info"
                        vertical
                      />
                    )
                  },
                  {
                    tabButton: "Brain Tumour",
                    tabIcon: Dashboard,
                    tabContent: (
                      <InfoArea
                        title="Brain Tumour"
                        description={description_bt}
                        icon={BlurCircularTwoToneIcon}
                        iconColor="success"
                        vertical
                      />
                    )
                  },
                  {
                    tabButton: "Skin Cancer",
                    tabIcon: Dashboard,
                    tabContent: (
                      <InfoArea
                        title="Skin Cancer"
                        description={description_sk}
                        icon={PanToolTwoToneIcon}
                        iconColor="danger"
                        vertical
                      />
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
