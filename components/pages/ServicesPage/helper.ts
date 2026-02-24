// ข้อมูลบริการ
export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  iconPath: string;
}

// ข้อมูลอุตสาหกรรม
export interface Industry {
  id: number;
  name: string;
  description: string;
  image: string;
}

// ข้อมูลลูกค้า
export interface Client {
  logo: string;
  name: string;
  full: string;
  desc: string;
}

export default function helper() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Crew Supply & Management',
      description: 'We provide specialized crew for offshore operations, including marine engineers, technicians, ROV operators, divers, welders, and support staff.',
      features: [
        'Comprehensive crew sourcing and selection',
        'Certification verification and compliance management',
        'Crew rotation and logistics coordination',
        'Performance monitoring and evaluation',
        'Training and skill development programs'
      ],
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      id: 2,
      title: 'Project Management',
      description: 'Our project management services ensure smooth execution of offshore operations, from planning to completion.',
      features: [
        'Project planning and scheduling',
        'Resource allocation and optimization',
        'Risk assessment and mitigation strategies',
        'Progress monitoring and reporting',
        'Quality assurance and control'
      ],
      iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    },
    {
      id: 3,
      title: 'Offshore Catering',
      description: 'We provide comprehensive catering services for offshore installations, ensuring high-quality meals and nutrition for crews in remote locations.',
      features: [
        'Menu planning and dietary accommodation',
        'Food procurement and inventory management',
        'Meal preparation and service',
        'Hygiene and safety compliance',
        'Cultural and special dietary requirements'
      ],
      iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    },
    {
      id: 4,
      title: 'Technical Support & Maintenance',
      description: 'Our technical teams provide specialized support and maintenance services for offshore equipment and systems.',
      features: [
        'Equipment inspection and diagnostics',
        'Preventive and corrective maintenance',
        'System upgrades and modifications',
        'Technical documentation and reporting',
        'Emergency repair services'
      ],
      iconPath: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];


  const industries: Industry[] = [
    {
      id: 1,
      name: 'Wind Farm',
      description: 'Specialized crew and support services for offshore wind farm installation, maintenance, and operations.',
      image: '/industries/wind-farm.jpg'
    },
    {
      id: 2,
      name: 'Oil & Gas',
      description: 'Experienced personnel and comprehensive support for oil and gas platforms and offshore installations.',
      image: '/industries/oil-gas.jpg'
    },
    {
      id: 3,
      name: 'Deep-Sea Shipping',
      description: 'Crew management and support services for deep-sea shipping operations worldwide.',
      image: '/industries/shipping.jpg'
    }
  ];

  const facilityPhotos: string[] = [
    "/images/photos/LINE_ALBUM_7169_260224_2.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_3.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_4.jpg",
    "/images/photos/LINE_ALBUM_7169_260224_6.jpg",
  ];

  const facilities: string[] = ["BAY", "OVERVIEW", "STORAGE", "MEETING ROOM"];

  const clients: Client[] = [
    {
      logo: "/images/icons/LT-hydrocarbon-engineering-limited-logo.png",
      name: "L&T Hydrocarbon Engineering",
      full: "Larsen & Toubro Limited",
      desc: "A leading multinational conglomerate with businesses in engineering, construction, technology and financial services.",
    },
    {
      logo: "/images/icons/saudi-aramco-png.png",
      name: "Saudi Aramco",
      full: "SAUDI ARAMCO",
      desc: "Largest integrated energy and chemical companies, creating value across the hydrocarbon chain, and delivering societal benefits.",
    },
    {
      logo: "/images/icons/mermaid-maritime-logo.png",
      name: "Mermaid Maritime",
      full: "MERMAID MARITIME",
      desc: "A leading international subsea and offshore drilling services company with headquarters in Thailand.",
    },
    {
      logo: "/images/icons/sapurakencana_total-logo-png.png",
      name: "Sapura Kencana",
      full: "SAPURA KENCANA",
      desc: "The Group's spectrum of capabilities covers exploration through to production.",
    },
    {
      logo: "/images/icons/logosapura-energy.png",
      name: "Sapura Energy",
      full: "Sapura Energy",
      desc: "It's a global integrated energy services provider operating across the entire upstream value chain, including renewables.",
    },
    {
      logo: "/images/icons/chevron-corporation-logo.png",
      name: "Chevron",
      full: "Chevron Thailand",
      desc: "Chevron is a global energy company operating in Thailand since 1948.",
    },
    {
      logo: "/images/icons/vantris-energy-logo-1x.png",
      name: "Vantris Energy",
      full: "Vantris Energy",
      desc: "Energy services and solutions provider.",
    },
  ];
  
  return {
    services,
    industries,
    facilityPhotos,
    facilities,
    clients
  };
}
