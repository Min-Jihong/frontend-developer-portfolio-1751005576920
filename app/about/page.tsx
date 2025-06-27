import { AboutContent } from '@/components/about/AboutContent';
import { ContactLinks } from '@/components/about/ContactLinks';
import { mockContactLinks } from '@/lib/mock-data';

export default function AboutPage() {
  const bioContent = `
    안녕하세요! 저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
    React, Next.js, TypeScript를 기반으로 동적이고 반응형 웹 애플리케이션을 구축하는 데 열정을 가지고 있습니다.
    미니멀하고 클린한 디자인을 선호하며, 인터랙티브한 요소를 통해 사용자에게 몰입감 있는 경험을 제공하는 것을 목표로 합니다.
    새로운 기술을 배우고 적용하는 것을 즐기며, 항상 더 나은 코드를 위해 노력합니다.
    함께 멋진 프로젝트를 만들어갈 기회를 찾고 있습니다!
  `;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-24 md:px-8 lg:px-16">
      <div className="max-w-3xl w-full space-y-12">
        <AboutContent bio={bioContent.trim()} />
        <ContactLinks links={mockContactLinks} />
      </div>
    </main>
  );
}