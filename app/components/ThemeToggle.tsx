import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setDark(document.body.classList.contains("dark"));
    }, []);

    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
        setDark(!dark);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="absolute z-15 top-3 md:top-4 left-4 w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
        >
            {dark ? (
                <SunIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-300" />
            ) : (
                <MoonIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-gray-600" />
            )}
        </button>
    );
};

export default ThemeToggle;
