"use client";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  size: "small" | "medium";
  placeholder: string;
  value?: string;
  onChange?: (text: React.ChangeEvent<HTMLInputElement>) => void;
  textButton?: string;
  submit?: (text: string) => void;
}

const InputGenerator: React.FC<Props> = ({
  size,
  placeholder,
  value,
  onChange,
  textButton,
  submit,
}) => {
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
    if (onChange) {
      onChange(event);
    }
  };

  const onClick = () => {
    if (submit) {
      submit(inputText);
    }
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(
        "w-full bg-white rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-slate-700 drop-shadow-2xl shadow-xl flex justify-between items-center",
        {
          "p-1 md:p-1 ": size === "medium",
          "p-0.5": size === "small",
        }
      )}
    >
      <input
        className={clsx("bg-transparent outline-none text-white w-full ", {
          "pl-2 md:pl-4  md:text-lg lg:text-xl py-1 lg:py-2": size === "medium",
          "pl-2 md:pl-4": size === "small",
        })}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {textButton && (
        <button
          type="button"
          onClick={onClick}
          className={clsx(
            "text-white bg-gray-900 border border-slate-600 rounded-lg",
            {
              "text-base md:text-lg lg:text-xl py-1 px-4 lg:py-2 lg:px-6":
                size === "medium",
              "py-1 px-4": size === "small",
            }
          )}
        >
          {textButton}
        </button>
      )}
    </form>
  );
};

export default InputGenerator;
