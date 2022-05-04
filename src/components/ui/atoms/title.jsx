import React from 'react';

const Tit = ({ children, size }) => <h1 className={`${size} font-bold`}>{children}</h1>

Tit.defaultProps = {
    size: 'text-3xl'
}
export default Tit;