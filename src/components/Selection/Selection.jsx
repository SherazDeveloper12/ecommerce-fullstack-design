import React from 'react'

export default function Selection({ options, name, value }) {
    const [selectedValue, setSelectedValue] = React.useState(`${options[0]}`);
    value(selectedValue);
    return (
        <div className='w-full'>
            <label
                htmlFor="selectionlabel"
                className='font-semibold'
            >
                Please Select the {name}:
            </label>
            <select
                id="selectionlabel"
                className="bg-white border border-gray-300 rounded p-1 w-full"

                onChange={(e) => setSelectedValue(e.target.value)}
            >
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }

            </select>
        </div>
    )
}

