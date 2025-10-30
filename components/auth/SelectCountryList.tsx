"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";
import countryList from "react-select-country-list";
import Flag from "react-world-flags";

function SelectCountryList() {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <>
      <Select>
        <SelectTrigger className="select-trigger">
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-600 text-white">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="focus:bg-gray-600 space-x-3"
              >
                <Flag
                  code={option.value}
                  className="size-5 rounded-full object-cover"
                />
                <span>{option.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <p className="text-gray-500">Helps us show market data and news relevant to you.</p>
    </>
  );
}
export default SelectCountryList;
