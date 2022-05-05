import React from 'react'
import { Input } from 'components'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchInput = ({ onChange,resetValue, value, label }) => {
    return (
        <div className='flex flex-col items-start gap-1'>
            <span className='text-slate-600 font-bold text-xl'>{label}</span>
            <div className='border border-neutral-400 rounded-md overflow-hidden flex justify-center items-center drop-shadow-md bg-white'>
                <div className='p-2 bg-slate-100 border-r border-neutral-400'>
                    <AiOutlineSearch size='24' />
                </div>
                <Input data={value} onChange={onChange} bgColor={'bg-white'} />
                <div className='btn p-2 h-full' onClick={resetValue}>
                    <AiOutlineClose size='18' />
                </div>
            </div>
        </div>
    );
}

export default SearchInput;