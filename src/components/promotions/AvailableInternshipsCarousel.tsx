"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRef, useState, useEffect } from "react"

export default function AvailableInternshipsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const realOpportunities = [
    {
      title: "Digital Services",
      description: "Interns get to work in digital content management, database services & digital marketing.",
    },
    {
      title: "Administration and policy",
      description: "Interns get Opportunities in the administrative support, policy research, and strategy implementation.",
    },
    {
      title: "Project Managment",
      description: "Interns get to work in planning, executing and monitoring SCEF's educational projects.",
    },
    {
      title: "Research and Evaluation",
      description: "Interns get to work in research and evaluation of educational programs and policies.",
    },
    {
      title: "Capacity Building",
      description: "Interns get to work in capacity building of SCEF staff and partners.",
    },
  ];

  // Add cloned first and last item for looping
  const opportunities = [
    realOpportunities[realOpportunities.length - 1], // clone of last
    ...realOpportunities,
    realOpportunities[0], // clone of first
  ];

  const cardWidth = 400 + 16; // width + margin

  // Set up initial scroll and listeners
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = cardWidth;
      setActiveIndex(0);
      checkScroll();
      scrollContainer.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      scrollContainer?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);


  // Scroll logic + loop handling
  const checkScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const index = Math.round(scrollLeft / cardWidth);

      // Loop jump conditions
      if (index === 0) {
        scrollContainer.scrollLeft = cardWidth * realOpportunities.length;
        setActiveIndex(realOpportunities.length - 1);
        return;
      }
      if (index === opportunities.length - 1) {
        scrollContainer.scrollLeft = cardWidth;
        setActiveIndex(0);
        return;
      }

      setActiveIndex(index - 1); // adjust for prepended clone
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      left: cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-y-5">
      {/* Scroll Controls */}
      <div className="flex justify-end space-x-3">
        <button
          onClick={handleScrollLeft}
          className={`border-2 h-[48px] w-[48px] flex items-center justify-center rounded-full ${canScrollLeft ? 'border-[#3366CC]' : 'border-[#6E7B6B]'}`}
        >
          <Icon
            width="35"
            height="35"
            className={canScrollLeft ? 'text-[#3366CC]' : 'text-[#6E7B6B]'}
            icon="iconamoon:arrow-left-2-duotone"
          />
        </button>

        <button
          onClick={handleScrollRight}
          className={`border-2 h-[48px] w-[48px] flex items-center justify-center rounded-full ${canScrollRight ? 'border-[#3366CC]' : 'border-[#6E7B6B]'}`}
        >
          <Icon
            width="35"
            height="35"
            className={canScrollRight ? 'text-[#3366CC]' : 'text-[#6E7B6B]'}
            icon="iconamoon:arrow-right-2-duotone"
          />
        </button>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div ref={scrollContainerRef} className="overflow-x-scroll no-scrollbar w-full">
          <div className="flex space-x-4 w-full">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                style={{ backgroundImage: "url('/assets/imgs/internship-card.png')" }}
                className="min-w-[400px] py-24 flex flex-col rounded-[20px] bg-no-repeat bg-cover bg-center justify-end h-[500px] p-5"
              >
                <div className="space-y-3 text-white">
                  <h3 className="text-3xl font-semibold">{opp.title}</h3>
                  <p>{opp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {realOpportunities.map((_, idx) => (
            <div
              key={idx}
              className={
                idx === activeIndex
                  ? "w-10 h-4 rounded-full bg-[#3366CC] transition-all duration-300"
                  : "w-4 h-4 rounded-full bg-gray-200 transition-all duration-300"
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
