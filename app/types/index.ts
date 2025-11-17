export type OptionType = { value: string; label: string };

export type formPropsType = {
    cylindersType: OptionType | null;
    manufacturerType: OptionType | null;
    conditionType: OptionType | null;
    fuelType: OptionType | null;
    transmissionType: OptionType | null;
    driveType: OptionType | null;
    vehicleType: OptionType | null;
    serverReady: boolean;
    prediction: number | null;
    priceLoading: boolean;

    setCylindersType: (value: OptionType | null) => void;
    setManufacturerType: (value: OptionType | null) => void;
    setConditionType: (value: OptionType | null) => void;
    setFuelType: (value: OptionType | null) => void;
    setTransmissionType: (value: OptionType | null) => void;
    setDriveType: (value: OptionType | null) => void;
    setVehicleType: (value: OptionType | null) => void;
    setServerReady: (value: boolean) => void;
    setPrediction: (value: number | null) => void;
    setPriceLoading: (value: boolean) => void;
};

export type parametersType = {
    year: number;
    odometer: number;
    cylinders: string | null;
    manufacturer: string | null;
    condition: string | null;
    fuel: string | null;
    transmission: string | null;
    drive: string | null;
    type: string | null;
};

export type selectPropsType = {
    name: string;
    label: string;
    placeholder: string;
    options: OptionType[];
    selectedOption: OptionType | null;
    setSelectedOption: (value: OptionType | null) => void;
};
