import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const BtnOutlineCounter = ({ count, setCount }) => {
  function increaseItem(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  function decreaseItem(e) {
    e.preventDefault();
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="transition-all duration-1000 ">
      <button className="py-5 w-full h-full flex justify-between   items-center bg-white text-black border text-[10px] md:text-[18px] rounded-md text-center">
        <span className="px-5 font-bold cursor-pointer" onClick={decreaseItem}>
          <AiOutlineMinus className="text-md font-bold" />
        </span>

        <span className="px-5">{count}</span>

        <span
          className="font-bold cursor-pointer   px-5"
          onClick={increaseItem}
        >
          <AiOutlinePlus className="text-md font-bold" />
        </span>
      </button>
    </div>
  );
};

export default BtnOutlineCounter;
