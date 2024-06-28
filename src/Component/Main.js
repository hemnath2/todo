import React, {useEffect, useState} from 'react'
import Sub from './Sub';
import TimeLine from './TimeLine';

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
        <input type='text' value={val} maxLength={30} onChange={(e)=>{setValue(e.target.value)}} /> 
        {/* Getting input from user */}
        <button onClick={adding}>Add</button>
        </div>
        {arr.map((x,i)=>{
            let del=(e)=>{
                    let arr2 = arr.filter(a=>a!==x);
                    setArr(arr2); 
              
                
            }
            
            let addon=(e)=>{
              e.preventDefault();
                    setValue2(e.target.value);
            }


            let edit=()=>{
               let b = prompt('Enter the value to edit ', x);
               if(b !== null){
                let arr3 = [...arr];
                arr3[i] = b;
                setArr(arr3);
                console.log(arr3);
               }
               else{
                 alert("Please enter the value don't leave the value as empty");
               }
            }
            let change1=(e)=>{
              let data3 = e.target.value;
              let arr3 = [...arr];
              arr3[i] = e.target.value;
              setArr(arr3);
              console.log(e.target.value); 
  
             }


            return(<Sub x={x} del={del} edit={edit} val2={val2} addon={addon}
              inputField = {<input type='text' maxLength={30}  className='chitti' value={x} placeholder={x} onChange={change1}/> }
            />)
        })}

    </div>
  )
}
