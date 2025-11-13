
export interface StatCard {
  icon: string;     
  value: string;     
  label: string;     
}

export interface Service {
  title: string;    
  description: string;
}


export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;      
  message: string;
}


export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
