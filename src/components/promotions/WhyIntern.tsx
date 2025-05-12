import Image from "next/image";
import intern1 from '@/assets/svgs/intern-1.svg'
import intern2 from '@/assets/svgs/intern-2.svg'
import MaxWidthLayout from "@/layouts/MaxWidthLayout";
import OppurtunityCard from "./OppurtunityCard";

export default function WhyIntern() {
  const oppurtunities = [
    {
      title: "Professional Growth:",
      description: "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
      color: "#3366CC",
    },
    {
      title: "Networking Opportunities:",
      description: "Connect with industry professionals, mentors, and peers, expanding your professional network.",
      color: "#F7567C",
    },
    {
      title: "Resume Enhancement:",
      description: "Having a prestigious organization on your resume can make you more attractive to future employers.",
      color: "#99E1D9",
    },
    {
      title: "Access to Resources:",
      description: "Utilize state-of-the-art tools, technologies, and resources that might not be available elsewhere.",
      color: "#A60067",
    },      
    {
      title: "Learning from Experts:",
      description: "Work alongside and learn from experienced professionals and industry leaders.",
      color: "#FFE156",
    },  
  ]

  return (
    <div className="py-14">
      <MaxWidthLayout>
        <div className="space-y-6 sm:space-y-8 lg:max-w-1/2">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl">
            Why intern with SCEF
          </h1>

          <p className="text-[#454652] text-base">
            Are you looking to jumpstart your career, gain unparalleled experience, and make valuable industry connections? Joining our organization as an intern offers you these opportunities and more. Here’s why you should consider becoming a part of our esteemed team:
          </p>
        </div>

        <div className="lg:flex lg:items-center space-y-8 lg:space-y-0 mt-14">
          <div className="lg:w-[492px] sm:h-[600px]">
            <div className="relative w-fit">
              <Image
                priority
                src={intern1}
                alt="logo icon"
                className="block"
              />

              <Image
                priority
                src={intern2}
                alt="logo icon"
                className="absolute hidden sm:block -bottom-60 left-20 z-10"
              />
            </div>
          </div>

          <div className="lg:w-[calc(100%-492px)] space-y-10 pl-5">
            {oppurtunities.map((oppurtunity, index) => (
              <OppurtunityCard 
                key={index} 
                index={index}
                oppurtunity={oppurtunity} 
              />
            ))}
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
} 