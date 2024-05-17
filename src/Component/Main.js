import React, {useState} from 'react'
import Sub from './Sub';

export default function Main(props) {

    let [val, setValue] = useState();
    let [arr, setArr] = useState([]);
    let [val2, setValue2] = useState();


    let adding=()=>{
         if(val === ''){
             alert('Please enter the value')
         }
         else{
          setArr([...arr, val]);
         if(arr.length===4){
          props.change();
         }
         }
    }

    return (
    <div className='child'>
        <div className='top'>
        <input type='text' value={val} onChange={(e)=>{setValue(e.target.value)}} /> 
        {/* Getting input from user */}
        <button onClick={adding}>Add</button>
        </div>
        {arr.map((x,i)=>{
            let del=(e)=>{
                    let arr2 = arr.filter(a=>a!==x);
                    setArr(arr2); 
              
                
            }
            let edit=()=>{
               let b = prompt('Enter the details ', x);
               if(b !== ''){
                let arr3 = arr;
                arr3[i] = b; 
                setArr(arr3);
               }
               else{
                 alert("Please enter the value don't leave the value as empty");
               }
            }
            return(<Sub x={x} del={del} edit={edit} val2={val2}/>)
        })}
    </div>
  )
}
