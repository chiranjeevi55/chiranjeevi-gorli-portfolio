export const projects = [
  {
    id: "ship-ai-boomi-to-mulesoft",
    title: "SHIP-AI – Boomi to MuleSoft Migration",
    org: "SageIT Inc",
    location: "Hyderabad, India",
    type: "Backend + AI",
    overview:
      "Automates migration from Boomi integration processes to MuleSoft projects by parsing and transforming Boomi components, generating equivalent MuleSoft XML code, and packaging deployable MuleSoft projects.",
    modulesWorkedOn: [
      "Database service development",
      "API design and implementation",
      "Data parsing and transformation",
      "AI-assisted code generation",
      "Project packaging and deployment optimization",
      "Data integrity assurance",
    ],
    techStack: [
      "Python (FastAPI, Flask)",
      "Java Spring Boot",
      "MySQL",
      "XML",
      "JSON",
      "YAML",
      "Azure",
      "Azure OpenAI API",
      "Docker",
    ],
    highlights: [
      "Improved migration speed (~35%) while maintaining data integrity (~99%).",
      "Implemented APIs for migration data parsing, transformation, and packaging.",
    ],
    links: { demo: "", code: "" },
  },

  {
    id: "ship-accelerator",
    title: "Ship Accelerator",
    org: "SageIT Inc",
    location: "Hyderabad, India",
    type: "Backend",
    overview:
      "Manages data migrations between integration tools by extracting data from the source system and migrating it to the target tool’s source code, ensuring accurate and efficient transitions.",
    modulesWorkedOn: [
      "Database schema design",
      "Core engine implementation",
      "File parsing and transformation",
      "Data migration optimization",
      "Data integrity assurance",
    ],
    techStack: [
      "Java Spring Boot",
      "MySQL",
      "XML",
      "XSD",
      "YAML",
      "JSON",
      "Azure",
      "Azure Container Apps",
    ],
    highlights: [
      "Built core engine to process multiple formats and folder structures reliably.",
    ],
    links: { demo: "", code: "" },
  },

  {
    id: "vms-cinebuddy",
    title: "VMS - Cinebuddy",
    org: "Tata Consultancy Services",
    location: "Hyderabad, India",
    type: "Full Stack",
    overview:
      "Vehicle management system with a React frontend, Spring Boot backend, and MySQL database. Handles drivers, managers, and accountants; tracks driver locations; calculates costs; and generates invoices.",
    modulesWorkedOn: [
      "Developed REST controllers",
      "Created custom JPA methods",
      "Developed complex searching algorithms",
      "Worked on security with tokens",
      "Integrated Google Maps Directions API and distance calculation",
      "Integrated SMS API for OTP verification",
    ],
    techStack: [
      "React.js",
      "Java Spring Boot",
      "MySQL",
      "Docker",
      "Azure",
      "Azure Container Apps",
      "Google Maps API",
      "2Factor SMS API",
    ],
    highlights: [
      "Built scalable REST APIs and optimized search logic for custom objects.",
      "Implemented maps + OTP integrations for real-world workflows.",
    ],
    links: { demo: "", code: "" },
  },

  {
    id: "ship-discovery",
    title: "SHIP-Discovery",
    org: "SageIT Inc",
    location: "Hyderabad, India",
    type: "Backend + Monitoring",
    overview:
      "Monitoring/support dashboard for an integration platform focused on analytics and real-time status of applications running across environments and machines.",
    modulesWorkedOn: [
      "Reading server directories",
      "Fetching required files",
      "Extracting data",
      "Integration with Azure Service Bus (ASB) for sending data to queues",
    ],
    techStack: ["Java", "Azure Service Bus (ASB)"],
    highlights: ["Enabled real-time status updates using ASB queues."],
    links: { demo: "", code: "" },
  },

  {
    id: "ship-ai-training-data",
    title: "SHIP-AI (Training Data Creation)",
    org: "SageIT Inc",
    location: "Hyderabad, India",
    type: "AI Enablement",
    overview:
      "Created training datasets to improve an AI model designed to transform XML files for integration migration workflows.",
    modulesWorkedOn: ["Created training data files"],
    techStack: ["XML"],
    highlights: ["Created 1500+ training data files to enhance model capability."],
    links: { demo: "", code: "" },
  },

  {
    id: "learngentx-ai",
    title: "LearngentX AI",
    org: "Personal/Client Project",
    location: "Hyderabad, India",
    type: "Backend + AI",
    overview:
      "AI interview platform that dynamically generates interview questions based on resume + job description + previous answers, and produces final scoring and interview results using complete interview context.",
    modulesWorkedOn: [
      "Backend interview session management",
      "Dynamic question generation using resume + JD + previous answers",
      "Final scoring and interview results generation using full Q&A + resume + JD",
      "Azure OpenAI API integration in Spring Boot",
    ],
    techStack: ["Java", "Spring Boot", "Azure OpenAI API"],
    highlights: [
      "Implemented context-aware questioning where each question depends on previous answers plus resume and JD.",
      "Generated final scoring and evaluation summary using complete interview context.",
    ],
    links: { demo: "", code: "" },
  },
];

// Optional helper: quick lookup by id
export const projectsById = projects.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});