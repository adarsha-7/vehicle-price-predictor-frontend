const Prediction = ({ prediction }: { prediction: number }) => {
    return (
        <section className="mt-3 flex w-full flex-col items-center gap-5 rounded-2xl bg-linear-to-br from-blue-600 to-teal-600 p-8 text-blue-100 lg:flex-row lg:text-[18px]">
            <div className="mt-3 flex flex-1 flex-col items-center gap-5 rounded-2xl">
                <h1>PREDICTED LISTING PRICE</h1>
                <span className="text-6xl font-bold text-white md:text-7xl">
                    ${Math.round(prediction).toLocaleString()}
                </span>
                <p>Based on the vehicle details provided</p>
            </div>
            <div className="mt-4 w-full flex-1 rounded-lg bg-white/20 p-3 text-xs sm:text-sm">
                <p className="mb-1 font-semibold">Note:</p>
                <p className="opacity-90">
                    This is just an estimate based on common attributes. Prices highly depend on the make and model of
                    the car and may vary significantly for EVs, and vehicles outside typical market ranges.
                </p>
            </div>
        </section>
    );
};

export default Prediction;
