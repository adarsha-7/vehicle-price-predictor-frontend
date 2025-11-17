const ServerStatus = ({ serverReady }: { serverReady: boolean }) => {
    return (
        <div className="absolute text-[11px] md:text-[13px] lg:text-[14px] text-gray-600 dark:text-gray-300 z-15 top-3 md:top-4 right-4 py-1 lg:py-2 px-2 md:px-3 lg:px-4 flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-3xl transition">
            <span>Server:</span>
            {serverReady ? (
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></span>
                </div>
            ) : (
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 border-2 lg:border-3 border-gray-500 border-t-gray-200 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default ServerStatus;
