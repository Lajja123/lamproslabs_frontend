"use client";
import Image from "next/image";
import vector1 from "@/assests/HeroSection1/Vector1.svg";
import vector2 from "@/assests/HeroSection1/Vector2.svg";

import { Typography } from "@/components/UI/Typography"; // adjust path

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={vector2}
          alt="Vector graphic 2"
          className="absolute -top-1/5 left-1/2 -translate-x-1/2  "
          priority
        />
        <Image
          src={vector1}
          alt="Vector graphic 1"
          className="absolute -top-1/5 left-1/2 -translate-x-1/2  w-full"
          priority
        />
        <div className="space-y-2 mt-40">
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase tracking-[-0.02em] leading-[0.9] text-[44px] md:text-[88px] lg:text-[128px]"
          >
            The Be
            <span className="uppercase font-bohemian wavy-letter">a</span>
            con
          </Typography>
          <Typography
            variant="h1"
            weight="normal"
            align="center"
            color="dark"
            className="uppercase tracking-[-0.02em] leading-[0.9] text-[44px] md:text-[88px] lg:text-[128px]"
          >
            Of B<span className="font-bohemian wavy-letter">l</span>
            ockch
            <span className="font-bohemian wavy-letter">a</span>
            <span className="font-bohemian wavy-letter">i</span>n
          </Typography>
        </div>

        <div className="max-w-4xl mt-10 mx-auto">
          <Typography
            variant="subtitle2"
            align="center"
            weight="semibold"
            color="primary"
            className="bg-[#DFEAF9] --font-pp-mori px-6 py-3 rounded-xl inline-block shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          >
            Driving Mainstream Adoption, Empowering Developers, and Cultivating
            the Future of Web3
          </Typography>
        </div>
      </div>
    </section>
  );
}
