export const personalInfo = {
  name: "Muhammad Faizan",
  title: "Web Developer | Python Developer | Software Engineer",
  roles: [
    "Full-Stack Web Developer",
    "Python & Machine Learning Engineer",
    "University CS Lecturer",
    "React & Node.js Developer",
    "RESTful API & Database Specialist"
  ],
  bio: "Computer Science Graduate (CGPA 3.88/4.00) with expertise in full-stack development, front-end (React.js, HTML5/CSS3, Bootstrap), back-end (Node.js, Express.js, Python), PostgreSQL, MongoDB, and RESTful API integration. University Lecturer & Instructor passionate about Artificial Intelligence, Image Processing, and Cloud Services.",
  location: "Karachi, Sindh, Pakistan",
  email: "muhammadfaizan2509@gmail.com",
  phone: "+92 318-3831931",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  cgpa: "3.88 / 4.00",
  profileImage: "/assets/profile.jpeg",
  resumePdf: "/assets/Muhammad_Faizan_Resume.pdf"
};

export const stats = [
  { label: "CGPA / 4.00", value: 3.88, decimals: 2 },
  { label: "Major Projects", value: 7, plus: true },
  { label: "Industry Roles", value: 4 },
  { label: "Code Quality", value: 100, suffix: "%" }
];

