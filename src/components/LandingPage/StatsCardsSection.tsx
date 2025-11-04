// import React from "react";

// // Define the structure for the data items
// interface StatItem {
//   value: string;
//   label: string;
// }

// // Data mirroring the image
// const statsData: StatItem[] = [
//   { value: "1550+", label: "successful investigations" },
//   { value: "400+", label: "employees" },
//   { value: "600+", label: "enterprise customers" },
//   { value: "60", label: "countries" },
//   { value: "$1 bln", label: "saved for companies" },
//   { value: "#1", label: "Incident Response Retainer vendor" },
//   { value: "120+", label: "patents and applications" },
//   { value: "11", label: "unique Digital Crime Resistance Centers" },
// ];

// const CyberSecurityStats: React.FC = () => {
//   return (
//     <div className="relative bg-gray-900 min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
//       {/* Background Image with Black Overlay and Blur Effect */}
//       <div
//         className="absolute inset-0 bg-cover bg-center blur-sm" // Added blur-sm here
//         style={{
//           backgroundImage:
//             "url(https://www.shutterstock.com/shutterstock/videos/1062142933/thumb/1.jpg?ip=x480)", // A darker, abstract tech image
//         }}
//       ></div>
//       {/* Semi-transparent black overlay for the "blackish" effect */}
//       <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
//       {/* Increased opacity for a darker effect */}
//       {/* Blue neon effect approximate (optional - you'd replace this with your actual image/SVG/CSS) */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
//       {/* Content wrapper to center the card and text */}
//       <div className="relative z-10 text-white max-w-4xl mx-auto text-center">
//         {/* Main Header */}
//         <h1 className="text-4xl sm:text-5xl font-light mb-10 tracking-wider">
//           We know how to ensure your safety
//         </h1>

//         {/* The Card/Grid Section */}
//         <div className="grid grid-cols-4 grid-rows-2 gap-px rounded-lg overflow-hidden border border-blue-900/50 shadow-2xl shadow-blue-500/10">
//           {statsData.map((stat, index) => (
//             // Individual Stat Block
//             <div
//               key={index}
//               className={`
//                 p-6 sm:p-8 flex flex-col justify-center items-center
//                 // Dark background with slight transparency for the glow effect
                 
//                 // Hover effect for interactivity
//                 transition duration-300 ease-in-out hover:bg-blue-800/40
//                 // Subtle divider lines are achieved using the gap-px on the grid and padding
//                 ${index < 4 ? "border-b border-blue-900/70" : ""} 
//                 ${index % 4 !== 3 ? "border-r border-blue-900/70" : ""}
//               `}
//             >
//               <div className="text-3xl sm:text-4xl font-semibold mb-1 text-blue-300">
//                 {stat.value}
//               </div>
//               <div className="text-xs sm:text-sm font-light text-gray-300">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Text */}
//         <div className="mt-8 text-xs font-light space-y-2">
//           <p className="opacity-70">
//             Hack Secure's mission is to fight against cybercrime
//           </p>
//           <div className="flex justify-center items-center gap-4">
//             <span className="opacity-70">
//               Partner and active collaborator in global investigations:
//             </span>
//             {/* Placeholder for the partner logos/text */}
//             <div className="flex gap-2 text-white border border-blue-500 rounded-full p-1 text-xs opacity-70">
//               <span className="px-2">FIRST/OBCX</span>
//               <span className="px-2">FBI/OBCX</span>
//               <span className="px-2">INTERPOL</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CyberSecurityStats;


import React from "react";

// Define the structure for the data items
interface StatItem {
  value: string;
  label: string;
}

// Data mirroring the image
const statsData: StatItem[] = [
  { value: "1550+", label: "successful investigations" },
  { value: "400+", label: "employees" },
  { value: "600+", label: "enterprise customers" },
  { value: "60", label: "countries" },
  { value: "$1 bln", label: "saved for companies" },
  { value: "#1", label: "Incident Response Retainer vendor" },
  { value: "120+", label: "patents and applications" },
  { value: "11", label: "unique Digital Crime Resistance Centers" },
];

const CyberSecurityStats: React.FC = () => {
  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Content wrapper to center the card and text */}
      <div className="relative z-10 text-white max-w-4xl mx-auto text-center">
        {/* Main Header */}
        <h1 className="text-4xl sm:text-5xl font-light mb-10 tracking-wider">
          We know how to ensure your safety
        </h1>

        {/* The Card/Grid Section */}
        <div className="grid grid-cols-4 grid-rows-2 gap-px rounded-lg overflow-hidden border border-[#f9f9f9]/20 shadow-2xl shadow-blue-500/10">
          {statsData.map((stat, index) => (
            // Individual Stat Block
            <div
              key={index}
              className={`
                p-6 sm:p-8 flex flex-col justify-center items-center
                // Dark background with slight transparency for the glow effect
                 
                // Hover effect for interactivity
                transition duration-300 ease-in-out hover:bg-[#f9f9f9]/10
                // Subtle divider lines are achieved using the gap-px on the grid and padding
                ${index < 4 ? "border-b border-[#f9f9f9]/20" : ""} 
                ${index % 4 !== 3 ? "border-r border-[#f9f9f9]/20" : ""}
              `}
            >
              <div className="text-3xl sm:text-4xl font-semibold mb-1 text-blue-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-light text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-xs font-light space-y-2">
          <p className="opacity-70">
            Hack Secure's mission is to fight against cybercrime
          </p>
          <div className="flex justify-center items-center gap-4">
            <span className="opacity-70">
              Partner and active collaborator in global investigations:
            </span>
            {/* Placeholder for the partner logos/text */}
            <div className="flex gap-2 text-white border border-blue-500 rounded-full p-1 text-xs opacity-70">
              <span className="px-2">FIRST/OBCX</span>
              <span className="px-2">FBI/OBCX</span>
              <span className="px-2">INTERPOL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityStats;