import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import Male from "../../Assets/Category/Male.jpeg"


const Products = () => {
  return (
    <div>
    <div className="mr-3 border-t-2 bg-primary w-full flex">
      <div className="flex ">
        <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
        <div className='relative flex shadow-sm'>
        <div className=' p-2 h-16 w-16 relative'>
        <Image fill cover src={Male} />
        </div>
          <h1 className=" font-bold pt-7">Male Enhancement</h1>
        </div>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            <Link href="#">
              <button className="text-lg  text-gray hover:text-honey active">
                Honey
              </button>
            </Link>
            <Link href="#">
              <button className="text-lg  text-gray hover:text-honey">
                Pills
              </button>
            </Link>
            <Link href="#">
              <button className=" text-lg text-gray hover:text-honey hover:underline">
                Liquid Shots
              </button>
            </Link>
          </div>
        </div>
        <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
          <h1 className="font-bold">Female Enhancement</h1>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            <Link href="#">
              <button className="text-lg  text-gray hover:text-honey">
                Pills
              </button>
            </Link>
            <Link href="#">
              <button className=" text-lg text-gray hover:text-honey hover:underline">
                Liquid Shots
              </button>
            </Link>
          </div>
        </div>
        <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
          <h1 className="font-bold ">Condoms</h1>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            <Link href="#">
              <button className="text-lg  text-gray hover:text-honey">
                Male Condoms
              </button>
            </Link>
          </div>
        </div>
        <div className="p-5 justify-between items-center cursor-pointer hover:bg-white shadow-md">
          <h1 className="font-bold">Cannabies Accessories</h1>
          <div className="flex pt-8 md:pt-3 space-x-5 justify-between">
            <Link href="#">
              <button className="text-lg  text-gray hover:text-honey">
                Rolling Paper
              </button>
            </Link>
            <Link href="#">
              <button className="text-lg  text-gray hover:text-honey">
                Cone Paper
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products;