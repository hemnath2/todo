import React, { useState } from 'react';

export default function Sub(props) {

  let style1 = {textDecoration: 'none'};
 
  let change=(e)=>{
    //  e.preventDefault();
    //  setCount(count+1);
    //  if(count%2==0){
    //   setData(true);
    //   console.log(count+''+data);
    //  }
    //  else{
    //   setData(false);
    //   console.log(count+''+data);
    //  }
     setData(!data);
  }


  let [data, setData] = useState(false);
  let [count, setCount] = useState(0);

  let [data2, setData2] = useState();

  let [E1, setE1] = useState(false);

  let editor=()=>{
      setE1(true);
  }

 let submitor=()=>{
  setE1(false);
 }


  return (
    <div className='com'>
      <div className='hello'>
      <input type='checkbox' onChange={()=>{setData(!data)}} value={data}  />
      <span style={data == true ? {textDecoration:'line-through', color:'#7A7777'} : {textDecoration:'none'}}>
        {E1 === false?props.x:  
          props.inputField
          
        }
        </span>
      {E1 === false? <button id='edit' onClick={editor}>Edit</button> :
      <button id='edit' onClick={submitor}>submit</button>}
      <button id='del' onClick={props.del}>Delete</button>
      {/* Delete button added for deleting the tasks 16/06  */}
    </div>
    </div>
  )
}
