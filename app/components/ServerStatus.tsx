const ServerStatus = ({ serverReady }: { serverReady: boolean }) => {
    return (
        <div className="absolute top-3 right-4 z-15 flex items-center gap-2 rounded-3xl border border-gray-300 px-2 py-1 text-[11px] text-gray-600 transition md:top-4 md:px-3 md:text-[13px] lg:px-4 lg:py-2 lg:text-[14px] dark:border-gray-600 dark:text-gray-300">
            <span>Server:</span>
            {serverReady ? (
                <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-400 md:h-3 md:w-3"></span>
                </div>
            ) : (
                <div className="flex items-center gap-1">
                    <div className="h-3 w-3 animate-spin rounded-full border-2 border-gray-500 border-t-gray-200 lg:h-4 lg:w-4 lg:border-3"></div>
                </div>
            )}
        </div>
    );
};

export default ServerStatus;
