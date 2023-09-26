import clsx from "clsx";
import { useState } from "react";

interface Props {}

const Select: React.FC<Props> = ({}) => {
  return (
    <select
      className={clsx(
        "bg-white rounded-xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border border-white  drop-shadow-2xl shadow-xl flex justify-between items-center px-2 p-1 text-white"
      )}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
  );
};

export default Select;
