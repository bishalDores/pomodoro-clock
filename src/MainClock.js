import React, {Component} from 'react';

class MainClock extends Component{
    render(){
        return(
            <div className="time-display-area">
                <div className="row">
                    <div className="col-md-12 text-center text-uppercase">
                        <h3>Session</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div id="time-left">
                            <p>{this.props.min <10? '0':''}{this.props.min}:{this.props.sec <10? '0':''}{this.props.sec}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="timer-operations">
                            <button className="opn-btn" id="start_stop" onClick={this.props.startBtn}>Start</button>
                            <button className="opn-btn" id="stop" onClick={this.props.stopBtn}>Stop</button>
                            <button className="opn-btn" id="reset" onClick={this.props.resetBtn}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainClock;