"use client";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  const handleScrollToFeatures = () => {
    const featuresSection = document.querySelector('[name="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative text-white pt-60 pb-40 lg:pt-60 lg:pb-40 md:pt-36 md:pb-32 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image (if any) */}

      {/* Overlay */}
      <div name="hero" className="relative bg-opacity-50 w-full h-full">
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl lg:max-w-2xl">

            <div className="relative inline-block mb-6 saturn-ring">
              <Image
                src="/images/profile/niks.jpeg"
                alt="Logo"
                width={80}
                height={80}
                className="border-4 rounded-full transition-all duration-500 shadow-lg w-20 h-20"
              />
            </div>

            <div className="text-sm uppercase text-p3 mb-4">
              Full Stack Developer.
            </div>
            <h1 className="mb-6 text-5xl lg:text-6xl font-bold leading-tight text-p4">
              Hi, I&apos;m Nikhil Anand
            </h1>

            <p className="max-w-2xl mb-10 text-lg text-white/90">
              A passionate freelancer and website developer, crafting
              user-friendly and visually stunning web solutions tailored to your
              needs.
            </p>

            <div onClick={handleScrollToFeatures}>
              <Button icon="/images/zap.svg">Hire me now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
