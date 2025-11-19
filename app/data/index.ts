import { OptionType } from "../types";

export const cylindersOptions: OptionType[] = [
    { value: "3 cylinders", label: "3 Cylinders" },
    { value: "4 cylinders", label: "4 Cylinders" },
    { value: "6 cylinders", label: "6 Cylinders" },
    { value: "8 cylinders", label: "8 Cylinders" },
    { value: "other", label: "Other" },
];

export const conditionOptions: OptionType[] = [
    { value: "excellent", label: "Excellent" },
    { value: "good", label: "Good" },
    { value: "fair", label: "Fair" },
];

export const fuelOptions: OptionType[] = [
    { value: "diesel", label: "Diesel" },
    { value: "gas", label: "Gas" },
    { value: "other", label: "Other" },
];

export const transmissionOptions: OptionType[] = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
    { value: "other", label: "Other" },
];

export const driveOptions: OptionType[] = [
    { value: "4wd", label: "4WD" },
    { value: "fwd", label: "FWD" },
    { value: "rwd", label: "RWD" },
];

export const vehicleOptions: OptionType[] = [
    { value: "pickup", label: "Pickup" },
    { value: "sedan", label: "Sedan" },
    { value: "SUV", label: "SUV" },
    { value: "other", label: "Other" },
];
