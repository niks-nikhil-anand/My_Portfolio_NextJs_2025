import {
  FaWordpressSimple,
  FaShoppingCart,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBrain,
} from "react-icons/fa";
import { FaApple, FaAndroid, FaWindows, FaGlobe, FaReact, FaFigma, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";


export const features = [
  {
    id: "0",
    icon: "/images/feature-1.png",
    caption: "Scalable & Modern",
    title: "Built to Grow with You",
    text: "Leverage the latest technologies to build scalable, future-proof solutions that adapt to your growing needs and deliver exceptional performance.",
    button: {
      icon: "/images/magictouch.svg",
      title: "See My Work",
    },
  },
  {
    id: "1",
    icon: "/images/feature-2.png",
    caption: "Reliable & Secure",
    title: "Your Vision, My Priority",
    text: "Leveraging cutting-edge technologies, I create secure, scalable, and reliable websites tailored to your unique requirements. Your dreams are safe and achievable in my hands.",
    button: {
      icon: "/images/docs.svg",
      title: "Let’s Collaborate",
    },
  },
];

export const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "Custom Websites Designed for You",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Seamless Collaboration on Projects",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "Fast and Reliable Hosting Solutions",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "Dedicated Support, Anytime You Need",
  },
];

export const faq = [
  {
    id: "0",
    question: "How easy is it to setup Xora?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "1",
    question: "Can I integrate Xora with other platforms?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "2",
    question: "How often do you add new content?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "3",
    question: "What your refund policy?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "4",
    question: "Do you have corporate plans?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "5",
    question: "What happens when I’m out of storage?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "6",
    question: "Can I upgrade my plan?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "7",
    question: "How do I invite my team?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "8",
    question: "Do you offer training for individuals and teams?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "9",
    question: "I’m locked out of my account what do I do?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
];

export const plans = [
  {
    id: "0",
    title: "Starter",
    priceMonthly: 49,
    priceYearly: 39,
    caption: "Perfect for individuals",
    features: [
      "1 custom landing page",
      "Responsive design",
      "Basic SEO setup",
      "Free hosting",
      "Email integration",
      "1 month free support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Professional",
    priceMonthly: 149,
    priceYearly: 129,
    caption: "Ideal for small businesses",
    features: [
      "Up to 5 web pages",
      "Responsive design",
      "Advanced SEO setup",
      "E-commerce integration",
      "Payment gateway integration",
      "1 million free traffic hosting",
      "Email integration",
      "WhatsApp and SMS integration",
      "3 months free support",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Premium",
    priceMonthly: 299,
    priceYearly: 249,
    caption: "Best for growing businesses",
    features: [
      "Unlimited web pages",
      "Advanced SEO & analytics",
      "E-commerce & payment gateway",
      "Real-time collaboration",
      "1 million free traffic hosting",
      "Email integration",
      "WhatsApp and SMS integration",
      "Custom integrations (e.g., CRM, ERP)",
      "6 months free support",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];

export const projects = [
  {
    id: "0",
    title: "Cleanveda eCommerce Platform + Admin Panel",
    subtitle:
      "A scalable and modern eCommerce platform with an admin panel for product and order management.",
    description:
      "Built a comprehensive eCommerce platform with an intuitive admin panel, enabling seamless product management, secure payment integration, and an engaging user interface. Tailored for businesses looking for scalable and responsive web solutions.",
    author: "Nikhil - Full-Stack Developer",
    image: "/images/projects/cleanveda.png",
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    github: "https://github.com/nikhil-projects/cleanveda-ecommerce",
    live: "https://cleanveda.com",
  },
  
  {
    id: "1",
    title: "BringSmile Foundation - Donation Website",
    subtitle:
      "A secure and user-friendly donation platform to support social campaigns and fundraising efforts.",
    description:
      "Developed a donation platform facilitating secure transactions, real-time updates on campaigns, and an admin dashboard for efficient campaign management. Focused on delivering a seamless experience for donors and administrators.",
    author: "Nikhil - Full-Stack Developer",
    image: "/images/projects/donation.png",
    techUsed: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "React",
      "Framer Motion",
      "Razorpay",
    ],
    github: "https://github.com/nikhil-projects/bring-smile-donation",
  },
  {
    id: "2",
    title: "Legal & Financial Services Platform + Multi Agent Admin Dashboard",
    subtitle:
      "A comprehensive platform offering legal and financial services with dynamic form handling, admin control, and secure user experience.",
    description:
      "Built a full-featured legal and financial services web app enabling users to access various services such as company registration, legal filings, and tax consultancy. Integrated with a powerful admin dashboard for service management, form data handling, and user analytics. Ensured scalability and responsiveness across devices.",
    author: "Nikhil - Full-Stack Developer",
    image: "/images/projects/legal257.png", 
    techUsed: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "React",
      "Framer Motion",
      "AWS S3",
    ],
    github: "https://github.com/niks-nikhil-anand/finance_web_app",
    live: "https://www.legal257.in/",
  },  
  {
    id: "3",
    title: "Flying Alpha - RealEstate Booking Platform + Super Admin Panel",
    subtitle:
      "An EdTech learning platform supporting video courses, analytics, and admin-level control for institutions.",
    description:
      "Developed an EdTech platform for Flying Alpha with a robust super admin panel. Enabled course management, user analytics, and smooth learning experience for students. Ensured scalability, security, and a rich user interface.",
    author: "Nikhil - Full-Stack Developer",
    image: "/images/projects/flyingAlpha.png",
    techUsed: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "React",
      "Redux",
      "AWS S3",
    ],
    github: "https://github.com/nikhil-projects/flying-alpha-edtech",
    live: "https://flyingalpha.com",
  },
];

export const logos = [
  {
    id: "0",
    title: "Next.js",
    url: "/images/logos/afterpay.svg",
    width: 156,
    height: 48,
  },
  {
    id: "1",
    title: "React.js",
    url: "/images/logos/amplitude.svg",
    width: 194,
    height: 48,
  },
  {
    id: "2",
    title: "Javascript",
    url: "/images/logos/sonos.svg",
    width: 115,
    height: 48,
  },
  {
    id: "3",
    title: "MongoDB",
    url: "/images/logos/maze.svg",
    width: 142,
    height: 48,
  },
  {
    id: "4",
    title: "Pos",
    url: "/images/logos/drips.svg",
    width: 77,
    height: 48,
  },
];








export const links = [
  {
    id: "4",
    title: "Next.js",
    icon: <SiNextdotjs size={40} />,
    url: "#",
  },
  {
    id: "5",
    title: "React.js",
    icon: <FaReact size={40} />,
    url: "#",
  },
  {
    id: "6",
    title: "MongoDB",
    icon: <SiMongodb size={40} />,
    url: "#",
  },
  {
    id: "7",
    title: "PostgreSQL",
    icon: <SiPostgresql size={40} />,
    url: "#",
  },
  {
    id: "8",
    title: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
    url: "#",
  },
  {
    id: "9",
    title: "Figma",
    icon: <FaFigma size={40} />,
    url: "#",
  },
  {
    id: "10",
    title: "JavaScript",
    icon: <FaJsSquare size={40} />,
    url: "#",
  },
  {
    id: "11",
    title: "TypeScript",
    icon: <SiTypescript size={40} />,
    url: "#",
  },
];


export const socials = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Backend & DevOps",
    items: [
      "Node.js",
      "Express.js",
      "Docker",
      "AWS (S3, ECR, ECS)",
      "JWT",
      "REST APIs",
    ],
  },
  {
    category: "Databases & ORM",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Postman", "Shadcn", "VS Code"],
  },
];

