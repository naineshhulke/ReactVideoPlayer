import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FeedbackSharpIcon from "@material-ui/icons/FeedbackSharp";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import RateReviewSharpIcon from "@material-ui/icons/RateReviewSharp";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { database } from "../Home/firebase.js";

import image from "assets/img/feedback.jpg";

const useStyles = makeStyles(styles);

const send = function() {
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const review = document.getElementById("review").value;
  const suggestion = document.getElementById("suggestion").value;

  database
    .ref("feedback/")
    .push()
    .set({
      name: name,
      number: number,
      email: email,
      review: review,
      suggestion: suggestion
    });

  alert("feedback sent");
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("email").value = "";
  document.getElementById("review").value = "";
  document.getElementById("suggestion").value = "";
};

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{ paddingBottom: 100 }}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <FeedbackSharpIcon />
                    <h3>Customer Feedback</h3>
                  </CardHeader>
                  <p className={classes.divider}>Share your review</p>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Name..."
                          id="name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          labelText="Number..."
                          id="number"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            type: "number",
                            endAdornment: (
                              <InputAdornment position="end">
                                <PhoneAndroidIcon
                                  className={classes.inputIconsColor}
                                />
                              </InputAdornment>
                            )
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Your Review..."
                      id="review"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <RateReviewSharpIcon
                              className={classes.inputIconsColor}
                            />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Your Suggestions..."
                      id="suggestion"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <AssignmentSharpIcon
                              className={classes.inputIconsColor}
                            />
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={send}>
                      Send Feedback
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont style={{ marginTop: 0, paddingTop: 0 }} />
      </div>
    </div>
  );
}
