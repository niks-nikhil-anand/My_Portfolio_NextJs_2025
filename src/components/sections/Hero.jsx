"use client";
import Image from "next/image";
import Button from "../Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [normalizedImages, setNormalizedImages] = useState([]);

  const handleScrollToFeatures = () => {
    const featuresSection = document.querySelector('[name="features"]');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };



  useEffect(() => {
    console.log("Fetching sharpened hero images..."); // Log when the fetch starts
  
    fetch("/api/sharpen-hero-img")
      .then((response) => {
        console.log("Fetch response received:", response); // Log the raw response
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the data received from the API
  
        if (data.images && Array.isArray(data.images)) {
          console.log("Valid images array found:", data.images); // Log the array of images
  
          // Normalize all image URLs in the array
          const normalized = data.images.map((image) =>
            image.replace(/\\/g, "/").replace(/\.jp$/, ".jpg")
          );
          console.log("Normalized images:", normalized); // Log the normalized image URLs
  
          setNormalizedImages(normalized);
        } else {
          console.warn("No valid images array in fetched data:", data); // Log a warning if images array is missing or invalid
        }
      })
      .catch((error) => console.error("Error fetching sharpened images:", error));
  }, []);

  
  

  return (
    <section className="relative text-white pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      {/* Background Image */}
      {normalizedImages.length > 0 && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={normalizedImages[0]}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
            priority
            className="bg-no-repeat bg-center"
          />
        </div>
      )}

      {/* Overlay */}
      <div name="hero" className="relative bg-opacity-50 w-full h-full">
        <div className="container relative z-10">
          <div className="max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">Web Dev.</div>
            <h1 className="mb-6 h6 text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Hi, I&apos;m Nikhil Anand
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              A passionate freelancer and website developer, crafting user-friendly and visually stunning web solutions tailored to your needs.
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
