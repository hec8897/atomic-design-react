import React from 'react';

const Button = ({ children }) => {
    return (
        <div className="btn p-1 rounded hover:bg-slate-100">
            {children}
        </div>
    )
}

export default Button;