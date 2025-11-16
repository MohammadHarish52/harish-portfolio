import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useEffect, useRef } from "react";
import {
  FaBookmark,
  FaChartLine,
  FaEye,
  FaHeart,
  FaRetweet,
  FaShare,
  FaUsers,
} from "react-icons/fa";
import { LightContext } from "./LightContext";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaStats = () => {
  const { light } = useContext(LightContext);
  const statsRef = useRef(null);
  const cardsRef = useRef([]);

  const stats = [
    {
      icon: <FaUsers />,
      label: "Verified Followers",
      value: "840",
      growth: "/ 8.2K",
    },
    {
      icon: <FaEye />,
      label: "Impressions",
      value: "9M",
      growth: "↑1M%",
    },
    {
      icon: <FaChartLine />,
      label: "Engagement Rate",
      value: "6.2%",
      growth: "↑30%",
    },
    {
      icon: <FaHeart />,
      label: "Likes",
      value: "113.1K",
      growth: "↑1M%",
    },
    {
      icon: <FaUsers />,
      label: "Profile Visits",
      value: "115.6K",
      growth: "↑964K%",
    },
    {
      icon: <FaRetweet />,
      label: "Reposts",
      value: "2.7K",
      growth: "↑274K%",
    },
    {
      icon: <FaBookmark />,
      label: "Bookmarks",
      value: "34.8K",
      growth: "↑10K%",
    },
    {
      icon: <FaShare />,
      label: "Shares",
      value: "1.3K",
      growth: "↑10K%",
    },
  ];

  useEffect(() => {
    if (statsRef.current) {
      // Animate the header
      gsap.fromTo(
        ".stats-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate each card
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [light]);

  return (
    <div
      ref={statsRef}
      className="flex justify-between items-start sm:pt-[120px] sm:pb-[220px] pt-[80px] pb-[140px] flex-wrap gap-[10px] w-[100%] relative"
    >
      {/* Large background smoke effect */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: light
            ? "radial-gradient(circle, rgba(214, 214, 214, 0.3), transparent 70%)"
            : "radial-gradient(circle, rgba(255, 245, 225, 0.05), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10">
        <h1 className="text-[22px] sm:text-[40px] font-[700] tracking-[-2px] masked-title">
          (Social Impact)
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-[700px]">
        <div className="stats-header relative">
          {/* Decorative smoke effect */}
          <div
            className="absolute -top-10 -left-10 w-32 h-32 opacity-20 pointer-events-none"
            style={{
              background: light
                ? "radial-gradient(circle, rgba(214, 214, 214, 0.2), transparent 70%)"
                : "radial-gradient(circle, rgba(255, 245, 225, 0.08), transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <p className="text-[18px] xs:text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-[500] text-left leading-[22px] xs:leading-[24px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px] pb-[20px] tracking-[-.6px] xs:tracking-[-.7px] sm:tracking-[-.9px] md:tracking-[-1.1px] lg:tracking-[-1.2px] xl:tracking-[-1.3px] vibe-text subheading-text">
            Grew X (Twitter) to{" "}
            <span className="masked-title">9M impressions</span>
            <br />
            in just <span className="masked-title">68 days</span>. Now helping
            others
            <br />
            amplify their digital presence.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-[40px]"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full relative">
          {/* Smoke effect behind cards */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-32 opacity-10 pointer-events-none"
            style={{
              background: light
                ? "radial-gradient(ellipse, rgba(214, 214, 214, 0.3), transparent 60%)"
                : "radial-gradient(ellipse, rgba(255, 245, 225, 0.05), transparent 60%)",
              filter: "blur(60px)",
            }}
          />
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative group overflow-hidden rounded-xl p-5 transition-all duration-300 ${
                light
                  ? "bg-[#000] hover:bg-[#1a1a1a] border border-[#d6d6d6]/20"
                  : "bg-[#ffffff]/5 hover:bg-[#ffffff]/10 border border-[#d6d6d6]/10"
              }`}
              style={{
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Smoke effect overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: light
                    ? "radial-gradient(circle at 50% 50%, rgba(255, 245, 225, 0.05), transparent 70%)"
                    : "radial-gradient(circle at 50% 50%, rgba(255, 245, 225, 0.03), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Icon */}
              <div
                className={`text-[24px] mb-3 transition-all duration-300 group-hover:scale-110 text-[#fff5e1]`}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-[24px] sm:text-[28px] font-[700] mb-1 tracking-[-1px] text-[#fff5e1]">
                {stat.value}
              </div>

              {/* Label */}
              <div
                className={`text-[12px] sm:text-[13px] font-[500] mb-2 text-[#fff5e1] opacity-70`}
              >
                {stat.label}
              </div>

              {/* Growth */}
              <div
                className={`text-[11px] sm:text-[12px] font-[600] px-2 py-1 rounded-full inline-block text-[#fff5e1] ${
                  light
                    ? "bg-[#fff5e1]/20 text-[#fff5e1]"
                    : "bg-[#fff5e1]/10 text-[#fff5e1]"
                }`}
              >
                {stat.growth}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badge */}
        <div
          className={`mt-8 p-6 rounded-xl relative overflow-hidden border ${
            light
              ? "bg-[#000] border-[#d6d6d6]/20"
              : "bg-[#ffffff]/5 border-[#d6d6d6]/10"
          }`}
          style={{
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Smoke effect background */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: light
                ? "radial-gradient(circle at 20% 50%, rgba(255, 245, 225, 0.08), transparent 50%)"
                : "radial-gradient(circle at 20% 50%, rgba(255, 245, 225, 0.03), transparent 50%)",
              filter: "blur(40px)",
            }}
          />

          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 relative z-10">
            <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
              <h3 className="text-[18px] sm:text-[20px] font-[700] mb-2 text-[#fff5e1]">
                569.1K Total Engagements
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#fff5e1] opacity-70">
                Proven track record in content creation, audience building, and
                digital marketing. Now offering consultation and teaching
                services.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"></div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SocialMediaStats;
