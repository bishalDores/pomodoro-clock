import React, { Component } from 'react';
import ClockController from './ClockController';
import MainClock from './MainClock';
import './App.css';

let countDown = 0;

class App extends Component {
    constructor(){
        super();
        this.state = {
            minutes: 25,
            seconds: 0,
            breakLength:5,
            sessionLength:25
        }
        this.timer = this.timer.bind(this);
    }
    displayTimeLeft = (seconds)=>{
        const minutes = Math.floor(seconds/60);
        const remainderSeconds = seconds%60;
        this.setState({
            minutes:minutes,
            seconds:remainderSeconds
        })
    }


    timer = (seconds)=>{
        clearInterval(countDown);
        const now = Date.now();
        // console.log(now);
        const then = now + seconds*1000;
        // console.log(then);
        this.displayTimeLeft(seconds);
        countDown = setInterval(()=>{
            const secondsLeft = Math.round((then - Date.now())/1000);
            // console.log(secondsLeft);
            if(secondsLeft < 0){
                clearInterval(countDown);
                return;
            }
            this.displayTimeLeft(secondsLeft);
        },1000)
    }

    startTimer = () =>{
        const mins = this.state.minutes;
        // console.log(mins);
        // console.log(this.state.seconds);
        this.timer(mins*60 + this.state.seconds);
    }

    sessionIncrement = () =>{
        if(this.state.sessionLength < 60 && this.state.sessionLength >= 0){
            this.setState({
                sessionLength: this.state.sessionLength + 1,
                minutes:this.state.minutes+1
            })
        }
    }

    sessionDecrement = () =>{
        if(this.state.sessionLength > 0){
            this.setState({
                sessionLength: this.state.sessionLength - 1,
                minutes:this.state.minutes-1
            })
        }
    }
    stopBtn = () =>{
        clearInterval(countDown);
    }
    resetBtn = () =>{
        clearInterval(countDown);
        this.setState({
            minutes: 25,
            seconds: 0,
            breakLength:5,
            sessionLength:25
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="heading">
                        <h2>Pomodoro Clock</h2>
                        Created by Bishal Peter Dores<br/>
                        A FreeCodeCamp project
                    </div>
                    <ClockController breakLength={this.state.breakLength} sessionLength={this.state.sessionLength} sessionIncrement={this.sessionIncrement} sessionDecrement={this.sessionDecrement}/>
                    <MainClock min={this.state.minutes} sec={this.state.seconds} startBtn={this.startTimer} stopBtn={this.stopBtn} resetBtn={this.resetBtn}/>
                </div>
            </div>
        );
    }
}

export default App;
