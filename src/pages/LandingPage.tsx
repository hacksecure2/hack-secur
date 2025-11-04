// import Navbar from "../components/LandingPage/Navbar";
// import Aurora from "../UI/Aurora";
// import CareersSection from "../components/LandingPage/CareersSection";
// import { Footer } from "../components/LandingPage/Footer"; 
// import SponsorsSection from "../components/LandingPage/SponsorsSection";
// import { useRef } from "react";
// import StatsCardsSection from "../components/LandingPage/StatsCardsSection";
// import HeroSection from "../components/LandingPage/HeroSection";
// import TestimonialsSection from "../components/LandingPage/TestimonialsSection";

// export default function LandingPage() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   interface InfoCardProps {
//     icon: React.ReactNode;
//     title: string;
//     description: string;
//   }
  
//   const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
//     <div className="flex flex-col items-center text-center">
//       <div className="mb-4 h-40 w-40 opacity-80">{icon}</div>
//       <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//       <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
//     </div>
//   );
//     const partnershipFeatures = [
//       {
//         icon: (
//           <img
//             src="https://www.cyberross.com/_next/image?url=/assets/principles/inventingAndInnovating.jpg&w=640&q=75"
//             alt=""
//           />
//         ),
//         title: "Tailored security services",
//         description:
//           "Experts understand the ins and outs of security challenges and offer bespoke cybersecurity services such as detailed guides, security roadmaps, and risk prioritization measures, each tailored to the organization's specific needs and risk appetite.",
//       },
//       {
//         icon: (
//           <img
//             src="https://p.globalsources.com/IMAGES/PDT/BIG/258/B1004613258.jpg"
//             alt=""
//           />
//         ),
//         title: "Technology creators and enablers",
//         description:
//           "As a trusted partner, organizations have access to a cohesive ecosystem of expertise, technologies, and services, which allows them to future-proof their operations and upgrade their cybersecurity posture.",
//       },
//       {
//         icon: (
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ1gKqKGea58lsorZwa3S9bU_67UVPSk0_lNdUME1aOhH2iPq"
//             alt=""
//           />
//         ),
//         title: "Globally distributed expertise",
//         description:
//           "Hack Secure works in synergy with innovative technologies to offer detection and response capabilities that eliminate cyber disruptions efficiently and effectively. We map and mitigate adversary tactics in each region through targeted intelligence and operations.",
//       },
//     ];
//   return (
//     <>
//       <div
//         className="relative z-5 mb-[500px] md:mb-[400px] scroll-smooth"
//         ref={scrollContainerRef}
//       >
//         {" "}
//         <div className="absolute -z-10 bg-[#0c0c0c] h-screen w-full pointer-events-none">
//           <Aurora
//             colorStops={["#4290bc", "#5C7AEA", "#18359a", "#0e2051"]}
//             amplitude={0.5}
//             speed={0.3}
//             blend={0.9}
//           />
//         </div>
//         <Navbar />
//         <HeroSection />
//         <SponsorsSection />
//         <section id="learn" className="py-40 bg-black relative">
//           <section className="py-24">
//             <div className="container mx-auto px-6 text-center">
//               <h2 className="text-3xl md:text-5xl font-bold text-white">
//                 Gain a formidable partner to build exceptional defenses
//               </h2>
//               <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
//                 From expert-led training to real-time investigations, everything
//                 we do is designed to make your digital environment smarter,
//                 safer, and stronger.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
//                 {partnershipFeatures.map((feature) => (
//                   <InfoCard
//                     key={feature.title}
//                     icon={feature.icon}
//                     title={feature.title}
//                     description={feature.description}
//                   />
//                 ))}
//               </div>
//             </div>
//           </section>
//         </section>
//         <StatsCardsSection />
//         <section className=" bg-[#0c0c0c] py-40">
//           <div className="flex flex-col items-center max-w-7xl mx-auto px-4 text-center mb-16">
//             <div className="flex  items-center text-xl rounded-full border-1 w-fit px-4 border-[#f9f9f9]/20 font-bold text-white/80 mb-4">
//               Why &nbsp;<span className="text-[#338aca]">Hack Secure?</span>
//             </div>
//             <div className="text-4xl md:text-6xl lg:text-6xl text-white/60  mx-auto">
//               Discover what makes <span>Hack Secure</span> the trusted choice
//               for cybersecurity excellence
//             </div>
//           </div>
//           <div className="mx-auto w-full max-w-7xl px-4">
//             <CareersSection />
//           </div>
//         </section>{" "}
//         <TestimonialsSection />
//       </div>
//       <Footer />
//     </>
//   );
// }




