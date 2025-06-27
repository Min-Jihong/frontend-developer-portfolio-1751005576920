/* eslint-disable */
// 네비게이션 메뉴 항목을 정의합니다.
export interface NavItem { label: string; href: string; }

// 포트폴리오 프로젝트의 데이터를 정의합니다.
export interface Project { id: string; name: string; year: string; role: string; image: string; description?: string; }

// 연락처 링크 정보를 정의합니다.
export interface ContactLink { name: string; href: string; icon: string; }