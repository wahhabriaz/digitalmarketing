// components/InsightsSection.tsx
import React from "react";
import Image from "next/image";

interface BlogCard {
  title: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  link: string;
}

const blogCards: BlogCard[] = [
  {
    title: "Turning Small Carts into Big Wins: Growing LTV in Food & Beverage",
    author: "Tara Johnson",
    date: "September 22, 2025",
    tags: ["Digital Marketing", "eCommerce", "Measurement"],
    image: "/images/b6bc2835-dd5e-42f4-aab4-0f1283492d0b-1024x683.webp",
    link: "https://powerdigitalmarketing.com/blog/grow-ltv-food-beverage-low-aov/",
  },
  {
    title:
      "Messaging in a Regulated Market: 7 Food and Beverage Brand Compliance Tips",
    author: "Tara Johnson",
    date: "September 22, 2025",
    tags: ["Brand Building", "Digital Marketing", "eCommerce", "Measurement"],
    image: "/images/food-beverage.webp",
    link: "https://powerdigitalmarketing.com/blog/food-beverage-messaging-compliance/",
  },
  {
    title:
      "How a CPG Brand Unlocked $3.6M in Incremental Revenue with the Power Circuit™",
    author: "Tara Johnson",
    date: "September 22, 2025",
    tags: ["Digital Marketing", "eCommerce", "Measurement"],
    image: "/images/Screenshot-2025-09-22-at-12.36.56-AM-1024x750.webp",
    link: "https://powerdigitalmarketing.com/blog/cpg-brand-growth-power-circuit/",
  },
  {
    title:
      "How the Power Circuit™ Drove $3.7M and $10.6M in Projected Revenue Lift for Fashion Brands",
    author: "Tara Johnson",
    date: "September 22, 2025",
    tags: ["Digital Marketing", "eCommerce", "Measurement"],
    image: "/images/RevenueFashion-1024x683.jpg",
    link: "https://powerdigitalmarketing.com/blog/power-circuit-fashion-brand-growth/",
  },
  {
    title:
      "How to Leverage Influencer Marketing to Reach Audiences Meta No Longer Allows",
    author: "Tara Johnson",
    date: "September 22, 2025",
    tags: [
      "Digital Marketing",
      "Influencer Marketing",
      "Measurement",
      "Paid Social",
    ],
    image: "/images/influencer-marketing-1024x683.jpg",
    link: "https://powerdigitalmarketing.com/blog/influencer-marketing-meta-targeting-changes/",
  },
];

const InsightsSection: React.FC = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      {/* Intro */}
      <div className="px-5 py-16 sm:px-[7vw] sm:py-[80px] lg:py-[112px]">
        <div className="md:flex md:gap-20 md:justify-between">
          <div className="mb-8 md:max-w-[42vw]">
            <span className="inline-block rounded-full bg-black text-white text-xs uppercase tracking-wider px-4 py-1 mb-4">
              Insights
            </span>
            <h2 className="text-[1.8rem] font-bold leading-snug md:text-[2.67rem] lg:text-[3rem]">
              Access <br /> our education
            </h2>
          </div>
          <div className="md:max-w-[35vw]">
            <p className="text-sm md:text-base font-medium leading-snug mb-6">
              Unlock a wealth of cutting-edge insights on the latest trends
              shaping digital marketing and consumer behavior. From channel
              insights spanning search engine optimization, paid search, social
              media management and more, to strategic planning and measurement,
              the Power Digital Marketing Blog delivers the expertise you need
              to stay ahead. Each resource is brimming with actionable
              knowledge, designed to empower your marketing efforts today and
              prepare you for the future of digital advertising.
            </p>
            <a
              href="https://powerdigitalmarketing.com/blog/"
              className="inline-flex items-center rounded-full border border-[#afaaf9] bg-[#afaaf9] px-6 py-3 text-black font-medium transition hover:bg-[#d5d2ff]"
            >
              <span>Browse recent insights</span>
              <i className="ml-2">↗</i>
            </a>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-6 px-5 pb-20 sm:px-[7vw] md:grid-cols-12 md:gap-6 lg:pb-[120px]">
        {blogCards.map((card, i) => (
          <div
            key={i}
            className={`col-span-12 md:col-span-6 lg:col-span-4 rounded-lg overflow-hidden relative group ${
              i === 0 || i === 1 ? "md:col-span-6" : "md:col-span-4"
            }`}
          >
            <article className="flex flex-col justify-between h-full rounded-lg overflow-hidden shadow relative">
              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block rounded-full border border-gray-800 text-gray-800 text-xs px-3 py-1 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-medium text-gray-600">
                  {card.author} | {card.date}
                </p>
              </div>

              {/* Image */}
              <div className="h-[200px] md:h-[250px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Action */}
              <div className="absolute top-10 right-5">
                <a
                  href={card.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-300 transition"
                >
                  <i>↗</i>
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
