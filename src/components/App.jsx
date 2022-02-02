import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      this.countTotalFeedback();
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      (Number.parseInt(this.state.good) / Number.parseInt(this.countTotalFeedback())) * 100
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Pleas leave feedback</h1>
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              Good={good}
              Neutral={neutral}
              Bad={bad}
              Total={this.countTotalFeedback()}
              PositiveFeedback={`${Number.parseInt(
                this.countPositiveFeedbackPercentage()
              )} %`}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </>
    );
  }
}

App.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
};

export default App;
