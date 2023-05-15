import React from "react";

const AboutServey = () => {
  return (
    <div
      className="padding_inside h-[80vh] grid md:grid-cols-2 justify-center items-center"
      style={{
        backgroundImage: 'url("yellow b.avif")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <h3 className="">
        <span>
          When you talk for original, pure and natural, It is only us,{" "}
          <strong className="text-tertiary">HONYHUT</strong>
        </span>
        <hr class="w-[50%] my-[5px] border-2 border-white" />
        <a
          href="#_"
          class="inline-block py-4 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl"
        >
          Visit Our Store
        </a>
      </h3>
      <div className="font-carmo">
        <div className="border-b border-b-white flex justify-center items-center text-2xl font-[500]">
          <div className="border-r border-r-white flex-1 p-5 flex flex-col justify-center items-center">
            <p className="leading-10">2017</p>
            <p>Founding Year</p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <p>200k</p>
            <p>Happy customer</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-2xl font-[500]">
          <div className="border-r border-r-white flex-1 p-5 flex flex-col justify-center items-center">
            <p>50</p>
            <p className="text-center">Company Buy product from us</p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <p>900</p>
            <p>Different Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServey;
