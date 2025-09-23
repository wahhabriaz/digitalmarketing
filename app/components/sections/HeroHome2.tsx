// // app/components/HeroHome.tsx
// import React from "react";

// const HeroHome2: React.FC = () => {
//   return (
//     <section
//       id="hero-home"
//       className="relative z-[51] bg-gray-100 px-5 py-5 sm:px-[7vw] sm:py-[1.4vw] lg:flex lg:min-h-[670px] lg:max-h-[700px] lg:flex-col lg:justify-between lg:py-[7.9vw] lg:px-[7vw] 2xl:max-h-none"
//     >
//       {/* Logo */}
//       <h1>
//         <img
//           id="hero-logo"
//           className="hidden w-full absolute top-5 left-0 z-10 px-[2.8vw] lg:block"
//           src="https://powerdigitalmarketing.com/wp-content/themes/pdm-theme/dist/images/global/power.svg"
//           alt="Power Digital"
//         />
//       </h1>

//       <div className="relative flex flex-col">
//         {/* Video */}
//         <div className="hero-video aspect-[455/243] w-full overflow-hidden rounded-lg bg-black mb-5 lg:absolute lg:right-[10vw] lg:top-[24vw] lg:z-[11] lg:m-0 lg:h-[17vw] lg:w-[31.7vw]">
//           <iframe
//             id="vimeoplayer"
//             src="https://player.vimeo.com/video/1001743392?api=1&amp;background=1"
//             className="h-full w-full scale-105 object-cover lg:absolute lg:inset-0 lg:m-auto lg:h-[51vw] lg:w-[calc(100vw-80px)] lg:object-none lg:object-center lg:pointer-events-none"
//             allow="autoplay"
//           />
//         </div>

//         {/* Text */}
//         <div className="mt-16 max-w-[45.7vw] opacity-100">
//           <h2 className="font-bold text-[2rem] leading-[1.6rem] md:text-[2.6667rem] md:leading-[2.5rem] lg:text-[3.333rem] lg:leading-[3.133rem]">
//             <span className="lg:hidden">Power is </span>a world-class,
//             tech-enabled growth marketing agency.
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroHome2;
// components/HeroHome.tsx
"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const HeroHome2: React.FC = () => {
  const logoControls = useAnimation();
  const videoControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // 1. Logo fades/ slides in
      await logoControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
      // 2. Video appears / scales in
      await videoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });
      // 3. Text fade in
      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    // initial states
    logoControls.set({ opacity: 0, x: -50 });
    videoControls.set({ opacity: 0, scale: 0.95 });
    textControls.set({ opacity: 0, y: 20 });
    sequence();
  }, [logoControls, videoControls, textControls]);

  return (
    <section
      id="hero-home"
      className="relative z-[51] bg-gray-100 px-5 py-5 sm:px-[7vw] sm:py-[1.4vw] lg:flex lg:min-h-[670px] lg:max-h-[700px] lg:flex-col lg:justify-between lg:py-[7.9vw] lg:px-[7vw] 2xl:max-h-none overflow-hidden"
    >
      {/* Logo */}
      <motion.h1
        className="absolute top-5 left-0 z-10 hidden w-full lg:block px-[2.8vw]"
        animate={logoControls}
      >
        <img
          id="hero-logo"
          src="https://powerdigitalmarketing.com/wp-content/themes/pdm-theme/dist/images/global/power.svg"
          alt="Power Digital Logo"
          className="w-full h-auto"
        />
      </motion.h1>

      <div className="relative flex flex-col flex-1">
        {/* Video */}
        <motion.div
          className="aspect-[455/243] w-full overflow-hidden rounded-lg bg-black mb-5 lg:absolute lg:right-[10vw] lg:top-[24vw] lg:z-[11] lg:m-0 lg:h-[17vw] lg:w-[31.7vw]"
          animate={videoControls}
        >
          <iframe
            id="vimeoplayer"
            src="https://player.vimeo.com/video/1001743392?api=1&amp;background=1"
            className="h-full w-full scale-105 object-cover lg:absolute lg:inset-0 lg:m-auto lg:h-[51vw] lg:w-[calc(100vw-80px)] lg:object-none lg:object-center lg:pointer-events-none"
            allow="autoplay"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="mt-16 max-w-[45.7vw] lg:mt-[65px] opacity-100"
          animate={textControls}
        >
          <h2 className="font-bold text-[2rem] leading-[1.6rem] md:text-[2.6667rem] md:leading-[2.5rem] lg:text-[3.333rem] lg:leading-[3.133rem]">
            <span className="lg:hidden">Power is </span>a world-class,
            tech-enabled growth marketing agency.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHome2;
