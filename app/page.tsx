"use client";

export default function Home() {
    const vehicleTypes = [];
    return (
        <div>
            <main className="flex flex-col w-full h-full items-center gap-10 py-10 px-3 justify-center">
                <h1 className="font-bold text-center text-4xl">Used Vehicle Price Predictor</h1>
                <p className="text-gray-600">Enter the vehicle details to get an instant price estimate</p>
                <form className="flex flex-col gap-5 bg-[rgb(255,255,255)] p-8 rounded-2xl shadow-2xl w-full border text-sm border-gray-100">
                    <div>
                        <label htmlFor="year" className="label">
                            Year
                        </label>
                        <input className="input" type="text" placeholder="e.g., 2020" name="year" />
                    </div>
                    <div>
                        <label htmlFor="odometer" className="label">
                            Odometer (km)
                        </label>
                        <input className="input" type="text" placeholder="e.g., 45000" name="odometer" />
                    </div>
                    <div>
                        <label htmlFor="cylinders" className="label">
                            Cylinders
                        </label>
                        <input className="input" type="text" placeholder="e.g., 4" name="cylinders" />
                    </div>
                    <div>
                        <label htmlFor="manufacturer" className="label">
                            Manufacturer
                        </label>
                        <input className="input" type="text" placeholder="Select manufacturer" name="manufacturer" />
                    </div>
                    <div>
                        <label htmlFor="condition" className="label">
                            Condition
                        </label>
                        <input className="input" type="text" placeholder="Select condition" name="condition" />
                    </div>
                    <div>
                        <label htmlFor="fuel-type" className="label">
                            Fuel Type
                        </label>
                        <input className="input" type="text" placeholder="Select fuel type" name="fuel-type" />
                    </div>
                    <div>
                        <label htmlFor="transmission" className="label">
                            Transmission
                        </label>
                        <input className="input" type="text" placeholder="Select transmission" name="transmission" />
                    </div>
                    <div>
                        <label htmlFor="drive-type" className="label">
                            Drive Type
                        </label>
                        <input className="input" type="text" placeholder="Select drive type" name="drive-type" />
                    </div>

                    <div>
                        <label htmlFor="vehicle-type" className="label">
                            Vehicle Type
                        </label>
                        <input className="input" type="text" placeholder="Select vehicle type" name="vehicle-type" />
                    </div>
                </form>
            </main>
        </div>
    );
}
