import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import WhyIntern from "@/components/promotions/WhyIntern";
import PastInterns from "@/components/promotions/PastInterns";
import StepsToIntern from "@/components/promotions/StepsToIntern";
import BecomeAnIntern from "@/components/promotions/BecomeAnIntern"
import AvailableInternships from "@/components/promotions/AvailableInternships";
import InternshipOppurtunities from "@/components/promotions/InternshipOppurtunities";
import Footer from "@/components/nav/Footer";

export const metadata: Metadata = {
  title: "Internship Opportunities | Santos Creations Educational Foundation",
  description: "Join SCEF as an intern and contribute to bridging educational gaps across Africa. Apply for internship opportunities today.",
  openGraph: {
    title: "Internship Opportunities | Santos Creations Educational Foundation",
    description: "Join SCEF as an intern and contribute to bridging educational gaps across Africa. Apply for internship opportunities today.",
    url: "https://pkis-stephenwayars-projects.vercel.app/get-involved/internship",
  },
  twitter: {
    title: "Internship Opportunities | Santos Creations Educational Foundation",
    description: "Join SCEF as an intern and contribute to bridging educational gaps across Africa. Apply for internship opportunities today.",
  },
};

export default function InternshipPage() {
  return (
    <div>
      <Nav />

      <InternshipOppurtunities />

      <WhyIntern />

      <AvailableInternships />

      <PastInterns />

      <StepsToIntern />

      <BecomeAnIntern />

      <Footer />
    </div>
  );
}