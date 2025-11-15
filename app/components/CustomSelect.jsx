"use client";

import Select from "react-select";

const CustomSelect = ({ name, label, placeholder, options, selectedOption, setSelectedOption }) => {
    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: "40px",
            borderRadius: "0.5rem",
            border: state.isFocused
                ? "1px solid #D1D5DB" // clicked/focused border
                : state.isHover
                ? "1px solid #D1D5DB" // hovered border (react-select can't detect hover in styles)
                : "1px solid #E5E7EB", // default border
            boxShadow: state.isFocused
                ? "0 0 0 3px #D6D3D1" // clicked/focused ring
                : "0 1px rgb(0 0 0 / 0.05)",
            fontSize: "14px",
            color: "#374151",
            outline: "none",
            "&:hover": {
                borderColor: "#D1D5DB",
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: "#6B7280", // placeholder:text-gray-500
            fontSize: "13px",
            fontWeight: "400", // placeholder:font-normal
            "@media (min-width: 640px)": {
                // Tailwind `sm:` breakpoint
                fontSize: "15px",
            },
        }),
        singleValue: (base) => ({
            ...base,
            color: "#374151", // text-gray-700
            "@media (min-width: 640px)": {
                // Tailwind `sm:` breakpoint
                fontSize: "15px",
            },
            "@media (min-width: 1024px)": {
                // Tailwind `sm:` breakpoint
                fontSize: "16px",
            },
        }),
        menu: (base) => ({
            ...base,
            borderRadius: "0.375rem",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "#9CA3AF", // text-gray-400
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: "none",
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#F3F4F6" : "white", // bg-gray-100 on hover
            color: "#374151",
            padding: "8px 12px",
            fontSize: "14px",
            cursor: "pointer",
            "&:active": {
                backgroundColor: "#F3F4F6",
            },
            "@media (min-width: 640px)": {
                // Tailwind `sm:` breakpoint
                fontSize: "15px",
            },
            "@media (min-width: 1024px)": {
                // Tailwind `sm:` breakpoint
                fontSize: "16px",
            },
        }),
    };

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <div className="">
                <Select
                    value={selectedOption}
                    onChange={(option) => setSelectedOption(option)}
                    options={options}
                    placeholder={placeholder}
                    instanceId={name}
                    styles={customStyles}
                    menuPlacement="top"
                />
            </div>
        </div>
    );
};

export default CustomSelect;
