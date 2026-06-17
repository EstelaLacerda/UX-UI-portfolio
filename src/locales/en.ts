import type { Project } from '../types/project';

export const en = {
  header: {
    home: "01//home",
    expertise: "02//expertise",
    work: "03//my work",
    experience: "04//professional experience",
    subtitle: "Data · Development",
    featuredIn: "As featured in",
    github: "Github",
    downloadResume: "Download\nmy resume",
    linkedin: "Linkedin",
    email: "E-mail",
    contactMe: "Contact me"
  },
  expertise: {
    title: "Expertise",
    card1: {
      title: "Data Analysis",
      subtitle: "Colab · Jupyter · Pandas · Scikit-learn",
      desc: "Experience with data analysis and processing using Google Colab and Jupyter Notebook. Proficiency in libraries such as Pandas, NumPy, and Matplotlib for data exploration, as well as Scikit-learn and TensorFlow for creating and training Machine Learning models."
    },
    card2: {
      title: "Development",
      subtitle: "Python · React · TypeScript",
      desc: "Application development focusing on Python for automation and back-end, and React with TypeScript for building modern and responsive interfaces. Experience in projects that efficiently integrate front-end and data logic."
    },
    card3: {
      title: "Leadership & Team",
      subtitle: "Organization · Communication · Management",
      desc: "Ability to organize teams, distribute tasks clearly, and maintain alignment among group members. Communicative and collaborative profile, with practical experience in tutoring and academic projects requiring coordination and collective delivery."
    }
  },
  experience: {
    title: "Professional\nExperience",
    jobs: [
      {
        year: "2024",
        company: "NExT · CESAR School",
        role: "Preparatory Training Tutor",
        description: "Assisted in the Preparatory Training module, supporting students in the learning process and development of technical and behavioral skills in the NExT program at CESAR School."
      },
      {
        year: "2025",
        company: "Olinda Health Department",
        role: "Data Intern",
        description: "Worked in data analysis and processing, contributing to the organization, automation, and modernization of information processes at the Olinda Health Department."
      },
      {
        year: "2025",
        company: "EMPREL",
        role: "IT Intern",
        description: "Development and technical support at the Recife Municipal Informatics Company (EMPREL), focusing on technological solutions for public management."
      }
    ]
  },
  work: {
    title: "My work",
    desc: "Here you will find a selection of projects I've developed throughout my career, from data dashboards and web platforms to Machine Learning solutions. Each project represents a real challenge, teamwork, and purpose. Explore, get to know the process, and see how I turn ideas into products."
  },
  modal: {
    backToWork: "Back to Work",
    clientBrand: "Client Brand",
    myRole: "My Role",
    duration: "Duration",
    enterpriseClient: "Enterprise / Client",
    viewGithub: "View on GitHub",
    projectProcess: "Project Process",
    toolsUsed: "Tools Used",
    languagesTech: "Languages / Technologies",
    highlights: "Project Highlights",
    devopsFlow: "DevOps Architecture — Branch Flow",
    localSetup: "How to Run Locally",
    backBtn: "← Back"
  },
  projects: [
    {
      title: "Cattuccino Dashboard",
      category: "Data Dashboard",
      clientBrand: "Cattuccino",
      enterprise: "CESAR School",
      tags: ["Web", "Dashboard", "Data Analytics"],
      duration: "1 semester",
      myRole: "Acted as Data Analytics. I was responsible for gathering, analyzing, and structuring financial and digital marketing performance data, ensuring managers had access to relevant metrics for decision-making.",
      process: "The project is a dashboard platform developed for the Cattuccino startup. The objective was to provide managers and business analysts with crucial information about sales performance and social media engagement, using a stack based on React, Node.js, and Python.",
      tools: ["Python", "MySQL", "Docker", "Figma", "Notion"],
      languages: ["React", "Node.js", "Python", "Flask"],
      githubUrl: "https://github.com/MatheusGom/Cattuccino_P5",
      screenshotCount: 5,
      coverImage: "/catuccino/catuccino1.jpeg",
      images: Array.from({ length: 6 }, (_, i) => `/catuccino/catuccino${i + 1}.jpeg`),
    },
    {
      title: "Hunt-hub",
      category: "Web Platform",
      clientBrand: "Hunt-hub",
      enterprise: "CESAR School",
      tags: ["Web", "Fullstack", "Marketplace"],
      duration: "1 semester",
      myRole: "Acted as a Fullstack developer, working end-to-end on the application. On the backend, I built services and business rules using Java and Spring Boot. On the frontend, I developed interfaces and integration using Next.js.",
      process: "Hunt-hub is a platform focused on connecting 'hunters' (professionals) to Product Owners (POs) looking for talent to perform specific tasks. The application features a payment system, level and trophy gamification, and a robust architecture based on Observer and Builder patterns.",
      tools: ["Docker", "PostgreSQL", "Figma", "Notion"],
      languages: ["Java", "Spring Boot", "Next.js", "TypeScript"],
      githubUrl: "https://github.com/CarlosAugustoP/hunt-hub",
      screenshotCount: 6,
      coverImage: "/HuntHub/HuntHub1.png",
      images: Array.from({ length: 6 }, (_, i) => `/HuntHub/HuntHub${i + 1}.png`),
    },
    {
      title: "EndoAI",
      category: "Machine Learning / Health",
      clientBrand: "EndoAI",
      enterprise: "CESAR School",
      tags: ["Web", "AI", "Health"],
      duration: "1 semester",
      myRole: "Worked on the development team, collaborating on building the interface and integrating the Machine Learning model, focusing on delivering an experience that assists in diabetes prevention.",
      process: "EndoAI is an application aimed at diabetes prevention through a machine learning model. The system's objective is to analyze user data and encourage them to seek diagnosis from a health professional. The solution integrates a KNN model via Flask on the back-end and a React interface on the front-end.",
      tools: ["Scikit-Learn", "Figma", "Notion"],
      languages: ["Python", "Flask", "React", "Node.js"],
      githubUrl: "https://github.com/paulo-campos-57/EndoAI",
      screenshotCount: 4,
      coverImage: "/Endoai/Endoai1.jpeg",
      images: Array.from({ length: 6 }, (_, i) => `/Endoai/Endoai${i + 1}.jpeg`),
    },
    {
      title: "IsCool GPT",
      category: "Cloud Native AI Tutor",
      clientBrand: "IsCool GPT",
      enterprise: "CESAR School",
      tags: ["Web", "AI", "Cloud", "DevOps"],
      duration: "1 semester",
      myRole: "Developed the application end-to-end as the Final Project for the Cloud Computing subject. I was responsible for the Cloud-Native architecture, API implementation with Flask, Prompt Engineering for the professor persona, and the entire CI/CD pipeline with GitHub Actions and deployment on Render.",
      process: "IsCoolGPT is a RESTful API that uses Artificial Intelligence to act as a virtual university assistant. Unlike a common chat, the system applies advanced Prompt Engineering on the backend to assume the 'persona' of a Senior Professor, returning structured answers with simple definitions, real-world analogies, practical cloud examples, business use cases, and technical differentiators.",
      tools: ["Docker", "Docker Compose", "GitHub Actions", "Render", "Google Gemini API", "Gunicorn", "Pytest", "Flake8"],
      languages: ["Python", "Flask"],
      githubUrl: "https://github.com/EstelaLacerda/IsCoolGPT---Cloud-Project",
      screenshotCount: 3,
      coverImage: "/Iscool/Iscool1.png",
      images: Array.from({ length: 6 }, (_, i) => `/Iscool/Iscool${i + 1}.png`),
      highlights: [
        {
          title: "Cloud-Native Architecture",
          description: "Fully containerized application using Docker, ensuring portability between development and production environments.",
        },
        {
          title: "LLM Agnostic",
          description: "Decoupled architecture in the services module, allowing easy switching between AI models (currently using Google Gemini).",
        },
        {
          title: "DevOps Culture",
          description: "Robust CI/CD pipeline with automated testing, style verification (linting), and automatic code promotion between environments.",
        },
        {
          title: "High Availability",
          description: "Deployment using Zero Downtime strategy on Render (PaaS), ensuring the service never goes down during updates.",
        },
      ],
      devopsFlow: [
        {
          branch: "development",
          label: "1. Development",
          purpose: "Active development environment.",
          details: [
            "With each push, the pipeline.yml is triggered automatically.",
            "Executes unit tests (pytest) and linter (flake8).",
            "Docker build only occurs if all tests pass.",
          ],
        },
        {
          branch: "staging",
          label: "2. Staging",
          purpose: "Pre-production environment (Gatekeeper).",
          details: [
            "Receives Pull Requests from the development branch.",
            "If tests pass, the deploy.yml pipeline deploys to the Staging URL on Render.",
            "If the Staging deployment is successful, the system automatically opens and merges a PR to main, without human intervention.",
          ],
        },
        {
          branch: "main",
          label: "3. Main / Production",
          purpose: "Production Environment (Live).",
          details: [
            "Only receives validated code coming from staging.",
            "Hotfix Strategy: if a commit is made directly to main, the pipeline skips Staging and performs an immediate deployment to Production.",
          ],
        },
      ],
      localSetup: [
        "Clone the repository: git clone https://github.com/EstelaLacerda/IsCoolGPT---Cloud-Project.git",
        "Create a .env file in the root with your key: GOOGLE_API_KEY=\"Your_Key_Here\"",
        "Run with Docker (recommended): docker-compose up --build",
        "The server will start at http://localhost:5000",
      ],
    },
    {
      title: "Upcycle-Crew",
      category: "Computer Vision · Hackathon",
      clientBrand: "Upcycle-Crew",
      enterprise: "Hackathon BB — Rec'n Play 2024",
      tags: ["Web", "AI", "Sustainability"],
      duration: "Hackathon (Rec'n Play 2024)",
      myRole: "Acted as a Fullstack developer, contributing to both the backend with Python/Django and frontend with React. I participated in integrating the Google Vision API for waste analysis and the email notification flow via SMTP.",
      process: "Upcycle-Crew is an MVP of an electronic waste disposal totem. The application uses computer vision (Google Vision API) to analyze the item presented by the user. If it is valid electronic waste, the bin opens, and the user receives a thank you email. Otherwise, the door remains closed, and the system informs the user that the item is not accepted.",
      tools: ["Google Vision API", "SMTP / Django Email", "Django", "Notion"],
      languages: ["Python", "React", "JavaScript"],
      githubUrl: "https://github.com/paulo-campos-57/Upcycle-Crew",
      screenshotCount: 3,
      coverImage: "/UpcicleCrew/UpcicleCrew1.png",
      images: Array.from({ length: 6 }, (_, i) => `/UpcicleCrew/UpcicleCrew${i + 1}.png`),
      highlights: [
        {
          title: "Computer Vision",
          description: "Integration with the Google Vision API for real-time automatic classification of the presented waste.",
        },
        {
          title: "Smart Response",
          description: "If the item is valid electronic waste, the bin opens. Otherwise, the system locks the door and guides the user.",
        },
        {
          title: "Email Notification",
          description: "After a successful disposal, the system automatically sends a thank you email to the user via SMTP.",
        },
        {
          title: "Fullstack MVP",
          description: "Python/Django backend with React frontend, developed during a hackathon focusing on functionality and delivery.",
        },
      ],
      localSetup: [
        "Clone the repository: git clone https://github.com/paulo-campos-57/Upcycle-Crew.git",
        "Navigate to the upcycleproject directory (where manage.py is)",
        "Install dependencies: pip install -r requirements.txt",
        "Create a .env file with your Google Vision API key, SMTP credentials, and email user",
        "Run: python manage.py makemigrations && python manage.py migrate && python manage.py runserver",
        "In another terminal, navigate to upcyclefront and run: npm install && npm start",
        "The frontend will be available at http://localhost:3000",
      ],
    },
    {
      title: "Graphs Project",
      category: "Graph Theory · Web",
      clientBrand: "GraphProject",
      enterprise: "CESAR School — 5th Semester",
      tags: ["Web", "Algorithms", "React"],
      duration: "1 semester",
      myRole: "Acted as a frontend developer and implemented graph algorithms. I was responsible for building features like Eulerian graph verification, calculating the shortest path between vertices, and visualizing the adjacency matrix and list.",
      process: "The Graphs Project is a website developed in React for building and visualizing graphs, created for the Graph Theory course. The application allows users to insert directed, undirected, weighted, and unweighted graphs, as well as import graphs via CSV files. The system offers complete visual and algorithmic analysis of the graph structure.",
      tools: ["React", "Notion"],
      languages: ["React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/EstelaLacerda/GraphProject",
      screenshotCount: 3,
      coverImage: "/Graph/Graph1.png",
      images: Array.from({ length: 6 }, (_, i) => `/Graph/Graph${i + 1}.png`),
      highlights: [
        {
          title: "Graph Types",
          description: "Support for directed, undirected, weighted, and unweighted graphs, plus CSV file import.",
        },
        {
          title: "Structural Visualization",
          description: "Display of graph order and size, vertex degree, adjacency matrix, and adjacency list.",
        },
        {
          title: "Algorithmic Analysis",
          description: "Vertex adjacency verification, Eulerian graph detection, and shortest path calculation between two vertices.",
        },
        {
          title: "Interactive Interface",
          description: "Visual graph building directly in the browser, with real-time updates as the user inputs data.",
        },
      ],
      localSetup: [
        "Clone the repository: git clone https://github.com/EstelaLacerda/GraphProject.git",
        "Navigate to the GraphProject/graph-project folder",
        "Install dependencies: npm install",
        "Start the project: npm start",
        "Access in the browser: http://localhost:3000",
      ],
    },
  ] as Project[]
};
