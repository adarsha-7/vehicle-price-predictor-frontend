const ThemeToggle = () => {
    const toggleDarkMode = (): void => {
        document.body.classList.toggle("dark");
    };

    return (
        <button onClick={toggleDarkMode} className="px-4 py-2 bg-gray-800 text-white rounded">
            Toggle Dark Mode
        </button>
    );
};

export default ThemeToggle;
