const Prediction = ({ prediction }: { prediction: number }) => {
    return (
        <section className="flex flex-col lg:flex-row gap-5 p-8 mt-3 rounded-2xl w-full bg-linear-to-br from-blue-600 to-teal-600 text-blue-100 items-center lg:text-[18px]">
            <div className="flex-1 flex flex-col gap-5 mt-3 rounded-2xl items-center">
                <h1>PREDICTED PRICE</h1>
                <span className="text-6xl md:text-7xl font-bold text-white">
                    ${Math.round(prediction).toLocaleString()}
                </span>
                <p>Based on the vehicle details provided</p>
            </div>
            <div className="flex-1 mt-4 w-full bg-white/20 rounded-lg p-3 text-xs sm:text-sm">
                <p className="font-semibold mb-1">Note:</p>
                <p className="opacity-90">
                    This is just an estimate based on common attributes. Prices highly depend on the make and model of
                    the car and may vary significantly for EVs, and vehicles outside typical market ranges.
                </p>
            </div>
        </section>
    );
};

export default Prediction;
