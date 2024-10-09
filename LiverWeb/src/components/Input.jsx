import React from 'react'

const Input = ({ placeHolder, type, value, onChange }) => {
    return (
        <input
            placeholder={placeHolder}
            className=' bg-slate-200 px-3 py-1 border-2 border-purple-800 rounded-md text-black focus:outline-none w-full'
            type={type}
            value={value}
            onChange={(e) => { onChange(e.target.value) }}
        />
    )
}

export default Input
