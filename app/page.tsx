"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Prediction from "./components/Prediction";
import type { formPropsType, OptionType } from "./types";

export default function Home() {
    const [serverReady, setServerReady] = useState<boolean>(false);
    const [prediction, setPrediction] = useState<null | number>(null);
    const [priceLoading, setPriceLoading] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    // wake the server
    useEffect(() => {
        axios
            .get("https://vehicle-price-predictor-model-render.onrender.com")
            .then(() => {
                setServerReady(true);
                console.log("Server is ready");
            })
            .catch(() => console.log("Error waking server"));
    }, []);

    const [cylindersType, setCylindersType] = useState<OptionType | null>(null);
    const [manufacturerType, setManufacturerType] = useState<OptionType | null>(null);
    const [conditionType, setConditionType] = useState<OptionType | null>(null);
    const [fuelType, setFuelType] = useState<OptionType | null>(null);
    const [transmissionType, setTransmissionType] = useState<OptionType | null>(null);
    const [driveType, setDriveType] = useState<OptionType | null>(null);
    const [vehicleType, setVehicleType] = useState<OptionType | null>(null);

    const formProps: formPropsType = {
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
    };

    return (
        <div>
            <main className="flex flex-col w-full lg:max-w-[1000px] xl:max-w-[1100px] h-full items-center gap-5 py-10 px-4 sm:px-6 justify-center mx-auto">
                <h1 className="font-bold dark:font-extrabold text-center text-4xl sm:text-5xl bg-clip-text bg-linear-to-r from-blue-600 to-teal-600 text-transparent dark:text-white">
                    Used Vehicle Price Predictor
                </h1>
                <p className="text-gray-500 dark:text-gray-400 sm:text-lg">
                    Enter the vehicle details to get an instant price estimate
                </p>

                <Form {...formProps}></Form>
                {prediction && <Prediction prediction={prediction} />}
            </main>
        </div>
    );
}
