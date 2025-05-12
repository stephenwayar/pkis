"use client"
import Image from "next/image";
import { useRef, useState, useEffect } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import testimonial1 from "@/assets/svgs/user-testimonial.svg"

export default function PastInternsCarousel() {
  const isScrollingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const realTestimonials = [
    {
      author: "-John Doe",
      position: "Business Development Specialist at Google",
      quote: "Interning at SCEF was a transformative experience. The hands-on projects and guidance from industry experts helped me develop my skills and boosted my confidence. I now have a clear career path and invaluable connections.",
      image: testimonial1
    },
    {
      author: "-John Doe",
      position: "Business Development Specialist at Google",
      quote: "Interning at SCEF was a transformative experience. The hands-on projects and guidance from industry experts helped me develop my skills and boosted my confidence. I now have a clear career path and invaluable connections.",
      image: testimonial1
    },
    {
      author: "-John Doe",
      position: "Business Development Specialist at Google",
      quote: "Interning at SCEF was a transformative experience. The hands-on projects and guidance from industry experts helped me develop my skills and boosted my confidence. I now have a clear career path and invaluable connections.",
      image: testimonial1
    },
    {
      author: "-John Doe",
      position: "Business Development Specialist at Google",
      quote: "Interning at SCEF was a transformative experience. The hands-on projects and guidance from industry experts helped me develop my skills and boosted my confidence. I now have a clear career path and invaluable connections.",
      image: testimonial1
    },
    {
      author: "-John Doe",
      position: "Business Development Specialist at Google",
      quote: "Interning at SCEF was a transformative experience. The hands-on projects and guidance from industry experts helped me develop my skills and boosted my confidence. I now have a clear career path and invaluable connections.",
      image: testimonial1
    },
  ];

  // Add cloned first and last item for looping
  const testimonials = [
    realTestimonials[realTestimonials.length - 1], // clone of last
    ...realTestimonials,
    realTestimonials[0], // clone of first
  ];

  const cardHeight = 500; // height of each testimonial card

  // Set up initial scroll and listeners
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = cardHeight;
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
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const index = Math.round(scrollTop / cardHeight);

      // Loop jump conditions
      if (index === 0) {
        scrollContainer.scrollTop = cardHeight * realTestimonials.length;
        setActiveIndex(realTestimonials.length - 1);
        return;
      }
      if (index === testimonials.length - 1) {
        scrollContainer.scrollTop = cardHeight;
        setActiveIndex(0);
        return;
      }

      setActiveIndex(index - 1); // adjust for prepended clone
      setCanScrollLeft(scrollTop > 0);
      setCanScrollRight(scrollTop < scrollHeight - clientHeight - 1);
    }
  };

  const handleScrollLeft = () => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    scrollContainerRef.current?.scrollBy({
      top: -cardHeight,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  const handleScrollRight = () => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    scrollContainerRef.current?.scrollBy({
      top: cardHeight,
      behavior: 'smooth',
    });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  return (
    <div className="space-y-5 mt-10">
      {/* Carousel */}
      <div className="flex items-start space-x-10">
        <div ref={scrollContainerRef} className="overflow-y-scroll no-scrollbar w-full">
          <div className="flex flex-col items-end h-[500px] w-full">
            {testimonials.map((testimonial, index) => (
              <div className="overflow-x-scroll min-h-[500px] max-w-[80rem] w-full no-scrollbar" key={index}>
                <div
                  style={{ backgroundImage: "url('/assets/imgs/Testimonals.jpg')" }}
                  className="p-8 flex items-center justify-between space-x-6 bg-no-repeat bg-cover bg-center border-y-2 border-[#4672DA] max-w-[80rem] min-w-[80rem] min-h-[500px] bg-[#F8F9FF] object-center object-cover"
                >
                  <div>
                    <div className="w-[415px] h-[415px]">
                      <Image
                        priority
                        alt="logo icon"
                        className="w-full h-full"
                        src={testimonial.image}
                      />
                    </div>
                  </div>

                  <div className="space-y-10 text-[#40493E]">
                    <p className="text-3xl">
                      {testimonial.quote}
                    </p>

                    <div className="space-y-2 text-lg">
                      <p>
                        {testimonial.author}
                      </p>

                      <p>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator */}
        <div className="flex flex-col justify-center items-center gap-y-3 mt-8">
          {realTestimonials.map((_, idx) => (
            <div
              key={idx}
              className={
                idx === activeIndex
                  ? "w-4 h-10 rounded-full bg-[#3366CC] transition-all duration-300"
                  : "w-4 h-4 rounded-full bg-gray-200 transition-all duration-300"
              }
            />
          ))}
        </div>
      </div>

      {/* Scroll Controls */}
      <div className="flex justify-center space-x-3">
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
    </div>
  )
}