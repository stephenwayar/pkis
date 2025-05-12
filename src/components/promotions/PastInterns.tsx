import MaxWidthLayout from "@/layouts/MaxWidthLayout";
import PastInternsCarousel from "./PastInternsCarousel";

export default function PastInterns() {
  return (
    <div className="py-14">
      <MaxWidthLayout>
        <div className="space-y-6 sm:space-y-8 lg:max-w-1/2">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl">
            Hear from our past interns 
          </h1>

          <p className="text-[#454652] text-base">
            Hear what our past interns has to say about interning with SCEF and the impact it made in their life and career 
          </p>
        </div>

        <PastInternsCarousel />
      </MaxWidthLayout>
    </div>
  )
}