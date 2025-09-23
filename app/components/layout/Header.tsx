"use client";

import Link from "next/link";
import Image from "next/image";
import ServicesMegaMenu from "./ServicesMegaMenu";
import TechnologyMegaMenu from "./TechnologyMegaMenu";
import ResourcesMegaMenu from "./ResourcesMegaMenu";

export default function Header() {
  return (
    <header className="bg-[#f5f5f5] text-[#232323] sticky top-0 z-50">
      <div className="mx-auto flex items-center justify-between px-8 lg:px-16 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Power" width={28} height={28} />
          <span className="font-grotesque text-xl font-bold">Power</span>
        </Link>

        {/* Center: Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-grotesque text-base">
          {/* === VERTICALS (mega menu) === */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-purple-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Verticals <span className="text-xs">▼</span>
            </button>

            {/* Panel */}
            <div
              className="absolute left-0 top-full z-40  w-[27.8vw] rounded-xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
 mt-3"
              role="menu"
            >
              {/* content + CTA side-by-side */}
              <div className="mega-menu-content has-cta flex flex-col w-full gap-6 p-6">
                {/* back button (mobile only placeholder) */}
                <a
                  href="#"
                  aria-label="Close Verticals menu"
                  className="back-menu hidden"
                >
                  {/* keep for parity; we hide on desktop */}
                </a>

                {/* Left: Title + list */}
                <div className="flex-1">
                  <Link
                    href="/approach"
                    aria-label="Go to Verticals page"
                    className="mega-menu-parent-link"
                  >
                    <h3 className="text-lg font-semibold mb-5">Verticals</h3>
                  </Link>

                  <ul className="mega-menu-list grid grid-cols-1 gap-4">
                    {/* B2B */}
                    <li className="mega-menu-item">
                      <Link
                        href="https://powerdigitalmarketing.com/vertical/b2b-marketing/"
                        aria-label="Go to B2B page"
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                        role="menuitem"
                      >
                        <img
                          src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_InfluencerOutreach_100-1.png"
                          alt=""
                          className="h-12 w-12 object-contain"
                        />
                        <div className="text">
                          <h4 className="text-sm font-semibold">B2B</h4>
                          <p className="text-xs text-gray-600">
                            Optimized multi-channel strategies for B2B.
                          </p>
                        </div>
                      </Link>
                    </li>

                    {/* Consumer Services */}
                    <li className="mega-menu-item">
                      <Link
                        href="https://powerdigitalmarketing.com/vertical/consumer-services/"
                        aria-label="Go to Consumer Services page"
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                        role="menuitem"
                      >
                        <img
                          src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_SocialMedia_100.png"
                          alt=""
                          className="h-12 w-12 object-contain"
                        />
                        <div className="text">
                          <h4 className="text-sm font-semibold">
                            Consumer Services
                          </h4>
                          <p className="text-xs text-gray-600">
                            Custom strategies for various service sectors.
                          </p>
                        </div>
                      </Link>
                    </li>

                    {/* Consumer Product */}
                    <li className="mega-menu-item">
                      <Link
                        href="https://powerdigitalmarketing.com/vertical/consumer-product-b2c/"
                        aria-label="Go to Consumer Product page"
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                        role="menuitem"
                      >
                        <img
                          src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_EmailMarketing_100.png"
                          alt=""
                          className="h-12 w-12 object-contain"
                        />
                        <div className="text">
                          <h4 className="text-sm font-semibold">
                            Consumer Product
                          </h4>
                          <p className="text-xs text-gray-600">
                            Scalable growth with next-gen tech and insights.
                          </p>
                        </div>
                      </Link>
                    </li>

                    {/* CPG */}
                    <li className="mega-menu-item">
                      <Link
                        href="https://powerdigitalmarketing.com/vertical/cpg/"
                        aria-label="Go to CPG page"
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                        role="menuitem"
                      >
                        <img
                          src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/SVG-Code-from-Online-Editor.svg"
                          alt=""
                          className="h-12 w-12 object-contain"
                        />
                        <div className="text">
                          <h4 className="text-sm font-semibold">CPG</h4>
                          <p className="text-xs text-gray-600">
                            Growth and measurable results for CPG
                          </p>
                        </div>
                      </Link>
                    </li>

                    {/* Private Equity */}
                    <li className="mega-menu-item">
                      <Link
                        href="https://powerdigitalmarketing.com/vertical/private-equity/"
                        aria-label="Go to Private Equity page"
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50"
                        role="menuitem"
                      >
                        <img
                          src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Service_PPC_100.png"
                          alt=""
                          className="h-12 w-12 object-contain"
                        />
                        <div className="text">
                          <h4 className="text-sm font-semibold">
                            Private Equity
                          </h4>
                          <p className="text-xs text-gray-600">
                            Deep marketing assessments for investors.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Right: CTA */}
                <div className="shrink-0">
                  <Link
                    href="/approach"
                    className="btn btn-secondary inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    <span>How we work</span>
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ServicesMegaMenu />

          <TechnologyMegaMenu />

          <Link href="/company" className="hover:text-purple-600">
            Company
          </Link>
          <ResourcesMegaMenu />
        </nav>

        {/* Right: bell + CTA */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <button className="relative p-1" aria-label="Notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-5 h-5"
              >
                <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>

          <Link
            href="/work-with-us"
            className="rounded-full bg-purple-500 px-5 py-2 font-medium text-white transition hover:bg-purple-600"
          >
            Work with us ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
