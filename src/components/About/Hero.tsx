"use client";
import Image from "next/image";
import about from "@/assests/AboutUs/about.svg";
export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-10 grid-rows-6  ">
        <div className="col-span-4 row-span-6 w-full p-5 border border-black bg-[#D0FFAC]">
          {" "}
          <Image
            src={about}
            alt="Metallic sculpture"
            className=" w-[50%] mx-auto"
          />
        </div>
        <div className="col-span-6 row-span-6 col-start-5  border border-black">
          2
        </div>
      </div>
    </>
  );
}
