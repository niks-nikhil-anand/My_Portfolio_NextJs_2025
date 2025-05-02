"use client";
import { links, logos } from "../../constants/index.jsx";
import { Marker } from "../Marker.jsx";

const Download = () => {
  return (
    <section>
      <div
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
            <h1 className="mb-6 text-3xl lg:text-6xl font-bold leading-tight text-p4">
              Full Stack Developer
            </h1>
              <p className="body-1 mb-10 max-w-screen-2xl">
                Skilled in delivering scalable web apps using React, Next.js,
                MongoDB, and PostgreSQL. Always exploring trending tech and UI
                design with Figma. Open to freelance, collaboration, or
                full-time roles.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <p className="text-gray-300 text-base mt-6 ">
                  Skilled in delivering scalable web apps using React, Next.js, MongoDB, and PostgreSQL. 
                </p>
                  <span className="download_preview-dot left-16 bg-p1/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Download;
