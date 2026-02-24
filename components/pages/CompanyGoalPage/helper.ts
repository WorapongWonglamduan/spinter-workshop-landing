// Company Goal data and configuration
export interface CompanyGoalData {
  title: string;
  quote: string;
  description: string;
  backgroundImage: string;
}

export default function helper() {
  const goalData: CompanyGoalData = {
    title: "COMPANY GOAL",
    quote: "SAFETY IS AN INTEGRAL PART OF OUR COMPANY",
    description: "To provide our customers with skilled welders and welding workshop rental service that exceed our customers expectations while maintaining the safety of personal and plant equipment.",
    backgroundImage: "/images/SP-COMPANY-PROFILE-2025-11.png"
  };

  return {
    goalData
  };
}
