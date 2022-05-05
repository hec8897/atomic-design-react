import React, { useState } from 'react';
import { TitleBolck, Button, SeachInput } from 'components';
import { AiOutlineSearch } from "react-icons/ai";

function Header({ tit, subtit }) {
    const [value, setValue] = useState();
    const onChageValue = (e) => setValue(e.target.value);
    const resetValue = () => setValue('')
    
    return (
        <header className='bg-indigo-100 py-5 px-10 flex justify-between items-center'>
            <TitleBolck subtit={subtit} tit={tit} />
            <SeachInput value={value} onChange={onChageValue} resetValue={resetValue} label={'Title Label'} />
            <Button><AiOutlineSearch size='24' /></Button>
        </header>
    )
}
Header.defaultProps = {
    tit: 'string',
    subtit: "string"
}

export default Header;