import React, { Component } from "react";
import GamePlay from "./GamePlay";
import PlayBtn from "./PlayBtn";
import Result from "./Result";

const getIntRandom = () => {
  return Math.floor(Math.random() * 3);
};

class MiniGame extends Component {
  tool = [
    {
      imgSrc: "./img/miniGame/bua.jpg",
      codeTool: 1,
    },
    {
      imgSrc: "./img/miniGame/keo.jpg",
      codeTool: 2,
    },
    {
      imgSrc: "./img/miniGame/giay.png",
      codeTool: 3,
    },
  ];
  state = {
    win: 0,
    played: 0,
    choice: 1,
    toolDefault: {
      imgSrc: "./img/miniGame/bua.jpg",
      codeTool: 1,
    },
  };

  handlePlayGame = () => {
    let count = 0;
    const roll = setInterval(() => {
      const toolDefault = this.tool[getIntRandom()];
      this.setState({
        toolDefault,
      });

      count++;
      if (count > 5) {
        clearInterval(roll);
        this.handleResult();
      }
    }, 100);
  };

  handleResult = () => {
    const { choice, toolDefault } = this.state;
    let win = this.state.win;
    switch (choice) {
      case 1:
        win =
          toolDefault.codeTool == 1
            ? win
            : toolDefault.codeTool == 2
            ? win + 1
            : win;
        break;
      case 2:
        win =
          toolDefault.codeTool == 2
            ? win
            : toolDefault.codeTool == 3
            ? win + 1
            : win;
        break;
      default:
        win =
          toolDefault.codeTool == 3
            ? win
            : toolDefault.codeTool == 1
            ? win + 1
            : win;
        break;
    }
    this.setState({
      win,
      played: (this.state.played += 1),
    });
  };

  handleChoiceTool = (yourChoice) => {
    this.setState({
      choice: yourChoice,
    });
  };

  render() {
    const { win, played, choice, toolDefault } = this.state;
    return (
      <div className="container">
        <h3 className="display-4 text-center">
          Mini Game Scissors Hammer Papper
        </h3>
        <GamePlay tool={toolDefault} handleChoiceTool={this.handleChoiceTool} />
        <Result yourChoice={choice} win={win} played={played} />
        <PlayBtn handlePlayGame={this.handlePlayGame} />
      </div>
    );
  }
}

export default MiniGame;
