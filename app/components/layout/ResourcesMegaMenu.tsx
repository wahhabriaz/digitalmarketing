"use client";

import Link from "next/link";

export default function ResourcesMegaMenu() {
  return (
    <div className="relative group">
      {/* Trigger */}
      <button
        className="flex items-center gap-1 hover:text-purple-600"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Resources <span className="text-xs">▼</span>
      </button>

      {/* Dropdown */}
      <div
        className="absolute left-0 top-full z-40 w-[320px] rounded-xl border border-gray-100 bg-white shadow-xl 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                   transition-all duration-200 mt-3"
      >
        <div className="mega-menu mega-menu__one">
          <div className="mega-menu-content p-6">
            {/* Heading */}
            <Link
              href="#"
              className="mega-menu-parent-link block mb-4"
              aria-label="Go to Resources page"
            >
              <h3 className="text-lg font-semibold">Resources</h3>
            </Link>

            {/* Items */}
            <ul className="mega-menu-list space-y-3">
              <li className="mega-menu-item">
                <Link
                  href="https://powerdigitalmarketing.com/blog/"
                  className="block rounded-lg p-2 hover:bg-gray-50"
                >
                  <h4 className="font-semibold">Blog</h4>
                </Link>
              </li>
              <li className="mega-menu-item">
                <Link
                  href="/case-studies/"
                  className="block rounded-lg p-2 hover:bg-gray-50"
                >
                  <h4 className="font-semibold">Case Studies</h4>
                </Link>
              </li>
              <li className="mega-menu-item">
                <Link
                  href="/resources/"
                  className="block rounded-lg p-2 hover:bg-gray-50"
                >
                  <h4 className="font-semibold">Downloadables</h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
