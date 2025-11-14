import React from "react";

const Prediction = ({ prediction }: { prediction: number }) => {
    return (
        <section className="flex flex-col gap-5 p-8 rounded-2xl w-full bg-linear-to-br from-blue-600 to-teal-600 text-blue-50 items-center">
            <h1>PREDICTED PRICE</h1>
            <span className="text-6xl font-bold text-white">${Math.round(prediction).toLocaleString()}</span>
            <p>Based on the vehicle details provided</p>
            <div className="mt-4 w-full bg-white/20 rounded-lg p-3 text-xs">
                <p className="font-semibold mb-1">Note:</p>
                <p className="opacity-90">
                    This is an estimate based on historical data. Prices may vary significantly for electric vehicles
                    and vehicles outside typical market ranges.
                </p>
            </div>
        </section>
    );
};

export default Prediction;
