import DigitalPresenceCTA from "@/components/sections/DigitalCTA";
import Download from "@/components/sections/Download";
import Experience from "@/components/sections/Experience";
import Features from "@/components/sections/Features";

import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Projects from "@/components/sections/Projects";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Projects />
      <Download />
      <Experience />
      <DigitalPresenceCTA />
    </div>
  );
};

export default page;
