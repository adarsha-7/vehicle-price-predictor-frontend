import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

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
            className="absolute top-3 left-4 z-15 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 md:top-4 md:h-9 md:w-9 lg:h-10 lg:w-10 dark:border-gray-600 dark:hover:bg-gray-800"
        >
            {dark ? (
                <SunIcon className="h-4 w-4 text-gray-300 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            ) : (
                <MoonIcon className="h-4 w-4 text-gray-600 md:h-5 md:w-5 lg:h-6 lg:w-6" />
            )}
        </button>
    );
};

export default ThemeToggle;
