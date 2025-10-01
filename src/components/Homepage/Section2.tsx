"use client";
import Image from "next/image";
import hand from "@/assests/HeroSection2/hand.svg";
import hugeicon from "@/assests/HeroSection2/hugeicons.svg";
import bgImage1 from "@/assests/HeroSection2/arrow-bg.png";
import bgImage2 from "@/assests/HeroSection2/hugeicon-bg.png";

import clip from "@/assests/HeroSection2/clip.svg";
import arrow from "@/assests/HeroSection2/arrow.svg";

export default function Section2() {
  return (
    <div className="min-h-screen">
      {/* Main Container */}
      <div className="relative w-full">
        {/* Top Grid Row */}
        <div className="grid grid-cols-10 border-1 border-[#000000]">
          {[...Array(10)].map((_, i) => (
            <div
              key={`top-${i}`}
              className={`h-30 border-r-1 border-[#000000] ${
                i === 4 ? "bg-[#D0FFAC]" : "transparent"
              } flex items-center justify-center`}
            >
              {i === 4 && (
                <Image
                  src={hand}
                  alt="hand"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-20 md:h-20"
                />
              )}
            </div>
          ))}
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-10 border-b-1 border-[#000000]">
          {/* First Column - Dark gradient with background image */}

          <div
            className="h-96 border-r-1 border-[#000000]"
            style={{
              backgroundImage: `url(${bgImage1.src})
              `,
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundBlendMode: "multiply",
            }}
          >
            <Image
              src={arrow}
              alt="arrow"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>

          {/* Logo Column */}

          <div className="col-span-3 h-96  bg-gray-50 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <Image
                src={clip}
                alt="clip"
                width={100}
                height={100}
                className="w-[100%]"
              />
            </div>
          </div>

          {/* Text Content - spans 6 columns */}
          <div className="col-span-5 h-96 border-r-1 border-gray-800 bg-white flex items-center px-16 py-12">
            <div className="space-y-8">
              <p className="text-[#000000] --font-pp-mori text-base leading-relaxed font-light tracking-wide">
                In The Vibrant World Of Blockchain, Lampros DAO Stands As A
                Beacon, Illuminating The Path For Innovators, Dreamers, And
                Builders. Founded With A Profound Vision To Seamlessly Merge
                Blockchain Technology With Mainstream Applications, We&apos;ve
                Steadily Grown Into A Robust Community Hub.
              </p>
              <p className="text-[#000000] text-base leading-relaxed font-light tracking-wide">
                Our Ethos Is Rooted In Fostering Growth – Both Of The Individual
                And The Collective. With Each Project We Support, Every
                Developer We Guide, And Each Event We Host, We Inch Closer To A
                Future Where Blockchain Isn&apos;t Just A Buzzword, But An
                Integral Part Of Our Digital Tapestry.
              </p>
            </div>
          </div>

          {/* Last Column */}
          <div className="h-96 border-[#000000]"></div>
        </div>

        {/* Bottom Grid Row */}
        <div className="grid grid-cols-10 border-b-1 border-[#000000]">
          {[...Array(10)].map((_, i) => (
            <div
              key={`bottom-${i}`}
              className={`h-30 border-r-1 border-[#000000]  flex items-center justify-center`}
            >
              {i === 5 && (
                <div
                  className=" border-r-1 border-[#000000]"
                  style={{
                    backgroundImage: `url(${bgImage2.src})
                  `,
                    backgroundSize: "cover, cover",
                    backgroundPosition: "center, center",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundBlendMode: "multiply",
                  }}
                >
                  <Image
                    src={hugeicon}
                    alt="hugeicon"
                    width={100}
                    height={100}
                    className="w-20 h-20 md:w-20 md:h-20"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
