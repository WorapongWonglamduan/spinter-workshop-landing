// Company Profile data and configuration
export interface CompanyProfileData {
  title: string;
  companyName: string;
  description1: string;
  description2: string;
  image: string;
  learnMoreLink: string;
}

export default function helper() {
  const profileData: CompanyProfileData = {
    title: "COMPANY PROFILE",
    companyName: "SP INTER SERVICE & SUPPLY Co.,Ltd",
    description1: "SP INTER SERVICE & SUPPLY Co.,Ltd was established in 2015 in Thailand to provide high-quality welding to customers worldwide. After successfully exporting welders to customers, our founder began to start a welding workshop rental service in 2020.",
    description2: "Moreover, we believe customer satisfaction is more important than large profits. With customer satisfaction comes repeat business, it makes our company have more customers and works which assist our company growth.",
    image: "/images/SP-COMPANY-PROFILE-2025-02.png",
    learnMoreLink: "/about"
  };

  return {
    profileData
  };
}
