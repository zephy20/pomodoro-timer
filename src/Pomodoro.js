import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.upTimer = this.upTimer.bind(this);
    this.downTimer = this.downTimer.bind(this);

    this.state = {
      seconds: 0,
      minutes: 25,
      count: 0
    };

    const styles = theme => ({
      button: {
        margin: theme.spacing.unit
      },
      input: {
        display: "none"
      }
    });
  }

  startTimer() {
    if (this.state.count === 0) {
      this.setState({ count: 1 });

      this.setState({ count: 1 });
      this.interval = setInterval(() => {
        this.setState(prev => {
          return { seconds: prev.seconds - 1 };
        });

        if (this.state.seconds < 0) {
          this.setState(prev => {
            return {
              minutes: prev.minutes - 1,
              seconds: 59
            };
          });
        }
        if (this.state.minutes === 0 && this.state.seconds === 0) {
          clearInterval(this.interval);
        }
      }, 1000);
    }
  }

  stopTimer() {
    this.setState({
      seconds: 0,
      minutes: 25,
      count: 0
    });
    clearInterval(this.interval);
  }

  upTimer() {
    console.log(this.interval);
    if (this.state.count === 0) {
      if (this.state.minutes < 60) {
        this.setState(prev => {
          return { minutes: prev.minutes + 1 };
        });
      }
    }
  }

  downTimer() {
    if (this.state.count === 0) {
      if (this.state.minutes > 1) {
        this.setState(prev => {
          return { minutes: prev.minutes - 1 };
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.startTimer}
          variant="contained"
          color="primary"
          className={this.props.button}
        >
          Start Timer
        </Button>
        <Button
          style={{ marginLeft: "25px" }}
          onClick={this.stopTimer}
          variant="contained"
          color="secondary"
          className={this.props.button}
        >
          Reset Timer
        </Button>
        <br />
        <h3>Session Length</h3>
        <Button
          onClick={this.upTimer}
          variant="fab"
          mini
          color="secondary"
          aria-label="Add"
          className={this.props.button}
        >
          <span style={{ fontSize: "40px" }}>+</span>
        </Button>
        <Button
          onClick={this.downTimer}
          style={{ marginLeft: "25px" }}
          variant="fab"
          mini
          color="secondary"
          aria-label="Add"
          className={this.props.button}
        >
          <span style={{ fontSize: "40px" }}>-</span>
        </Button>
        <br />
        <br />
        <div style={{ fontSize: "64px" }}>
          {this.state.minutes}:{this.state.seconds.toString().padStart(2, 0)}{" "}
        </div>
      </div>
    );
  }
}

export default withStyles(this.styles)(Pomodoro);
