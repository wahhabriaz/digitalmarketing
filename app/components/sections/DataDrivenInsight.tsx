// components/DataDrivenInsight.tsx
"use client";
import React from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const DataDrivenInsight: React.FC = () => {
  return (
    <section className="relative bg-[#2B2A29] text-white px-5 py-[70px] sm:px-[7vw] sm:py-[130px]">
      {/* Separator */}
      <div className="separator pb-8">
        <div className="flex sm:text-6xl flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="mb-10 max-w-[58vw] text-[1.8rem] font-bold leading-tight md:mb-[68px] md:text-[5rem] md:leading-[4.8rem] lg:text-[6.7rem] xl:text-[12rem] xl:leading-40">
            Get the data that dominates doubt.
          </h2>
          <Image
            src="/images/Logo-Block.webp"
            alt="Power Digital Logo"
            width={184}
            height={74}
            className="hidden md:block mb-[75px] object-contain"
          />
        </div>
        <hr className="hidden border-t border-gray-300 opacity-100 lg:block" />
        <div className="hidden lg:flex items-center justify-between mt-6">
          <span className="text-[1.8rem] font-semibold uppercase">
            POWER DIGITAL
          </span>
          <span className="text-[1.8rem] font-semibold uppercase">
            OUR RESULTS
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-start lg:gap-[60px] lg:mt-[74px]">
        {/* Image */}
        <Image
          src="/images/Hero1_Desktop_90ff40f9-4f69-4acd-ab6f-d5ac8cb69d12-2-e1733342755528.webp"
          alt="Insight Visual"
          width={600}
          height={400}
          className="relative left-[-20px] h-[270px] w-[318px] rounded-r-lg object-cover sm:left-0 sm:top-[-40px] sm:h-[42vw] sm:w-[64vw] sm:rounded-lg sm:shadow-lg lg:absolute lg:left-[auto] lg:top-[-319px] lg:h-[22.7vw] lg:w-[36.3vw] xl:right-[230px] xl:h-[25.7vw] xl:w-[40.3vw]"
        />

        {/* Note / Testimonial */}
        <article className="relative z-10 ml-auto top-[-180px] sm:top-[124px]  bg-[#7756FF] text-black rounded-lg shadow-lg p-5 max-w-[300px] lg:mt-[-12px] sm:absolute  sm:right-0 sm:max-w-[400px] lg:static lg:max-w-[40vw] lg:p-8">
          <div className="mb-5">
            <p className="font-semibold text-sm sm:text-base lg:text-[1.8rem] lg:leading-[1.9rem] text-white">
              Power brings a fresh, analytical approach to our campaigns,
              finding unique entry points and solutions that many would
              overlook. Their involvement transcends traditional marketing,
              delving into the economic aspects of our business to ensure all
              strategies are sustainable and scalable. Their commitment to our
              success is evident, and their expertise is a cornerstone of our
              strategic planning.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/images/Profile-Image-from-Figma.webp"
                alt="Ashley Bryan"
                width={56}
                height={56}
                className="md:hidden block rounded-full object-cover"
              />
              <div>
                <h3 className="uppercase font-bold text-sm text-white">
                  Ashley Bryan
                </h3>
                <p className="text-xs sm:text-sm text-white">
                  Chief Digital Officer @ L’AGENCE
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-[-90px] h-[73px] w-[184px] rounded-lg border border-gray-100 bg-black/50 p-3 sm:static sm:h-12 sm:w-24 sm:bg-transparent sm:border-0">
              <Image
                src="/images/Logo-Block.webp"
                alt="Company Logo"
                width={184}
                height={73}
                className="h-full w-full object-contain block md:hidden"
              />
            </div>
          </div>
        </article>

        {/* Text & Insights */}
        <div className="mt-12 max-w-[496px] lg:mt-0">
          <span className="mb-4 inline-block rounded-full border border-gray-800 bg-gray-100 px-4 py-1 text-sm md:text-md font-bold uppercase text-gray-900 sm:mb-[50px]">
            Our results
          </span>

          <div className="flex gap-5 mb-8 lg:gap-8 lg:mb-[38px]">
            <div>
              <h3 className="text-[#afaaf9] text-7xl md:text-8xl font-bold leading-tight mb-2">
                +27%
              </h3>
              <p className="text-gray-400 text-lg leading-tight lg:text-2xl font-medium">
                Increase in YoY revenue growth — 2.6x faster than the industry
                average.
              </p>
            </div>
            <div>
              <h3 className="text-[#afaaf9] text-7xl md:text-8xl font-bold leading-tight mb-2">
                95%
              </h3>
              <p className="text-gray-400 text-[1rem] leading-tight lg:text-2xl font-medium">
                Client retention rate, because exceeding expectations is our
                standard.
              </p>
            </div>
          </div>

          <p className="text-lg  lg:text-2xl  leading-tight">
            Simply put, we invest in the best technology and talent to produce
            outsized results and build trusting relationships with our clients.
            Get started today with an integrated digital strategy that’s
            tailored to profitably grow your unique business, generate ROI,
            drive higher EBITDA and exceed your business goals.
          </p>

          <a
            href="https://powerdigitalmarketing.com/case-studies/"
            className="mt-6 sm:mt-[51px] inline-flex items-center rounded-full border border-[#afaaf9] bg-[#afaaf9] px-5 py-2 text-black font-medium font-bold transition md:text-2xl hover:bg-[#d5d2ff]"
          >
            <span>Our impact</span>
            <i className="ml-2">
              <LuArrowUpRight />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DataDrivenInsight;
