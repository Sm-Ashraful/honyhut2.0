import React, { useState } from "react";

const CountItem = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center border border-gray rounded-full px-4 py-2 w-32">
      {cartItem.quantity}
      <span
        className="mr-2 ml-8 font-bold cursor-pointer hover:text-secondary bg-gray rounded-lg"
        onClick={() => setCount(count - 1)}
      >
        <AiOutlineMinus />
      </span>
      <span
        className="ml-2 font-bold cursor-pointer hover:text-secondary bg-gray rounded-full"
        onClick={() => setCount(count + 1)}
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default CountItem;
