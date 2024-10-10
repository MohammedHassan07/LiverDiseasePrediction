import React from 'react'

const Input = ({ placeHolder, value, register, name, required }) => {
    console.log(register)
    return (
        <input
            placeholder={placeHolder}
            className=' bg-slate-200 px-3 py-1 border-2 border-blue-500 rounded-lg text-black focus:outline-none w-full'
            type='number'
            value={value}
            // onChange={(e) => { onChange(e.target.value) }}
            {...register(name, { required })}
        />
    )
}

export default Input
