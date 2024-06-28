import React from 'react'

export default function TimeLine(props) {

    let dateCal = props.day * 3.33;
    let Remain = 100 - dateCal;
    let fullBac = {background: `linear-gradient(to right, #0ab6ab  100%, #fff 0%)`};
    let emptyBac = {background: '#fff'};
    let inprogressBac = {background: `linear-gradient(to right, #0ab6ab  ${dateCal}%, #fff ${Remain}%)`};
    let style2 = {
        color: 'blue',
        borderRadius: "69%",
        width: '9%',
        height: '28px',
        textAlign: 'center',
fontSize: '109%',
color: '#000',
padding: '1% 2%',
fontWeight: '400'
    }
    let style1 ={...style2, ...fullBac};
     let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
     let a = 'full';
     let b = 'inprogress';
     let c = 'empty';
     let Month = props.date1.getMonth();

     arr.map((x,i)=>{
    for(let i=0;i<=Month;i++){
      arr[i] = fullBac;
    }
    arr[Month] = inprogressBac;
    for(let i=Month+1;i<arr.length;i++){
      arr[i] = emptyBac;
    }
}
)     

let mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
];

let arr1 = [arr[0],arr[1],arr[2],arr[3],arr[4],arr[5]];
let arr2 = [arr[6],arr[7],arr[8],arr[9],arr[10],arr[11]];

  return (
    <>
    <div className='hoo'>
    
    {arr1.map((x,i)=>{
      return(
    <p key={i} style={{...style2, ...x}}>{mon[i]}</p>
      )
})}
   
        </div>
        <div className='hoo1'>
        {arr2.map((x,i)=>{
      return(
    <p key={i} style={{...style2, ...x}}>{mon[i+6]}</p>
      )
})}
        </div>
        </>
  )
}
