import React from "react";
import Link from "next/link";
import Image from "next/image";

import Shipping from "../../Assets/aboutUs/free-delivery.png";
import Support from "../../Assets/aboutUs/Support-69.png";
import Payment from "../../Assets/aboutUs/card.jpg";
import Delivery from "../../Assets/aboutUs/shipmaster.jpg";

const About = () => {
  return (
    <div>
      <div className="bg-gray w-full h-auto relative">
        <div className="padding_inside grid grid-cols-2 md:grid-cols-4 ">
          <div className="p-4 justify-between items-center shadow-md">
            <div className="relative flex flex-col justify-center items-center">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Shipping} alt={"Image"}/>
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">
                Free Shipping
              </h1>
              <p>On All Orders $29.99</p>
            </div>
          </div>

          <div className="p-5 justify-between items-center shadow-md">
            <div className="relative flex flex-col justify-center items-center">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Support} alt={"Image"} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">24/7 Support</h1>
            </div>
          </div>

          <div className="p-5 justify-between items-center shadow-md">
            <div className="relative flex flex-col justify-center items-center">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Payment} alt={"Image"} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">
                Secured Payment
              </h1>
            </div>
          </div>

          <div className="p-5 justify-between items-center shadow-md">
            <div className="relative flex flex-col justify-center items-center">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Delivery} alt={"Image"} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">
                Fast Delivery
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
