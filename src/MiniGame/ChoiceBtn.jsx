import React, { Component } from "react";

class ChoiceBtn extends Component {
  handleChoice = (yourChoice) => {
    const { handleChoiceTool } = this.props;
    console.log("your choice:", yourChoice);
    handleChoiceTool(yourChoice);
  };
  render() {
    const { yourChoice } = this.props;
    return (
      <button
        className={
          (yourChoice == 1
            ? "bg-danger"
            : yourChoice == 2
            ? "bg-info"
            : "bg-success") + " display-5 p-5 mt-5 text-light"
        }
        onClick={() => this.handleChoice(yourChoice)}
      >
        {yourChoice == 1 ? "Hammer" : yourChoice == 2 ? "Scissors" : "Paper"}
      </button>
    );
  }
}

export default ChoiceBtn;
