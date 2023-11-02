import React, { useState } from "react";
import HeroTop from "../../components/common/top-component";
import { aboutInfo } from "../../utils/About-demo";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Faqs = () => {
  const [index, setIndex] = useState(0);
  const [headingText, setHeadingText] = useState("");
  return (
    <div className="relative w-full">
      <HeroTop title={`Frequently Ask Questions`} />
      <div className="padding_inside ">
        {aboutInfo.map((info, index) => {
          return (
            <div className="border-y px-10 font-carmo  ">
              <div
                onClick={() =>
                  headingText !== info.title
                    ? setHeadingText(info.title)
                    : setHeadingText("")
                }
                className="flex justify-between items-center my-[20px]"
              >
                <h1 className="font-semibold">{info.title}</h1>
                <span>
                  {headingText === info.title ? (
                    <AiOutlineMinusCircle />
                  ) : (
                    <AiOutlinePlusCircle />
                  )}
                </span>
              </div>
              <p
                className={`${
                  headingText === info.title ? "block" : "hidden"
                } leading-relaxed `}
              >
                <ul className="">
                  <li className="mb-5 ">
                    <span className="mr-3">&#8811;</span>
                    <span className="text-[#777777] font-openSans text-lg font-medium removeTextShadow">
                      {info.details}
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
