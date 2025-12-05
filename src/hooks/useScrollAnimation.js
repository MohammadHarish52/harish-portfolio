import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (ref, from = {}, to = {}, scrollTrigger = {}) => {
  useEffect(() => {
    if (ref.current) {
      const animation = gsap.fromTo(ref.current, from, {
        ...to,
        scrollTrigger: {
          trigger: ref.current,
          ...scrollTrigger,
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, [ref, from, to, scrollTrigger]);
};

export default useScrollAnimation;
