const ThemeToggle = () => {
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="fixed top-4 left-4 w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        >
            T
        </button>
    );
};

export default ThemeToggle;
