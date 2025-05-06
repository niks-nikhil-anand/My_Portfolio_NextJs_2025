"use client"
import { useState } from "react";
import { projects } from "@/constants/index.jsx";
import TestimonialItem from "../TestimonialItem.jsx";
import Button from "../Button.jsx";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayProjects = showAll ? projects : projects.slice(0, 4);
  const halfLength = Math.floor(displayProjects.length / 2);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="container block lg:flex">
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">My Portfolio</p>
          <h3 className="h4 max-md:h5 text-p4">Crafting Exceptional Digital Experiences</h3>
        </div>

        <div className="flex flex-col">
          <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
            <div className="testimonials_group-after flex-50">
              {displayProjects.slice(0, halfLength).map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName="last:after:hidden last:after:max-md:block"
                />
              ))}
            </div>

            <div className="flex-50">
              {displayProjects.slice(halfLength).map((testimonial) => (
                <TestimonialItem
                  key={testimonial.id}
                  item={testimonial}
                  containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
                />
              ))}
            </div>
          </div>
          
          {!showAll && projects.length > 4 && (
            <div className="flex justify-center mt-16">
              <Button 
                icon="/images/circle.svg"
                onClick={handleShowMore}
              >
                Show More
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;