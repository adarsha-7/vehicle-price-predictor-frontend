import axios from "axios";
import CustomSelect from "./CustomSelect";
import { Toaster, toast } from "sonner";
import {
    cylindersOptions,
    manufacturerOptions,
    conditionOptions,
    fuelOptions,
    transmissionOptions,
    driveOptions,
    vehicleOptions,
} from "@/app/data/options";
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
    setCylindersType,
    setManufacturerType,
    setConditionType,
    setFuelType,
    setTransmissionType,
    setDriveType,
    setVehicleType,
    setServerReady,
    setPrediction,
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
            const res = await axios.post("https://vehicle-price-predictor-model-render.onrender.com/predict", data);
            setPrediction(Number(res.data.prediction));
            console.log(prediction);
        }
    }
    return (
        <form
            className="flex flex-col gap-5 bg-[rgb(255,255,255)] p-8 rounded-2xl shadow-2xl w-full border text-sm border-gray-100 "
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.target as HTMLFormElement));
            }}
        >
            <div>
                <label htmlFor="year" className="label">
                    Year
                </label>
                <input
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
                    className="input"
                    type="number"
                    placeholder="e.g., 45000"
                    name="odometer"
                    min="0"
                    max="800000"
                    required
                />
            </div>
            <CustomSelect
                name="cylinders"
                label="Cylinders"
                placeholder="Select cylinders"
                options={cylindersOptions}
                selectedOption={cylindersType}
                setSelectedOption={setCylindersType}
            />
            <CustomSelect
                name="manufacturer"
                label="Manufacturer"
                placeholder="Select manufacturer"
                options={manufacturerOptions}
                selectedOption={manufacturerType}
                setSelectedOption={setManufacturerType}
            />
            <CustomSelect
                name="condition"
                label="Condition"
                placeholder="Select condition"
                options={conditionOptions}
                selectedOption={conditionType}
                setSelectedOption={setConditionType}
            />
            <CustomSelect
                name="fuel-type"
                label="Fuel Type"
                placeholder="Select fuel type"
                options={fuelOptions}
                selectedOption={fuelType}
                setSelectedOption={setFuelType}
            />
            <CustomSelect
                name="transmission"
                label="Transmission Type"
                placeholder="Select transmission"
                options={transmissionOptions}
                selectedOption={transmissionType}
                setSelectedOption={setTransmissionType}
            />
            <CustomSelect
                name="drive-type"
                label="Drive Type"
                placeholder="Select drive type"
                options={driveOptions}
                selectedOption={driveType}
                setSelectedOption={setDriveType}
            />
            <CustomSelect
                name="vehicle-type"
                label="Vehicle Type"
                placeholder="Select vehicle type"
                options={vehicleOptions}
                selectedOption={vehicleType}
                setSelectedOption={setVehicleType}
            />
            <button
                type="submit"
                className="h-12 w-45 border rounded-lg mx-auto bg-linear-to-r from-blue-600 to-teal-600  hover:from-blue-700 hover:to-teal-700 text-white font-medium text-[15px]"
            >
                Predict Price
            </button>
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
