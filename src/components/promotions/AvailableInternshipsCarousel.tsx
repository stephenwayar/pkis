"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useRef, useState, useEffect } from "react"

export default function AvailableInternshipsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const oppurtunities = [
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
      description: "Interns get to work  in planning, executing and monitoring SCEF's educational projects.",
    },
    {
      title: "Research and Evaluation",
      description: "Interns get to work in research and evaluation of educational programs and policies.",
    },
    {
      title: "Capacity Building",
      description: "Interns get to work in capacity building of SCEF staff and partners.",
    },
  ]

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      checkScroll(); // Check initial scroll position
      scrollContainer.addEventListener('scroll', checkScroll); // Listen for horizontal scroll
      window.addEventListener('resize', checkScroll); // Recheck on window resize
    }

    // Cleanup listeners on unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  // Checks if the container can scroll left or right
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0); // True if not at the leftmost edge
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // True if not at the rightmost edge
    }
  };

  // Scrolls the container 400px to the left
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  }

  // Scrolls the container 400px to the right
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-end space-x-3">
        <div>
          <button
            onClick={handleScrollLeft}
            className={`border-2 h-[48px] w-[48px] items-center justify-center flex rounded-full ${canScrollLeft ? 'border-[#3366CC]' : 'border-[#6E7B6B]'
              }`}
          >
            <Icon
              width="35"
              height="35"
              className={canScrollLeft ? 'text-[#3366CC]' : 'text-[#6E7B6B]'}
              icon="iconamoon:arrow-left-2-duotone"
            />
          </button>
        </div>

        <div>
          <button
            onClick={handleScrollRight}
            className={`border-2 h-[48px] w-[48px] items-center justify-center flex rounded-full ${canScrollRight ? 'border-[#3366CC]' : 'border-[#6E7B6B]'
              }`}
          >
            <Icon
              width="35"
              height="35"
              className={canScrollRight ? 'text-[#3366CC]' : 'text-[#6E7B6B]'}
              icon="iconamoon:arrow-right-2-duotone"
            />
          </button>
        </div>
      </div>

      <div ref={scrollContainerRef} className="overflow-x-scroll no-scrollbar w-full">
        <div className="flex space-x-4 w-full">
          {oppurtunities.map((oppurtunity, index) => (
            <div
              key={index}
              style={{ backgroundImage: "url('/assets/imgs/internship-card.png')" }}
              className="min-w-[400px] py-24 flex flex-col rounded-[20px] bg-no-repeat bg-cover bg-center justify-end h-[500px] p-5"
            >
              <div className="space-y-3 text-white">
                <h3 className="text-3xl font-semibold">{oppurtunity.title}</h3>
                <p>{oppurtunity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}