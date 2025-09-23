"use client";

import Link from "next/link";

export default function TechnologyMegaMenu() {
  return (
    <div className="relative group">
      {/* Trigger */}
      <button
        className="flex items-center gap-1 hover:text-purple-600"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Technology <span className="text-xs">▼</span>
      </button>

      {/* Panel */}
      <div
        className="absolute left-0 top-full z-40 w-[500px] rounded-xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
 mt-3"
      >
        <div className="mega-menu mega-menu__one">
          <div className="mega-menu-content p-6">
            {/* Heading */}
            <Link
              href="#"
              className="mega-menu-parent-link block mb-4"
              aria-label="Go to Technology page"
            >
              <h3 className="text-lg font-semibold">Technology</h3>
            </Link>

            {/* Items */}
            <ul className="mega-menu-list space-y-4">
              {/* nova */}
              <li className="mega-menu-item">
                <Link
                  href="https://powerdigitalmarketing.com/nova/"
                  className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50"
                  aria-label="Go to nova page"
                >
                  <img
                    src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/GeneralUse_5_100.png"
                    alt="nova"
                    className="h-12 w-12 object-contain"
                  />
                  <div className="text">
                    <h4 className="font-semibold">nova</h4>
                    <p className="text-sm text-gray-600">
                      Transform data into results with nova
                    </p>
                  </div>
                </Link>
              </li>

              {/* nova Intelligence */}
              <li className="mega-menu-item">
                <Link
                  href="https://powerdigitalmarketing.com/nova-intelligence/creative-affinity/"
                  className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50"
                  aria-label="Go to nova Intelligence page"
                >
                  <img
                    src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/WebContent_AuditNextSteps_StrategyProposal_100.png"
                    alt="nova Intelligence"
                    className="h-12 w-12 object-contain"
                  />
                  <div className="text">
                    <h4 className="font-semibold">nova Intelligence</h4>
                    <p className="text-sm text-gray-600">
                      {/* empty description allowed */}
                    </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
