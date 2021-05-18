import React, { Component } from "react";
import ChoiceBtn from "./ChoiceBtn";
import Tool from "./Tool";

class GamePlay extends Component {
  renderTool = () => {
    const { tool } = this.props;
    return <Tool tool={tool} />;
  };
  render() {
    const { handleChoiceTool } = this.props;
    return (
      <div className="row text-center">
        <div className="col-6">
          <div className="d-flex justify-content-center">{this.renderTool()}</div>
        </div>
        <div className="col-6 row">
          <div className="col-4">
            <ChoiceBtn yourChoice={1} handleChoiceTool={handleChoiceTool}/>
          </div>
          <div className="col-4">
            <ChoiceBtn yourChoice={2} handleChoiceTool={handleChoiceTool}/>
          </div>
          <div className="col-4">
            <ChoiceBtn yourChoice={3} handleChoiceTool={handleChoiceTool}/>
          </div>
        </div>
      </div>
    );
  }
}

export default GamePlay;
