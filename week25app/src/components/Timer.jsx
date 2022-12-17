import React from 'react'
import icon from '../assets/3003202.png';


class Timer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            minutes: 0,
            seconds: 0
        }
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.getDate();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.timerId != this.state.timerId)
            return false;
        return true;
    }

    getDate = () => {
        let timerJSON = localStorage.getItem("timer");
        let timer = JSON.parse(timerJSON);
        this.setState(
            {
                minutes: Number(timer.minutes),
                seconds: Number(timer.seconds)
            });
    }
    start = () => {
        let scope = this;
        let timerId = setInterval(function () {
            scope.setState(
                {
                    seconds: scope.state.seconds + 1
                }
            )
        }, 1000)
        this.setState({ timerId: timerId })
    }

    stop() {
        clearInterval(this.state.timerId);
    }

    render() {
        return (
            <div>
                <img src={icon} alt='timer'></img>
                <p>
                    Timer info: {this.state.minutes}:{this.state.seconds}
                </p>
                <div>
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                </div>
            </div>
        );
    }
}

export default Timer

