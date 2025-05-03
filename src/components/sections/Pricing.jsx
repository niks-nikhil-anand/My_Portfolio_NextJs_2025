"use client"
import { useState } from "react";
import clsx from "clsx";
import { plans } from "../../constants/index.jsx";
import Button from "../Button.jsx";

const Pricing = () => {
  return (
    <section>
      <div name="plans">
        <div className="container overflow-hidden max-w-[100px]">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible Plans for Every Need
            </h3>
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/*  pricing section*/}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6 flex-col md:flex-row">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={clsx(
                  "pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 mt-5",
                  index === 0 ? "w-full md:w-[calc(33.33%+2px)]" : "max-xl:min-w-60 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
                )}
              >
                {index === 1 && (
                  <div className="g4 absolute h-[250px] left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11",
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1 ? "size-[120px]" : "size-[88px]",
                    )}
                  />
                </div>

                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12",
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-p3 text-p3" : "border-p1 text-p1",
                    )}
                  >
                    {plan.title}
                  </div>
                </div>

                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                    index === 1 && "border-b",
                  )}
                >
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex w-full justify-center">
                  <Button icon={plan.icon}>Get Started</Button>
                </div>

                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;