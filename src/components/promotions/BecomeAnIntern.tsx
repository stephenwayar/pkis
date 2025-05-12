import Link from "next/link";
import MaxWidthLayout from "@/layouts/MaxWidthLayout";

export default function BecomeAnIntern() {
  return (
    <div className="py-16">
      <MaxWidthLayout>
        <div
          style={{ backgroundImage: "url('/assets/imgs/happy-team.png')" }}
          className="py-24 flex flex-col rounded-[20px] justify-center bg-no-repeat bg-cover bg-center items-center h-[500px] p-10"
        >
          <div className="mx-auto max-w-[70rem] text-center flex flex-col items-center gap-12">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold">
              Ready to gain more industry experience and open doors to new opportunities
            </h1>

            <Link href="#partner">
              <button className="h-11 w-[165px] text-white text-sm bg-[#3366CC] items-center justify-center rounded-full border-2 border-[#3366CC]">
                Become an intern
              </button>
            </Link>
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
}