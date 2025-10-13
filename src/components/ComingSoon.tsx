import React from "react";
 
const CybersecurityPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans text-gray-300 overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-light leading-tight bg-gradient-to-b from-blue-700 to-slate-400 bg-clip-text text-transparent">
            Welcome to Learn X
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            The next generation cybersecurity e-learning platform. Built for
            learners, by Hack Secure.
          </p>

          {/* The image container is now much simpler */}
          <div className="mt-16">
            <img
              className="mx-auto hidden md:block" // Removed mt-40, using mx-auto for centering
              src={"/LearnX.png"}
              alt="LearnX network graphic" // Added a descriptive alt tag for accessibility
            />
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />
    </div>
  );
};
export default CybersecurityPage;
