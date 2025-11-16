"use client";

import Select from "react-select";
import { useState } from "react";

const CustomSelect = ({ name, label, placeholder, options, selectedOption, setSelectedOption }) => {
    const [darkMode, setDarkMode] = useState(false);

    const customStyles = {
        control: (base, state) => ({
            ...base,
            height: "40px",
            borderRadius: "0.5rem",
            border: state.isFocused
                ? `1px solid ${darkMode ? "#4B5563" : "#D1D5DB"}`
                : state.isHover
                ? `1px solid ${darkMode ? "#4B5563" : "#D1D5DB"}`
                : `1px solid ${darkMode ? "#374151" : "#E5E7EB"}`,
            boxShadow: state.isFocused
                ? `0 0 0 3px ${darkMode ? "rgba(107,114,128,0.3)" : "#D6D3D1"}`
                : "0 1px rgb(0 0 0 / 0.05)",
            backgroundColor: darkMode ? "#1F2937" : "white",
            color: darkMode ? "#F3F4F6" : "#374151",
            outline: "none",
            "&:hover": {
                borderColor: darkMode ? "#4B5563" : "#D1D5DB",
            },
        }),
        placeholder: (base) => ({
            ...base,
            color: darkMode ? "#9CA3AF" : "#6B7280",
            fontSize: "13px",
            fontWeight: "400",
            "@media (min-width: 640px)": { fontSize: "15px" },
        }),
        singleValue: (base) => ({
            ...base,
            color: darkMode ? "#F3F4F6" : "#374151",
            "@media (min-width: 640px)": { fontSize: "15px" },
            "@media (min-width: 1024px)": { fontSize: "16px" },
        }),
        menu: (base) => ({
            ...base,
            borderRadius: "0.375rem",
            border: `1px solid ${darkMode ? "#374151" : "#E5E7EB"}`,
            boxShadow: darkMode ? "0 1px 2px rgba(255,255,255,0.05)" : "0 1px 2px rgba(0,0,0,0.05)",
            backgroundColor: darkMode ? "#1F2937" : "white",
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: darkMode ? "#9CA3AF" : "#9CA3AF",
        }),
        indicatorSeparator: (base) => ({ ...base, display: "none" }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? (darkMode ? "#374151" : "#F3F4F6") : darkMode ? "#1F2937" : "white",
            color: darkMode ? "#F3F4F6" : "#374151",
            padding: "8px 12px",
            fontSize: "14px",
            cursor: "pointer",
            "&:active": {
                backgroundColor: state.isFocused ? (darkMode ? "#374151" : "#F3F4F6") : darkMode ? "#1F2937" : "white",
            },
            "@media (min-width: 640px)": { fontSize: "15px" },
            "@media (min-width: 1024px)": { fontSize: "16px" },
        }),
    };

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="label">
                {label}
            </label>
            <div className="">
                <Select
                    classNamePrefix="custom-select"
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
