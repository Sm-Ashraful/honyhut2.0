import React from "react";

const OfferPercent = ({ percentage }) => {
  return (
    <div
      className={`badge bg-customTheme text-customText h-12 w-10 flex justify-center items-center text-[8pt]`}
    >
      -{percentage}%
    </div>
  );
};

export default OfferPercent;
