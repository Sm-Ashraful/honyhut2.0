import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[300px]">
      <Image src={"/update/ac_banner_web_enus.png"} alt="bg-image" fill cover />
    </div>
  );
}
