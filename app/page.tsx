"use client";

import { useState } from "react";
import CustomSelect from "./components/CustomSelect";
import {
    cylindersOptions,
    manufacturerOptions,
    conditionOptions,
    fuelOptions,
    transmissionOptions,
    driveOptions,
    vehicleOptions,
} from "./data/options";

type Option = {
    value: string;
    label: string;
};

export default function Home() {
    const [cylindersType, setCylindersType] = useState<Option | null>(null);
    const [manufacturerType, setManufacturerType] = useState<Option | null>(null);
    const [conditionType, setConditionType] = useState<Option | null>(null);
    const [fuelType, setFuelType] = useState<Option | null>(null);
    const [transmissionType, setTransmissionType] = useState<Option | null>(null);
    const [driveType, setDriveType] = useState<Option | null>(null);
    const [vehicleType, setVehicleType] = useState<Option | null>(null);

    function handleSubmit(formData: FormData) {
        const data: {
            year: string;
            odometer: string;
            cylinders: string | null;
            manufacturer: string | null;
            condition: string | null;
            fuel: string | null;
            transmission: string | null;
            drive: string | null;
            vehicle: string | null;
        } = {
            year: formData.get("year") as string,
            odometer: formData.get("odometer") as string,
            cylinders: cylindersType?.value || null,
            manufacturer: manufacturerType?.value || null,
            condition: conditionType?.value || null,
            fuel: fuelType?.value || null,
            transmission: transmissionType?.value || null,
            drive: driveType?.value || null,
            vehicle: vehicleType?.value || null,
        };

        console.log(data);
    }

    return (
        <div>
            <main className="flex flex-col w-full h-full items-center gap-10 py-10 px-3 justify-center">
                <h1 className="font-bold text-center text-4xl bg-clip-text bg-linear-to-r from-blue-600 to-teal-600 text-transparent">
                    Used Vehicle Price Predictor
                </h1>
                <p className="text-gray-600">Enter the vehicle details to get an instant price estimate</p>
                <form
                    className="flex flex-col gap-5 bg-[rgb(255,255,255)] p-8 rounded-2xl shadow-2xl w-full border text-sm border-gray-100 "
                    action={handleSubmit}
                >
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
                </form>
            </main>
        </div>
    );
}
