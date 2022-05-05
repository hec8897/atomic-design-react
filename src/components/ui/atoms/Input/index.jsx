import React from 'react'

const Input = ({ onChange, data, bgColor }) => {
    return (
        <input type="text"
            className={`p-2 outline-none ${bgColor}`}
            onChange={onChange}
            value={data} />
    );
}

Input.defaultProps = {
    bgColor: 'bg-transparent '
}

export default Input;