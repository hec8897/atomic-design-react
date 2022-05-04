import React from 'react';
import { SubTit, Title } from 'components';

function TitleBolck({ tit, subtit }) {
    return (
        <div className='flex flex-col items-start'>
            <SubTit>{subtit}</SubTit>
            <Title>{tit}</Title>
        </div>
    )
}

TitleBolck.defaultProps = {
    subtit: 'sub-title',
    tit: 'title',
}



export default TitleBolck;