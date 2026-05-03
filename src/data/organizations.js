export const organizations = [
  {
    id: "ltm",
    name: "LTIMindtree (LTM)",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Senior Software Engineer",
        start: "Oct 2025",
        end: "Present",
        keyWork: [
          "Worked on Spring framework and dependency migration initiatives to improve security and stability.",
          "Upgraded Spring Framework patch versions to remediate security vulnerabilities and enhance application performance.",
          "Reviewed and analyzed release notes to address breaking changes, deprecated APIs, and dependency conflicts.",
          "Refactored existing codebase to ensure compatibility with updated libraries and frameworks.",
          "Managed dependencies using Maven and resolved version conflicts across modules.",
          "Built and enhanced UI components using React.js and modern JavaScript (ES6+).",
          "Developed reusable and modular frontend components.",
          "Integrated React frontend with backend REST APIs to manage and display application data."
        ],
        techFocus: [
          "Java",
          "Spring Framework",
          "Spring Boot",
          "Maven",
          "React.js",
          "JavaScript (ES6+)",
          "REST APIs"
        ],
      },
    ],
  },

  {
    id: "sageit",
    name: "SageIT Inc",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Software Engineer",
        start: "Feb 2023",
        end: "Oct 2025",
        keyWork: [
          "Developed Java services for modifying XML content in migration files, improving transformation efficiency.",
          "Enhanced accuracy of migration processes across 200+ XML files.",
          "Designed and implemented database schema and core engine using Java Spring Boot for a migration accelerator.",
          "Engineered parsing and transformation for XML, XSD, YAML, and JSON workflows.",
          "Integrated Azure OpenAI API into Spring Boot applications for AI-assisted code generation and transformation.",
          "Assisted in configuring workflow automations using n8n for integration and data-processing pipelines.",
          "Worked with Flowise for AI workflow orchestration and prompt flow configuration.",
          "Managed large-scale data loading and migration processes, achieving a 35% reduction in migration time.",
          "Maintained 99% data integrity across migration processes.",
          "Created 1500+ training data files for AI models focused on XML transformation.",
          "Developed backend services using Python (FastAPI, Flask) and Java Spring Boot for SHIP-AI migration projects.",
          "Contributed to monitoring and support dashboards providing analytics and real-time application status."
        ],
        techFocus: [
          "Java",
          "Spring Boot",
          "Python",
          "FastAPI",
          "Flask",
          "Azure",
          "Azure OpenAI",
          "Docker",
          "MySQL",
          "MongoDB",
          "XML",
          "XSD",
          "YAML",
          "JSON",
          "Azure Service Bus",
          "n8n",
          "Flowise"
        ],
      },
    ],
  },

  {
    id: "tcs",
    name: "Tata Consultancy Services",
    location: "Hyderabad, India",
    roles: [
      {
        title: "Assistant System Engineer Trainee",
        start: "Aug 2021",
        end: "Jan 2023",
        keyWork: [
          "Developed and managed REST controllers using Java Spring Boot for scalable API communication.",
          "Implemented microservices messaging using Azure Service Bus topics and queues.",
          "Created custom JPA methods and implemented complex entity relationships.",
          "Developed complex searching algorithms to improve data retrieval efficiency.",
          "Strengthened application security using token-based authentication.",
          "Integrated Google Maps Directions API and implemented Haversine formula for distance calculations.",
          "Integrated SMS API for OTP-based user verification.",
          "Developed frontend features using React.js and integrated them with backend REST APIs.",
          "Implemented responsive UI components and client-side state handling.",
          "Resolved critical production incidents and deployed fixes in a timely manner.",
          "Worked in Agile/Scrum environment including sprint planning, stand-ups, and retrospectives."
        ],
        techFocus: [
          "Java",
          "Spring Boot",
          "Spring MVC",
          "JPA/Hibernate",
          "React.js",
          "MySQL",
          "Azure Service Bus",
          "Google Maps API",
          "SMS API",
          "REST APIs"
        ],
      },
    ],
  },
];

export const organizationsById = organizations.reduce((acc, org) => {
  acc[org.id] = org;
  return acc;
}, {});