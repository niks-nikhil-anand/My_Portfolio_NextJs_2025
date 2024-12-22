import clsx from "clsx";

const TestimonialItem = ({ item, containerClassName }) => {
  return (
    <div
      className={clsx(
        "relative px-14 pb-14 pt-11 shadow-lg rounded-lg transition-transform hover:scale-105 max-md:px-4 max-md:pt-8",
        containerClassName
      )}
    >
      <div className="mb-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <h4 className="body-2 mb-2 text-p1 font-bold">{item.title}</h4>
      <p className="small-compact uppercase text-s3 mb-4">{item.subtitle}</p>
      <p className="text-p4 mb-6">{item.description}</p>

      <div className="flex flex-wrap gap-4 mb-6">
        {item.techUsed?.map((tech, index) => (
          <span
            key={index}
            className="px-5  py-1 text-sm bg-s2 text-white rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center">
        
        <div>
          <h4 className="body-2 mb-0.5 text-p1 font-bold">{item.title}</h4>
          <p className="small-compact uppercase text-s3">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
