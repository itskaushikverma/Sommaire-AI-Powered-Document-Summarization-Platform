export default function ProgressBar({ sections, currentSection }) {
  return (
    <div className="bg-background/80 absolute top-0 right-0 left-0 z-20 border-b border-rose-50/10 pt-4 pb-2 backdrop-blur-xs">
      <div className="flex gap-1.5 px-4">
        {sections.map((_, index) => (
          <div key={index} className="h-1.5 flex-1 overflow-hidden rounded-full bg-rose-500/10">
            <div
              key={index}
              className={`h-full rounded-full bg-linear-to-r from-gray-500 to-rose-600 transition-all duration-500 ${
                index === currentSection
                  ? 'w-full'
                  : currentSection > index
                    ? 'w-full opacity-10'
                    : 'w-0'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
