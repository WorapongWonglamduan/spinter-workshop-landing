// ข้อมูลสมาชิกทีม
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export default function helper() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "John Smith",
      position: "Chief Executive Officer",
      bio: "John has over 20 years of experience in the offshore industry, with expertise in crew management and project coordination for major oil & gas operations.",
      image: "/team/ceo.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Director",
      bio: "With a background in marine engineering and 15 years in offshore operations, Sarah oversees all operational aspects of our crew deployment and project management.",
      image: "/team/operations.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Technical Director",
      bio: "Michael brings 18 years of technical expertise in offshore wind farm installations and maintenance, ensuring our crews are equipped with the latest skills and knowledge.",
      image: "/team/technical.jpg",
    },
    {
      id: 4,
      name: "Emma Williams",
      position: "HR & Recruitment Manager",
      bio: "Emma leads our talent acquisition and crew development programs, with 12 years of experience in specialized recruitment for the offshore energy sector.",
      image: "/team/hr.jpg",
    },
    {
      id: 5,
      position: "Finance Director",
      name: "David Rodriguez",
      bio: "David manages our financial operations, with expertise in international payroll systems and financial compliance for global offshore operations.",
      image: "/team/finance.jpg",
    },
    {
      id: 6,
      name: "Lisa Tanaka",
      position: "Catering Services Manager",
      bio: "Lisa oversees our offshore catering operations, bringing 10 years of experience in managing food services for remote offshore installations worldwide.",
      image: "/team/catering.jpg",
    },
  ];
  
  return {
    teamMembers
  };
}
