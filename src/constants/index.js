import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With hands-on experience in front-end technologies like React.js and TailwindCSS, as well as back-end technologies like Node.js, MongoDB, and PostgreSQL, I strive to deliver innovative solutions that drive user engagement and business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With a strong foundation in Computer Science and expertise in technologies like React.js, Node.js, MongoDB, and PostgreSQL, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies and contributing to impactful projects.`;

export const EXPERIENCES = [
  {
    year:  "June 2024 - Aug 2024",
    role: "Full Stack Developer",
    company: "JPR Technosoft, Ghaziabad, Uttar Pradesh",
    description: `Developed and deployed full-stack projects using modern technologies, ensuring efficient frontend, backend, and database management. Collaborated with a team to design scalable solutions, reducing application downtime by 30%.`,
    technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    year: "Feb 2024",
    role: "Hackathon Participant",
    company: "IITM Janakpuri, New Delhi",
    description: `Designed innovative AI-powered solutions for real-world challenges during a competitive hackathon. Leveraged AI and cutting-edge technology to create impactful projects, demonstrating creativity, teamwork, and technical expertise.`,
    technologies: ["AI", "JavaScript", "Python"],
  },

];

export const PROJECTS = [
  {
    title: "FlicksFeed - Advanced Live Streaming Platform",
    image: project1,
    description:
      "An advanced live streaming platform featuring a multi-level comment system, real-time streaming with WebSocket-based live chat, and optimized search functionality using debounce techniques.",
    technologies: ["React.js", "Node.js", "WebSocket", "MongoDB"],
  },
  {
    title: "CraveWave - Real-Time Food Ordering Application",
    image: project2,
    description:
      "A real-time food ordering app with features like menu updates, order tracking, shimmering effects for seamless loading, and state management using Redux",
    technologies: ["React.js", "Node.js", "Redux", "MongoDB"],
  },
  {
    title: "BingBot GPT - Multi-Language Live Streaming Platform",
    image: project3,
    description:
      
"A live streaming platform with multi-language support, secure user authentication, and personalized movie recommendations using OpenAI's GPT model.",
    technologies: ["React.js", "Node.js", "OpenAI GPT", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information, designed with React.js and styled using TailwindCSS.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Ghaziabad, Uttar Pradesh, 201015 ",
  phoneNo: "+91 9170404725 ",
  email: "uaman9616@gmail.com",
};
