'use client';

interface AboutContentProps {
  bio: string;
}

export const AboutContent = ({ bio }: AboutContentProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-left">
        About Me
      </h1>
      <div className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
        {bio.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};