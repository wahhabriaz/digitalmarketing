// components/ServicesOverview.tsx
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const services = [
  {
    label: "CRO",
    href: "https://powerdigitalmarketing.com/services/cro-conversion-rate-optimization/",
    variant: "dark",
  },
  {
    label: "Marketing Measurement + Incrementality",
    href: "https://powerdigitalmarketing.com/?page_id=7167",
    variant: "outline-dark",
  },
  {
    label: "SEO",
    href: "https://powerdigitalmarketing.com/services/seo/",
    variant: "dark",
  },
  {
    label: "TikTok",
    href: "https://powerdigitalmarketing.com/services/tiktok/",
    variant: "grey",
  },
  {
    label: "Paid Social",
    href: "https://powerdigitalmarketing.com/services/paid-social-media/",
    variant: "primary",
  },
  {
    label: "Creative Services (Strategy)",
    href: "https://powerdigitalmarketing.com/services/creative-services-strategy/",
    variant: "primary",
  },
  {
    label: "Email & SMS",
    href: "https://powerdigitalmarketing.com/services/email-marketing/",
    variant: "grey",
  },
  {
    label: "Strategic Consulting - Go To Market Strategy",
    href: "https://powerdigitalmarketing.com/strategic-consulting-go-to-market-strategy/",
    variant: "outline-dark",
  },
  {
    label: "Public Relations",
    href: "https://powerdigitalmarketing.com/services/public-relations/",
    variant: "dark",
  },
  {
    label: "Influencer",
    href: "https://powerdigitalmarketing.com/services/influencer-marketing/",
    variant: "grey",
  },
  {
    label: "Content Marketing",
    href: "https://powerdigitalmarketing.com/services/content-marketing/",
    variant: "primary",
  },
];

const variantClasses: Record<string, string> = {
  dark: "bg-neutral-800 text-white hover:bg-neutral-600",
  "outline-dark":
    "border border-neutral-800 text-neutral-800 hover:bg-neutral-200 hover:border-neutral-200",
  grey: "bg-gray-400 text-white hover:bg-gray-300",
  primary: "bg-[#7756ff] text-white hover:bg-[#6549d9]",
};

const ServicesOverview: React.FC = () => {
  return (
    <section className="relative bg-[#F5F5F5] px-5 py-16 lg:px-[7vw] lg:py-[110px]">
      {/* Top Content */}
      <div className="lg:max-w-[46vw]">
        <div className="mb-6">
          <h2 className="text-4xl font-bold leading-tight md:text-[3rem] md:leading-[2.5rem] lg:text-[7.5rem] lg:leading-[6.37rem]">
            Our Services
          </h2>
        </div>
        <div>
          <p className="text-[18px] font-medium leading-snug md:text-base">
            Our comprehensive suite of digital and growth marketing services
            ignite every phase of the customer journey. From strategic
            consulting to creative, our driving force is delivering business
            impact that can’t be ignored.
          </p>
        </div>
      </div>

      {/* Services List */}
      <ul className="mt-12 flex flex-wrap gap-2 lg:gap-3">
        {services.map((service, i) => (
          <li key={i}>
            <a
              href={service.href}
              className={`inline-block rounded-full px-5 py-2 text-[1.13rem] lg:text-[1.4rem] font-medium transition lg:px-7 lg:py-4 lg:text-xl ${
                variantClasses[service.variant]
              }`}
            >
              {service.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="https://powerdigitalmarketing.com/services/"
        className="mt-12 inline-flex items-center rounded-full border border-[#afaaf9] bg-[#afaaf9] px-6 py-2 text-black font-medium transition hover:bg-[#d5d2ff]"
      >
        <span>View All Services</span>
        <i className="ml-2">
          <LuArrowUpRight />
        </i>
      </a>
    </section>
  );
};

export default ServicesOverview;
