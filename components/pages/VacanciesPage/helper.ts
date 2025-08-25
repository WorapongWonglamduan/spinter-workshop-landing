// ข้อมูลตำแหน่งงาน
export interface Vacancy {
  id: number;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
}

export default function helper() {
  const vacancies: Vacancy[] = [
    {
      id: 1,
      title: "Marine Engineer",
      location: "Offshore - North Sea",
      type: "Full-time",
      category: "Marine",
      description:
        "We are seeking experienced Marine Engineers to join our offshore team. The ideal candidate will have at least 5 years of experience in marine engineering with specific knowledge of offshore operations.",
      requirements: [
        "Bachelor's degree in Marine Engineering or equivalent",
        "Minimum 5 years of experience in offshore operations",
        "Valid marine engineering certification",
        "Experience with maintenance of marine propulsion systems",
        "Strong problem-solving skills and ability to work under pressure",
        "Excellent communication skills in English",
      ],
    },
    {
      id: 2,
      title: "ROV Pilot/Technician",
      location: "International - Various Locations",
      type: "Contract",
      category: "ROV",
      description:
        "Join our team of ROV specialists working on cutting-edge underwater operations. This role involves piloting and maintaining remotely operated vehicles for subsea inspections and interventions.",
      requirements: [
        "ROV pilot certification",
        "Minimum 3 years of experience as an ROV pilot/technician",
        "Experience with maintenance and repair of ROV systems",
        "Knowledge of hydraulic and electronic systems",
        "Ability to work in rotating shifts offshore",
        "Offshore survival and medical certification",
      ],
    },
    {
      id: 3,
      title: "Offshore Catering Manager",
      location: "Southeast Asia",
      type: "Full-time",
      category: "Catering",
      description:
        "Lead our offshore catering operations, ensuring high-quality food service for crews on offshore installations. Responsible for menu planning, inventory management, and supervising catering staff.",
      requirements: [
        "Minimum 5 years of experience in catering management, preferably in offshore or remote locations",
        "Food safety certification",
        "Experience in inventory management and budgeting",
        "Strong leadership and team management skills",
        "Ability to work in challenging offshore environments",
        "Knowledge of international cuisine and dietary requirements",
      ],
    },
    {
      id: 4,
      title: "Wind Turbine Technician",
      location: "Europe - Various Locations",
      type: "Full-time",
      category: "Wind Farm",
      description:
        "Maintain and service offshore wind turbines. This role involves regular travel to offshore wind farms for installation, maintenance, and repair of wind turbine components.",
      requirements: [
        "Technical certification in electrical, mechanical, or wind energy systems",
        "Experience with wind turbine maintenance and troubleshooting",
        "Comfortable working at heights and in confined spaces",
        "GWO certification (Basic Safety Training)",
        "Physical fitness and ability to climb wind turbines",
        "Willingness to work offshore for extended periods",
      ],
    },
  ];
  
  return {
    vacancies
  };
}
