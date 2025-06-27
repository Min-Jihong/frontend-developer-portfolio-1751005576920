import { ProjectList } from '@/components/work/ProjectList';
import { mockProjects } from '@/lib/mock-data';

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
      <ProjectList projects={mockProjects} />
    </main>
  );
}