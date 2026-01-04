import React from 'react'

export default function RadioInput({ options, name, value }) {
    const [selectedValue, setSelectedValue] = React.useState(options[0] || '');
    value(selectedValue);
    return (
        <div>
            <div className='font-semibold flex gap-1'>
                <p>Please Select the</p>
                <p>{name}</p>
                <p>:</p>

            </div>
            <div className='flex gap-2 items-center '>
                {options.map((option, index) => (
                    <>
                        <input type="radio" className="size-4" id={option} defaultChecked={index === 0} name="radio"
                            onChange={() => setSelectedValue(option)} />
                        <label htmlFor={option} >{option}</label>
                    </>
                ))}
            </div>
        </div>
    )
}
