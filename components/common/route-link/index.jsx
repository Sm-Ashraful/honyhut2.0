import React from "react";
import { FaHome } from "react-icons/fa";

const RouteLink = ({ path }) => {
  return (
    <div className="bg-primary py-5 flex justify-start items-center padding_inside">
      <p className="mb-0  text-xl font-bold flex justify-center items-center">
        <FaHome className="text-secondary" />
        <span className="mx-[10px]">:</span>
      </p>
      <p className="text-sm flex justify-center items-center">
        {path.filter(Boolean).map((linkName, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">{">"}</span>}
            <span className="capitalize">{linkName}</span>
          </span>
        ))}
      </p>
    </div>
  );
};

export default RouteLink;
