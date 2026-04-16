'use client';

import React, { useState } from 'react';
import { Card } from '../ui/card';
import NavigationControl from './navigation-control';
import ProgressBar from './progress-bar';
import { parseSection } from '@/utils/summary-helper';
import ContentSection from './content-section';
import { MotionDiv } from '../common/motion-wrapper';

const SectionTitle = ({ title }) => {
  return (
    <div className="bg-background/80 sticky top-0 z-10 mb-6 flex flex-col gap-2 pt-2 pb-4 backdrop-blur-xs">
      <h2 className="flex items-center justify-center gap-2 text-center text-3xl font-bold lg:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default function SummaryViewer({ summary }) {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () => setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));

  const handlePrevious = () => setCurrentSection((prev) => Math.max(prev - 1, 0));

  const sections = summary
    .split('\n# ')
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  return (
    <Card className="from-background via-background/95 relative h-[600px] w-full overflow-hidden rounded-3xl border border-rose-500/10 bg-linear-to-br to-rose-500/5 px-2 shadow-2xl backdrop-blur-lg sm:h-[600px] md:w-[500px] lg:h-[700px]">
      <ProgressBar sections={sections} currentSection={currentSection} />
      <MotionDiv
        viewport={{ once: true }}
        key={currentSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
        className="scrollbar-hide h-full overflow-y-auto pt-12 pb-20 sm:pt-16 sm:pb-24"
      >
        <div className="px-4 sm:px-6">
          <SectionTitle title={sections[currentSection]?.title || ''} />
          <ContentSection
            title={sections[currentSection]?.title || ''}
            points={sections[currentSection]?.points || []}
          />
        </div>
      </MotionDiv>
      <NavigationControl
        currentSection={currentSection}
        totalSection={sections.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSectionSelect={setCurrentSection}
      />
    </Card>
  );
}
