"use client";
import React, { useEffect, useState } from "react";

// 디바운스 훅
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// DebouncedInput 컴포넌트
interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  delay?: number; // 디바운스 시간, 기본값은 300ms
  placeholder?: string;
  className?: string; // 추가적인 클래스 이름
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
