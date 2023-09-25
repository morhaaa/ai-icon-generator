import clsx from "clsx";
import { useState } from "react";

interface Props {
  size: "small" | "medium";
  placeholder: string;
  onChange?: (text: string) => void;
  textButton?: string;
  submit?: (text: string) => void;
}

const InputGenerator: React.FC<Props> = ({
  size,
  placeholder,
  onChange,
  textButton,
  submit,
}) => {
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
    if (onChange) {
      onChange(inputText);
    }
  };

  const onClick = () => {
    if (submit) {
      submit(inputText);
    }
  };

  return (
    <form
      className={clsx(
        "w-full bg-white rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white  drop-shadow-2xl shadow-xl flex justify-between items-center",
        {
          "p-1 md:p-1 ": size === "medium",
          "p-0.5": size === "small",
        }
      )}
    >
      <input
        className={clsx("bg-transparent outline-none text-white w-full ", {
          "pl-4 text-xl md:text-xl py-2": size === "medium",
          "pl-2 md:pl-4": size === "small",
        })}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {textButton && (
        <button
          type="button"
          onClick={onClick}
          className={clsx("text-white bg-gray-800 border rounded-lg", {
            "text-xl md:text-xl py-2 px-6": size === "medium",
            "py-1 px-4": size === "small",
          })}
        >
          {textButton}
        </button>
      )}
    </form>
  );
};

export default InputGenerator;
