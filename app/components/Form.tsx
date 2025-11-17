import axios from "axios";
import { Toaster, toast } from "sonner";
import {
    cylindersOptions,
    manufacturerOptions,
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
    manufacturerType,
    conditionType,
    fuelType,
    transmissionType,
    driveType,
    vehicleType,
    serverReady,
    prediction,
    priceLoading,
    setCylindersType,
    setManufacturerType,
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
            year: Number(formData.get("year")),
            odometer: Number(formData.get("odometer")) * 0.621371,
            cylinders: cylindersType?.value || null,
            manufacturer: manufacturerType?.value || null,
            condition: conditionType?.value || null,
            fuel: fuelType?.value || null,
            transmission: transmissionType?.value || null,
            drive: driveType?.value || null,
            type: vehicleType?.value || null,
        };

        const statesArray = [
            { state: cylindersType, name: "Cylinders" },
            { state: manufacturerType, name: "Manufacturer" },
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

        if (serverReady) {
            setPriceLoading(true);
            const res = await axios.post("https://vehicle-price-predictor-model-render.onrender.com/predict", data);
            setPrediction(Number(res.data.prediction));
            console.log(prediction);
            setPriceLoading(false);
        }
    }
    return (
        <form
            className="flex flex-col gap-5 bg-[rgb(255,255,255)] dark:bg-gray-900 p-8 rounded-2xl shadow-2xl mt-5 w-full border text-sm border-gray-100 dark:border-gray-700"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.target as HTMLFormElement));
            }}
        >
            <div className="flex flex-col gap-5 lg:gap-y-8 xl:gap-x-8 md:grid md:grid-cols-2 md:gap-6">
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
                    name="manufacturer"
                    label="Manufacturer"
                    placeholder="Select manufacturer"
                    options={manufacturerOptions}
                    selectedOption={manufacturerType}
                    setSelectedOption={setManufacturerType}
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
                <div className="last:col-span-full">
                    <Select
                        name="vehicle-type"
                        label="Vehicle Type"
                        placeholder="Select vehicle type"
                        options={vehicleOptions}
                        selectedOption={vehicleType}
                        setSelectedOption={setVehicleType}
                    />
                </div>
            </div>
            {priceLoading && (
                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 h-12 lg:h-15 w-45 lg:w-55 border dark:border-0 rounded-lg mx-auto opacity-75 bg-linear-to-r from-blue-500 to-teal-500  hover:from-blue-700 hover:to-teal-700 text-white dark:text-gray-900 font-medium text-[15px] lg:text-[17px]"
                >
                    <div className="w-5 h-5 lg:w-6 lg:h-6 mb-1 border-2 lg:border-3 border-gray-400 border-t-gray-200 rounded-full animate-spin"></div>
                    <p>Predicting...</p>
                </button>
            )}
            {!priceLoading && (
                <button
                    type="submit"
                    className="flex justify-center items-center gap-2 h-12 lg:h-15 w-45 lg:w-55 border dark:border-0 rounded-lg mx-auto bg-linear-to-r from-blue-500 to-teal-500  hover:from-blue-600 hover:to-teal-600 text-white dark:text-gray-900 font-medium text-[15px] lg:text-[17px]"
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
