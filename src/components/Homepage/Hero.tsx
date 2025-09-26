"use client";
import Image from "next/image";
import vector1 from "@/assests/HeroSection1/Vector1.svg";
import vector2 from "@/assests/HeroSection1/Vector2.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center py-24">
      {/* Background vectors */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={vector2}
          alt="Vector graphic 2"
          className="absolute -top-[40%] left-1/2 -translate-x-1/2 "
          priority
        />
        <Image
          src={vector1}
          alt="Vector graphic 1"
          className="absolute  left-1/2 -translate-x-1/2  w-full"
          priority
        />
      </div>

      {/* Headline */}
      <div className="space-y-2">
        <Typography
          variant="h1"
          weight="semibold"
          align="center"
          color="dark"
          className="uppercase --font-cs-bohemian tracking-[-0.02em] leading-[0.9] text-[44px] md:text-[88px] lg:text-[128px]"
        >
          The Beacon
        </Typography>
        <Typography
          variant="h1"
          weight="semibold"
          align="center"
          color="dark"
          className="uppercase --font-cs-bohemian tracking-[-0.02em] leading-[0.9] text-[44px] md:text-[88px] lg:text-[128px]"
        >
          Of Blockchain
        </Typography>{" "}
      </div>
      {/* Subtitle */}
      <div className="max-w-4xl mt-10">
        <Typography
          variant="subtitle1"
          align="center"
          weight="medium"
          color="primary"
          className="bg-[#DFEAF9] px-6 py-3 rounded-xl inline-block shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        >
          Driving Mainstream Adoption, Empowering Developers, and Cultivating
          the Future of Web3
        </Typography>
      </div>
    </section>
  );
}
