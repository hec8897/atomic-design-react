import React from 'react';
import { TitleBolck,Button } from 'components';
import { AiOutlineSearch } from "react-icons/ai";


function Header() {
    return (
        <header className='bg-indigo-100 py-5 px-10 flex justify-between items-center'>
            <TitleBolck subtit='sub_tit' tit='Lorem Ipsum'/>
            <Button><AiOutlineSearch size='24'/></Button>
        </header>
    )
}

export default Header;