export const experience = [
  {
    id: 1,
    role: "Lecturer in Computer Science",
    company: "Shah Abdul Latif University, Ghotki Campus",
    location: "Ghotki, Pakistan",
    period: "January 2026 – Present",
    status: "Current Role",
    badgeType: "primary",
    subjects: "Object-Oriented Programming (OOP), Artificial Intelligence (AI), Network Security",
    responsibilities: [
      "Deliver lectures and tutorials on core topics including OOP, AI, and Network Security, focusing on theoretical concepts and practical applications.",
      "Design and develop course materials, lab tutorials, assignments, and semester examinations.",
      "Guide students in hands-on lab sessions, fostering practical learning in AI models and security systems."
    ],
    tech: ["OOP", "Artificial Intelligence", "Network Security", "Python 3", "Lab Mentorship"]
  },
  {
    id: 2,
    role: "Course Instructor",
    company: "NEVTTC / NAVTTC",
    location: "Pakistan",
    period: "February 2026 – Present",
    status: "Active Instructor",
    badgeType: "success",
    responsibilities: [
      "Taught HTML, CSS, JavaScript, and Bootstrap to adult learners with an emphasis on building responsive, mobile-first web applications.",
      "Led students through a final capstone project: a fully functional multi-page website resulting in a portfolio-ready deliverable for each graduate."
    ],
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap 5", "Responsive Design"]
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "Orthoplex Solutions",
    location: "Remote",
    period: "January 2026 – March 2026",
    status: "Remote Experience",
    badgeType: "secondary",
    responsibilities: [
      "Developed and maintained server-side logic for web applications using Python, Node.js, and RESTful APIs.",
      "Integrated and optimized relational (PostgreSQL) and NoSQL (MongoDB) databases for high-performance query execution.",
      "Collaborated with front-end engineers to implement responsive features and system enhancements.",
      "Conducted troubleshooting, debugging, and performance tuning to ensure 99.9% application uptime."
    ],
    tech: ["Python", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    id: 4,
    role: "Python Programming Intern",
    company: "Code Alpha",
    location: "Remote",
    period: "June 2025 – July 2025",
    status: "Remote Internship",
    badgeType: "info",
    responsibilities: [
      "Completed an intensive internship focused on Python programming, data handling, and automation.",
      "Worked on real-world modules involving file automation, data processing, and introductory Machine Learning models.",
      "Utilized Git version control and collaborative software development practices."
    ],
    tech: ["Python 3", "Automation", "Machine Learning", "Git / GitHub"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science (BS CS)",
    institution: "Shah Abdul Latif University, Khairpur",
    period: "2022 – 2025",
    score: "CGPA: 3.88 / 4.00",
    isHonors: true,
    description: "Graduated with highest academic distinction. Comprehensive coursework covering Software Engineering, Data Structures & Algorithms, Artificial Intelligence, Database Systems, and Network Security."
  },
  {
    id: 2,
    degree: "Diploma in Information Technology (DIT)",
    institution: "Trade Testing Board Sindh",
    period: "2021 – 2022",
    score: "Percentage: 79.2%",
    isHonors: false,
    description: "Specialized diploma focusing on IT infrastructure, web application fundamentals, database administration, and hardware troubleshooting."
  },
  {
    id: 3,
    degree: "Intermediate in Pre-Medical",
    institution: "IBA Community College Ghotki",
    period: "Completed in 2021",
    score: "Pre-Medical Stream",
    isHonors: false,
    description: "Developed strong analytical problem-solving skills, scientific discipline, physics, chemistry, and mathematics."
  }
];

export const projects = [
  {
    id: "al-jannat",
    title: "Al Jannat Educational Foundation Website",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    image: "/assets/al_jannat_project.jpg",
    summary: "Full-stack responsive educational web portal built with React, Node.js, Express, and SQL database for student records and secure donor submissions.",
    description: "Architected a responsive educational web application for Al Jannat Educational Foundation. Features modern React components, secure backend form handling, donor donation workflows, and relational SQL database integration.",
    highlights: [
      "Built reactive user components using React.js and modular CSS/Bootstrap.",
      "Designed RESTful Node.js & Express API endpoints for secure form submission and record fetching.",
      "Integrated SQL relational database for student enrollment records and course data persistence.",
      "Optimized page load speed and mobile responsiveness across desktop and handheld viewports."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Bootstrap", "SQL", "REST API"]
  },
  {
    id: "ai-assistant",
    title: "AI Virtual Assistant",
    category: "ai",
    categoryLabel: "AI & Voice NLP",
    image: "/assets/ai_assistant_project.jpg",
    summary: "Voice-controlled intelligent assistant built using Python, Natural Language Processing (NLP), and Neural Networks for smart device automation.",
    description: "Developed an intelligent voice assistant capable of parsing user speech, understanding intent through Natural Language Processing, and automating desktop tasks or IoT hardware functions.",
    highlights: [
      "Integrated voice recognition and text-to-speech audio processing pipelines in Python.",
      "Trained intent recognition neural network models using Natural Language Processing.",
      "Automated desktop applications, file operations, and web search requests.",
      "Implemented keyword detection and fallback query execution."
    ],
    tech: ["Python 3", "NLP", "Neural Networks", "Speech Recognition", "Automation"]
  },
  {
    id: "fruit-disease",
    title: "Fruit Disease Detection System",
    category: "ai",
    categoryLabel: "ML & Vision",
    image: "/assets/fruit_disease_project.jpg",
    summary: "Diagnostic tool utilizing Machine Learning algorithms and Image Processing techniques to identify fruit diseases from uploaded images.",
    description: "Created an automated agricultural diagnostic tool leveraging computer vision and machine learning models to detect leaf and fruit infections from photographs, offering treatment recommendations.",
    highlights: [
      "Image preprocessing, color space transformation, and noise reduction using OpenCV.",
      "Machine Learning classification models trained on agricultural image datasets.",
      "Visual diagnostic report UI providing infection confidence scores.",
      "Optimized computer vision inference pipeline."
    ],
    tech: ["Python", "Machine Learning", "Image Processing", "OpenCV", "Scikit-Learn"]
  },
  {
    id: "smart-home",
    title: "Smart Home Appliance System (Arduino)",
    category: "iot",
    categoryLabel: "Arduino IoT",
    image: "/assets/smart_home_project.jpg",
    summary: "Arduino-based home automation platform enabling wireless Bluetooth control of electrical appliances via a custom mobile app.",
    description: "Designed and built an IoT home automation system utilizing Arduino microcontrollers, Bluetooth communications, and multi-channel relays for remote control of AC/DC appliances.",
    highlights: [
      "Wireless Bluetooth HC-05 communication protocol for low-latency smartphone control.",
      "Relay switching circuit design for high-voltage household appliance isolation.",
      "Custom PCB layout schematic created for modular hardware deployment.",
      "Custom Android mobile app interface."
    ],
    tech: ["Arduino UNO", "C++", "Bluetooth HC-05", "Relay Modules", "Android App", "PCB Layout"]
  },
  {
    id: "cms",
    title: "Campus Management System (CMS)",
    category: "fullstack",
    categoryLabel: "CRUD Web App",
    image: "/assets/cms_project.jpg",
    summary: "CRUD web application designed to manage student profiles, course catalogs, instructor assignments, and attendance with role authorization.",
    description: "Full-stack web application designed for campus administration. Features multi-role access control (Admin, Instructor, Student), attendance logging, and course catalogs.",
    highlights: [
      "Multi-role authorization system enforcing role-based permissions.",
      "MySQL database schema design for student profiles, course catalogs, and enrollment records.",
      "Full CRUD administrative management workflows for campus operations.",
      "Responsive layout using Bootstrap 5 and JavaScript."
    ],
    tech: ["PHP / Node.js", "MySQL", "JavaScript", "Bootstrap 5", "Sessions"]
  },
  {
    id: "ai-security",
    title: "AI & Network Security Lab Suite",
    category: "ai",
    categoryLabel: "AI & Security",
    image: "/assets/ai_security_project.jpg",
    summary: "Educational demonstration algorithms covering intrusion detection, socket programming, neural classifiers, and Object-Oriented design.",
    description: "A collection of custom Python scripts created for university lectures to demonstrate network threat modeling, packet inspection, and basic AI classifiers.",
    highlights: [
      "Python socket programming and packet analysis for security demonstrations.",
      "Neural network classifiers for identifying anomalous network traffic.",
      "OOP software design patterns built for clean academic instruction."
    ],
    tech: ["Python 3", "Scikit-Learn", "Socket API", "Network Security", "OOP"]
  }
];

export const skills = [
  {
    category: "Languages & Frameworks",
    icon: "code",
    items: [
      { name: "React.js", level: 90 },
      { name: "Node.js & Express.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "Python 3", level: 92 },
      { name: "HTML5 & CSS3 / Bootstrap", level: 95 }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "database",
    items: [
      { name: "PostgreSQL & MySQL", level: 90 },
      { name: "MongoDB (NoSQL)", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "RESTful API Integration", level: 94 }
    ]
  },
  {
    category: "AI, ML & Hardware",
    icon: "brain",
    items: [
      { name: "Machine Learning & Neural Networks", level: 86 },
      { name: "Image Processing & OpenCV", level: 84 },
      { name: "Arduino Hardware & IoT", level: 85 },
      { name: "Git, VS Code & Tools", level: 92 }
    ]
  },
  {
    category: "Web CMS & Soft Skills",
    icon: "wrench",
    items: [
      { name: "WordPress & CMS", level: 88 },
      { name: "Technical Communication", level: 95 },
      { name: "University Teaching & Public Speaking", level: 95 },
      { name: "Agile Teamwork & Code Reviews", level: 90 }
    ]
  }
];
