import Image from "next/image";
import MaxWidthLayout from "@/layouts/MaxWidthLayout";
import signupImage from "@/assets/svgs/signup-image.svg"
import peopleGroup from "@/assets/svgs/people-group.svg"

export default function StepsToIntern() {
  const steps = [
    {
      title: "Create an account with SCEF",
      description: "Create an account with SCEF with your details and navigate to the internship page to explore",
    },
    {
      title: "Explore best option for you",
      description: "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
    },
    {
      title: "Apply for internship ",
      description: "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
    },
    {
      title: "Wait for acceptance letter 💌 ",
      description: "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
    },
    {
      title: "Make payment for internship 💸",
      description: "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
    },
    {
      title: "Prepare for your first day 😎",
      description: "Gain valuable experience and enhance skills by working in a structured and high-performing environment.",
    },
  ]

  return (
    <div className="py-14">
      <MaxWidthLayout>
        <div className="space-y-6 sm:space-y-8 lg:max-w-1/2">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl">
            Steps to Intern with SCEF
          </h1>
        </div>

        <div className="flex flex-col mt-10 lg:flex-row lg:justify-between lg:items-center gap-10">
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div key={index} className="space-x-3 rounded-[8px] flex items-start w-full max-w-[45rem]">
                <div>
                  <div className="w-[50px] mt-3 h-[45px] rounded-[4px] flex justify-center items-center text-white text-4xl bg-[#3366CC]">
                    {index + 1}
                  </div>

                  <div className={`w-[2px] h-[50px] mx-auto mt-5 bg-black ${index === steps.length - 1 ? 'hidden' : ''}`} />
                </div>

                <div className="space-y-1">
                  <h1 className="text-[#131A34] text-lg font-semibold">
                    {step.title}
                  </h1>

                  <p className="text-[#545662] !font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="gap-8 flex flex-col">
            <div>
              <Image
                priority
                alt="logo icon"
                className="w-full h-full"
                src={signupImage}
              />
            </div>

            <div>
              <Image
                priority
                alt="logo icon"
                className="w-full h-full"
                src={peopleGroup}
              />
            </div>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  )
}