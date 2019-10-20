import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import "video-react/dist/video-react.css";

const useStyles = makeStyles(styles);

const heading = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "3%"
};

let word = "";

//_______________Video Player_____________________________________

class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: `http://dl22.y2mate.com/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxV
      lZIOCtyZ2drZE04d2dJbUQ3OXp0WWd1eE91dU1QWkdJSmdPOHBPbkVNeHI5akxaWXNPMFlU
      Q2F0WkVqVEhDRXlOczRxemJiL1k4MFVNWi9WUm4xcE11Q3R6TjZuaFQwZXNtWkt1c0FQV2M
      xcmxBM2xTQ2F3UFRycVJUc3V5RG85V3VhWXpFZXB6a09lS2YyL0k4Y2tEdnRPTEsyOVlsWG9
      DZUw1OVJLMWYzVytVcnl5clE0dmM1d1VGQkxZSlZjeXBYN3pNL0ZxM2dZdjRBWjIxK2JxdTZ
      uRlkwS1RacU5lajUxTUNFTTF1THFUaElLd1NRSzhXT3c5YUFvMFUwb1VLSjUvM0cxL2VPOVdX
      ek9MdEs0UW9IUWJPdXhyOEQzOXRCUjRoQ1EvcTJXeE04T3gxN3pCcCs1UThrWXVGMG10YXFPN
      EpGbmx3SG9qMXRPMXJoUg%3D%3D`
    };
    this.seek = this.seek.bind(this);
  }

  seek() {
    return () => {
      var seconds;

      if (word.includes("autumn")) {
        seconds = 84;
      } else if (word.includes("rainy")) {
        seconds = 61;
      } else if (word.includes("season")) {
        seconds = 12;
      } else if (word.includes("spring")) {
        seconds = 20;
      } else if (word.includes("summer")) {
        seconds = 45;
      } else if (word.includes("winter")) {
        seconds = 15;
      } else {
        return;
      }

      this.player.seek(seconds);
      this.player.play();
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <Button color="primary" onClick={this.seek()} className="mr-3">
          Resolve
        </Button>
      </div>
    );
  }
}

//_______________________________________________________________

//_______________________Sppech Recognition_______________________

const SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

class Speech extends Component {
  constructor() {
    super();
    this.state = {
      listening: false
    };
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
  }

  submit() {
    word = document.getElementById("final").innerHTML;
    document.getElementById("final").innerHTML = "";
  }

  toggleListen() {
    this.setState(
      {
        listening: !this.state.listening
      },
      this.handleListen
    );
  }

  handleListen() {
    console.log("listening?", this.state.listening);

    if (this.state.listening) {
      recognition.start();
      recognition.onend = () => {
        console.log("...continue listening...");
        recognition.start();
      };
    } else {
      recognition.stop();
      recognition.onend = () => {
        console.log("Stopped listening per click");
      };
    }

    recognition.onstart = () => {
      console.log("Listening!");
    };

    let finalTranscript = "";
    recognition.onresult = event => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else interimTranscript += transcript;
      }
      document.getElementById("interim").innerHTML = interimTranscript;
      document.getElementById("final").innerHTML = finalTranscript;

      const transcriptArr = finalTranscript.split(" ");
      const stopCmd = transcriptArr.slice(-3, -1);
      console.log("stopCmd", stopCmd);

      if (stopCmd[0] === "stop" && stopCmd[1] === "listening") {
        recognition.stop();
        recognition.onend = () => {
          console.log("Stopped listening per command");
          const finalText = transcriptArr.slice(0, -3).join(" ");
          document.getElementById("final").innerHTML = finalText;
        };
      }
    };

    recognition.onerror = event => {
      console.log("Error occurred in recognition: " + event.error);
    };
  }

  render() {
    return (
      <div style={container}>
        <Button id="microphone-btn" style={button} onClick={this.toggleListen}>
          Listen
        </Button>
        <div id="interim" style={interim}></div>
        <div id="final" style={final}></div>
        <Button color="primary" id="submitbutton" onClick={this.submit}>
          Submit
        </Button>
      </div>
    );
  }
}

const styles2 = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  button: {
    width: "100px",
    height: "60px",
    background: "rgb(156, 39, 176)",
    margin: "6em 0 2em 0"
  },
  interim: {
    color: "gray",
    border: "#ccc 1px solid",
    padding: "1em",
    margin: "1em",
    width: "300px"
  },
  final: {
    color: "black",
    border: "#ccc 1px solid",
    padding: "1em",
    margin: "1em",
    width: "300px"
  }
};

const { container, button, interim, final } = styles2;

//__________________________________________________________________

export default function SectionTabs() {
  const classes = useStyles();
  let img = null;
  return (
    <div
      className={classes.section}
      style={{ paddingBottom: 0, marginBottom: 0 }}
    >
      <div style={heading}>
        <h2> </h2>
      </div>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabContent: (
                      <div>
                        <p className={classes.textCenter}>
                          <Speech />
                        </p>
                        <div
                          style={{ display: "none", justifyContent: "center" }}
                          id="uploadedImageDivision"
                        >
                          <img
                            src="#"
                            id="uploadedImage"
                            height="300px"
                            width="300px"
                          />
                        </div>
                      </div>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div>
                <VideoPlayer />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
