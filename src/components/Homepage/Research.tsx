"use client";
import Image from "next/image";
import Clip from "@/assests/HeroSection3/Clip.svg";
import Clip2 from "@/assests/HeroSection3/Clip2.svg";
import ArrowLeft from "@/assests/common/left.svg";
import ArrowRight from "@/assests/common/right.svg";
import { Typography } from "@/components/UI/Typography";
import Button from "@/components/UI/Button";

export default function Research() {
  return (
    <section className="relative w-full bg-[#121212] text-white  ">
      <div className="mx-auto ">
        <div className="flex items-center ">
          {/* Visual - left */}
          <div className="w-full ">
            <div className="relative w-full aspect-[4/3] md:aspect-[4/3]  ">
              <Image
                src={Clip}
                alt="Metallic sculpture"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content - right */}
          <div className="w-full ">
            <div className="border-1 space-y-6 px-4 md:px-6 lg:px-8 py-16 md:py-24">
              <Typography
                variant="h1"
                weight="normal"
                align="left"
                color="#E9FCE4"
                className="uppercase tracking-[-0.02em] leading-[0.95] text-[40px] md:text-[68px] lg:text-[76px]"
              >
                Governance &
                <br />
                Research
              </Typography>

              <Typography
                variant="subtitle2"
                weight="normal"
                color="#C7C7C7"
                className="max-w-xl leading-relaxed"
              >
                Empowering Web3 contributors through workshops, seminars, and
                hackathons. Learn, build, and engage with DAOs like Arbitrum &
                Optimism.
              </Typography>

              <div>
                <Button label="Know More" color="#B3F4A6" textColor="#0B0B0B" />
              </div>
            </div>

            {/* Bottom controls */}
            <div className="border-1 grid grid-cols-3 gap-3 md:gap-4">
              {/* Left arrow tile */}
              <div className="border-r-1 relative aspect-[3/2] overflow-hidden bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] flex items-center justify-center">
                <Image
                  src={ArrowLeft}
                  alt="Previous"
                  className="w-12 h-12 md:w-14 border-white  md:h-14 border-1 p-2 rounded-full"
                />
              </div>

              {/* Center emblem tile */}
              <div className="relative border-r-1 overflow-hidden bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] flex items-center justify-center">
                <Image
                  src={Clip2}
                  alt="Emblem"
                  className="w-40 h-auto md:w-auto "
                />
              </div>

              {/* Right arrow tile */}
              <div className="relative aspect-[3/2]  overflow-hidden bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] flex items-center justify-center">
                <Image
                  src={ArrowRight}
                  alt="Next"
                  className="w-12 h-12 md:w-14 md:h-14 border-1 border-white p-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
