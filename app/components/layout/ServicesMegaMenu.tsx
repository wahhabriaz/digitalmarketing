"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Services mega menu – matches the structure you provided.
 * - Left column: glossary + CTA
 * - Right column: content area that switches by glossary item (hover)
 * - Images kept as <img> so you don't need next.config image domains right now
 */
export default function ServicesMegaMenu() {
  const [tab, setTab] = useState<"growth" | "data" | "consulting" | "creative">(
    "growth"
  );

  return (
    <div className="relative group">
      {/* Trigger */}
      <button
        className="flex items-center gap-1 hover:text-purple-600"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Services <span className="text-xs">▼</span>
      </button>

      {/* Panel */}
      <div
        className="absolute left-0 top-full z-40  w-[1120px] rounded-xl border border-gray-100 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200
 mt-3"
      >
        <div className="mega-menu mega-menu__two w-full">
          <div className="mega-menu-content has-cta flex">
            {/* LEFT: Glossary */}
            <div className="w-[360px] shrink-0 border-r border-gray-100 bg-gray-50 p-6 rounded-l-xl">
              <Link
                href="https://powerdigitalmarketing.com/services/"
                className="mega-menu-parent-link block"
                aria-label="Go to Services page"
              >
                <h3 className="text-lg font-semibold mb-4">Services</h3>
              </Link>

              <ul className="menu-glosary space-y-3">
                {/* Growth Marketing */}
                <li
                  className="menu-glosary__item"
                  onMouseEnter={() => setTab("growth")}
                >
                  <Link
                    href="https://powerdigitalmarketing.com/blog/services-category/growth-marketing/"
                    aria-label="Go to Growth Marketing page"
                    className={`block rounded-xl px-4 py-3 ${
                      tab === "growth" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <p className="title font-semibold">Growth Marketing</p>
                    <p className="description text-sm text-gray-600">
                      Data-driven strategies to boost customer value.
                    </p>
                  </Link>
                </li>

                {/* Data Intelligence */}
                <li
                  className="menu-glosary__item"
                  onMouseEnter={() => setTab("data")}
                >
                  <Link
                    href="https://powerdigitalmarketing.com/blog/services-category/data-intelligence/"
                    aria-label="Go to Data Intelligence page"
                    className={`block rounded-xl px-4 py-3 ${
                      tab === "data" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <p className="title font-semibold">Data Intelligence</p>
                    <p className="description text-sm text-gray-600">
                      Leverage data to enhance marketing outcomes.
                    </p>
                  </Link>
                </li>

                {/* Consulting */}
                <li
                  className="menu-glosary__item"
                  onMouseEnter={() => setTab("consulting")}
                >
                  <Link
                    href="https://powerdigitalmarketing.com/blog/services-category/consulting/"
                    aria-label="Go to Consulting page"
                    className={`block rounded-xl px-4 py-3 ${
                      tab === "consulting" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <p className="title font-semibold">Consulting</p>
                    <p className="description text-sm text-gray-600">
                      Transformative growth with bespoke strategies.
                    </p>
                  </Link>
                </li>

                {/* Creative */}
                <li
                  className="menu-glosary__item"
                  onMouseEnter={() => setTab("creative")}
                >
                  <Link
                    href="https://powerdigitalmarketing.com/blog/services-category/creative/"
                    aria-label="Go to Creative page"
                    className={`block rounded-xl px-4 py-3 ${
                      tab === "creative" ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    <p className="title font-semibold">Creative</p>
                    <p className="description text-sm text-gray-600">
                      Captivating campaigns for every customer touchpoint.
                    </p>
                  </Link>
                </li>

                {/* CTA */}
                <li className="menu-glosary__cta pt-6">
                  <Link
                    href="/services/"
                    className="btn btn-secondary block rounded-full bg-purple-100 px-6 py-4 text-center font-medium text-purple-900 hover:bg-purple-200"
                  >
                    <div className="icon inline-flex items-center gap-2 justify-center">
                      <span>View all services</span>
                      <span aria-hidden>↗</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* RIGHT: Content area */}
            <ul className="content-sub-items w-[calc(100%-360px)] p-6 overflow-y-auto max-h-[76vh]">
              {/* Growth Marketing (active) */}
              {tab === "growth" && (
                <li className="content-glosary active-content">
                  <div className="menu-text mb-4">
                    <h4 className="text-lg font-semibold">Growth Marketing</h4>
                    <p className="text-sm text-gray-600">
                      Data-driven strategies to boost customer value.
                    </p>
                  </div>

                  <div className="content-list space-y-8">
                    {/* PAID MEDIA */}
                    <div>
                      <span className="subtitle block text-xs font-semibold tracking-[0.12em] text-gray-500 mb-2">
                        PAID MEDIA
                      </span>
                      <ul className="mega-menu-list grid grid-cols-2 gap-x-12 gap-y-6">
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/amazon-marketing/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Unlock growth with Amazon’s power."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_AmazonMarketing_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Amazon</h5>
                              <p className="text-sm text-gray-600">
                                Unlock growth with Amazon’s power.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/tiktok/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Drive results with TikTok strategies."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Service_PPC_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">TikTok</h5>
                              <p className="text-sm text-gray-600">
                                Drive results with TikTok strategies.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/programmatic-advertising-agency/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Boost awareness with impactful media."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/General_PowerDigital_Mission_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Programmatic</h5>
                              <p className="text-sm text-gray-600">
                                Boost awareness with impactful media.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/paid-social-media/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Convert new audiences through social."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_PaidSocial_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Paid Social</h5>
                              <p className="text-sm text-gray-600">
                                Convert new audiences through social.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/paid-media/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Capture traffic, eliminate wasted spend."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_SocialMedia_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Paid Media</h5>
                              <p className="text-sm text-gray-600">
                                Capture traffic, eliminate wasted spend.
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* EARNED MEDIA */}
                    <div>
                      <span className="subtitle block text-xs font-semibold tracking-[0.12em] text-gray-500 mb-2">
                        EARNED MEDIA
                      </span>
                      <ul className="mega-menu-list grid grid-cols-2 gap-x-12 gap-y-6">
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/public-relations/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Build buzz and maximize brand awareness."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_PublicRelations_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">
                                Public relations
                              </h5>
                              <p className="text-sm text-gray-600">
                                Build buzz and maximize brand awareness.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/affiliate-marketing/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Expand reach with affiliate programs."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/WebContent_Webinar_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Affiliate</h5>
                              <p className="text-sm text-gray-600">
                                Expand reach with affiliate programs.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/influencer-marketing/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Leverage trusted voices to build credibility."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_InfluencerOutreach_100-1.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Influencer</h5>
                              <p className="text-sm text-gray-600">
                                Leverage trusted voices to build credibility.
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* OWNED MEDIA */}
                    <div>
                      <span className="subtitle block text-xs font-semibold tracking-[0.12em] text-gray-500 mb-2">
                        OWNED MEDIA
                      </span>
                      <ul className="mega-menu-list grid grid-cols-2 gap-x-12 gap-y-6">
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/seo/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Grow traffic where users shop."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_SEO_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">SEO</h5>
                              <p className="text-sm text-gray-600">
                                Grow traffic where users shop.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/email-marketing/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Retain customers, expand lifetime value."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_EmailMarketing_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Email &amp; SMS</h5>
                              <p className="text-sm text-gray-600">
                                Retain customers, expand lifetime value.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/content-marketing/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Engage customers at every journey stage."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_ContentMarketing_100-1.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">
                                Content marketing
                              </h5>
                              <p className="text-sm text-gray-600">
                                Engage customers at every journey stage.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/organic-social-media/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Connect authentically through social media."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_SocialMedia_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">Social Media</h5>
                              <p className="text-sm text-gray-600">
                                Connect authentically through social media.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/generative-engine-optimization-geo-services/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Make your brand visible across AI search."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Service_CommunityManagement_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">
                                Generative Engine Optimization (GEO)
                              </h5>
                              <p className="text-sm text-gray-600">
                                Make your brand visible across AI search.
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="mega-menu-item">
                          <Link
                            href="https://powerdigitalmarketing.com/services/cro-conversion-rate-optimization/"
                            className="flex items-start gap-3 hover:bg-gray-50 rounded p-2"
                            title="Maximize conversions with website optimization."
                          >
                            <img
                              src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services_CRO_100.png"
                              alt=""
                              className="h-10 w-10 object-contain"
                            />
                            <div className="text">
                              <h5 className="font-semibold">CRO</h5>
                              <p className="text-sm text-gray-600">
                                Maximize conversions with website optimization.
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              )}

              {/* Data Intelligence */}
              {tab === "data" && (
                <li className="content-glosary">
                  <div className="menu-text mb-4">
                    <h4 className="text-lg font-semibold">Data Intelligence</h4>
                    <p className="text-sm text-gray-600">
                      Leverage data to enhance marketing outcomes.
                    </p>
                  </div>
                  <div className="content-list grid grid-cols-2 gap-6">
                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/data-intelligence-company/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Nova_Reporting_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">Data Intelligence</h5>
                        <p className="text-sm text-gray-600">
                          Strategically leverage data to drive informed
                          marketing decisions and optimize outcomes.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/data-infrastructure-cdps/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/GeneralUse_9_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">
                          Data Infrastructure Services
                        </h5>
                        <p className="text-sm text-gray-600">
                          Build a modern data stack to simplify management,
                          ensure data quality, and drive smart decisions.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/marketing-measurement-incrementality/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/WebContent_AuditNextSteps_StrategyProposal_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">
                          Marketing Measurement + Incrementality
                        </h5>
                        <p className="text-sm text-gray-600">
                          Save millions on ad spend with proven marketing
                          measurement and incrementality.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/marketing-mix-modeling-data-science/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/WebContent_Testimonials_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">
                          Marketing Mix Modeling + Data Science
                        </h5>
                        <p className="text-sm text-gray-600">
                          Optimize marketing with advanced mix modeling and
                          expert data science.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              )}

              {/* Consulting */}
              {tab === "consulting" && (
                <li className="content-glosary">
                  <div className="menu-text mb-4">
                    <h4 className="text-lg font-semibold">Consulting</h4>
                    <p className="text-sm text-gray-600">
                      Transformative growth with bespoke strategies.
                    </p>
                  </div>
                  <div className="content-list grid grid-cols-2 gap-6">
                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/strategic-consulting/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/GeneralUse_7_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">Consulting</h5>
                        <p className="text-sm text-gray-600">
                          Navigate complexity with expert consulting tailored to
                          your goals.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/strategic-consulting-go-to-market-strategy/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Nova_MachineLearning-_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">
                          Full Go-To-Market Strategy
                        </h5>
                        <p className="text-sm text-gray-600">
                          Unlock growth with a comprehensive, data-driven GTM
                          digital strategy.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/strategic-consulting-media-planning-forecasting/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/WebContent_AuditNextSteps_AssemblingTeam_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">
                          Media Planning Scenarios
                        </h5>
                        <p className="text-sm text-gray-600">
                          Optimize ad spend with comprehensive media planning
                          and data-driven forecasting.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/strategic-consulting-persona-development/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/GeneralUse_5_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">Persona Development</h5>
                        <p className="text-sm text-gray-600">
                          Develop a data-driven ideal customer profile to
                          enhance product and marketing strategies.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              )}

              {/* Creative */}
              {tab === "creative" && (
                <li className="content-glosary">
                  <div className="menu-text mb-4">
                    <h4 className="text-lg font-semibold">Creative</h4>
                    <p className="text-sm text-gray-600">
                      Captivating campaigns for every customer touchpoint.
                    </p>
                  </div>
                  <div className="content-list grid grid-cols-2 gap-6">
                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/services/creative-home/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/General_PowerDigital_Values_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">Creative</h5>
                        <p className="text-sm text-gray-600">
                          Combine art and strategy to craft creative campaigns
                          that captivate and convert.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/services/creative-services-strategy/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/GeneralUse_2_100.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">Strategy</h5>
                        <p className="text-sm text-gray-600">
                          Transform brand strategy into performance-driven
                          digital marketing campaigns with our creative
                          expertise.
                        </p>
                      </div>
                    </a>

                    <a
                      className="variant-item flex gap-3 hover:bg-gray-50 rounded p-3"
                      href="https://powerdigitalmarketing.com/services/creative-services-brand-design-editing/"
                    >
                      <img
                        src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Nova_Scale_100-1.png"
                        alt=""
                        className="h-12 w-12 object-contain"
                      />
                      <div className="text">
                        <h5 className="font-semibold">
                          Brand, Design, &amp; Editing
                        </h5>
                        <p className="text-sm text-gray-600">
                          Visuals and content that captivate, engage, and
                          elevate your brand.
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
