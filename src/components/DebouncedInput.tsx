"use client";
import { useDebounce } from "@/hooks/use-Debounce";
import React, { useEffect, useState } from "react";

interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  delay?: number;
  placeholder?: string;
  className?: string;
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value,
  onChange,
  delay = 300,
  placeholder,
  className,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      className={`mb-4 p-2 border border-gray-300 rounded w-full ${className}`}
    />
  );
};

export default DebouncedInput;
