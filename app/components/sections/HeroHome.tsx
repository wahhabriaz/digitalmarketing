"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !logoRef.current || !videoRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    // Phase 1 → Logo shrinks + Video grows (parallel)
    tl.to(logoRef.current, {
      width: 174,
      x: 46,
      y: -49,
      ease: "power2.inOut",
    })
      .to(
        videoRef.current,
        {
          top: "22px",
          right: "40px",
          bottom: "auto",
          width: "calc(99.4692% - 69.8878px)",
          height: "calc(99.0884% - 52.4158px)",
          borderRadius: "20px",
          ease: "power2.inOut",
        },
        "<" // 👈 aligns with logo shrink
      )
      .set(logoRef.current, { opacity: 0 }); // snap opacity after both run

    // Phase 2 → Hold intermediate
    tl.to({}, { duration: 0.5 });

    // Phase 3 → Return to original (bottom-right)
    tl.to(
      videoRef.current,
      {
        top: "unset", // reset top
        right: "10vw",
        bottom: "2vw",
        width: "31.7vw",
        height: "17vw",
        borderRadius: "10px",
        ease: "power2.inOut",
        clearProps: "width,height", // remove inline overridess
      },
      "<"
    );
  }, []);

  return (
    <section
      style={{ border: "1px solid red" }}
      ref={heroRef}
      className="relative bg-[#f9f9f9] max-w-[calc(100vw-15px)] w-full h-[832px] px-[134px] pt-[27px] pb-[152px] overflow-hidden"
    >
      {/* Logo */}
      <h1>
        <div
          ref={logoRef}
          className="relative w-[calc(100vw-15px)] transition-all"
        >
          <Image
            src="https://powerdigitalmarketing.com/wp-content/themes/pdm-theme/dist/images/global/power.svg"
            alt="Power"
            width={174}
            height={60}
            className="w-[calc(100vw-15px)] h-auto"
          />
        </div>
      </h1>

      {/* Video container */}
      <div
        ref={videoRef}
        className="absolute bottom-[2vw] right-[10vw] aspect-[455/243] bg-black rounded-xl w-[31.7vw] h-[17vw] overflow-hidden shadow-lg"
      >
        <iframe
          id="vimeoplayer"
          src="https://player.vimeo.com/video/915125557?h=2725ab3d52&autoplay=1&muted=1&loop=1&background=1"
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
        />
      </div>
    </section>
  );
}
// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const wrapper = wrapperRef.current;
//     const logo = logoRef.current;
//     const video = videoRef.current;
//     if (!wrapper || !logo || !video) return;

//     //
//     // Timeline 1 → Phase 1 + Phase 2 (pinned wrapper)
//     //
//     const tl1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: wrapper,
//         start: "top top",
//         end: "+=1200", // controls pin duration
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//       },
//       defaults: { ease: "power2.inOut" },
//     });

//     // Phase 1 → Logo shrinks + Video expands
//     tl1
//       .to(logo, { width: 174, x: 46, y: -49 }, 0)
//       .to(
//         video,
//         {
//           top: "22px",
//           right: "40px",
//           bottom: "auto",
//           width: "calc(99.4692% - 69.8878px)",
//           height: "calc(99.0884% - 52.4158px)",
//           borderRadius: "20px",
//         },
//         0
//       )
//       .set(logo, { opacity: 0 });

//     // Phase 2 → Hold
//     tl1.to({}, { duration: 0.3 });

//     //
//     // Timeline 2 → Phase 3 (unpinned, scrub continues)
//     //
//     const tl2 = gsap.timeline({
//       scrollTrigger: {
//         trigger: wrapper, // same wrapper
//         start: "bottom top", // as soon as unpinned
//         end: "+=1000", // scroll distance for return
//         scrub: true,
//       },
//       defaults: { ease: "power2.inOut" },
//     });

//     tl2
//       .to(
//         video,
//         {
//           top: "unset",
//           bottom: "2vw",
//           right: "10vw",
//           width: "31.7vw",
//           height: "17vw",
//           borderRadius: "10px",
//           overwrite: "auto",
//         },
//         0
//       )
//       .to(
//         logo,
//         {
//           opacity: 1,
//           width: "calc(100vw - 15px)",
//           x: 0,
//           y: 0,
//           overwrite: "auto",
//         },
//         0
//       );

//     return () => {
//       tl1.scrollTrigger?.kill();
//       tl1.kill();
//       tl2.scrollTrigger?.kill();
//       tl2.kill();
//     };
//   }, []);

//   return (
//     <>
//       {/* Wrapper that gets pinned */}
//       <div ref={wrapperRef}>
//         <section className="relative bg-[#f9f9f9] max-w-[1905px] w-full h-[832px] px-[134px] pt-[27px] pb-[152px] overflow-hidden">
//           {/* Logo */}
//           <h1>
//             <div ref={logoRef} className="relative w-[calc(100vw-15px)]">
//               <Image
//                 src="https://powerdigitalmarketing.com/wp-content/themes/pdm-theme/dist/images/global/power.svg"
//                 alt="Power"
//                 width={174}
//                 height={60}
//                 className="w-full h-auto"
//               />
//             </div>
//           </h1>

//           {/* Video container */}
//           <div
//             ref={videoRef}
//             className="absolute bottom-[2vw] right-[10vw] w-[31.7vw] h-[17vw] bg-black rounded-[10px] overflow-hidden shadow-lg"
//           >
//             <iframe
//               id="vimeoplayer"
//               src="https://player.vimeo.com/video/915125557?h=2725ab3d52&autoplay=1&muted=1&loop=1&background=1"
//               className="w-full h-full"
//               allow="autoplay; fullscreen; picture-in-picture"
//             />
//           </div>
//         </section>
//       </div>

//       {/* Give Phase 3 scroll space */}
//       <div className="h-[1500px]"></div>
//     </>
//   );
// }
