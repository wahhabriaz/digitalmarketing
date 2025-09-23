"use client";

import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function WhoWeAre() {
  return (
    <section className="relative bg-gray-50 px-5 py-16 md:px-[7vw] md:py-[120px] md:pb-[60px]">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:gap-0 justify-between items-start">
        {/* Left Image */}
        <div className="relative w-full md:left-[-20px] mb-10 md:mb-0 md:max-w-[44vw] md:max-h-[32vw] lg:left-[-7vw] md:-top-5">
          <Image
            src="/images/WHO-WE-ARE-_-Left-small.webp"
            alt="Who we are"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:max-w-[42vw] md:mb-[60px]">
          {/* Badge */}
          <span className="inline-block rounded-full border border-[#2b2a29] bg-[#2b2a29] text-white uppercase tracking-wide text-[0.7rem] leading-[0.7rem] px-4 py-1.5 mb-4 md:text-[0.9rem] font-bold md:leading-[0.9rem] md:mb-5">
            who we are
          </span>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-[2.9rem] md:leading-[2.8rem] font-bold">
              Transform uncertain into undeniable.
            </h2>
          </div>

          {/* Paragraph */}
          <div>
            <p className="text-base md:text-[1rem] md:leading-[1.03rem] text-gray-700">
              Power is the digital marketing firm that operates at the
              intersection of data, technology, and human intelligence to make
              profit predictable. In today’s hyper-competitive, often volatile
              marketplace, average results just won’t cut it.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="https://powerdigitalmarketing.com/work-with-us/"
            className="inline-flex items-center gap-2 rounded-full border bg-[#afaaf9] border-[#afaaf9] text-black px-5 py-2 mt-6 text-base font-medium transition hover:bg-[#bbb7fa] hover:border-[#bbb7fa]"
          >
            <span>Accelerate your business</span>
            <span className="text-lg">
              <LuArrowUpRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
