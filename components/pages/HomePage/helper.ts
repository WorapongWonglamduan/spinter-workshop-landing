// ข้อมูลสถิติสำหรับส่วน "Why Choose Us"
export interface Statistic {
  value: string;
  label: string;
}


// ข้อมูลบริการสำหรับส่วน "Services Overview"
export interface Service {
  title: string;
  description: string;
  icon: string;
}


// ข้อมูลติดต่อสำหรับส่วน Footer
export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
  businessHours: {
    weekdays: string;
    weekend: string;
  };
}

export default function helper() {
  // Statistics data - values only, labels come from translations
  const statistics: Statistic[] = [
    { value: '15+', label: 'statistics.experience' },
    { value: '500+', label: 'statistics.projects' },
    { value: '1000+', label: 'statistics.crew' },
    { value: '20+', label: 'statistics.countries' }
  ];

  // Services data - icons only, titles and descriptions come from translations
  const services: Service[] = [
    {
      title: 'homeServices.projectManagement.title',
      description: 'homeServices.projectManagement.description',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    },
    {
      title: 'homeServices.crewManagement.title',
      description: 'homeServices.crewManagement.description',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      title: 'homeServices.catering.title',
      description: 'homeServices.catering.description',
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    }
  ];

  // Contact info - actual values, not translation keys
  const contactInfo: ContactInfo = {
    location: '',
    email: 'ps_2518@hotmail.com',
    phone: '(0)81-779-275',
    businessHours: {
      weekdays: 'businessHours.weekdays',
      weekend: 'businessHours.weekend'
    }
  };

  return {
    statistics,
    services,
    contactInfo
  };
}
