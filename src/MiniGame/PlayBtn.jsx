import React, { Component } from 'react';

class PlayBtn extends Component {
    handlePlay = () => {
        const {handlePlayGame} = this.props;
        handlePlayGame();
    };
    render() {
        return (
            <div className="text-center">
                <button className="mt-5 btn btn-success" style={{ fontSize: 30 }} onClick={this.handlePlay}>
                    PLAY
                </button>
            </div>
        );
    }
}

export default PlayBtn;