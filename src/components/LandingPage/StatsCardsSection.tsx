import { Presentation, MessageSquare, Wrench, Search } from "lucide-react";

// Card component for each item in the grid
const AreaCard = ({ icon: Icon, label, colorClass, shadowClass }: any) => (
  <div
    className="
    bg-gray-900/50 
    border border-gray-800 
    rounded-xl 
    p-8 
    flex flex-col items-center justify-center 
    gap-6
    transition-all duration-300
    hover:border-blue-500 hover:shadow-xl hover:-translate-y-2
  "
  >
    <div className={`relative w-16 h-16 flex items-center justify-center`}>
      {/* Glow effect */}
      <div
        className={`absolute w-full h-full rounded-full blur-xl opacity-40 ${shadowClass}`}
      ></div>
      <Icon className={`w-10 h-10 z-10 ${colorClass}`} strokeWidth={1.5} />
    </div>
    <h3 className="text-white font-semibold text-lg">{label}</h3>
  </div>
);

const StatsCardsSection = () => {
  const areas = [
    {
      icon: Presentation,
      label: "Webinars",
      colorClass: "text-purple-400",
      shadowClass: "bg-purple-500",
    },
    {
      icon: MessageSquare,
      label: "Sessions",
      colorClass: "text-cyan-400",
      shadowClass: "bg-cyan-500",
    },
    {
      icon: Wrench,
      label: "Workshop",
      colorClass: "text-green-400",
      shadowClass: "bg-green-500",
    },
    {
      icon: Search,
      label: "Investigation",
      colorClass: "text-pink-400",
      shadowClass: "bg-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-black text-gray-300">
      <div className="container mx-auto px-6">
        {/* Top introductory text */}
        <p className="text-center max-w-3xl mx-auto mb-16">
          Discover how we seamlessly integrates cybersecurity into your
          organization's everyday operations while addressing various business
          challenges. By building airtight defenses, organizations can protect
          their business across these critical areas:
        </p>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {areas.map((area) => (
            <AreaCard
              key={area.label}
              icon={area.icon}
              label={area.label}
              colorClass={area.colorClass}
              shadowClass={area.shadowClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCardsSection;
