import {useState} from 'react';
import '../Styles/Timer.css';
let interval;
var duration= 25*60;
var timer = duration, minutes, seconds;

function Timer(){
    const [timerr,setTimer]=useState("25:00");
    const [str,setStr]=useState("Play");


    function start(){
        if(str==="Play"){
       interval= setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            setTimer(minutes + ":" + seconds);
            setStr("Stop");
    
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);}
    else{clearInterval(interval);
        setStr("Play");}}

    function stop(){
        if(interval){clearInterval(interval);
        setTimer('25:00');
    setStr("Play");}
    }
    return(<div className="timer-div">
        <h1 className="time">{timerr}</h1>
        <button onClick={start} className="start-button">{str}</button>
        <button  className="Reset-button" onClick={stop}>Reset</button>
        </div>
    );
}
export default Timer;