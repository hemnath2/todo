import React, { useEffect, useState } from 'react';
import Main from './Main';
import TimeLine from './TimeLine';

export default function Home() {

    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const date1 = new Date();
    let day = date1.getDate();
    let month = months[date1.getMonth()];
    let year = date1.getFullYear();
    let kesav = month+' '+day+', '+year;

    let [count, setCount] = useState('490px');

    let change=()=>{
      setCount('100%');
    }
 
    let [show, setShow] = useState(false);
 
  return (
    <div className='raja'>
        <div className='head'>
        <h1>Todo List</h1>
        </div>
        <div className='body1'>
        <div style={{height:`${count}`}}>
        <TimeLine day={day} date1={date1} months={months}/>
        <h1>Today</h1>
        <p>{kesav}</p>
        <Main change={change}  />
        </div>
        </div>
    </div>
  )
}
