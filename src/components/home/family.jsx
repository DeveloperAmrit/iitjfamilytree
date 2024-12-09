import React, {useState} from 'react';

import { students2026 } from '../../data/2026'
import { students2027 } from '../../data/2027'
import { students2028 } from '../../data/2028'

const lists = {
    2026: students2026,
    2027: students2027,
    2028: students2028,
}

const RenderBrothers = ({list,indices,myIndex,handleClick})=>{
    return(
        <div className='flex flex-col gap-y-3 items-center justify-center'>
            {indices.map((index)=>{
                return(<div onClick={(e)=>handleClick(e,list[index].roll)} className={`w-full h-full flex flex-col justify-center items-center p-4 ${(index===myIndex)? 'bg-yellow-500' : 'bg-purple-500'} border-4 border-transparent hover:border-sky-500 `}>{list[index].name} <br />{list[index].roll}</div>);
            })}
        </div>
    );
}

const RenderFamily = ({roll,setError,handleClick}) =>{
    const year = +('20'+roll[1]+roll[2])+4;
    let currentYearList =  lists[year];

    if(!currentYearList){
        setError(true);
        return(<></>);
    }
   
    let myIndex=-1;
    for(let i=0;i<currentYearList.length;i++){
        if(currentYearList[i].roll === roll){
            myIndex = i;
        }
    }
    if(myIndex===-1){
        return(<div>No Student found</div>)
    }

    let parentList = lists[year-1];
    let parentRoll = -1;
    let brothers=[];

    if(parentList){
        for(let i=0;i<parentList.length;i++){
            if(parentList[i].childIds.includes(myIndex)){
                brothers = parentList[i].childIds;
                parentRoll = parentList[i].roll;
            }
        }
    }
    if(parentRoll!==-1){
        return(
            <>
                <RenderBrothers list={currentYearList} indices={brothers} myIndex={myIndex} handleClick={handleClick}/>
                <RenderFamily roll={parentRoll} handleClick={handleClick}/>
            </>
        );
    }
    else{
        return(
        <div className='flex flex-col divide-y-2 items-center justify-center'>
            <div onClick={(e)=>handleClick(e,currentYearList[myIndex].roll)} className='w-full h-full flex flex-col justify-center items-center p-4 bg-yellow-500 border-4 border-transparent hover:border-sky-500' >{currentYearList[myIndex].name} <br />{currentYearList[myIndex].roll}</div>
        </div>
    );
    }

}

const Family = () => {
    const [input, setInput] = useState('b24cm1008');
    const [error, setError] = useState(false);
    const [roll,setRoll] = useState('b24cm1008');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e,roll=null) => {
        if(roll==null){
            e.preventDefault();
            setRoll(input.trim().toLocaleLowerCase());
        }
        else{
            setRoll(roll);
            setInput(roll);
        }
    }

  return (
    <div className='bg-black text-white' id='family'>
        <div className="flex w-full py-4 pt-20 justify-center items-center gap-5 text-lg">
            <div>Batch of</div>
            <input className='border-2 border-black px-1 text-black' type="text" name='input' onChange={handleChange} value={input} />
            <button
                onClick={handleClick}
                className='px-4 py-1 border-2 bg-purple-800 text-white rounded-sm hover:bg-transparent  hover:border-purple-800 active:bg-purple-900'
            >
                Apply
            </button>
            {error && <div className='text-orange-700'>Invalid input</div>}
        </div>
        <div className='w-full py-9 flex flex-row gap-x-6 justify-evenly items-center text-center'>
            <RenderFamily roll={roll} setError={setError} handleClick={handleClick}/>
        </div>
    </div>
  )
}

export default Family