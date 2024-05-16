export interface Company {
  name: string;
  logo: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface CallToAction {
  text: string;
  href: string;
}

export interface Title {
  slogan: string;
  img: string;
}

export interface IntroductionItem {
  title: string;
  content: string[];
  img: string;
  bold?: string[];
}

export interface Introduction {
  title: string;
  items: IntroductionItem[];
}

export interface CustomerItem {
  name: string;
  img: string;
  href: string;
}

export interface Customers {
  title: string;
  items: CustomerItem[];
}

export interface EmployeeItem {
  name: string;
  role: string;
  img: string;
  description: string;
  keywords: string[];
}

export interface Employees {
  title: string;
  items: EmployeeItem[];
}

export interface BlogSection {
  title?: string;
  content: string;
  img?: {
    src: string;
    caption?: string;
  };
}

export interface BlogPost {
  title: string;
  author?: {
    name: string;
    src: string;
  };
  relevantPost?: {
    name: string;
    url: string;
  };
  img: string;
  published: string;
  sections: BlogSection[];
}

export interface Blog {
  title: string;
  posts: BlogPost[];
}

export interface AboutSection {
  name: string;
  content: string;
}

export interface SocialMedia {
  github: string;
  linkedin: string;
}

export interface About {
  sections: AboutSection[];
  socialMedia: SocialMedia;
}

export interface IndexJsonStructure {
  company: Company;
  navigation: NavigationItem[];
  callToAction: CallToAction;
  title: Title;
  introduction: Introduction;
  customers: Customers;
  employees: Employees;
  blog: Blog;
  about: About;
}