export const projectsData = [
  {
    id: 1,
    name: "Vercel Clone",
    description:
      "Built a Vercel-like deployment platform with GitHub integration, Docker-based builds, and static hosting via AWS S3. Used AWS ECS/ECR to run isolated containerized builds and serve outputs through a secure reverse proxy setup.",
    githubLink: "https://github.com/niks-nikhil-anand/vercel-clone",
    techStack: [
      "Node.js",
      "Express.js",
      "Docker",
      "AWS ECS",
      "AWS S3",
      "AWS ECR",
    ],
  },
  {
    id: 2,
    name: "LiveDocs | Real-Time Collaboration Tool",
    description:
      "Developed a scalable, real-time collaborative document editor using Next.js and Liveblocks, supporting simultaneous editing, live commenting, and real-time reactions for seamless teamwork.",
    githubLink: "https://github.com/niks-nikhil-anand/LiveDocs",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Liveblocks"],
  },
];

export const freelanceProjectsData = [
  {
    id: 1,
    name: "Cleanveda | E-commerce Website with Admin Panel",
    description:
      "Developed a complete e-commerce platform using Next.js and MongoDB with features like cookie-based authentication, dynamic cart system, category-wise product filtering, a custom CMS for content management, and secure payments integrated with Razorpay.",
    githubLink: "https://github.com/niks-nikhil-anand/Ecommerce_blushbelle",
    liveLink: "https://www.cleanveda.com/",
    techStack: ["React", "Next.js", "Shadcn", "Tailwind CSS", "MongoDB"],
  },
  {
    id: 2,
    name: "FlyingAlpha | Hotel Booking Platform",
    description:
      "Built a full-stack hotel booking system using Next.js and MongoDB featuring JWT authentication, dynamic booking and user management, a detailed admin dashboard (earnings, statistics), secure payment integration with Razorpay, and email notifications using Resend API.",
    githubLink: "https://github.com/flyingalphahotel-2025/FlyingAlpha_hotel",
    liveLink: "https://www.flyingalpha.in/",
    techStack: ["Next.js", "MongoDB", "Shadcn", "Tailwind CSS"],
  },
];

export const JourneyData = [
  {
    year: "2019 (Pre-Lockdown)",
    title: "First Website & Freelance Start",
    description:
      "Built my first WordPress website using a refurbished laptop, driven by the goal of earning independently. This marked my first step into the world of tech and freelancing.",
    icon: <FaWordpressSimple />,
  },
  {
    year: "2021",
    title: "Selling Websites via CodeCanyon",
    description:
      "Started selling ready-made e-commerce and business websites sourced from CodeCanyon to local clients, learning customer handling, project delivery, and basic web customization.",
    icon: <FaShoppingCart />,
  },
  {
    year: "2022 - 2023",
    title: "Transition into Coding & Development",
    description:
      "Moved beyond templates — began learning core web technologies starting from JavaScript. Built small projects to deeply understand how websites work from scratch.",
    icon: <FaCode />,
  },
  {
    year: "2024",
    title: "Freelance Projects & Real-World Experience",
    description:
      "Completed 4+ full-stack freelance projects, mastering frontend development with React, Next.js, Tailwind CSS, and Shadcn UI. Developed real-world production applications for clients.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2025 (Present)",
    title: "Exploring SaaS, AI, and Future Tech",
    description:
      "Currently excited about SaaS-based AI platforms. Actively learning about LLMs (Large Language Models), building scalable SaaS products, and exploring how AI can revolutionize web development.",
    icon: <FaBrain />,
  },
];
