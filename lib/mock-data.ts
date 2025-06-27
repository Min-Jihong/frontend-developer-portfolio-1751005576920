// 네비게이션 메뉴 항목을 정의합니다.
export interface NavItem {
  label: string;
  href: string;
}

export const mockNavItems = [{"label":"Work","href":"/"},{"label":"About","href":"/about"}];

// 포트폴리오 프로젝트의 데이터를 정의합니다.
export interface Project {
  id: string;
  name: string;
  year: string;
  role: string;
  image: string;
  description: string;
}

export const mockProjects = [{"id":"1","name":"Portfolio Website V2","year":"2023","role":"Frontend Developer","image":"/images/project-1.jpg","description":"개인 포트폴리오 웹사이트 리뉴얼 프로젝트입니다."},{"id":"2","name":"E-commerce Platform Redesign","year":"2022","role":"UI/UX Developer","image":"/images/project-2.jpg","description":"기존 이커머스 플랫폼의 사용자 경험 개선 프로젝트입니다."},{"id":"3","name":"Mobile Banking App","year":"2021","role":"Frontend Developer","image":"/images/project-3.jpg","description":"새로운 모바일 뱅킹 애플리케이션 개발 프로젝트입니다."},{"id":"4","name":"SaaS Dashboard Development","year":"2023","role":"Fullstack Developer","image":"/images/project-4.jpg","description":"기업용 SaaS 솔루션의 관리자 대시보드 개발입니다."},{"id":"5","name":"Healthcare Data Visualization","year":"2022","role":"Data Visualization Specialist","image":"/images/project-5.jpg","description":"의료 데이터를 시각화하는 대시보드 구축 프로젝트입니다."}];

// 연락처 링크 정보를 정의합니다.
export interface ContactLink {
  name: string;
  href: string;
  icon: string;
}

export const mockContactLinks = [{"name":"Email","href":"mailto:your.email@example.com","icon":"email"},{"name":"GitHub","href":"https://github.com/yourusername","icon":"github"},{"name":"LinkedIn","href":"https://linkedin.com/in/yourprofile","icon":"linkedin"},{"name":"Blog","href":"https://yourblog.com","icon":"blog"}];