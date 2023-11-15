import React from "react";

export default function BtnWithIcon({ children, clickHandler }) {
  return (
    <div className="mx-2 pt-3">
      <button
        type="submit"
        className="flex gap-2 items-center justify-center bg-customTheme text-customText pb-2 w-full border border-[#666] rounded-full mx-auto text-center px-5 py-2"
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
}
