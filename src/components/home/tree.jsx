import React, { useState} from 'react';
import Box from './box';

import { students2026 } from '../../data/2026'
import { students2027 } from '../../data/2027'
import { students2028 } from '../../data/2028'

const lists = {
    2026: students2026,
    2027: students2027,
    2028: students2028,
}

const RenderTree = ({ year = 2028 }) => {

    const children = lists[year]
    const sgs= lists[year-1].filter(e => e.childIds.length !== 0);

    return (
        <div className="grid grid-cols-2">
            {sgs.map((element, index) => {
                const childrenArr = children.filter(child => element.childIds.includes(child.id))
                return <Box key={index} leader={element} followers={childrenArr} />
            })}
        </div>

    );
}

const min = 2012;
const max = 2028;

const Tree = () => {
    const [input, setInput] = useState(max);
    const [error, setError] = useState(false);
    const [year,setYear] = useState(max);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (input >= min && input <= max) {
            setYear(input);
            setError(false);
        }
        else {
            setError(true);
        }
    }
    return (
        <div className='bg-black text-white'>
            <div className="flex w-full py-4 pt-20 justify-center items-center gap-5 text-lg">
                <div>Batch of</div>
                <input className='border-2 border-black px-1 text-black' type="number" min={min} max={max} name='input' onChange={handleChange} value={input} />
                <button
                    onClick={handleClick}
                    className='px-4 py-1 border-2 bg-purple-800 text-white rounded-sm hover:bg-transparent  hover:border-purple-800 active:bg-purple-900'
                >
                    Apply
                </button>
                {error && <div className='text-orange-700'>Invalid input</div>}
            </div>

            <RenderTree year={year} />
        </div>
    )
}

export default Tree