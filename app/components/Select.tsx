"use client";

import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import type { selectPropsType } from "../types";

const Select = ({ label, placeholder, options, selectedOption, setSelectedOption }: selectPropsType) => {
    return (
        <div>
            <Listbox value={selectedOption} onChange={setSelectedOption}>
                <Label className="label">{label}</Label>
                <div className="relative mt-2">
                    <ListboxButton
                        className={`input cursor-pointer flex justify-between ${
                            selectedOption ? "" : "text-gray-500 dark:text-gray-400"
                        }`}
                    >
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className="block truncate">
                                {selectedOption ? selectedOption.label : placeholder}
                            </span>
                        </span>
                        <ChevronUpDownIcon
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 text-gray-400 sm:size-4"
                        />
                    </ListboxButton>
                    <ListboxOptions
                        transition
                        className="absolute cursor-pointer z-10 mt-1 max-h-56 border shadow-2xs bg-white border-gray-300 dark:border-gray-700 w-full overflow-auto rounded-lg dark:bg-gray-800 outline-none scrollbar-none"
                    >
                        {options.map((option) => (
                            <ListboxOption
                                key={option.value}
                                value={option}
                                className="group relative cursor-pointer py-2 pr-9 pl-3 select-none data-focus:bg-gray-200 dark:data-focus:bg-gray-700 my-2"
                            >
                                <div className="flex items-center">
                                    <span className="ml-3 text-[14px] lg:text-[15px]">{option.label}</span>
                                </div>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 group-not-data-selected:hidden">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
};

export default Select;