import Navbar from "../components/LandingPage/Navbar";
import Aurora from "../UI/Aurora";
import CareersSection from "../components/LandingPage/CareersSection";
import { Footer } from "../components/LandingPage/Footer"; 
import SponsorsSection from "../components/LandingPage/SponsorsSection";
import { useRef } from "react";
import StatsCardsSection from "../components/LandingPage/StatsCardsSection";
import HeroSection from "../components/LandingPage/HeroSection";
import TestimonialsSection from "../components/LandingPage/TestimonialsSection";

export default function LandingPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 h-40 w-40 opacity-80">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
    const partnershipFeatures = [
      {
        icon: (
          <img
            src="https://www.cyberross.com/_next/image?url=/assets/principles/inventingAndInnovating.jpg&w=640&q=75"
            alt=""
          />
        ),
        title: "Tailored security services",
        description:
          "Experts understand the ins and outs of security challenges and offer bespoke cybersecurity services such as detailed guides, security roadmaps, and risk prioritization measures, each tailored to the organization's specific needs and risk appetite.",
      },
      {
        icon: (
          <img
            src="https://p.globalsources.com/IMAGES/PDT/BIG/258/B1004613258.jpg"
            alt=""
          />
        ),
        title: "Technology creators and enablers",
        description:
          "As a trusted partner, organizations have access to a cohesive ecosystem of expertise, technologies, and services, which allows them to future-proof their operations and upgrade their cybersecurity posture.",
      },
      {
        icon: (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZ1gKqKGea58lsorZwa3S9bU_67UVPSk0_lNdUME1aOhH2iPq"
            alt=""
          />
        ),
        title: "Globally distributed expertise",
        description:
          "Hack Secure works in synergy with innovative technologies to offer detection and response capabilities that eliminate cyber disruptions efficiently and effectively. We map and mitigate adversary tactics in each region through targeted intelligence and operations.",
      },
    ];
  return (
    <>
      <div
        className="relative z-5 mb-[500px] md:mb-[400px] scroll-smooth bg-black"
        ref={scrollContainerRef}
      >
        {" "}
        <div className="absolute -z-10 bg-black h-screen w-full pointer-events-none">
          <Aurora
            colorStops={["#4290bc", "#5C7AEA", "#18359a", "#0e2051"]}
            amplitude={0.5}
            speed={0.3}
            blend={0.9}
          />
        </div>
        <Navbar />
        <HeroSection />
        <SponsorsSection />
        <section id="learn" className="py-40 bg-black relative">
          <section className="py-24">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Gain a formidable partner to build exceptional defenses
              </h2>
              <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
                From expert-led training to real-time investigations, everything
                we do is designed to make your digital environment smarter,
                safer, and stronger.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                {partnershipFeatures.map((feature) => (
                  <InfoCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>
        <StatsCardsSection />
        <section className=" bg-black py-40">
          <div className="flex flex-col items-center max-w-7xl mx-auto px-4 text-center mb-16">
            <div className="flex  items-center text-xl rounded-full border-1 w-fit px-4 border-[#f9f9f9]/20 font-bold text-white/80 mb-4">
              Why &nbsp;<span className="text-[#338aca]">Hack Secure?</span>
            </div>
            <div className="text-4xl md:text-6xl lg:text-6xl text-white/60  mx-auto">
              Discover what makes <span>Hack Secure</span> the trusted choice
              for cybersecurity excellence
            </div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-4">
            <CareersSection />
          </div>
        </section>{" "}
        <TestimonialsSection />
      </div>
      <Footer />
    </>
  );
}