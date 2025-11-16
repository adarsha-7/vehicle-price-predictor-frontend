"use client";

import Select from "react-select";

const CustomSelect = ({ name, label, placeholder, options, selectedOption, setSelectedOption }) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-gray-700 dark:text-gray-200 font-medium">
                {label}
            </label>
            <Select
                classNamePrefix="custom"
                value={selectedOption}
                onChange={(option) => setSelectedOption(option)}
                options={options}
                placeholder={placeholder}
                instanceId={name}
                menuPlacement="top"
            />
        </div>
    );
};

export default CustomSelect;
