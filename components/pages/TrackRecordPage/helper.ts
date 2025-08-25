// ข้อมูลโครงการ
export interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  location: string;
  category: string;
}

export default function helper() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Wind Farm Project - North Sea',
      description: 'Provided specialized crew for offshore wind farm installation, including marine engineers, technicians, and safety personnel.',
      year: '2023',
      location: 'North Sea',
      category: 'Wind Farm',
    },
    {
      id: 2,
      title: 'Oil Platform Maintenance',
      description: 'Supplied skilled maintenance crew for a major oil platform overhaul, including welders, ROV operators, and diving specialists.',
      year: '2022',
      location: 'Gulf of Mexico',
      category: 'Oil & Gas',
    },
    {
      id: 3,
      title: 'Deep-Sea Shipping Fleet Support',
      description: 'Provided complete crew management for a fleet of 5 cargo vessels, handling all staffing, training, and logistics.',
      year: '2021',
      location: 'International Waters',
      category: 'Deep-Sea Shipping',
    },
    {
      id: 4,
      title: 'Offshore Catering Services',
      description: 'Delivered comprehensive catering services for a crew of 200 on an offshore installation, managing all food preparation and service.',
      year: '2022',
      location: 'Southeast Asia',
      category: 'Catering',
    },
  ];

  return {
    projects
  };
}
