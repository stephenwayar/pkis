import MaxWidthLayout from "@/layouts/MaxWidthLayout";
import AvailableInternshipsCarousel from "./AvailableInternshipsCarousel";

export default function AvailableInternships() {
  return (
    <div className="py-14">
      <MaxWidthLayout>
        <div className="space-y-6 sm:space-y-8 lg:max-w-1/2">
          <h1 className="text-3xl sm:text-5xl lg:text-4xl">
            Available internship opportunities
          </h1>

          <p className="text-[#454652] text-base">
            Here are available internship opportunities at SCEF, you can click on apply to start interning with SCEF and open doors to new horizon get involved in the empowerment of education for all in Africa
          </p>
        </div>

        <AvailableInternshipsCarousel />
      </MaxWidthLayout>
    </div>
  )
}