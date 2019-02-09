import React, {Component} from 'react';

class ClockController extends Component{
    render(){
        return(
            <div className="clock-controller">
                <div className="row">
                    <div className="col-md-6">
                        <div id="break-label">
                            <h4 className="text-uppercase">Break Length</h4>
                            <div className="controller-elements d-flex justify-content-center align-items-center">
                                <button id="break-increment" type="submit">+</button>
                                <p>{this.props.breakLength < 10 ? '0':this.props.breakLength}{this.props.breakLength}</p>
                                <button id="break-decrement" type="submit">-</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="session-label">
                            <h4 className="text-uppercase">Session Length</h4>
                            <div className="controller-elements d-flex justify-content-center align-items-center">
                                <button onClick={this.props.sessionIncrement} id="session-increment" type="submit">+</button>
                                <p>{this.props.sessionLength}</p>
                                <button onClick={this.props.sessionDecrement} id="session-decrement" type="submit">-</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClockController;