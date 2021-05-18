import React, { Component } from 'react';

class Result extends Component {
    render() {
        const {yourChoice, win, played} = this.props;
        return (
            <div className="container text-center display-4">
                <div>
                    You Choice: <span className="text-danger">{(yourChoice==1)?"Hammer":(yourChoice==2)?"Scissors":"Paper"}</span>
                </div>
                <div>
                    You Win: <span className="text-success">{win}</span>
                </div>
                <div>
                    You Played: <span className="text-info">{played}</span>
                </div>
            </div>
        );
    }
}

export default Result;