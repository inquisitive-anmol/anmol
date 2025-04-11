// 'use client';

// import React, { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";

// const useLocomotiveScroll = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       lerp: 1,
//     });

//     return () => {
//       if (scroll) scroll.destroy();
//     };
//   }, []);
//   return scrollRef;
// };

// export default useLocomotiveScroll;


// src/hooks/useLocomotiveScroll.ts
import { useEffect, useRef } from "react";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Skip if not in browser
    if (typeof window === "undefined") return;
    if (!scrollRef.current) return;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    })();

    return () => {
      scrollRef.current?.destroy();
    };
  }, []);

  return scrollRef;
};
