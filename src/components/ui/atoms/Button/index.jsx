import React from 'react';
import './index.scss'

const Button = ({ children }) => {
    return (
        <div className="btn">
            {children}
        </div>
    )
}

export default Button;