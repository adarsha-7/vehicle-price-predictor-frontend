"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Prediction from "./components/Prediction";
import ThemeToggle from "./components/ThemeToggle";
import ServerStatus from "./components/ServerStatus";
import type { formPropsType, OptionType } from "./types";

export default function Home() {
    const [serverReady, setServerReady] = useState<boolean>(false);
    const [prediction, setPrediction] = useState<null | number>(null);
    const [priceLoading, setPriceLoading] = useState<boolean>(false);

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
    const [conditionType, setConditionType] = useState<OptionType | null>(null);
    const [fuelType, setFuelType] = useState<OptionType | null>(null);
    const [transmissionType, setTransmissionType] = useState<OptionType | null>(null);
    const [driveType, setDriveType] = useState<OptionType | null>(null);
    const [vehicleType, setVehicleType] = useState<OptionType | null>(null);

    const formProps: formPropsType = {
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
    };

    return (
        <div>
            <ThemeToggle />
            <ServerStatus serverReady={serverReady} />

            <main className="mx-auto flex h-full w-full flex-col items-center justify-center px-4 py-14 sm:px-6 lg:max-w-[1000px] xl:max-w-[1100px]">
                <h1 className="mb-5 bg-linear-to-r from-blue-600 to-teal-600 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-5xl dark:font-extrabold dark:text-white">
                    Used Vehicle Price Predictor
                </h1>
                <div className="text-md text-center text-gray-500 md:text-lg dark:text-gray-400">
                    <p className="hidden md:block">
                        Looking to buy or sell a used car but unsure about its actual value?
                    </p>
                    <p>
                        Enter the vehicle details to get an instant price estimate, powered by data from over 300,000
                        listings.
                    </p>
                </div>

                <Form {...formProps}></Form>
                {prediction && <Prediction prediction={prediction} />}
            </main>
        </div>
    );
}
