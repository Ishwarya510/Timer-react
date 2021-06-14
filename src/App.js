import React,{useState} from 'react'
import Btn from './components/Btn'
import Display from './components/Display'

function App() {
  const [time,setTimer]=useState({ms:0,s:0,m:0,h:0});
  const [interv,setInterv]=useState();
  const [status,setStatus]=useState(0);
  const start=()=>{
    run();
    setStatus(1)
    setInterv(setInterval(run,10));
  }
  var updatedMs=time.ms, updatedS=time.s, updatedM=time.m,updatedH=time.h;
  const run = ()=>{
    if(updatedM===60){
      updatedH++;
      updatedM=0;
    }
    if(updatedS===60){
      updatedM++;
      updatedS=0;
    }
    if(updatedMs===100){
      updatedS++;
      updatedMs=0;
    }
    updatedMs++;
    return setTimer({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH});
  }
  const stop=()=>{
   clearInterval(interv);
    setStatus(2);
  }
  const reset=()=>{
    clearInterval(interv);
     setStatus(0);
     setTimer({ms:0,s:0,m:0,h:0})
   }
   const resume=()=>start();
  return (
    <div className="main">
      <div className="clock">
        <div className="stopwatch">
           <Display time={time}/>
           <Btn stop={stop} status={status} resume={resume} reset={reset} start={start}/>
        </div>

      </div>
    </div>
  )
}

export default App

