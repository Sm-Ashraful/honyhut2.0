import React from "react";
import Link from "next/link";
import Image from "next/image";

import Male from "../../Assets/Category/Male.jpeg";
import Female from "../../Assets/Category/Fmale.jpeg";
import Condoms from "../../Assets/Category/Condoms.jpeg";
import Cannabies from "../../Assets/Category/Cannabies.jpeg";

const Products = () => {
  return (
    <div>
      <div className="mr-3 bg-primary w-full h-auto relative top-10">
        <div className="grid grid-cols-2 md:grid-cols-4">

          <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
            <div className="relative flex flex-col justify-center items-center hover:text-honey">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Male} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">Male Enhancement</h1>
            </div>
          </div>

          <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
            <div className="relative flex flex-col justify-center items-center hover:text-honey">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Female} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">Female Enhancement</h1>
            </div>
          </div>
          
          <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
            <div className="relative flex flex-col justify-center items-center hover:text-honey">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Condoms} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">Condoms</h1>
            </div>
          </div>

          <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
            <div className="relative flex flex-col justify-center items-center hover:text-honey">
              <div className=" pt-2 h-24 w-32 relative items-center">
                <Image fill cover src={Cannabies} />
              </div>
              <h1 className=" font-bold pt-7 ml-1 text-center">Cannabies Accessories</h1>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Products;
