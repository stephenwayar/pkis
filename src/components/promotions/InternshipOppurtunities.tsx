import Link from "next/link";
import MaxWidthLayout from "@/layouts/MaxWidthLayout";

export default function InternshipOppurtunities() {
  return (
    <div
      className="bg-cover bg-center py-20 xl:py-32"
      style={{ backgroundImage: "url('/assets/imgs/hero background.jpg')" }}
    >
      <MaxWidthLayout>
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 lg:max-w-1/2">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold">
            Internship <br className="hidden md:block" /> opportunities with SCEF
          </h1>

          <p className="text-white text-lg lg:text-base xl:text-lg">
            Our internships provide real-world experience in educational program management, event coordination, and research. Interns at NESA Africa will not only contribute to our mission but also develop professional skills that will serve them in their future careers.
          </p>

          <div>
            <Link href="#partner">
              <button className="flex h-11 w-[165px] text-white justify-center text-sm bg-[#3366CC] items-center space-x-2 rounded-full border-2 border-[#3366CC]">
                Become an intern
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
}
