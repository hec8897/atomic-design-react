import React from 'react';
import SubTit from '../../atoms/SubTit';
import Tit from '../../atoms/title';

function Title({ tit, subtit }) {
    return (
        <div className='flex-col'>
            <SubTit>{subtit}</SubTit>
            <Tit>{tit}</Tit>
        </div>
    )
}

Title.defaultProps = {
    subtit: 'sub-title',
    tit: 'title',
}



export default Title;