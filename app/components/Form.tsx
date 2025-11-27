import axios from "axios";
import { Toaster, toast } from "sonner";
import {
    cylindersOptions,
    conditionOptions,
    fuelOptions,
    transmissionOptions,
    driveOptions,
    vehicleOptions,
} from "../data";
import Select from "./Select";
import type { formPropsType, parametersType } from "../types";

const Form = ({
    cylindersType,
    conditionType,
    fuelType,
    transmissionType,
    driveType,
    vehicleType,
    serverReady,
    prediction,
    priceLoading,
    setCylindersType,
    setConditionType,
    setFuelType,
    setTransmissionType,
    setDriveType,
    setVehicleType,
    setServerReady,
    setPrediction,
    setPriceLoading,
}: formPropsType) => {
    async function handleSubmit(formData: FormData) {
        const data: parametersType = {
            year: Number(formData.get("year")) - 5,
            odometer: Number(formData.get("odometer")) * 0.621371,
            cylinders: cylindersType?.value || null,
            fuel: fuelType?.value || null,
            transmission: transmissionType?.value || null,
            drive: driveType?.value || null,
            type: vehicleType?.value || null,
        };

        const condition = conditionType?.value || null;

        const statesArray = [
            { state: cylindersType, name: "Cylinders" },
            { state: conditionType, name: "Condition" },
            { state: fuelType, name: "Fuel" },
            { state: transmissionType, name: "Transmission" },
            { state: driveType, name: "Drive" },
            { state: vehicleType, name: "Vehicle" },
        ];

        for (let i = 0; i < statesArray.length; i++) {
            if (!statesArray[i].state) {
                toast(`Value for ${statesArray[i].name} cannot be empty`);
                return;
            }
        }

        console.log(data);

        let prediction = null;

        if (serverReady) {
            setPriceLoading(true);
            const res = await axios.post("https://vehicle-price-predictor-model-render.onrender.com/predict", data);
            prediction = Number(res.data.prediction);

            if (prediction) {
                if (condition == "good") prediction -= (10 / 100) * prediction;
                else if (condition == "fair") prediction -= (20 / 100) * prediction;
            }

            setPrediction(prediction);
            console.log(prediction);
            setPriceLoading(false);
        }
    }
    return (
        <form
            className="mt-15 mb-3 flex w-full flex-col gap-5 rounded-2xl border border-gray-100 bg-[rgb(255,255,255)] p-8 text-sm shadow-2xl dark:border-gray-700 dark:bg-gray-900"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.target as HTMLFormElement));
            }}
        >
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-6 lg:gap-y-8 xl:gap-x-8">
                <div>
                    <label htmlFor="year" className="label">
                        Year
                    </label>
                    <input
                        id="year"
                        className="input"
                        type="number"
                        placeholder="e.g., 2020"
                        name="year"
                        min="1950"
                        max="2025"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="odometer" className="label">
                        Odometer (km)
                    </label>
                    <input
                        id="odometer"
                        className="input"
                        type="number"
                        placeholder="e.g., 45000"
                        name="odometer"
                        min="0"
                        max="800000"
                        required
                    />
                </div>
                <Select
                    name="cylinders"
                    label="Cylinders"
                    placeholder="Select cylinders"
                    options={cylindersOptions}
                    selectedOption={cylindersType}
                    setSelectedOption={setCylindersType}
                />
                <Select
                    name="condition"
                    label="Condition"
                    placeholder="Select condition"
                    options={conditionOptions}
                    selectedOption={conditionType}
                    setSelectedOption={setConditionType}
                />
                <Select
                    name="fuel-type"
                    label="Fuel Type"
                    placeholder="Select fuel type"
                    options={fuelOptions}
                    selectedOption={fuelType}
                    setSelectedOption={setFuelType}
                />
                <Select
                    name="transmission"
                    label="Transmission Type"
                    placeholder="Select transmission"
                    options={transmissionOptions}
                    selectedOption={transmissionType}
                    setSelectedOption={setTransmissionType}
                />
                <Select
                    name="drive-type"
                    label="Drive Type"
                    placeholder="Select drive type"
                    options={driveOptions}
                    selectedOption={driveType}
                    setSelectedOption={setDriveType}
                />
                <Select
                    name="vehicle-type"
                    label="Vehicle Type"
                    placeholder="Select vehicle type"
                    options={vehicleOptions}
                    selectedOption={vehicleType}
                    setSelectedOption={setVehicleType}
                />
            </div>
            {priceLoading && (
                <button
                    type="submit"
                    className="mx-auto mt-10 flex h-12 w-45 items-center justify-center gap-2 rounded-lg border bg-linear-to-r from-blue-500 to-teal-500 text-[15px] font-medium text-white opacity-75 hover:from-blue-700 hover:to-teal-700 lg:h-15 lg:w-55 lg:text-[17px] dark:border-0 dark:text-gray-900"
                >
                    <div className="mb-1 h-5 w-5 animate-spin rounded-full border-2 border-gray-400 border-t-gray-200 lg:h-6 lg:w-6 lg:border-3"></div>
                    <p>Predicting...</p>
                </button>
            )}
            {!priceLoading && (
                <button
                    type="submit"
                    className="mx-auto mt-10 flex h-12 w-45 items-center justify-center gap-2 rounded-lg border bg-linear-to-r from-blue-500 to-teal-500 text-[15px] font-medium text-white hover:from-blue-600 hover:to-teal-600 lg:h-15 lg:w-55 lg:text-[17px] dark:border-0 dark:text-gray-900"
                >
                    <p>Predict Price</p>
                </button>
            )}
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        width: "400px",
                        padding: "24px",
                        fontSize: "16px",
                        borderRadius: "8px",
                    },
                    duration: 5000,
                }}
            />
        </form>
    );
};

export default Form;
